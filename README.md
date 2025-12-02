# GitHub Pages Website

A beautiful, responsive website hosted on GitHub Pages with four sample pages.

## 🚀 Quick Start

### Prerequisites

- Git installed on your system
- GitHub CLI (`gh`) installed - [Download here](https://cli.github.com/)
- A GitHub account

### Setup Instructions

1. **Navigate to this directory** in PowerShell:
   ```powershell
   cd c:\Work\7_GitHubPages
   ```

2. **Run the setup script** with your desired repository name:
   ```powershell
   .\setup-github-pages.ps1 -RepoName "my-awesome-website"
   ```

   Or with a custom description:
   ```powershell
   .\setup-github-pages.ps1 -RepoName "my-awesome-website" -Description "My personal portfolio site"
   ```

3. **Wait for deployment**: The script will create the repository, push the code, and enable GitHub Pages. Your site will be live in a few minutes!

### What the Script Does

1. ✅ Checks if GitHub CLI is installed
2. ✅ Verifies GitHub authentication
3. ✅ Initializes a git repository
4. ✅ Commits all files
5. ✅ Creates a public GitHub repository
6. ✅ Pushes code to GitHub
7. ✅ Enables GitHub Pages
8. ✅ Provides your website URL

## 📄 Pages Included

1. **Home (index.html)** - Landing page with hero section and features
2. **About (about.html)** - About page with skills and background
3. **Projects (projects.html)** - Portfolio/projects showcase
4. **Contact (contact.html)** - Contact information and form

## 🎨 Customization

### Updating Content

Simply edit the HTML files to change the content. The files are well-structured and commented.

### Styling

All styles are in `styles.css`. You can modify colors, fonts, spacing, and more by editing the CSS variables at the top of the file:

```css
:root {
    --primary-color: #0366d6;
    --secondary-color: #28a745;
    /* ... more variables ... */
}
```

### Adding More Pages

1. Create a new HTML file following the same structure as the existing pages
2. Add a link to it in the navigation menu of all pages
3. Commit and push your changes

## 🔄 Updating Your Site

After making changes to your site:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically rebuild your site within a few minutes.

## 📱 Responsive Design

The website is fully responsive and looks great on:
- 💻 Desktop computers
- 📱 Tablets
- 📱 Mobile phones

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (minimal, for form handling)
- GitHub Pages for hosting

## 📝 License

Feel free to use this template for your own projects!

## 🤝 Contributing

This is a template project, but suggestions are welcome! Feel free to open issues or submit pull requests.

## 📧 Support

If you encounter any issues with the setup script or have questions, please open an issue in the GitHub repository.

---

Built with ❤️ using GitHub Pages
