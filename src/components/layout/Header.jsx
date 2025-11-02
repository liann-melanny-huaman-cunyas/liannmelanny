import React from 'react';
import ThemeToggle from '../ui/ThemeToogle';
import Navigation from '../layout/Navigation'

const Header = ({ isDark, toggleTheme, activeSection, setActiveSection }) => {
    return (
        <header className="flex justify-between items-center p-8">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            / liann.tech
        </h1>

        <Navigation isDark={isDark} activeSection={activeSection} setActiveSection={setActiveSection}/>
        <div className="flex items-center gap-6">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
        </header>
    );
};

export default Header;