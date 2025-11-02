import React from 'react';
import { FaGraduationCap, FaBriefcase, FaTools, FaLaptopCode, FaEnvelope, FaUser } from 'react-icons/fa';

const Navigation = ({ isDark, activeSection, setActiveSection }) => {
    const navigation = [
        { id: 'home', label: 'Inicio', icon: <FaUser /> },
        { id: 'educacion', label: 'Educación', icon: <FaGraduationCap /> },
        { id: 'experiencia', label: 'Experiencia', icon: <FaBriefcase /> },
        { id: 'proyectos', label: 'Proyectos', icon: <FaTools /> },
        { id: 'tecnologias', label: 'Tecnologías', icon: <FaLaptopCode /> },
        { id: 'contacto', label: 'Contacto', icon: <FaEnvelope /> }
    ];

    const linkStyle = isDark
        ? 'text-white hover:text-pink-400 no-underline'
        : 'text-gray-800 hover:text-green-600';

    return (
        <nav className="flex gap-6 justify-center py-4 text-sm font-medium no-underline">
        {navigation.map(({ id, label, icon }) => (
            <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2  ${linkStyle} ${
                    activeSection === id ? 'font-bold text-lg no-underline' : ''
                }`}
            >
            {icon} {label}
            </button>
        ))}
        </nav>
    );
};

export default Navigation;
