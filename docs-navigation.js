// Tab switching functionality
function switchTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    // Hide all sidebars
    document.querySelectorAll('.sidebar-section').forEach(sidebar => {
        sidebar.style.display = 'none';
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
        selectedTab.style.display = 'block';
        
        // Show the first content section (overview) of the tab
        const firstSection = selectedTab.querySelector('.content-section');
        if (firstSection) {
            showSection(firstSection.id);
        }
    }
    
    // Show corresponding sidebar
    const sidebar = document.getElementById('sidebar-' + tabId);
    if (sidebar) {
        sidebar.style.display = 'block';
        
        // Reset sidebar active states
        sidebar.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
        });
        sidebar.querySelector('.sidebar-link').classList.add('active');
    }
    
    // Activate clicked tab button
    const clickedButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Update main navigation active state
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes('#' + tabId)) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show specific section within a tab
function showSection(sectionId) {
    // Get the parent tab
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const parentTab = section.closest('.tab-content');
    if (!parentTab) return;
    
    // Hide all sections in this tab
    parentTab.querySelectorAll('.content-section').forEach(s => {
        s.style.display = 'none';
    });
    
    // Show selected section
    section.style.display = 'block';
    
    // Update sidebar active state
    const sidebarId = 'sidebar-' + parentTab.id;
    const sidebar = document.getElementById(sidebarId);
    if (sidebar) {
        sidebar.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    // Scroll to top of main content
    const docsMain = document.querySelector('.docs-main');
    if (docsMain) {
        docsMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize tab buttons
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        switchTab(tabId);
    });
});

// Initialize sidebar links
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            showSection(sectionId);
        }
    });
});

// Initialize navigation buttons within content
document.addEventListener('click', (e) => {
    // Handle links to sections
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href && href.length > 1) {
            const sectionId = href.substring(1);
            showSection(sectionId);
        }
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        const sectionId = hash.substring(1);
        
        // Determine which tab this section belongs to
        const section = document.getElementById(sectionId);
        if (section) {
            const parentTab = section.closest('.tab-content');
            if (parentTab) {
                switchTab(parentTab.id);
                setTimeout(() => showSection(sectionId), 100);
            }
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for hash in URL
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        const sectionId = hash.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const parentTab = section.closest('.tab-content');
            if (parentTab) {
                switchTab(parentTab.id);
                setTimeout(() => showSection(sectionId), 100);
                return;
            }
        }
    }
    
    // Default: show first tab and overview
    switchTab('phase1');
});
