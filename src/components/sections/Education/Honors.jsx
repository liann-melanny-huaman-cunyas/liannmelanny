import React from 'react'
import { FaGift} from 'react-icons/fa';


const Honors = ({subTextColor,textColor,cardBg}) => {

    const honors = [
        {
        title: 'Beca Permanencia',
        institution: 'PRONABEC',
        period: '2021 - 2024',
        icon: '🏆',
        description: 'Beca de excelencia académica para estudios superiores'
        },
        {
        title: 'Taller Regional en Ciencia de Datos',
        institution: 'Universidad Técnica de Machala (Ecuador) / Google Research',
        period: '2023',
        icon: '🌟',
        description: 'Participación en taller internacional de investigación'
        },
    ];

    return (
        <div>
            {/* BECAS Y RECONOCIMIENTOS */}
            <section>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                <FaGift className="text-white text-2xl" />
                </div>
                <h2 className={`text-3xl font-bold ${textColor}`}>Becas y Reconocimientos</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {honors.map((item, idx) => (
                <div key={idx} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${cardBg}`}>
                    <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{item.icon}</span>
                    <div>
                        <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{item.title}</h3>
                        <p className={`text-pink-600 font-semibold mb-2`}>{item.institution}</p>
                        <p className={`text-sm ${subTextColor} font-medium mb-3`}>{item.period}</p>
                        <p className={`text-sm ${subTextColor} italic`}>{item.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </div>
    )
}

export default Honors
