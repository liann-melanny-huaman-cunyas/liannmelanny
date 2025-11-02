import React from 'react';
import { FaGraduationCap, FaAward } from 'react-icons/fa';


const EducationData = ({textColor,subTextColor,cardBg}) => {

    const educationData = [
        {
        title: 'Maestría en Ingeniería de Sistemas',
        institution: 'Universidad Nacional del Centro del Perú',
        period: '2025 - Actualidad',
        status: 'En Curso',
        gradient: 'from-pink-500 to-rose-500'
        },
        {
        title: 'Ingeniería de Sistemas',
        institution: 'Universidad Nacional del Centro del Perú',
        period: '2019 - 2024',
        status: 'Completado',
        gradient: 'from-purple-500 to-pink-500'
        },
    ];

    return (
        <div>
            {/* EDUCACIÓN FORMAL */}
            <section>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
                <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h2 className={`text-3xl font-bold ${textColor}`}>Educación Formal</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {educationData.map((edu, index) => (
                <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${cardBg}`}>
                    <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${edu.gradient} text-white`}>
                        {edu.status}
                    </div>
                    <FaAward className="text-pink-500 text-xl" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${textColor}`}>{edu.title}</h3>
                    <p className={`text-pink-600 font-medium mb-2`}>{edu.institution}</p>
                    <p className={`text-sm ${subTextColor} font-medium`}>{edu.period}</p>
                </div>
                ))}
            </div>
            </section>
        </div>
    )
}

export default EducationData
