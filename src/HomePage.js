import React, { useState } from 'react';

export default function PortfolioWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // This prevents the default behavior while maintaining the link appearance
    console.log('Link clicked');
  };

  return (
    <div className="bg-white text-black font-sans">
      <header className="flex justify-between items-center max-w-6xl mx-auto py-8 px-6 border-b border-gray-200 flex-col md:flex-row">
        <div className="text-2xl font-bold tracking-tight mb-4 md:mb-0">Shina Alabi</div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-8">
            <li><a href="#expertise" className="font-medium hover:border-b hover:border-black">Expertise</a></li>
            <li><a href="#experience" className="font-medium hover:border-b hover:border-black">Experience</a></li>
            <li><a href="#blog" className="font-medium hover:border-b hover:border-black">Blog</a></li>
            <li><a href="#certifications" className="font-medium hover:border-b hover:border-black">Certifications</a></li>
            <li><a href="#contact" className="font-medium hover:border-b hover:border-black">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="max-w-6xl mx-auto px-6">
          <section className="flex flex-col items-start py-24 gap-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tight">Cloud Solutions Architect & DevOps Engineer</h1>
            <p className="text-xl text-gray-700 max-w-2xl">Designing scalable, secure, and cost-effective cloud architectures. Optimizing infrastructure through automation and DevOps practices.</p>
            <a href="#contact" className="inline-block bg-black text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors mt-4">Get in Touch</a>
          </section>

          <section id="expertise" className="py-20 border-t border-gray-200">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                title="Cloud Architecture"
                items={[
                  "Multi-cloud & hybrid solutions",
                  "Scalable infrastructure design",
                  "High availability architectures",
                  "Cloud migration strategies"
                ]}
              />
              <ExpertiseCard
                title="DevOps & Automation"
                items={[
                  "CI/CD pipeline implementation",
                  "Infrastructure as Code (Terraform)",
                  "Configuration management (Ansible)",
                  "GitOps workflows"
                ]}
              />
              <ExpertiseCard
                title="Security & Compliance"
                items={[
                  "Cloud security frameworks",
                  "Compliance implementation (SOC2, GDPR)",
                  "Identity & access management", 
                  "Secure network architecture"
                ]}
              />
              <ExpertiseCard
                title="Containerization"
                items={[
                  "Docker container solutions",
                  "Kubernetes orchestration",
                  "Microservices architecture",
                  "AKS, ECS, GKE implementation"
                ]}
              />
              <ExpertiseCard
                title="Cloud Platforms"
                items={[
                  "Microsoft Azure",
                  "Amazon Web Services (AWS)",
                  "Google Cloud Platform (GCP)",
                  "Multi-cloud strategies"
                ]}
              />
              <ExpertiseCard
                title="Monitoring & Analytics"
                items={[
                  "Prometheus & Grafana",
                  "Azure Monitor",
                  "Log analytics",
                  "Performance optimization"
                ]}
              />
            </div>
          </section>

          <section id="experience" className="py-20 border-t border-gray-200">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Professional Experience</h2>
            <div className="max-w-3xl">
              <ExperienceItem
                title="Cloud Solution Architect"
                company="Avanade"
                period="March 2022 - Present"
                description="Designing and implementing scalable cloud architectures that have improved system reliability by 40%. Leading migration of legacy systems to cloud platforms, resulting in 30% cost reduction and faster deployments."
              />
              <ExperienceItem
                title="Cloud Infrastructure Engineer"
                company="Sage"
                period="July 2023 - March 2024"
                description="Engineered self-healing auto-scaling infrastructure using AWS services, reducing manual interventions during traffic spikes by 90%. Migrated 80+ VMs to Azure, lowering infrastructure costs by 28%."
              />
              <ExperienceItem
                title="DevOps Engineer"
                company="House of Commons"
                period="September 2022 - July 2023"
                description="Designed and deployed CI/CD pipelines across 12 microservices, reducing release times from hours to under 10 minutes. Implemented automated rollback strategies that decreased mean time to recovery by 65%."
              />
              <ExperienceItem
                title="Cloud Consultant"
                company="Accenture"
                period="February 2022 - September 2022"
                description="Advised on hybrid cloud migration strategies for enterprise clients, projecting 5-year cost savings of $3.4M. Delivered proof of concepts using serverless architectures that enabled clients to reduce backend development costs by 45%."
                isLast={true}
              />
            </div>
          </section>

          <section id="blog" className="py-20 border-t border-gray-200">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Latest From My Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="Cloud Architecture Best Practices for 2025"
                date="April 15, 2025"
                excerpt="Exploring the latest trends and best practices in cloud architecture design, with a focus on multi-cloud strategies and cost optimization."
                handleClick={handleClick}
              />
              <BlogCard
                title="Infrastructure as Code: Beyond the Basics"
                date="March 22, 2025"
                excerpt="Taking your IaC implementations to the next level with advanced Terraform techniques and modular design patterns."
                handleClick={handleClick}
              />
              <BlogCard
                title="Securing Kubernetes in Production Environments"
                date="February 8, 2025"
                excerpt="A comprehensive guide to implementing security best practices for Kubernetes clusters in enterprise environments."
                handleClick={handleClick}
              />
            </div>
          </section>

          <section id="certifications" className="py-20 border-t border-gray-200">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
                "Microsoft Certified: Azure Administrator Associate (AZ-104)",
                "Microsoft Certified: Identity and Access Administrator Associate (SC-300)",
                "Microsoft Certified: Information Protection and Compliance Administrator Associate (SC-400)",
                "Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)",
                "Microsoft 365 Certified: Administrator Expert (MS-102)",
                "Cisco Certified Network Associate (CCNA)",
                "Certified Wireless Technology Specialist (CWTS)"
              ].map((cert, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded font-medium">
                  {cert}
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-20 border-t border-gray-200">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-200 rounded"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="p-3 border border-gray-200 rounded"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-black text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors mt-2">
                  Send Message
                </button>
              </form>

              <div className="flex flex-col gap-4">
                <ContactItem title="Email" value="alabishina_638@hotmail.com" isLink={true} href="mailto:alabishina_638@hotmail.com" />
                <ContactItem title="Phone" value="(416) 997-5319" />
                <ContactItem title="Location" value="Ontario, Canada" />
                <ContactItem 
                  title="LinkedIn" 
                  value="Connect with me on LinkedIn" 
                  isLink={true} 
                  href="https://linkedin.com/in/your-profile" 
                />
                <ContactItem 
                  title="GitHub" 
                  value="View my projects on GitHub" 
                  isLink={true} 
                  href="https://github.com/your-username" 
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-gray-200 text-gray-600">
        <div className="max-w-6xl mx-auto px-6">
          <p>&copy; 2025 Shina Alabi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ExpertiseCard({ title, items }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc pl-6 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ title, company, period, description, isLast = false }) {
  return (
    <div className="relative pl-8 mb-12 last:mb-0">
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-black"></div>
      {!isLast && (
        <div className="absolute left-1.5 top-5 w-px h-full bg-gray-200"></div>
      )}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="font-medium">{company}</div>
      <div className="text-sm text-gray-500 mb-4">{period}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function BlogCard({ title, date, excerpt, handleClick }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img src="/api/placeholder/300/200" alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <span className="text-sm text-gray-500 block mb-4">{date}</span>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <button 
          onClick={handleClick} 
          className="font-medium border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors bg-transparent p-0"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

function ContactItem({ title, value, isLink = false, href = "/" }) {
  return (
    <div className="flex items-start gap-4">
      <strong className="font-medium">{title}:</strong>
      {isLink ? (
        <a href={href} className="border-b border-black hover:border-gray-500 hover:text-gray-500 transition-colors">{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}