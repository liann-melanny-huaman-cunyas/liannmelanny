import React from "react";
import { FaBriefcase, FaRocket } from "react-icons/fa";

const Experience = ({ isDark }) => {
  const textColor = isDark ? "text-white" : "text-gray-800";
  const subTextColor = isDark ? "text-pink-300" : "text-gray-700";

  const experiences = [
    {
      title: "Docente TIC",
      company: "Instituto Superior Tecnológico de Yauyos",
      period: "JUN 2025 – Actualidad",
      description: [
        "Implementé análisis de datos institucionales con Google Sheets y Excel.",
        "Lideré el uso de Microsoft 365 para la gestión académica.",
        "Optimicé flujos de trabajo con Power Automate y SharePoint.",
        "Desarrollé un proyecto de automatización de reportes académicos con Power BI.",
      ],
      tech: "Microsoft 365, Power BI, Google Sheets",
    },
    {
      title: "Desarrollador Full Stack",
      company: "F'Trick Consultora & Constructora",
      period: "MAR 2024 – MAY 2025",
      description: [
        "Diseñé e implementé arquitectura escalable con Laravel Sail, Docker y PostgreSQL.",
        "Orquesté contenedores con Kubernetes en GCP para alta disponibilidad.",
        "Automatización de infraestructura y CI/CD con Terraform, Argo CD y GitHub Actions.",
        "Desarrollé un sistema interno de gestión de proyectos usando SQL avanzado.",
      ],
      tech: "Laravel, Docker, Kubernetes, GCP, Argo CD, Terraform, GitHub Actions, PostgreSQL",
    },
    {
      title: "Full Stack Developer Jr",
      company: "ItePrevengo Software SST",
      period: "OCT 2023 – ENE 2024",
      description: [
        "Migré un sistema interno de Kohana a Laravel, integrando Vue.js en el frontend.",
        "Desarrollé APIs RESTful y automatización de despliegue con Docker y Terraform.",
        "Colaboré en la mejora del rendimiento y escalabilidad del sistema.",
      ],
      tech: "Laravel, Vue.js, Docker, Terraform, MySQL, GCP",
    },
    {
      title: "Back-end Developer Jr",
      company: "Gesmin",
      period: "FEB 2023 – JUN 2023",
      description: [
        "Desarrollo y mantenimiento de módulos backend en PHP y MySQL.",
        "Optimización de consultas SQL.",
        "Participación en la implementación de control de versiones con Git.",
      ],
      tech: "PHP, MySQL, Git",
    },
  ];

  const projects = [
    {
      title: "Dashboard de Indicadores Educativos (BI & Automatización)",
      period: "SEPT 2025 – Actualidad",
      description: [
        "Diseño y modelado de un tablero interactivo con Power BI para analizar datos institucionales.",
        "Integración automática desde Microsoft Forms y Excel Online mediante Power Automate.",
        "Mejora en la toma de decisiones basadas en datos.",
      ],
      tech: "Power BI, Power Automate, Microsoft 365, Google Sheets",
    },
    {
      title: "Predicción de Resultados de Animales (Machine Learning)",
      period: "2024",
      description: [
        "Limpieza, análisis exploratorio y modelado predictivo de datos.",
        "Entrenamiento y evaluación de modelos Random Forest y Regresión Logística.",
        "Optimización de hiperparámetros con GridSearchCV.",
      ],
      tech: "Python, pandas, scikit-learn, matplotlib, seaborn",
    },
  ];

  // Estructuramos por secciones separadas
  const Section = ({ title, items, icon }) => (
    <div className="relative pt-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-10 text-center ${
          isDark ? "text-pink-300" : "text-emerald-700"
        }`}
      >
        {title}
      </h2>

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        const cardBg = isDark
          ? "bg-gradient-to-br from-pink-600/40 to-pink-900/50 backdrop-blur-xl border border-pink-400/30"
          : "bg-gradient-to-br from-emerald-50 to-green-50 border border-green-300";

        const iconBg = isDark
          ? "bg-gradient-to-br from-pink-500 to-rose-600"
          : "bg-gradient-to-br from-emerald-500 to-green-600";

        return (
          <div
            key={index}
            className="relative flex items-center mb-12 md:mb-20"
          >
            {/* CARD */}
            <div
              className={`w-full md:w-5/12 ${
                isLeft ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16 md:ml-auto"
              }`}
            >
              <div
                className={`${cardBg} p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl 
                transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02] opacity-100`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {icon}
                    <span
                      className={`text-sm font-bold ${
                        isDark
                          ? "text-pink-300 bg-pink-500/20"
                          : "text-emerald-700 bg-emerald-200"
                      } px-3 py-1 rounded-full`}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h3
                  className={`text-xl lg:text-2xl font-bold mb-2 ${textColor}`}
                >
                  {item.title}
                </h3>

                {/* Empresa */}
                {item.company && (
                  <p
                    className={`text-base font-semibold mb-4 ${
                      isDark ? "text-pink-400" : "text-emerald-600"
                    }`}
                  >
                    📍 {item.company}
                  </p>
                )}

                {/* Descripción */}
                <ul className={`space-y-2 mb-5 ${subTextColor}`}>
                  {item.description?.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span
                        className={`${
                          isDark ? "text-pink-400" : "text-emerald-500"
                        } mt-1 text-xs`}
                      >
                        ▸
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tecnologías */}
                {item.tech && (
                  <div
                    className={`pt-4 border-t ${
                      isDark ? "border-pink-400/20" : "border-green-300"
                    }`}
                  >
                    <p className={`text-xs ${subTextColor}`}>
                      <span
                        className={`font-bold ${
                          isDark ? "text-pink-400" : "text-emerald-700"
                        }`}
                      >
                        🔧 Tecnologías:{" "}
                      </span>
                      {item.tech}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Línea e ícono */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 flex-col items-center h-full">
              <div
                className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center 
                  shadow-2xl z-20 relative ring-4 ${
                    isDark ? "ring-gray-900" : "ring-white"
                  }`}
              >
                {icon}
              </div>
              {index < items.length - 1 && (
                <div
                  className={`w-1 flex-1 mt-2 rounded-full ${
                    isDark
                      ? "bg-gradient-to-b from-pink-500/60 via-purple-500/40 to-pink-500/20"
                      : "bg-gradient-to-b from-emerald-400/60 via-green-400/40 to-emerald-300/20"
                  }`}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen px-4 md:px-8 py-16 relative overflow-hidden">
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-pink-500" : "bg-emerald-400"
          } animate-pulse`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-purple-500" : "bg-green-400"
          } animate-pulse`}
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <div
              className={`px-6 py-2 rounded-full ${
                isDark ? "bg-pink-500/20" : "bg-emerald-200"
              }`}
            >
              <span
                className={`text-sm font-bold ${
                  isDark ? "text-pink-300" : "text-emerald-700"
                }`}
              >
                MI TRAYECTORIA
              </span>
            </div>
          </div>
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${textColor}`}
          >
            Experiencia & Proyectos
          </h1>
          <div
            className={`w-32 h-2 mx-auto rounded-full mb-6 ${
              isDark
                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
                : "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"
            }`}
          />
        </div>

        {/* SECCIONES */}
        <Section
          title="Experiencia Profesional"
          items={experiences}
          icon={<FaBriefcase className="text-white text-2xl" />}
        />

        <Section
          title="Proyectos Personales"
          items={projects}
          icon={<FaRocket className="text-white text-2xl" />}
        />
      </div>
    </div>
  );
};

export default Experience;
