# Tutorial: Change Colors

Learn how to customize the color scheme of your GitHub Pages site to match your personal brand or preferences.

---

## 🎯 What You'll Learn

By the end of this tutorial, you'll be able to:

- [X] Understand CSS variables
- [X] Change the site's color scheme
- [X] Create custom color combinations
- [X] Test colors across all pages

**Duration:** 10 minutes  
**Difficulty:** 🟢 Beginner

---

## 📋 Prerequisites

- ✅ Completed [Initial Setup](../getting-started/00-setup.md)
- ✅ Local development environment working
- ✅ Basic understanding of CSS

---

## 🎨 Understanding Color Variables

Your site uses CSS variables for easy theming. All colors are defined in one place at the top of `styles.css`.

### Current Color Scheme

Open `styles.css` and find the `:root` section:

```css
:root {
    --primary-color: #0366d6;        /* Blue - main brand color */
    --secondary-color: #28a745;      /* Green - accents */
    --dark-color: #24292e;           /* Dark gray - text & headers */
    --light-color: #f6f8fa;          /* Light gray - backgrounds */
    --text-color: #24292e;           /* Main text color */
    --text-secondary: #586069;       /* Secondary text */
    --border-color: #e1e4e8;         /* Borders */
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🔄 Step 1: Choose Your Colors

### Option A: Use a Color Picker

1. Visit [HTML Color Codes](https://htmlcolorcodes.com/)
2. Select your desired colors
3. Copy the hex codes (e.g., `#FF5733`)

### Option B: Use Brand Colors

If you have brand colors, use those hex codes directly.

### Option C: Try These Presets

#### Professional Blue
```css
--primary-color: #0066cc;
--secondary-color: #33cc33;
```

#### Elegant Purple
```css
--primary-color: #6f42c1;
--secondary-color: #e83e8c;
```

#### Modern Orange
```css
--primary-color: #fd7e14;
--secondary-color: #20c997;
```

#### Classic Red
```css
--primary-color: #dc3545;
--secondary-color: #ffc107;
```

---

## ✏️ Step 2: Update Your Colors

1. **Open `styles.css`** in your editor

2. **Find the `:root` section** (around line 8-18)

3. **Replace the color values:**

```css
:root {
    /* Change these values */
    --primary-color: #YOUR_PRIMARY_COLOR;
    --secondary-color: #YOUR_SECONDARY_COLOR;
    
    /* You can also change these if desired */
    --dark-color: #24292e;
    --light-color: #f6f8fa;
    --text-color: #24292e;
    --text-secondary: #586069;
    --border-color: #e1e4e8;
}
```

4. **Save the file** (`Ctrl+S` or `Cmd+S`)

---

## 👀 Step 3: Preview Your Changes

### Using Live Server

1. If using Live Server, changes appear automatically
2. Check your browser - the colors should update

### Without Live Server

1. Refresh your browser (`F5` or `Ctrl+R`)
2. You should see your new colors

---

## ✅ Step 4: Test Across All Pages

Visit each page to ensure colors look good:

- **Home Page** - Check hero section and buttons
- **About Page** - Check skill cards
- **Projects Page** - Check project cards and tags
- **Contact Page** - Check form elements

### What to Check

!!! check "Color Checklist"

    - [X] Text is readable on all backgrounds
    - [X] Buttons stand out but don't clash
    - [X] Links are clearly visible
    - [X] Hover states work well
    - [X] Overall harmony and consistency

---

## 🎨 Step 5: Advanced Customization

### Adjust Text Colors

If your primary color is dark, lighten the text:

```css
:root {
    --primary-color: #1a1a1a;
    --text-color: #ffffff;  /* White text for dark backgrounds */
}
```

### Create Gradients

Update the hero section for a gradient:

```css
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, #ANOTHER_COLOR 100%);
}
```

### Soften Shadows

For a gentler look:

```css
:root {
    --shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    --shadow-hover: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

## 💡 Pro Tips

!!! tip "Color Selection Tips"

    **Contrast:** Ensure good contrast between text and backgrounds (WCAG 4.5:1 ratio)
    
    **Harmony:** Use a color wheel or palette generator
    
    **Consistency:** Stick to 2-3 main colors
    
    **Test:** View on different devices and lighting conditions

### Recommended Tools

- [Coolors](https://coolors.co/) - Palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Accessibility
- [Paletton](https://paletton.com/) - Harmonious colors

---

## 🐛 Troubleshooting

### Colors Don't Change

**Problem:** Updated CSS but colors stay the same

**Solution:**
```bash
# Hard refresh browser
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)
```

### Text Not Readable

**Problem:** Text disappears or hard to read

**Solution:**
```css
/* Adjust text color for better contrast */
--text-color: #333333;  /* Darker */
/* OR */
--text-color: #ffffff;  /* Lighter for dark backgrounds */
```

### Colors Look Different on Mobile

**Problem:** Colors appear washed out on mobile

**Solution:**
- Test on actual device
- Adjust saturation
- Check in sunlight

---

## 📤 Step 6: Deploy Your Changes

Once you're happy with your colors:

```bash
# Stage changes
git add styles.css

# Commit with descriptive message
git commit -m "Update color scheme to [your color description]"

# Push to GitHub
git push
```

Your site will update in 1-2 minutes!

---

## 🎉 Success!

You've successfully customized your site's colors! Your site now has:

- ✅ Custom color scheme
- ✅ Consistent branding
- ✅ Personalized look and feel

---

## 🚀 Next Steps

Continue learning:

- **[Add a New Page](./02-add-page.md)** - Expand your site
- **[Update Content](./03-update-content.md)** - Personalize text
- **[Dark Mode](./07-dark-mode.md)** - Add theme switching

---

## 📚 Related Topics

- [Understanding CSS Variables](../advanced/css-variables.md)
- [Color Theory Basics](../advanced/design-principles.md)
- [Accessibility Guidelines](../advanced/accessibility.md)

---

!!! question "Questions or Issues?"
    
    Check the [FAQ](../getting-started/05-faq.md) or open an issue on GitHub.
