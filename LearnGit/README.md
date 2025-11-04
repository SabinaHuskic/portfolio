# Learning Git & GitHub

This document summarizes what I’ve learned while exploring **Git** and **GitHub**.

---

## Getting Started with Git

### **1. Initialize a Repository**

```bash
git init
```

* Initializes a new Git repository in your current directory.
* Run this **once per project** — initializing a repository inside another can cause issues.
* This command creates a hidden directory called `.git`, which tracks all version history and changes.

---

### **2. Check Repository Status**

```bash
git status
```

* Shows whether you are currently inside a Git repository.
* Displays which files are **untracked**, **modified**, or **staged** for commit.

---

## Creating a Repository

### **Option 1: Locally via Command Line**

1. Create a new directory for your project.
2. Use `git status` to make sure you’re not already inside another repo.
3. Initialize it with `git init`.

---

### **Option 2: On GitHub**

When creating a new repository on [GitHub.com](https://github.com):

* You can add a **README.md** file.
* You can add a **.gitignore** file to tell Git which files **not** to track (e.g., databases, large files, API keys).
* You can choose a **license** to specify how others can use your code.

---

## Cloning a Repository

Ways to get a repository from GitHub to your local machine:

1. **Download as ZIP** – quick and simple, great for offline use or putting it on a USB.
2. **Use GitHub Desktop** – graphical interface for managing repositories.
3. **Use HTTPS and Git Clone** – the most common way:

```bash
git clone https://github.com/username/repository.git
```

This copies the GitHub repository to your local machine.

---

## Creating a Private Repository

The process is the same as creating a public one — simply check the **“Private”** box when setting it up on GitHub.

---

## Cloning with Authentication

Before cloning private repositories, you need to authenticate with GitHub.

### **Option 1: Personal Access Token (PAT)**

1. Go to **Settings → Developer Settings → Personal Access Tokens** on GitHub.
2. Generate a new token and select the **`repo`** scope for full control.
3. Use it in your clone command:

```bash
git clone https://<token>@github.com/username/repository.git
```

### **Option 2: GitHub Desktop**

* Go to **File → Clone Repository**.
* Choose your repository and local save location.
* GitHub Desktop handles authentication for you.

---

## Git Workflow & Usage

Each time you make changes, you must **commit** them so Git can track your progress.

### **Basic Workflow**

1. **Stage changes**

   ```bash
   git add filename.py      # Add specific file
   git add .                # Add everything in the directory
   ```

   This moves your changes to the **staging area** — not yet committed.

2. **Commit changes**

   ```bash
   git commit -m "Add feature X"
   ```

   Commits changes to the local repository with a meaningful message.

3. **Push to GitHub**

   ```bash
   git push
   ```

   Uploads your local commits to the remote repository on GitHub.

---

## Working with Remote Branches

### **Check Remotes**

```bash
git remote -v
```

Shows the remote repository URLs connected to your local project.

### **Add a Remote Repository**

When pushing an existing local repository to GitHub, use:

```bash
git remote add origin https://github.com/username/repository.git
```

* `origin` is the conventional name for the main remote.
* Push your code to GitHub:

```bash
git push -u origin main
```

### **Manage Remotes**

```bash
git remote rename oldname newname     # Rename a remote
git remote remove name                # Remove a remote connection
```

---

## Fetch vs. Pull

Two ways to get updates from a remote branch:

### **`git pull`**

* Downloads **and merges** changes directly into your current branch.
* Immediately updates your working directory files.

### **`git fetch`**
* You can use a more detailed command: 'git fetch <remote> <branch>'
* Downloads updates **without merging** them into your current files.
* Lets you review changes first — useful for collaboration.

---

## 👀 Viewing Remote Changes with Fetch

When you want to update your working directory **using `fetch`**, follow these steps:

1. On your local computer, you have the **`main`** branch.
   Remotely, you have **`origin/main`**.
2. Run:

   ```bash
   git fetch
   ```

   This updates your local knowledge of the remote repository.
3. Then check out the remote branch:

   ```bash
   git checkout origin/main
   ```

   This lets you explore what’s new **without overwriting** your current local files.

You’ll now see the latest version of the project as it exists remotely, safely separated from your working directory.
When satisfied you can pull and overwrite locally.

---

## Summary

| Command                   | Description                             |
| ------------------------- | --------------------------------------- |
| `git init`                | Initialize a new repository             |
| `git status`              | Check current repo status               |
| `git add .`               | Stage all changes                       |
| `git commit -m "message"` | Commit staged changes                   |
| `git push`                | Push commits to GitHub                  |
| `git pull`                | Pull and merge changes from remote      |
| `git fetch`               | Download remote changes without merging |
| `git remote -v`           | View remote connections                 |
| `git checkout origin/main` | View remote branch contents without merging |

---

**Tip:**

> “Commit often, with clear messages — your future self will thank you.”




