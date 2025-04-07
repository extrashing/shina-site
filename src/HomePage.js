import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Shina Alabi</h1>
        <p className="text-xl mb-6">IT SaaS Engineer & Systems Administrator | Ottawa, ON</p>

        <div className="flex gap-4 mb-8">
          <a
            href="/Shina_Alabi_Resume_Affirm_Optimized.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl"
          >
            Download Resume
          </a>
          <a
            href="mailto:alabiishina@gmail.com"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-xl"
          >
            Hire Me
          </a>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m Shina Alabi, a certified IT professional with expertise in endpoint management,
            automation scripting, and cloud infrastructure. I specialize in making systems
            more efficient, scalable, and less stressful for humans. Currently looking for
            opportunities to work with forward-thinking companies and continue improving
            tech ecosystems.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Experience Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Migrated 10,000+ endpoints from Windows 10 to Windows 11 (Sage)</li>
            <li>Automated onboarding/offboarding processes using IAM tools (Avanade)</li>
            <li>Redesigned Active Directory structure for House of Commons</li>
            <li>Delivered SaaS support for Azure AD, CyberArk, Microsoft 365 & Autopilot</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Microsoft Certified: Azure Administrator Associate</li>
            <li>Microsoft 365: Enterprise Administrator Expert</li>
            <li>Certified Wireless Technician (CWNP)</li>
            <li>Cisco Certified Network Associate (CCNA)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: <a className="text-blue-400" href="mailto:alabiishina@gmail.com">alabiishina@gmail.com</a></p>
          <p>Location: Ottawa, Ontario</p>
          <p>LinkedIn: <a className="text-blue-400" href="https://www.linkedin.com/in/alabishina">linkedin.com/in/alabishina</a></p>
        </section>
      </div>
    </div>
  );
}
