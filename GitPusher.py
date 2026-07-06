import os
import subprocess
import threading
import time
from datetime import datetime
import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext

is_running = False
INTERVAL = 30  # seconds

def run_command(command, repo_path):
    return subprocess.run(
        command,
        cwd=repo_path,
        shell=True,
        text=True,
        capture_output=True
    )

def log(message):
    now = datetime.now().strftime("%H:%M:%S")
    log_box.insert(tk.END, f"[{now}] {message}\n")
    log_box.see(tk.END)

def browse_folder():
    folder = filedialog.askdirectory()
    if folder:
        path_entry.delete(0, tk.END)
        path_entry.insert(0, folder)

def git_push_once(repo_path):
    log("Checking for changes...")

    status = run_command("git status --porcelain", repo_path)

    if "not a git repository" in status.stderr.lower():
        log("❌ This folder is not a Git repository.")
        stop_pushing()
        return

    if not status.stdout.strip():
        log("❌ No changes found. Waiting for next check...")
        return

    log("✅ Changes detected. Adding files...")
    run_command("git add .", repo_path)

    commit_msg = f"Auto update: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    log("📝 Creating commit...")
    commit = run_command(f'git commit -m "{commit_msg}"', repo_path)

    if commit.returncode != 0:
        log("❌ Commit failed.")
        log(commit.stderr)
        return

    log("🚀 Pushing to GitHub...")
    push = run_command("git push", repo_path)

    if push.returncode == 0:
        log("✅ Push successful.")
    else:
        log("❌ Push failed.")
        log(push.stderr)

def auto_loop():
    global is_running

    repo_path = path_entry.get().strip()

    while is_running:
        git_push_once(repo_path)

        for _ in range(INTERVAL):
            if not is_running:
                break
            time.sleep(1)

def start_pushing():
    global is_running

    repo_path = path_entry.get().strip()

    if not repo_path:
        messagebox.showerror("Error", "Project folder path enter karo.")
        return

    if not os.path.exists(repo_path):
        messagebox.showerror("Error", "Folder exist nahi karta.")
        return

    if is_running:
        log("Already running...")
        return

    is_running = True
    status_label.config(text="Status: Running", fg="green")
    start_btn.config(state=tk.DISABLED)
    stop_btn.config(state=tk.NORMAL)

    log("▶ Start pushing continuous mode...")

    thread = threading.Thread(target=auto_loop, daemon=True)
    thread.start()

def stop_pushing():
    global is_running
    is_running = False
    status_label.config(text="Status: Stopped", fg="red")
    start_btn.config(state=tk.NORMAL)
    stop_btn.config(state=tk.DISABLED)
    log("⏹ Stopped.")

app = tk.Tk()
app.title("Git Auto Push Tool - Built By Amos")
app.geometry("920x620")
app.configure(bg="#010904")
app.resizable(False, False)

panel_color = "#02100a"
text_color = "#6cff3c"
accent_color = "#9cf97c"
button_bg = "#042012"
button_hover = "#0bbb2f"

header_frame = tk.Frame(app, bg=panel_color, bd=2, relief=tk.RIDGE)
header_frame.pack(fill=tk.X, padx=12, pady=10)

title = tk.Label(
    header_frame,
    text="GIT AUTO COMMIT & PUSH TOOL",
    font=("Consolas", 22, "bold"),
    fg=text_color,
    bg=panel_color
)
title.pack(padx=18, pady=(16, 4))

subtitle = tk.Label(
    header_frame,
    text="> BUILT BY AMOS",
    font=("Consolas", 10, "bold"),
    fg=accent_color,
    bg=panel_color
)
subtitle.pack(padx=18, pady=(0, 16))

path_frame = tk.Frame(app, bg="#010904")
path_frame.pack(fill=tk.X, padx=12)

path_label = tk.Label(
    path_frame,
    text="PROJECT FOLDER PATH:",
    font=("Consolas", 10, "bold"),
    fg=text_color,
    bg="#010904"
)
path_label.pack(anchor="w", pady=(0, 4))

path_entry = tk.Entry(
    path_frame,
    font=("Consolas", 10),
    bg="#05120c",
    fg=text_color,
    insertbackground=text_color,
    width=86,
    relief=tk.FLAT,
    bd=2,
    highlightthickness=1,
    highlightbackground="#10311c"
)
path_entry.pack(side=tk.LEFT, padx=(0, 10), pady=(0, 10), ipady=6)

browse_btn = tk.Button(
    path_frame,
    text="[ BROWSE ]",
    font=("Consolas", 10, "bold"),
    bg=button_bg,
    fg=text_color,
    activebackground=button_hover,
    activeforeground="black",
    relief=tk.FLAT,
    bd=1,
    padx=14,
    pady=6,
    command=browse_folder
)
browse_btn.pack(side=tk.LEFT, pady=(0, 10))

path_frame = tk.Frame(app)
path_frame.pack(pady=5)

path_entry = tk.Entry(path_frame, width=65)
path_entry.pack(side=tk.LEFT, padx=5)

browse_btn = tk.Button(path_frame, text="Browse", command=browse_folder)
browse_btn.pack(side=tk.LEFT)

start_btn = tk.Button(
    app,
    text="▶ Start Pushing",
    font=("Arial", 12, "bold"),
    bg="#168f45",
    fg="white",
    width=20,
    command=start_pushing
)
start_btn.pack(pady=8)

stop_btn = tk.Button(
    app,
    text="■ Stop",
    font=("Arial", 11, "bold"),
    bg="#c0392b",
    fg="white",
    width=12,
    state=tk.DISABLED,
    command=stop_pushing
)
stop_btn.pack(pady=3)

status_label = tk.Label(app, text="Status: Stopped", fg="red", font=("Arial", 11, "bold"))
status_label.pack(pady=5)

log_box = scrolledtext.ScrolledText(app, width=82, height=18)
log_box.pack(pady=10)

app.mainloop()