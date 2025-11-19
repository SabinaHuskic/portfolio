# Learning Git and GitHub

I took a Udemy course to learn about **Git** and **GitHub**.

**Udemy Course:** [Master Git and GitHub in 5 Days: Go from Zero to Hero](https://www.udemy.com/course/master-git-and-github-in-5-days-go-from-zero-to-hero/)

---

## Starting with Git

### Basic Commands

#### `git init`

Initializes a Git repository on your local machine.

* Run this command **once per project**.
  Initializing a repository inside another repository can cause issues.
* Creates a hidden directory called `.git`, which manages versioning and tracking.

#### `git status`

Reports whether you are currently inside a Git repository and lists the current state of tracked/untracked files.

---

## Creating a Repository

### Locally with the Command Line

1. Create a directory for your project.
2. Use `git status` to ensure you’re not already inside a Git repository.
3. Run `git init` to initialize it.

### On GitHub

When creating a new repository on GitHub, you can:

* Add a **README.md** file.
* Add a **.gitignore** file to specify files Git should not track (e.g., databases or large files).
* Choose a **license** to define how others may use your code.

---

## Getting a Repository from GitHub to Your Local Machine

1. **Download as ZIP** – simple and fast option if you need to put it on a USB.
2. **Use GitHub Desktop** – for a graphical interface.
3. **Use HTTPS via the command line:**

```bash
git clone https://github.com/username/repository.git
```

This copies the repository from GitHub to your local machine.

---

## Creating a Private Repository

The process is the same as creating a public one — simply check the **Private** option when setting up the repository.

---

## Cloning Process and Authentication

Before cloning a private repository, you must authenticate using one of the following methods.

### Option 1: Personal Access Token (PAT)

1. Go to **Settings → Developer Settings → Personal Access Tokens** on GitHub.
2. Generate a PAT and select the **`repo`** scope for full control of private repositories.
3. Use the token when cloning:

```bash
git clone https://<token>@github.com/username/repository.git
```

### Option 2: GitHub Desktop

* Open **File → Clone Repository**.
* Choose your repository and local directory.
* GitHub Desktop will handle authentication for you.

---

## Git Usage and Workflow

Every change made to a file is tracked through **commits**.
Commits allow you to revisit earlier versions of your project.

### Basic Workflow

1. **Stage changes**

   ```bash
   git add filename.py    # Add a specific file
   git add .              # Add all files
   ```

   Moves changes to the staging area — not yet committed.

2. **Commit changes**

   ```bash
   git commit -m "Meaningful message"
   ```

   Commits staged changes to the local repository.

3. **Push to GitHub**

   ```bash
   git push
   ```

   Uploads your local commits to the remote repository.

4. **Pull updates**

   ```bash
   git pull
   ```

   Retrieves and merges updates from the remote repository into your local branch.

---

## Remote Branches

The `git remote` command lets you create, view, and delete remote connections (like bookmarks to other repositories).

### Common Commands

```bash
git remote             # List remotes
git remote -v          # Show remotes with URLs
git remote add <name> <url>   # Add a remote
git remote rm <name>          # Remove a remote
git remote rename <old> <new> # Rename a remote
```

After creating a local repository, push it to GitHub:

```bash
git remote add origin https://github.com/username/repository.git
git push -u origin main
```

---

## Fetch and Pull

Two main commands to get remote updates:

### `git pull`

* Downloads and merges changes directly into your current branch.
* Updates your working directory immediately.

### `git fetch`

```bash
git fetch origin main
```

* Downloads updates **without merging** them.
* Lets you review remote changes before applying them.
* Useful when collaborating and avoiding conflicts.

#### Viewing Fetched Changes

To preview remote updates without overwriting your files:

```bash
git fetch
git checkout origin/main
```

This allows you to explore remote changes safely.

---

## Working with Others

### Branches

Branches represent independent lines of development.
They allow multiple developers (or you) to work on features simultaneously.

#### Key Points

* Each commit links to a parent commit, forming a branch history.
* Branches don’t change the repository; they’re pointers to commits.
* Use branches to organize features and prevent breaking the main branch.

#### Common Commands

```bash
git branch <branch_name>   # Create a new branch
git branch                 # List branches
git switch <branch_name>   # Switch branches
```

#### Renaming a Branch

```bash
git switch branch_to_rename
git branch -m new_name
```

#### Deleting a Branch

```bash
git branch -d branch_name   # Delete merged branch
git branch -D branch_name   # Force delete unmerged branch
```

---

## Merging Branches

* **Fast-forward merge:** When no new commits were made on the main branch since the feature branch was created.
* **Regular merge:** Combines changes from both branches.
* **Merge conflicts:** Occur when both branches edit the same lines. Conflicts must be resolved manually before completing the merge.

---

## `git diff`

Displays differences between versions.

```bash
git diff                  # Compare working directory with last commit
git diff branch1 branch2  # Compare two branches
```

### Diff Output Breakdown

1. File names being compared
2. Metadata
3. Legend (`-` for file A, `+` for file B)
4. Diff chunks showing changed lines

---

## Undoing Changes

### `git checkout`

Switch between commits, branches, or files.

```bash
git log --oneline     # View short commit history
git checkout <hash>   # Move to a specific commit
```

### `git restore`

Restores a file to its previous state.

```bash
git restore file.txt
git restore --source HEAD~2 file.txt   # Restore file from two commits ago
```

### `git reset`

Removes commits and resets the branch.

```bash
git reset <hash>          # Remove commits (keep files)
git reset <hash> --hard   # Remove commits and changes
```

### `git revert`

Creates a new commit that undoes previous changes (safer than reset).

```bash
git revert <hash>
```

> **Tip:** Always confirm whether to use `restore`, `revert`, or `reset` before running them.

---

## Git and GitHub in Practice

### Git Stash

Temporarily saves uncommitted changes so you can switch branches safely.

```bash
git stash        # Save current changes
git stash pop    # Reapply and remove stashed changes
git stash apply  # Reapply without removing from stash
```

Useful when switching branches mid-edit or testing alternate code paths.

---

## .gitignore

Used to exclude files or directories from being tracked by Git.

Examples:

```
mypasswords.txt    # Ignore a specific file
directory_name/    # Ignore all files in a directory
*.sql              # Ignore all SQL files
```

---

## Common Workflow Patterns

### Single-Branch Workflow

* All work is done on `main`.
* Simple but prone to breaking production code.
* Best for small or experimental projects.

### Branch-Based Development

* Work is done on feature branches.
* The `main` branch remains stable and acts as the source of truth.
* Merges into `main` typically require review or tests.

---

## GitHub Repository Tour

Inside a GitHub repository, you can:

* View all branches and commits.
* Open and manage **Issues** for bug tracking or feature requests.
* Use **Actions** for automation and testing.
* Create a **Wiki** for documentation.
* Manage collaborator permissions in **Settings**.

---

## Pull Requests

Pull requests (PRs) are a GitHub feature for managing code review and collaboration.

* A collaborator can push their branch to your repository and open a PR.
* The repository owner can review, request changes, and merge it into `main`.
* Provides version control and discussion around each proposed change.

---

## Forking

Forking creates a copy of someone else’s repository under your GitHub account.

* You can freely modify your fork and submit changes via a pull request.
* To stay updated with the original repository, add a remote called **upstream**:

```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git merge upstream/main
```

---

## GitHub Actions

GitHub Actions is a **CI/CD (Continuous Integration / Continuous Deployment)** platform for automating build, test, and deployment processes.

* Workflows are defined in **YAML** files.
* Common uses include:

  * Running automated tests on pull requests
  * Deploying merged code
  * Automating tasks such as comments or notifications

---

**Tip:**

> Commit often with clear messages.
> Branch before experimenting.
> Review before merging.
> And never panic — Git has a way to undo almost anything.

