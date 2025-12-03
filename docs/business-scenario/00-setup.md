# Initial Setup

This guide will help you set up your development environment and get your GitHub Pages site running locally.

---

## 1. Verify Prerequisites

Before you begin, ensure you have:

!!! check "Required Software"

    - [X] **Git** - Version control system
    - [X] **Text Editor** - VS Code, Sublime Text, or similar
    - [X] **Web Browser** - Chrome, Firefox, Edge, or Safari
    - [X] **GitHub Account** - With access to your repository

### Check Git Installation

```bash
git --version
```

If Git is not installed, download it from [git-scm.com](https://git-scm.com/).

---

## 2. Clone Your Repository

### Option A: Using Command Line

```bash
# Navigate to your desired directory
cd C:\Work

# Clone your repository
git clone https://github.com/nchandhi/nc-awesome-website.git

# Navigate into the repository
cd nc-awesome-website
```

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. Click **File > Clone Repository**
3. Select your repository from the list
4. Choose a local path
5. Click **Clone**

---

## 3. Open in Your Editor

### Using VS Code

```bash
# From command line
code .
```

Or:

1. Open VS Code
2. Click **File > Open Folder**
3. Select your repository folder
4. Click **Select Folder**

### Recommended VS Code Extensions

!!! tip "Helpful Extensions"

    - **Live Server** - For local preview
    - **HTML CSS Support** - Enhanced editing
    - **Prettier** - Code formatting
    - **GitLens** - Git integration

---

## 4. View Your Site Locally

### Method 1: Using Live Server (VS Code)

1. Install the **Live Server** extension
2. Right-click on `index.html`
3. Select **Open with Live Server**
4. Your site opens in your browser

### Method 2: Direct File Opening

1. Navigate to your project folder
2. Double-click `index.html`
3. The page opens in your default browser

!!! note "Limitation"
    
    Opening files directly (file://) may have some limitations compared to using a local server.

### Method 3: Python Simple Server

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Then open browser to:
# http://localhost:8000
```

---

## 5. Verify Everything Works

Check that you can:

!!! success "Verification Checklist"

    - [X] See the home page with hero section
    - [X] Navigate between all 4 pages
    - [X] See styles applied correctly
    - [X] All links work properly
    - [X] Images load (if any)
    - [X] Responsive design works (resize browser)

### Test Navigation

Click through each menu item:
- **Home** → Landing page
- **About** → Skills and background
- **Projects** → Portfolio showcase
- **Contact** → Contact information

---

## 6. Understanding Your Workspace

Your local repository structure:

```
nc-awesome-website/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page
├── contact.html        # Contact page
├── styles.css          # All styling
├── README.md           # Documentation
├── SETUP_INSTRUCTIONS.md
├── setup-github-pages.ps1
└── docs/              # This documentation
    ├── index.md
    ├── getting-started/
    ├── tutorials/
    └── advanced/
```

---

## 7. Configure Git (First Time Only)

If this is your first time using Git:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
```

---

## 8. Test Git Connection

Verify you can communicate with GitHub:

```bash
# Check remote
git remote -v

# Should show:
# origin  https://github.com/nchandhi/nc-awesome-website.git (fetch)
# origin  https://github.com/nchandhi/nc-awesome-website.git (push)
```

---

## 9. Optional: GitHub CLI Setup

If you have GitHub CLI installed:

```bash
# Check authentication
gh auth status

# If not authenticated
gh auth login
```

---

## 🎉 Success!

Your development environment is now set up! You can:

- ✅ Edit files locally
- ✅ Preview changes in real-time
- ✅ Test before deploying
- ✅ Push updates to GitHub

---

## 🚀 Next Steps

Now that you're set up, let's learn about the [Project Structure](./01-structure.md).

---

## ❓ Troubleshooting

### Git Clone Fails

**Problem:** Authentication error when cloning

**Solution:**
```bash
# Use HTTPS with personal access token
# Or use GitHub CLI
gh repo clone nchandhi/nc-awesome-website
```

### Live Server Not Working

**Problem:** Extension doesn't start server

**Solution:**
1. Check if extension is installed and enabled
2. Try reloading VS Code
3. Use alternative method (Python server)

### Files Not Updating

**Problem:** Changes don't appear in browser

**Solution:**
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart Live Server

### Port Already in Use

**Problem:** Cannot start server on port 8000

**Solution:**
```bash
# Use a different port
python -m http.server 3000
```

---

!!! question "Still Having Issues?"
    
    Check the detailed [Troubleshooting Guide](./04-troubleshooting.md) or open an issue on GitHub.
