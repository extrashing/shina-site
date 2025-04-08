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

  const iconList = [
    FaIcons.FaMicrosoft,
    FaIcons.FaGithub,
    SiIcons.SiVmware,
    SiIcons.SiCisco,
    FaIcons.FaAws,
    SiIcons.SiGooglecloud,
    FaIcons.FaWindows,
    FaIcons.FaLinux,
    FaIcons.FaNetworkWired
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

        {/* About Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-3 border-b border-gray-700 pb-1">{t.about}</h2>
          <p className="text-lg text-gray-300 dark:text-gray-800 leading-relaxed">
            I’m a resourceful and results-driven IT Analyst based in Ottawa, with a passion for designing and supporting reliable IT infrastructures. 
            With hands-on experience across network and systems administration, helpdesk, and technical support, I specialize in driving operational 
            efficiency and aligning IT solutions with real business needs. Whether it's optimizing cloud environments, managing large-scale migrations, 
            or streamlining onboarding through automation, I bring strategic thinking and strong execution to every challenge. Let’s build something amazing together.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-3 border-b border-gray-700 pb-1">{t.experience}</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-1">Avanade – Senior Analyst</h3>
              <p className="text-sm text-gray-400 mb-2">March 2022 – Present | Ottawa, Ontario</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-800">
                <li>Streamlined onboarding/offboarding with IAM automation</li>
                <li>Deployed Windows 11 via Microsoft Autopilot across Canada & overseas</li>
                <li>Migrated 2,500 users to a new AD domain and O365 tenant</li>
              </ul>
            </div>
            <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-1">Sage – IT Solution Architect</h3>
              <p className="text-sm text-gray-400 mb-2">July 2023 – March 2024 | Ottawa, Ontario</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-800">
                <li>Migrated 10,000 employees to Windows 11 across Canada</li>
                <li>Redesigned Active Directory OU and group policies</li>
              </ul>
            </div>
            <div className="bg-gray-800 dark:bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-1">House of Commons – Senior IT Analyst</h3>
              <p className="text-sm text-gray-400 mb-2">Sept 2022 – July 2023 | Ottawa, Ontario</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-800">
                <li>Provided VIP IT support and managed Azure AD & VMs</li>
                <li>Improved service delivery through refined IT policies and procedures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section with Icons */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-3 border-b border-gray-700 pb-1">{t.skills}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-300 dark:text-gray-700">
            {iconList.map((Icon, index) => (
              <div key={index} className="hover:scale-110 hover:text-green-400 transition-transform duration-300 flex flex-col items-center">
                <Icon className="text-4xl mb-1" />
                <span className="text-xs mt-1">{Icon.displayName || Icon.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300 dark:text-gray-800 text-sm">
            <div><strong>OS:</strong> Windows Server, Linux, MacOS</div>
            <div><strong>Cloud:</strong> Azure, Microsoft 365, CyberArk</div>
            <div><strong>Dev & DB:</strong> Python, MySQL, SQL Server</div>
            <div><strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN</div>
            <div><strong>Tools:</strong> VMware, Exchange, SCCM</div>
            <div><strong>Methodologies:</strong> ITIL, Security+</div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-3 border-b border-gray-700 pb-1">{t.certs}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 dark:text-gray-800">
            <li>CCNA – Cisco Certified Network Associate</li>
            <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
            <li>Microsoft Certified: Identity and Access Administrator Associate (SC-300)</li>
            <li>Microsoft Certified: Information Protection and Compliance Administrator Associate (SC-400)</li>
            <li>Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)</li>
            <li>Microsoft 365 Certified: Enterprise Administrator Expert (MS-102)</li>
            <li>Certified Wireless Technician (CWNP)</li>
          </ul>
        </section>

        {/* Sass Meter and Contact */}
        <section className="mb-12 animate-fade-in">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{t.sass}: {sassLevel}% 💅</h2>
            <h2 className="text-2xl font-semibold mb-2">{t.visitors}: {visits}</h2>
          </div>
          <form 
            action="https://formspree.io/f/xblgpeqp" 
            method="POST" 
            className="bg-gray-800 dark:bg-gray-100 p-6 rounded-xl space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm font-medium">{t.name}</label>
              <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-white text-black" placeholder={t.name} />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">{t.message}</label>
              <textarea name="message" required className="w-full px-4 py-2 rounded bg-white text-black" rows="4" placeholder={t.message}></textarea>
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
