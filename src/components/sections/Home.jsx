import React from 'react';
import AnimatedCharacter from '../ui/AnimatedCharacter';
import Button from '../ui/Button';

const Home = ({ isDark, setActive }) => {
    return (
        <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
        {/* Character */}
        <AnimatedCharacter isDark={isDark} />

        {/* Text Content */}
        <div className="flex-1 max-w-lg mt-12 md:mt-0 md:ml-16">
            <h2
            className={`text-5xl font-bold mb-6 transition-all duration-1000 ${
                isDark ? 'text-white' : 'text-gray-800'
            }`}
            >
            ¡Hola! Mi nombre es LIANN MELANNY
            </h2>
            <p
            className={`text-xl leading-relaxed transition-all duration-1000 ${
                isDark ? 'text-gray-200' : 'text-gray-600'
            }`}
            >
            Soy una desarrolladora de software apasionada por aprender nuevas tecnologías, 
            crear experiencias digitales increíbles, el diseño moderno, 
            la programación y construir el futuro una línea de código a la vez.
            </p>

            {/* Call to action buttons */}
            <div className="flex gap-4 mt-8">
            <Button variant="primary" isDark={isDark} onClick={() => setActive('proyectos')}>
                Ver Proyectos
            </Button>
            <Button variant="secondary" isDark={isDark}>
                Descargar CV
            </Button>
            </div>
        </div>
        </main>
    );
};

export default Home;
