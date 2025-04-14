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
    built:
      "Site designed and built by Shina Alabi with React, Tailwind, and a pinch of creativity.",
    headshotAlt: "Shina Alabi headshot"
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

  // Get theme from localStorage.
  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode) setDarkMode(storedMode === "dark");
  }, []);

  // Update theme in localStorage.
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Simulate loading.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Sass meter simulation.
  useEffect(() => {
    const interval = setInterval(() => {
      setSassLevel((prev) => (prev < 100 ? prev + 1 : 0));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Count site visits.
  useEffect(() => {
    const current = localStorage.getItem("siteVisits") || "0";
    const updated = parseInt(current, 10) + 1;
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
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-black text-white"
          : "bg-gray-50 text-gray-900"
      } min-h-screen transition duration-300`}
    >
      <div className="max-w-5xl mx-auto p-6">
        {/* Navigation */}
        <nav className="flex justify-end gap-4 mb-8">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600 text-white"
          >
            {lang === "en" ? "FR 🇫🇷" : "EN 🇬🇧"}
          </button>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
          >
            {darkMode ? t.light : t.dark}
          </button>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <img
            src="/headshot.jpg"
            alt={t.headshotAlt}
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-2 text-blue-700 dark:text-blue-400">
            Shina Alabi
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">
            IT SaaS Engineer & Systems Administrator | Ottawa, ON
          </p>
        </header>

        {/* Call To Action */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="./Shina_Alabi_Resume_Affirm_Optimized.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
            {t.download}
          </a>
          <a
            href="mailto:alabiishina@gmail.com"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white"
          >
            {t.hire}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 text-2xl">
          <a
            href="https://www.linkedin.com/in/alabishina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500"
          >
            <FaIcons.FaLinkedin />
          </a>
          <a
            href="https://wa.me/14169975319"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500"
          >
            <FaIcons.FaWhatsapp />
          </a>
        </div>

        {/* Main Content */}
        <main className="space-y-12">
          {/* About Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-blue-700 dark:text-blue-400">
              {t.about}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              I’m a resourceful IT Analyst based in Ottawa with a knack for tackling complex challenges and delivering effective solutions.
            </p>
          </section>

          {/* Skills Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-blue-700 dark:text-blue-400">
              {t.skills}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 dark:text-gray-300 mb-6">
              {iconList.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:text-green-500 transition-transform"
                >
                  <Icon className="text-2xl" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
              <div><strong>OS:</strong> Windows Server, Linux, MacOS</div>
              <div><strong>Cloud:</strong> Azure, AWS, GCP</div>
              <div><strong>Dev & DB:</strong> Python, React.js, HTML, MySQL, SQL Server</div>
              <div><strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN</div>
              <div><strong>Tools:</strong> VMware, Exchange, SCCM</div>
              <div><strong>Methodologies:</strong> ITIL, Security+</div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold border-b pb-2 mb-4 text-blue-700 dark:text-blue-400">
              {t.certs}
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>CCNA – Cisco Certified Network Associate</li>
              <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
              <li>Microsoft Certified: Identity and Access Administrator Associate (SC-300)</li>
              <li>Microsoft Certified: Information Protection and Compliance Administrator Associate (SC-400)</li>
              <li>Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)</li>
              <li>Microsoft 365 Certified: Enterprise Administrator Expert (MS-102)</li>
              <li>Certified Wireless Technician (CWNP)</li>
            </ul>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Shina Alabi. {t.built}
          </p>
          <p className="mt-2">Site Visits: {visits}</p>
        </footer>
      </div>
    </div>
  );
}
