// Theme management
export function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

export function setTheme(theme) {
    localStorage.setItem('theme', theme);
    return theme;
}

export function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
}