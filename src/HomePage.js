import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, GitHub, ChevronUp } from 'lucide-react';

export default function PortfolioWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''  // Added subject field
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events for navigation highlighting and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);
      
      // Determine which section is currently in view
      const sections = ['expertise', 'experience', 'blog', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message is too short (minimum 10 characters)";
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      // Reset form and show success message
      setFormData({ name: '', email: '', message: '', subject: '' });
      setFormSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setFormSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormErrors({ form: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white text-black font-sans relative">
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6 border-b border-gray-200">
          <div className="text-2xl font-bold tracking-tight">Shina Alabi</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-center gap-8">
              <NavLink href="#expertise" active={activeSection === 'expertise'} onClick={(e) => handleNavLinkClick(e, 'expertise')}>Expertise</NavLink>
              <NavLink href="#experience" active={activeSection === 'experience'} onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</NavLink>
              <NavLink href="#blog" active={activeSection === 'blog'} onClick={(e) => handleNavLinkClick(e, 'blog')}>Blog</NavLink>
              <NavLink href="#certifications" active={activeSection === 'certifications'} onClick={(e) => handleNavLinkClick(e, 'certifications')}>Certifications</NavLink>
              <NavLink href="#contact" active={activeSection === 'contact'} onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</NavLink>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed top-16 right-0 bg-white shadow-lg rounded-l-lg p-6 w-64 h-screen transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-6">
              <MobileNavLink href="#expertise" onClick={(e) => handleNavLinkClick(e, 'expertise')}>Expertise</MobileNavLink>
              <MobileNavLink href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</MobileNavLink>
              <MobileNavLink href="#blog" onClick={(e) => handleNavLinkClick(e, 'blog')}>Blog</MobileNavLink>
              <MobileNavLink href="#certifications" onClick={(e) => handleNavLinkClick(e, 'certifications')}>Certifications</MobileNavLink>
              <MobileNavLink href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</MobileNavLink>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="flex flex-col items-start py-24 md:py-32 gap-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">Cloud Solutions Architect & DevOps Engineer</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">Designing scalable, secure, and cost-effective cloud architectures. Optimizing infrastructure through automation and DevOps practices.</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-black text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors"
                  onClick={(e) => handleNavLinkClick(e, 'contact')}
                >
                  Get in Touch
                </a>
                <a 
                  href="#expertise" 
                  className="inline-block bg-white text-black py-3 px-6 rounded font-medium border border-black hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleNavLinkClick(e, 'expertise')}
                >
                  Explore My Expertise
                </a>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section id="expertise" className="py-20 border-t border-gray-200 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Areas of Expertise</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">Leveraging deep technical knowledge and experience to build robust cloud solutions.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                title="Cloud Architecture"
                icon="☁️"
                items={[
                  "Multi-cloud & hybrid solutions",
                  "Scalable infrastructure design",
                  "High availability architectures",
                  "Cloud migration strategies"
                ]}
              />
              <ExpertiseCard
                title="DevOps & Automation"
                icon="🔄"
                items={[
                  "CI/CD pipeline implementation",
                  "Infrastructure as Code (Terraform)",
                  "Configuration management (Ansible)",
                  "GitOps workflows"
                ]}
              />
              <ExpertiseCard
                title="Security & Compliance"
                icon="🔒"
                items={[
                  "Cloud security frameworks",
                  "Compliance implementation (SOC2, GDPR)",
                  "Identity & access management", 
                  "Secure network architecture"
                ]}
              />
              <ExpertiseCard
                title="Containerization"
                icon="📦"
                items={[
                  "Docker container solutions",
                  "Kubernetes orchestration",
                  "Microservices architecture",
                  "AKS, ECS, GKE implementation"
                ]}
              />
              <ExpertiseCard
                title="Cloud Platforms"
                icon="💻"
                items={[
                  "Microsoft Azure",
                  "Amazon Web Services (AWS)",
                  "Google Cloud Platform (GCP)",
                  "Multi-cloud strategies"
                ]}
              />
              <ExpertiseCard
                title="Monitoring & Analytics"
                icon="📊"
                items={[
                  "Prometheus & Grafana",
                  "Azure Monitor",
                  "Log analytics",
                  "Performance optimization"
                ]}
              />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 border-t border-gray-200 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Professional Experience</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">Building expertise through challenging roles at industry-leading organizations.</p>
            
            <div className="max-w-3xl">
              <ExperienceItem
                title="Cloud Solution Architect"
                company="Avanade"
                period="March 2022 - Present"
                description="Designing and implementing scalable cloud architectures that have improved system reliability by 40%. Leading migration of legacy systems to cloud platforms, resulting in 30% cost reduction and faster deployments."
                achievements={[
                  "Led a team of 5 engineers in the successful migration of 200+ applications to Azure",
                  "Implemented zero-trust security model resulting in 60% reduction in attack surface",
                  "Designed high-availability architecture achieving 99.99% uptime for mission-critical systems"
                ]}
              />
              <ExperienceItem
                title="Cloud Infrastructure Engineer"
                company="Sage"
                period="July 2023 - March 2024"
                description="Engineered self-healing auto-scaling infrastructure using AWS services, reducing manual interventions during traffic spikes by 90%. Migrated 80+ VMs to Azure, lowering infrastructure costs by 28%."
                achievements={[
                  "Reduced infrastructure costs by 28% through VM right-sizing and reserved instances",
                  "Implemented cross-region disaster recovery with 15-minute RPO",
                  "Automated infrastructure deployment reducing provisioning time from days to hours"
                ]}
              />
              <ExperienceItem
                title="DevOps Engineer"
                company="House of Commons"
                period="September 2022 - July 2023"
                description="Designed and deployed CI/CD pipelines across 12 microservices, reducing release times from hours to under 10 minutes. Implemented automated rollback strategies that decreased mean time to recovery by 65%."
                achievements={[
                  "Decreased mean time to recovery by 65% through automated deployment verification",
                  "Implemented infrastructure-as-code practices leading to 99% reduction in configuration drift",
                  "Established DevSecOps processes that identified and remediated vulnerabilities 40% faster"
                ]}
              />
              <ExperienceItem
                title="Cloud Consultant"
                company="Accenture"
                period="February 2022 - September 2022"
                description="Advised on hybrid cloud migration strategies for enterprise clients, projecting 5-year cost savings of $3.4M. Delivered proof of concepts using serverless architectures that enabled clients to reduce backend development costs by 45%."
                achievements={[
                  "Projected $3.4M 5-year cost savings through cloud migration strategies",
                  "Developed serverless architecture POCs reducing backend development costs by 45%",
                  "Created cloud governance frameworks adopted by 3 enterprise clients"
                ]}
                isLast={true}
              />
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-20 border-t border-gray-200 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Latest From My Blog</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">Insights and thoughts on cloud architecture, DevOps, and emerging technologies.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="Cloud Architecture Best Practices for 2025"
                date="April 15, 2025"
                excerpt="Exploring the latest trends and best practices in cloud architecture design, with a focus on multi-cloud strategies and cost optimization."
                tags={["Cloud", "Architecture", "Best Practices"]}
                imageUrl="/api/placeholder/300/200"
              />
              <BlogCard
                title="Infrastructure as Code: Beyond the Basics"
                date="March 22, 2025"
                excerpt="Taking your IaC implementations to the next level with advanced Terraform techniques and modular design patterns."
                tags={["IaC", "Terraform", "DevOps"]}
                imageUrl="/api/placeholder/300/200"
              />
              <BlogCard
                title="Securing Kubernetes in Production Environments"
                date="February 8, 2025"
                excerpt="A comprehensive guide to implementing security best practices for Kubernetes clusters in enterprise environments."
                tags={["Kubernetes", "Security", "DevOps"]}
                imageUrl="/api/placeholder/300/200"
              />
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="/blog" 
                className="inline-block bg-white text-black py-3 px-6 rounded font-medium border border-black hover:bg-gray-100 transition-colors"
              >
                View All Articles
              </a>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 border-t border-gray-200 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Certifications</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">Professional qualifications that validate my expertise and technical knowledge.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CertificationCard 
                name="Microsoft Certified: Azure Solutions Architect Expert (AZ-305)"
                issuer="Microsoft"
                date="January 2024"
                icon="azure"
              />
              <CertificationCard 
                name="Microsoft Certified: Azure Administrator Associate (AZ-104)"
                issuer="Microsoft"
                date="March 2023"
                icon="azure"
              />
              <CertificationCard 
                name="Microsoft Certified: Identity and Access Administrator Associate (SC-300)"
                issuer="Microsoft"
                date="July 2023"
                icon="azure"
              />
              <CertificationCard 
                name="Microsoft Certified: Information Protection and Compliance Administrator Associate (SC-400)"
                issuer="Microsoft"
                date="October 2023"
                icon="azure"
              />
              <CertificationCard 
                name="Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)"
                issuer="Microsoft"
                date="January 2023"
                icon="microsoft"
              />
              <CertificationCard 
                name="Microsoft 365 Certified: Administrator Expert (MS-102)"
                issuer="Microsoft"
                date="April 2023"
                icon="microsoft"
              />
              <CertificationCard 
                name="Cisco Certified Network Associate (CCNA)"
                issuer="Cisco"
                date="September 2022"
                icon="cisco"
              />
              <CertificationCard 
                name="Certified Wireless Technology Specialist (CWTS)"
                issuer="CWNP"
                date="May 2022"
                icon="other"
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 border-t border-gray-200 scroll-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Get in Touch</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">Have a question or want to work together? Reach out using the form below.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-medium">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`p-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-200'} rounded focus:border-black focus:outline-none transition-colors`}
                      required
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} rounded focus:border-black focus:outline-none transition-colors`}
                      required
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="p-3 border border-gray-200 rounded focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-medium">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className={`p-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} rounded focus:border-black focus:outline-none transition-colors`}
                      required
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  
                  {formErrors.form && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded">
                      {formErrors.form}
                    </div>
                  )}
                  
                  {formSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="bg-black text-white py-3 px-6 rounded font-medium hover:bg-gray-800 transition-colors mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <ContactItem 
                      icon={<Mail size={20} />}
                      title="Email" 
                      value="alabishina_638@hotmail.com" 
                      isLink={true} 
                      href="mailto:alabishina_638@hotmail.com" 
                    />
                    <ContactItem 
                      icon={<Phone size={20} />}
                      title="Phone" 
                      value="(416) 997-5319" 
                      isLink={true}
                      href="tel:+14169975319"
                    />
                    <ContactItem 
                      icon={<MapPin size={20} />}
                      title="Location" 
                      value="Ontario, Canada" 
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                  <div className="space-y-4">
                    <ContactItem 
                      icon={<Linkedin size={20} />}
                      title="LinkedIn" 
                      value="Connect with me on LinkedIn" 
                      isLink={true} 
                      href="https://linkedin.com/in/your-profile" 
                    />
                    <ContactItem 
                      icon={<Github size={20} />}
                      title="GitHub" 
                      value="View my projects on GitHub" 
                      isLink={true} 
                      href="https://github.com/your-username" 
                    />
                  </div>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                  <p className="text-gray-700 mb-4">
                    I'm currently available for freelance work and consulting opportunities. If you have a project that needs cloud expertise, I'd love to hear about it.
                  </p>
                  <p className="text-sm text-gray-500">
                    Average response time: 1-2 business days
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Shina Alabi</h3>
              <p className="text-gray-700 mb-2">Cloud Solutions Architect & DevOps Engineer</p>
              <p className="text-gray-500 text-sm">Based in Ontario, Canada</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#expertise" className="text-gray-700 hover:text-black transition-colors">Expertise</a></li>
                <li><a href="#experience" className="text-gray-700 hover:text-black transition-colors">Experience</a></li>
                <li><a href="#blog" className="text-gray-700 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#certifications" className="text-gray-700 hover:text-black transition-colors">Certifications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://linkedin.com/in/your-profile" className="text-gray-700 hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/your-username" className="text-gray-700 hover:text-black transition-colors">GitHub</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Subscribe to Newsletter</h4>
              <p className="text-gray-700 text-sm mb-3">Stay updated with the latest in cloud architecture and DevOps</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 border border-gray-200 rounded-l focus:outline-none focus:border-black flex-1"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 border-t border-gray-200 text-gray-600">
            <p>&copy; {new Date().getFullYear()} Shina Alabi. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-30"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

// Navigation Components
function NavLink({ href, active, onClick, children }) {
  return (
    <li>
      <a 
        href={href} 
        className={`font-medium relative ${
          active 
            ? 'text-black after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-black' 
            : 'text-gray-700 hover:text-black'
        } transition-colors`}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <li>
      <a 
        href={href} 
        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors"
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}

// Expertise Components
function ExpertiseCard({ title, items, icon }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group bg-white">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// Experience Components
function ExperienceItem({ title, company, period, description, achievements, isLast = false }) {
    return (
      <div className={`relative pl-8 pb-12 ${!isLast && 'border-l border-gray-200'}`}>
        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-black"></div>
        <div className="mb-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 text-gray-700">
            <span>{company}</span>
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <span>{period}</span>
          </div>
        </div>
        <p className="mt-3 text-gray-700">{description}</p>
        {achievements && (
          <div className="mt-4">
            <h4 className="font-medium text-sm text-gray-900 mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  // Blog Components
  function BlogCard({ title, date, excerpt, tags, imageUrl }) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-3">{date}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <a href="#" className="inline-block mt-4 text-black font-medium hover:underline">
            Read More →
          </a>
        </div>
      </div>
    );
  }
  
  // Certification Components
  function CertificationCard({ name, issuer, date, icon }) {
    let iconElement;
    
    switch (icon) {
      case 'azure':
        iconElement = (
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            Az
          </div>
        );
        break;
      case 'microsoft':
        iconElement = (
          <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
            MS
          </div>
        );
        break;
      case 'cisco':
        iconElement = (
          <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold">
            CS
          </div>
        );
        break;
      default:
        iconElement = (
          <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
            CT
          </div>
        );
    }
    
    return (
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
        <div className="flex items-start gap-3">
          {iconElement}
          <div>
            <h3 className="font-medium text-md">{name}</h3>
            <div className="text-gray-700 text-sm mt-1">
              <span>{issuer}</span>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Contact Components
  function ContactItem({ icon, title, value, isLink = false, href = '#' }) {
    return (
      <div className="flex items-start gap-3">
        <div className="text-gray-700 mt-1">
          {icon}
        </div>
        <div>
          <h4 className="font-medium">{title}</h4>
          {isLink ? (
            <a 
              href={href} 
              className="text-gray-700 hover:text-black transition-colors"
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {value}
            </a>
          ) : (
            <p className="text-gray-700">{value}</p>
          )}
        </div>
      </div>
    );
  }