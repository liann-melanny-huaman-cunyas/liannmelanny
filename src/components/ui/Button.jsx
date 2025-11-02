import React from 'react';

    const Button = ({
    children,
    variant = 'primary',
    isDark,
    onClick,
    className = ''
    }) => {
    const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105';

    const variants = {
        primary: isDark
        ? 'bg-pink-500 text-white hover:bg-pink-400'
        : 'bg-green-500 text-white hover:bg-green-400',
        secondary: isDark
        ? 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
        : 'border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white'
    };

    return (
        <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        >
        {children}
        </button>
    );
};

export default Button;