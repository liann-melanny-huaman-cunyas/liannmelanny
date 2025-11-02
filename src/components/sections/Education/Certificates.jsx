import React from 'react'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';


const Certificates = ({textColor,cardBg,subTextColor}) => {

        const certificates = [
        {
        platform: 'Udemy',
        link: 'https://www.udemy.com/user/liann-melanny/',
        icon: '🎓',
        courses: [
            {
            name: 'Docker',
            url: 'https://www.udemy.com/certificate/UC-8aa713a9-708e-45dd-8a97-46d5a486a769/',
            },
            {
            name: 'AWS',
            url: 'https://www.udemy.com/certificate/UC-e6519941-c65c-4957-acb7-69afe60a88d1/',
            },
            {
            name: 'Angular',
            url: 'https://www.udemy.com/certificate/UC-2b9f420d-06b1-4977-befa-d5f33983addb/',
            },
            {
            name: 'POO - Java',
            url: 'https://www.udemy.com/certificate/UC-d53988e5-6bd0-4abd-b83e-b1781df3f4d3/',
            },
        ],
        },
        {
        platform: 'Platzi',
        link: 'https://platzi.com/mis-certificados/',
        icon: '💚',
        courses: [
            'Fundamentos de Arquitectura de Software',
            'Curso Práctico de JavaScript',
            'Curso Profesional de Scrum',
            'API REST con Laravel',
            'Introducción a Laravel 9',
            'Curso Práctico de PHP',
            'Frontend Developer',
            'Curso Básico de JavaScript',
        ],
        },
        {
        platform: 'Código Facilito',
        link: 'https://www.codigofacilito.com/usuarios/lmelanny0604',
        icon: '⚡',
        courses: [
            'Curso de Spring Framework y Spring Boot',
            'Curso Profesional de Docker',
            'Curso de Python Profesional',
        ],
        },
        {
        platform: 'MINPE',
        link: '',
        icon: '🏛️',
        courses: [
            {
            name: 'Python',
            url: 'https://www.minpe.edu.pe/wp-content/uploads/2025/04/Huaman-Cunyas-Liann-Melanny-2513618.pdf',
            },
            {
            name: 'Base de datos con MySQL',
            url: 'https://www.minpe.edu.pe/wp-content/uploads/2025/04/Huaman-Cunyas-Liann-Melanny-2513619.pdf',
            },
            {
            name: 'Excel Avanzado',
            url: 'https://www.minpe.edu.pe/wp-content/uploads/2025/05/Huaman-Cunyas-Liann-Melanny-2514076.pdf',
            },
        ],
        },
    ];

    return (
        <div>
            {/* CERTIFICADOS */}
            <section>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
                <FaCertificate className="text-white text-2xl" />
                </div>
                <h2 className={`text-3xl font-bold ${textColor}`}>Certificaciones</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                {certificates.map((platform, idx) => (
                <div key={idx} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${cardBg}`}>
                    <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl">{platform.icon}</span>
                    <div>
                        <h3 className={`text-2xl font-bold ${textColor}`}>{platform.platform}</h3>
                        {platform.link && (
                        <a
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-black hover:text-pink-600 font-medium text-sm transition-colors"
                        >
                            Ver perfil completo <FaExternalLinkAlt className="text-xs" />
                        </a>
                        )}
                    </div>
                    </div>
                    <div className="space-y-3">
                    {platform.courses.map((course, i) => (
                        <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex-shrink-0"></div>
                        {typeof course === 'string' ? (
                            <span className={`${subTextColor} font-medium`}>{course}</span>
                        ) : (
                            <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-pink-600 font-medium transition-colors hover:underline flex items-center gap-2"
                            >
                            {course.name} <FaExternalLinkAlt className="text-xs" />
                            </a>
                        )}
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    </div>
    )
}

export default Certificates
