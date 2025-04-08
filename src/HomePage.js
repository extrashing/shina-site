import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

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

  const iconList = [
    { icon: FaIcons.FaMicrosoft, label: "Microsoft" },
    { icon: FaIcons.FaGithub, label: "GitHub" },
    { icon: SiIcons.SiVmware, label: "VMware" },
    { icon: SiIcons.SiCisco, label: "Cisco" },
    { icon: FaIcons.FaAws, label: "AWS" },
    { icon: SiIcons.SiGooglecloud, label: "Google Cloud" },
    { icon: FaIcons.FaWindows, label: "Windows" },
    { icon: FaIcons.FaLinux, label: "Linux" },
    { icon: FaIcons.FaNetworkWired, label: "Networking" }
  ];

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
    <div className={`${darkMode ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white" : "bg-gray-50 text-gray-900"} min-h-screen px-6 py-10 font-sans transition duration-300`}>
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
          <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-blue-700 dark:text-blue-400">Shina Alabi</h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">IT SaaS Engineer & Systems Administrator | Ottawa, ON</p>
        </header>

        <div className="flex justify-center gap-4 mb-4">
          <a href="/Shina_Alabi_Resume_Affirm_Optimized.pdf" download className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-5 rounded-2xl shadow-md">
            {t.download}
          </a>
          <a href="mailto:alabiishina@gmail.com" className="bg-green-600 hover:bg-green-700 transition text-white font-medium py-2 px-5 rounded-2xl shadow-md">
            {t.hire}
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12 text-xl">
          <a href="https://www.linkedin.com/in/alabishina" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
            <FaIcons.FaLinkedin />
          </a>
          <a href="https://wa.me/14169975319" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-500">
            <FaIcons.FaWhatsapp />
          </a>
        </div>

        {/* About Section */}
        <section className="mb-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-3 border-b border-blue-700 dark:border-blue-400 pb-1 text-blue-700 dark:text-blue-400">{t.about}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a resourceful and results-driven IT Analyst based in Ottawa, with a passion for designing and supporting reliable IT infrastructures. 
            With hands-on experience across network and systems administration, helpdesk, and technical support, I specialize in driving operational 
            efficiency and aligning IT solutions with real business needs. Whether it's optimizing cloud environments, managing large-scale migrations, 
            or streamlining onboarding through automation, I bring strategic thinking and strong execution to every challenge. Let’s build something amazing together.
          </p>
        </section>

        {/* Experience, Skills, Certs, Contact form come here — already provided above */}
      </div>
    </div>
  );
}
