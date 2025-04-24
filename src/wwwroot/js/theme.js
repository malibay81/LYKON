// Theme management
export function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

export function setTheme(theme) {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    return theme;
}

export function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
}

// On page load, ensure theme is applied
(function() {
    setTheme(getTheme());
})();