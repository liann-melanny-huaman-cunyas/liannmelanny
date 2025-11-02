import React from 'react';

const AnimatedCharacter = ({ isDark }) => {
    return (
        <div className="relative w-[28rem] h-[28rem] flex items-center justify-center overflow-visible">
            {/* Fondo animado tipo "blob" */}
            <div className={`absolute w-[26rem] h-[26rem] rounded-full blur-2xl animate-pulse transition-all duration-1000 z-0
                ${isDark
                    ? 'bg-gradient-to-br from-pink-500/30 to-purple-600/30'
                    : 'bg-gradient-to-br from-green-300/40 to-blue-300/40'}
            `} />

            {/* Burbujas flotantes */}
            <div className="absolute animate-float-slow w-4 h-4 rounded-full top-4 left-8 z-10
                transition-all duration-1000
                bg-opacity-60
                " style={{ backgroundColor: isDark ? '#f472b6' : '#fdba74' }} />
            <div className="absolute animate-float-fast w-6 h-6 rounded-full top-16 right-10 z-10
                transition-all duration-1000
                bg-opacity-50
                " style={{ backgroundColor: isDark ? '#a78bfa' : '#6ee7b7' }} />
            <div className="absolute animate-float-medium w-3 h-3 rounded-full bottom-20 left-16 z-10
                transition-all duration-1000
                bg-opacity-50
                " style={{ backgroundColor: isDark ? '#f9a8d4' : '#93c5fd' }} />
            <div className="absolute animate-float-slow w-8 h-8 rounded-full bottom-28 right-8 z-10
                transition-all duration-1000
                bg-opacity-50
                " style={{ backgroundColor: isDark ? '#d8b4fe' : '#fed7aa' }} />

            {/* Imagen del personaje en círculo */}
            <div className="relative z-20 w-[22rem] h-[22rem] rounded-full overflow-hidden border-2 border-white shadow-xl">
                <img
                    src={isDark ? "noche.png" : "diafinal.png"}
                    alt="Personaje personalizado"
                    className="object-cover w-full h-full transition-all duration-1000"
                />
            </div>
        </div>
    );
};

export default AnimatedCharacter;
