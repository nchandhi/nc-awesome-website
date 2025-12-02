# GitHub Pages Setup Script
param(
    [Parameter(Mandatory=$true)]
    [string]$RepoName,
    
    [Parameter(Mandatory=$false)]
    [string]$Description = "A sample GitHub Pages website",
    
    [Parameter(Mandatory=$false)]
    [string]$GhPath = "gh"
)

Write-Host "Checking for GitHub CLI..." -ForegroundColor Cyan
if ($GhPath -eq "gh") {
    $ghInstalled = Get-Command gh -ErrorAction SilentlyContinue
    if (-not $ghInstalled) {
        Write-Host "ERROR: GitHub CLI (gh) is not installed or not in PATH!" -ForegroundColor Red
        Write-Host "Please install it from: https://cli.github.com/" -ForegroundColor Yellow
        Write-Host "Or specify the full path using -GhPath parameter" -ForegroundColor Yellow
        exit 1
    }
} else {
    if (-not (Test-Path $GhPath)) {
        Write-Host "ERROR: GitHub CLI not found at: $GhPath" -ForegroundColor Red
        exit 1
    }
}

Write-Host "Checking GitHub authentication..." -ForegroundColor Cyan
& $GhPath auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "You need to authenticate with GitHub CLI first." -ForegroundColor Yellow
    Write-Host "Running: gh auth login" -ForegroundColor Cyan
    & $GhPath auth login
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Authentication failed!" -ForegroundColor Red
        exit 1
    }
}

Write-Host "OK - GitHub CLI is authenticated" -ForegroundColor Green

if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to initialize git repository!" -ForegroundColor Red
        exit 1
    }
    Write-Host "OK - Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "OK - Git repository already exists" -ForegroundColor Green
}

Write-Host "Adding files to git..." -ForegroundColor Cyan
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to add files to git!" -ForegroundColor Red
    exit 1
}

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: GitHub Pages setup with sample content"
if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Commit may have failed" -ForegroundColor Yellow
}

Write-Host "Ensuring we are on main branch..." -ForegroundColor Cyan
git branch -M main

Write-Host "Creating public GitHub repository $RepoName ..." -ForegroundColor Cyan
& $GhPath repo create $RepoName --public --source=. --description=$Description --push
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to create GitHub repository!" -ForegroundColor Red
    exit 1
}
Write-Host "OK - Repository created and pushed" -ForegroundColor Green

Write-Host "Enabling GitHub Pages..." -ForegroundColor Cyan
Start-Sleep -Seconds 3

& $GhPath api repos/:owner/$RepoName/pages -X POST -f "source[branch]=main" -f "source[path]=/" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "OK - GitHub Pages enabled" -ForegroundColor Green
} else {
    Write-Host "Note: You may need to enable GitHub Pages manually" -ForegroundColor Yellow
    Write-Host "Go to: Settings > Pages > Select main branch > Save" -ForegroundColor Yellow
}

$username = & $GhPath api user --jq .login
$pagesUrl = "https://$username.github.io/$RepoName/"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "SUCCESS! Your GitHub Pages site is being deployed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Repository URL: https://github.com/$username/$RepoName" -ForegroundColor Cyan
Write-Host "GitHub Pages URL: $pagesUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: It may take a few minutes for your site to be available." -ForegroundColor Yellow
Write-Host ""
