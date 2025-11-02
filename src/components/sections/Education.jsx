import React from 'react';
import EducationData from './Education/EducationData';
import Certificates from './Education/Certificates';
import Honors from './Education/honors';

const Education = ({ isDark }) => {
const textColor = isDark ? 'text-white' : 'text-gray-800';

const subTextColor = isDark ? 'text-pink-300' : 'text-gray-700';

const cardBg = isDark
    ? 'bg-gradient-to-br from-pink-600/50 to-pink-900/60 backdrop-blur-md border border-pink-400/30 shadow-xl rounded-3xl'
    : 'bg-gradient-to-br from-emerald-200 to-green-100 border border-green-400 shadow-xl rounded-3xl';

    return (
        <div className="min-h-screen px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
            {/* HEADER */}
            <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${textColor}`}>
                Mi Formación
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full"></div>
            <p className={`text-lg mt-6 ${subTextColor} max-w-2xl mx-auto`}>
                Un recorrido por mi crecimiento académico y profesional
            </p>
            </div>

        <EducationData
            textColor={textColor}
            cardBg={cardBg}
            subTextColor={subTextColor}
        />
        <Honors
            textColor={textColor}
            cardBg={cardBg}
            subTextColor={subTextColor}
        />
        <Certificates
            textColor={textColor}
            cardBg={cardBg}
            subTextColor={subTextColor}
        />


            {/* ESTADÍSTICAS */}
            <section className={`p-8 rounded-2xl ${cardBg} text-center`}>
            <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>En Números</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                <div className="text-3xl font-bold text-pink-500 mb-2">2+</div>
                <div className={`text-sm ${subTextColor} font-medium`}>Títulos Universitarios</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-rose-500 mb-2">15+</div>
                <div className={`text-sm ${subTextColor} font-medium`}>Certificaciones</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">2</div>
                <div className={`text-sm ${subTextColor} font-medium`}>Becas Ganadas</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">4</div>
                <div className={`text-sm ${subTextColor} font-medium`}>Plataformas</div>
                </div>
            </div>
            </section>
        </div>
        </div>
    );
    };

export default Education;