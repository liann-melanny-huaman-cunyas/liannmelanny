import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 flex items-center justify-between px-2 rounded-full transition-all duration-500 ${
            isDark ? 'bg-pink-500' : 'bg-green-400'
        }`}
        >
        {/* Íconos fijos a los extremos */}
        <FaMoon className="text-white z-10" size={16} />
        <FaSun className="text-white z-10" size={16} />

        {/* Círculo deslizante */}
        <div
            className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ${
            isDark ? 'left-1 bg-white' : 'left-9 bg-white'
            }`}
        />
        </button>
    );
};

export default ThemeToggle;
