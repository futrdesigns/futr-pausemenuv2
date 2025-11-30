# futr-pausemenuv2 A Modern FiveM Pause Menu

A beautifully modern, feature-rich pause menu replacement for FiveM servers. Press ESC to open this sleek, customizable menu that enhances your server's user experience.

# Features
# Modern Design
Glass-morphism UI with blurred backgrounds

Smooth animations and transitions

Dark theme with accent colors

Responsive layout that works on all resolutions

Custom scrollbars and interactive elements

# Enhanced Functionality
Server information display (name, version, player count)

Dynamic news section for server announcements

Recent updates panel with changelog

Community links (Discord, Website, Store)

Live player statistics

Visual feedback on all interactions

# Technical Improvements
CSS Variables for easy theming

Optimized performance with efficient animations

Font Awesome icons for consistent iconography

Modern JavaScript with better event handling

Cross-browser compatible

# Installation
1. Download
bash
# Using git
cd resources
git clone https://github.com/futrdesigns/futr-pausemenuv2

# Or download manually and extract to resources/futr-pausemenuv2/
2. Configure
Add to your server.cfg:

cfg
ensure pengu_pausemenu
3. Customize
Edit config.lua to match your server:

lua
Config = {}
Config.NativePauseMenuText = "Your Server Name"
4. Restart
Restart your server or refresh resources.

# Usage
Press ESC to open the pause menu

Click menu items to navigate

Press ESC again to close

All original functionality preserved with enhanced UI

# File Structure
text
futr-pausemenuv2/
├── fxmanifest.lua
├── config.lua
├── client/
│   └── main.lua
└── html/
    ├── index.html
    ├── style.css
    ├── main.js
    └── images/
        └── logo.png
# Configuration
Basic Configuration (config.lua)
lua
Config = {}
Config.NativePauseMenuText = "Your Server Pause Menu"
Customizing Colors
Edit CSS variables in style.css:

css
:root {
    --primary: #01735C;      /* Main brand color */
    --accent: #00C9A7;       /* Accent color for highlights */
    --background: rgba(18, 18, 18, 0.85); /* Background opacity */
}
Adding News Items
Edit the news section in index.html:

html
<div class="news-item">
    <div class="news-date">June 15, 2024</div>
    <h3>Your Update Title</h3>
    <p>Description of your server update or news.</p>
</div>
# Customization
Changing Colors
Modify the CSS variables in style.css to match your server's branding:

css
:root {
    --primary: #YourColor;       /* Main color */
    --accent: #YourAccentColor;  /* Highlight color */
    /* ... other variables */
}
Adding Menu Items
Add new menu items in index.html:

html
<div class="menu-item" onclick="menuClicked('your_function')">
    <div class="menu-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="menu-text">
        <span>YOUR MENU</span>
        <sup>EXT</sup>
    </div>
</div>
Then handle the function in main.lua:

lua
elseif type == "your_function" then
    -- Your custom functionality here
# API Reference
NUI Callbacks
menuEvent - Handles menu interactions

Available types: resume, settings, map, store, quit

JavaScript Functions
menuClicked(type) - Trigger menu actions

ESC key binding for closing

Lua Functions
CloseUi() - Programmatically close the menu

displayUi(type) - Control UI visibility

# Contributing
We welcome contributions! Please feel free to submit issues, fork the repository, and create pull requests.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

# Troubleshooting
Common Issues
Menu doesn't open:

Ensure resource is started in server.cfg

Check for JavaScript errors in F8 console

UI looks broken:

Verify all files are in correct locations

Check browser console for CSS loading issues

ESC key not working:

Ensure no other resources are conflicting with ESC key binding


# Changelog
v2.0.0 - Modern Rewrite
✅ Complete UI redesign with modern glass-morphism

✅ Added server information panel

✅ Enhanced news and updates sections

✅ Community links and player statistics
