import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/sections/Home';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
// import Projects from './components/sections/Projects';
// import Technologies from './components/sections/Technologies';
// import Contact from './components/sections/Contact';

const App = () => {
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState('home');

  // Esta función debe ir fuera del return
  const renderContent = () => {
    switch (active) {
      case 'home':
        return <Home setActive={setActive} isDark={isDark} />;
      case 'educacion':
        return <Education setActive={setActive} isDark={isDark} />;

      case 'experiencia':
        return <Experience setActive={setActive} isDark={isDark} />;
      default:
        return <div>Sección no encontrada</div>;
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        isDark
          ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900'
          : 'bg-gradient-to-br from-green-100 via-blue-50 to-orange-100'
      }`}
    >
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={active}
        setActiveSection={setActive}
      />
      {renderContent()}
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
