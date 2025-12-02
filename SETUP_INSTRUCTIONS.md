# Manual Setup Instructions for GitHub Pages

## Prerequisites Check

Before running the automated script, you need:

1. **Git** - Should already be installed
2. **GitHub CLI (gh)** - Download from https://cli.github.com/

## Option 1: Automated Setup (Recommended)

Once you have GitHub CLI installed and authenticated:

```powershell
.\setup-github-pages.ps1 -RepoName "your-repo-name"
```

## Option 2: Manual Setup

If you prefer to set things up manually or don't want to install GitHub CLI:

### Step 1: Initialize Git Repository

```powershell
git init
git add .
git commit -m "Initial commit: GitHub Pages setup with sample content"
git branch -M main
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name (e.g., "nc-awesome-website")
3. Select "Public"
4. Do NOT initialize with README (we already have content)
5. Click "Create repository"

### Step 3: Push Your Code

GitHub will show you commands. Use these (replace USERNAME and REPONAME):

```powershell
git remote add origin https://github.com/USERNAME/REPONAME.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click "Save"

### Step 5: Wait for Deployment

- Your site will be available at: `https://USERNAME.github.io/REPONAME/`
- Check the "Actions" tab to see deployment progress
- Usually takes 1-3 minutes

## Installing GitHub CLI

### Windows (with winget)
```powershell
winget install --id GitHub.cli
```

### Windows (with Chocolatey)
```powershell
choco install gh
```

### Windows (Manual Download)
Download the MSI installer from: https://cli.github.com/

### After Installing GitHub CLI

Authenticate with:
```powershell
gh auth login
```

Then run the setup script:
```powershell
.\setup-github-pages.ps1 -RepoName "nc-awesome-website"
```

## Troubleshooting

### "gh: command not found"
- GitHub CLI is not installed or not in PATH
- Restart PowerShell after installing
- Use manual setup instead

### "Authentication required"
- Run: `gh auth login`
- Follow the prompts to authenticate

### "Repository already exists"
- Use a different repository name
- Or delete the existing repository first

### Site not loading
- Wait a few minutes for deployment
- Check Actions tab for build status
- Ensure GitHub Pages is enabled in Settings
- URL format: `https://username.github.io/reponame/`

## What's Included in This Project

- `index.html` - Home page
- `about.html` - About page
- `projects.html` - Projects showcase
- `contact.html` - Contact page
- `styles.css` - All styling
- `README.md` - Documentation
- `setup-github-pages.ps1` - Automation script

## Customizing Your Site

1. Edit HTML files to change content
2. Edit `styles.css` to change colors and styling
3. Add more pages by creating new HTML files
4. Commit and push changes:
   ```powershell
   git add .
   git commit -m "Updated content"
   git push
   ```

Your site will automatically rebuild after each push!
