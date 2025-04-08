import React, { useState, useEffect } from "react";
import { FaMicrosoft, FaGithub, FaWindows, FaAws, FaLinux, FaNetworkWired } from "react-icons/fa";
import { SiAzuredevops, SiPowershell, SiVmware, SiCisco, SiGooglecloud } from "react-icons/si";

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
  },
  fr: {
    about: "À propos de moi",
    experience: "Points saillants de l'expérience",
    skills: "Compétences et Outils",
    certs: "Certifications",
    contact: "Contact",
    loading: "Chargement de la brillance...",
    download: "Télécharger le CV",
    hire: "Embauchez-moi",
    dark: "Passer en mode sombre",
    light: "Passer en mode clair",
    built: "Site conçu et développé par Shina Alabi avec React + Tailwind + caféine.",
    name: "Nom",
    message: "Message",
    send: "Envoyer le message",
    headshotAlt: "Portrait de Shina Alabi",
    sass: "Niveau de sass en temps réel",
    visitors: "Visites du site"
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
    <div className={`${darkMode ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white" : "bg-white text-gray-900"} min-h-screen px-6 py-10 font-sans transition duration-300`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mb-6">
          <button onClick={() => setLang(lang === "en" ? "fr" : "en")} className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white">
            {lang === "en" ? "FR 🇫🇷" : "EN 🇬🇧"}
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-white">
            {darkMode ? t.light : t.dark}
          </button>
        </div>

        <header className="text-center mb-12 animate-fade-in">
          <img src="/headshot.jpg" alt={t.headshotAlt} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Shina Alabi</h1>
          <p className="text-xl text-gray-300 dark:text-gray-700">IT SaaS Engineer & Systems Administrator | Ottawa, ON</p>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <a href="/Shina_Alabi_Resume_Affirm_Optimized.pdf" download className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-5 rounded-2xl shadow-md">
            {t.download}
          </a>
          <a href="mailto:alabiishina@gmail.com" className="bg-green-600 hover:bg-green-700 transition text-white font-medium py-2 px-5 rounded-2xl shadow-md">
            {t.hire}
          </a>
        </div>

        <section className="mb-12 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{t.sass}: {sassLevel}% 💅</h2>
            <h2 className="text-2xl font-semibold mb-2">{t.visitors}: {visits}</h2>
          </div>
          <form className="bg-gray-800 dark:bg-gray-100 p-6 rounded-xl space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">{t.name}</label>
              <input type="text" className="w-full px-4 py-2 rounded bg-white text-black" placeholder={t.name} />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">{t.message}</label>
              <textarea className="w-full px-4 py-2 rounded bg-white text-black" rows="4" placeholder={t.message}></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-4 rounded-xl">
              {t.send}
            </button>
          </form>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shina Alabi. {t.built}</p>
        </footer>
      </div>
    </div>
  );
}
