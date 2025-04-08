// HomePage.jsx - Ready for VS Code import

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import SassMeter from "./components/SassMeter";
import Footer from "./components/Footer";

const translations = {
  en: {
    about: "About Me",
    experience: "Experience Highlights",
    skills: "Skills & Tools",
    certs: "Certifications",
    contact: "Contact",
    loading: "Loading brilliance...",
    download: "Download Resume",
    hire: "Hire Me",
    dark: "Switch to Dark Mode",
    light: "Switch to Light Mode",
    built: "Site designed and built by Shina Alabi with React + Tailwind + caffeine.",
    name: "Name",
    message: "Message",
    send: "Send Message",
    headshotAlt: "Shina Alabi headshot",
    sass: "Real-time Sass Level",
    visitors: "Site Visits"
  }
};

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState("en");
  const [sassLevel, setSassLevel] = useState(0);
  const [visits, setVisits] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode) setDarkMode(storedMode === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSassLevel((prev) => (prev < 100 ? prev + 1 : 0));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = localStorage.getItem("siteVisits") || 0;
    const updated = parseInt(current) + 1;
    localStorage.setItem("siteVisits", updated);
    setVisits(updated);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl animate-pulse">
        {t.loading}
      </div>
    );
  }

  return (
    <div className={`${
      darkMode
        ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
        : "bg-gray-50 text-gray-900"
    } min-h-screen px-6 py-10 font-sans transition duration-300`}>
      <div className="max-w-4xl mx-auto">
        <Header lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Certifications t={t} />
        <SassMeter sassLevel={sassLevel} visits={visits} t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </div>
    </div>
  );
}
