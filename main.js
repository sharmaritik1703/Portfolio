const { useState, useEffect } = React;

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Skills', 'Experience', 'Publications', 'Projects', 'Contact'];

    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(section);
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo" onClick={() => scrollToSection('Home')}>
                    <span className="logo-text">Ritik</span>
                </div>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <a
                            key={item}
                            className={`nav-link ${activeSection === item ? 'active' : ''}`}
                            onClick={() => scrollToSection(item)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

// Hero Section
const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const roles = ['Machine Learning', 'Deep Learning', 'Biomedical Signal Processing', 'Computer Vision'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;
        const currentRole = roles[roleIndex];

        const typingInterval = setInterval(() => {
            if (currentIndex < currentRole.length) {
                currentText += currentRole[currentIndex];
                setDisplayText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [roleIndex]);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1 className="hero-name">Ritik Sharma</h1>
                        <div className="hero-role-container">
                            <span className="hero-role">{displayText}</span>
                            <span className="cursor">|</span>
                        </div>
                        <p className="hero-description">
                            AI/ML Research Scholar specializing in intelligent healthcare systems through deep learning, 
                            biomedical signal processing, and IoT technologies. Developing innovative non-invasive diagnostic solutions 
                            for real-time health monitoring.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                        </div>
                        <div className="hero-social">
                            <a href="https://github.com/sharmaritik1703" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/ritiksharma351" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://scholar.google.com/citations?user=oaxq5LYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-graduation-cap"></i>
                            </a>
                            <a href="mailto:sharmaritik351@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-wrapper">
                            <div className="image-placeholder research-scholar">
                                <div className="scholar-icon-wrapper">
                                    <i className="fas fa-brain"></i>
                                    <i className="fas fa-microscope"></i>
                                    <i className="fas fa-laptop-code"></i>
                                </div>
                                <div className="scholar-text">
                                    <span className="scholar-title">AI/ML</span>
                                    <span className="scholar-subtitle">Research Scholar</span>
                                    <span className="scholar-institution">IIT Mandi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </section>
    );
};

// About Section
const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Research Scholar at IIT Mandi, working on intelligent healthcare systems through computational methods.
                        </p>
                        <p>
                            My research focuses on developing AI-enabled IoT devices for non-invasive health diagnostics, 
                            particularly breath-based analysis for diabetes and cardiovascular monitoring. Achieved 97.6% 
                            diagnostic accuracy for diabetes classification with multiple publications in ACM, IEEE, and 
                            international conferences.
                        </p>
                        <p>
                            Currently pursuing M.Tech (Research) at IIT Mandi, working at the intersection of deep learning, 
                            biomedical signal processing, and IoT to develop accessible diagnostic solutions for healthcare applications.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-brain"></i>
                                <div>
                                    <h4>Machine Learning & Deep Learning</h4>
                                    <p>Tabular Modelling, Time Series Modelling, Computer Vision, Ensemble learning, reinforcement learning</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-microscope"></i>
                                <div>
                                    <h4>Research & Publications</h4>
                                    <p>Publications in top journals (ACM Health, IEEE Access) and international conferences (IEEE PEDS 2025, ACM PETRA 2024, ICCCNT 2025, etc.)</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-chart-line"></i>
                                <div>
                                    <h4>Signal Processing & Analytics</h4>
                                    <p>Biomedical signals, feature extraction, statistical analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section
const Skills = () => {
    const skillCategories = [
        {
            title: 'Frameworks',
            icon: 'fa-brain',
            skills: [
                { name: 'TensorFlow', level: 90 },
                { name: 'PyTorch', level: 80 },
                { name: 'Keras', level: 90 },
                { name: 'Scikit-learn', level: 96 },
                { name: 'Streamlit', level: 87 },
                { name: 'Flask', level: 80 }
            ]
        },
        {
            title: 'Research & Development',
            icon: 'fa-flask',
            skills: [
                { name: 'Signal Processing', level: 90 },
                { name: 'Statistical Analysis', level: 88 },
                { name: 'Internet of Things', level: 87 },
                { name: 'Biomedical Analysis', level: 90 },
                { name: 'Machine Learning', level: 93 },
                { name: 'Deep Learning', level: 85 }
            ]
        },
        {
            title: 'Programming & Tools',
            icon: 'fa-code',
            skills: [
                { name: 'Python', level: 95 },
                { name: 'C++', level: 82 },
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 90 }
                { name: 'Git/GitHub', level: 88 },
                { name: 'LaTeX', level: 85 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <i className={`fas ${category.icon}`}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress" 
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Experience Section
const Experience = () => {
    const experiences = [
        {
            title: 'Teaching Assistant',
            company: 'Indian Institute of Technology, Mandi',
            period: 'Mar 2025 - Dec 2025',
            location: 'IIT Mandi, India',
            description: [
                'Teaching Assistant for "Introduction to Biosignals and Cognitive Biomarkers" - conducting lab sessions on signal acquisition and processing',
                'Teaching Assistant for "Data Mining for Decision Making" - facilitating practical sessions on ML algorithms and tools',
                'Evaluated student assignments and provided mentorship on biosignal analysis techniques',
                'Guided students in applying machine learning techniques for decision-making applications'
            ]
        },
        {
            title: 'Project Associate - I',
            company: 'iHub and HCI Foundation, IIT Mandi',
            period: 'Jan 2024 - Mar 2025',
            location: 'IIT Mandi, India',
            description: [
                'Designed AI-enabled IoT device for non-invasive diabetes classification, achieving 97.6% diagnostic accuracy',
                'Developed comprehensive signal processing algorithms and ML pipeline using Python, Scikit-learn, and TensorFlow',
                'Extended diagnostic capabilities to multi-stage diabetes prediction (90% accuracy) and blood glucose estimation (17 mg/dL MAE)',
                'Developed Weighted Average Regressor for blood pressure prediction (<8 mmHg error) and HbA1c prediction (83% accuracy)',
                'Architected cloud-hosted Streamlit web application for real-time health monitoring and comprehensive diabetes assessment'
            ]
        }
    ];

    const education = [
        {
            degree: 'Master of Technology (Research) - CGPA: 8.75/10',
            institution: 'Indian Institute of Technology, Mandi',
            period: 'Jan 2024 - Present',
            description: 'Research in intelligent breath-based diagnostic systems for diabetes and cardiovascular health monitoring.'
        },
        {
            degree: 'Bachelor of Technology - CGPA: 8.1/10',
            institution: 'JNGEC Sundernagar, Mandi',
            period: 'Aug 2019 - Aug 2023',
            description: 'Electronics and Communication Engineering'
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>
                
                <div className="experience-content">
                    <div className="timeline">
                        <h3 className="subsection-title">
                            <i className="fas fa-briefcase"></i> Work Experience
                        </h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4>{exp.title}</h4>
                                        <span className="timeline-period">{exp.period}</span>
                                    </div>
                                    <div className="timeline-company">
                                        <i className="fas fa-building"></i>
                                        <span>{exp.company}</span>
                                        <span className="timeline-location">• {exp.location}</span>
                                    </div>
                                    <ul className="timeline-description">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="education">
                        <h3 className="subsection-title">
                            <i className="fas fa-graduation-cap"></i> Education
                        </h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className="education-icon">
                                    <i className="fas fa-university"></i>
                                </div>
                                <div className="education-content">
                                    <h4>{edu.degree}</h4>
                                    <p className="education-institution">{edu.institution}</p>
                                    <p className="education-period">{edu.period}</p>
                                    <p className="education-description">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Publications Section
const Publications = () => {
    const publications = [
        {
            title: 'DiaBreath: A low-cost, non-invasive diabetes monitor via breath',
            authors: 'Sharma, R., Kapur, R., Kumar, B., Kanwar, V., Bhavsar, A., & Dutt, V.',
            venue: 'ACM Transactions on Computing for Healthcare',
            year: '2025',
            doi: 'https://doi.org/10.1145/3768157',
            type: 'journal',
            featured: true
        },
        {
            title: 'VOCPressNet: An innovative system for breath-based blood pressure prediction',
            authors: 'Sharma, R., Sharma, S., Kumar, Y., Kanwar, V., Bhavsar, A., & Dutt, V.',
            venue: 'Proceedings of the 15th International Conference on Power Electronics and Drive Systems (PEDS)',
            year: '2025',
            doi: 'https://doi.org/10.1109/PEDS63958.2025.11144768',
            type: 'conference',
            featured: true
        },
        {
            title: 'GlucoBreath: An IoT, ML, and breath-based non-invasive glucose meter',
            authors: 'Kapur, R., Kumar, Y., Sharma, R., Sharma, S., Kumar, B., Kanwar, V., Bhavsar, A., & Dutt, V.',
            venue: 'IEEE Access, Volume 12',
            year: '2024',
            doi: 'https://doi.org/10.1109/ACCESS.2024.3392015',
            type: 'journal',
            featured: true
        },
        {
            title: 'SugarControl: An integrative mobile app for type 2 diabetes management through yoga meditation and lifestyle interventions',
            authors: 'Kapur, R., Sharma, R., Kanwar, V., Bhavsar, A., & Dutt, V.',
            venue: 'Proceedings of the 17th International Conference on PErvasive Technologies Related to Assistive Environments',
            year: '2024',
            doi: 'https://doi.org/10.1145/3652037.3663926',
            type: 'conference',
            featured: false
        },
        {
            title: 'DIAEM-L: Diabetes ensemble analytics model for non-invasive screening in rural populations',
            authors: 'Sharma, S., Sharma, R., Sharma, S., Aarzoo, Kanwar, V., Bhavsar, A., & Dutt, V.',
            venue: 'Proceedings of the 16th International Conference on Computing, Communication and Networking Technologies (ICCCNT)',
            year: '2025',
            doi: 'Accepted for Publication',
            type: 'conference',
            featured: false
        },
        {
            title: 'DiaComor: A Culturally-Tailored Psychometric Tool for Diabetes and Comorbidity Assessment in Rural Himachal Pradesh',
            authors: 'Sharma, S., Sharma, R., Bhavsar, A., & Dutt, V.',
            venue: 'Proceedings of the 10th International Conference on Information and Communication Technology for Competitive Strategies (ICTCS-2025)',
            year: '2025',
            doi: 'Accepted for Publication',
            type: 'conference',
            featured: false
        },
    ];

    return (
        <section id="publications" className="publications">
            <div className="container">
                <h2 className="section-title">Research Publications</h2>
                <p className="section-subtitle">Published work in top-tier journals and conferences</p>
                
                <div className="publications-list">
                    {publications.map((pub, index) => (
                        <div key={index} className={`publication-item ${pub.featured ? 'featured' : ''}`}>
                            {pub.featured && <span className="featured-badge">Featured</span>}
                            <div className="publication-type">
                                <i className={`fas ${pub.type === 'journal' ? 'fa-book' : 'fa-file-alt'}`}></i>
                                <span>{pub.type === 'journal' ? 'Journal' : 'Conference'}</span>
                            </div>
                            <h3>{pub.title}</h3>
                            <p className="publication-authors">{pub.authors}</p>
                            <p className="publication-venue">
                                <i className="fas fa-university"></i>
                                {pub.venue}, {pub.year}
                            </p>
                            <div className="publication-footer">
                                <span className="publication-doi">
                                    <i className="fas fa-link"></i>
                                    DOI: {pub.doi}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    const projects = [
        {
            title: 'Non-Invasive IoT and ML Devices for Disease Monitoring',
            description: 'Comprehensive breath-based health diagnostic system combining DiaBreath, VOCPressNet, and GlucoBreath. Achieved 97.6% diabetes classification accuracy, blood glucose estimation (17 mg/dL MAE), blood pressure prediction (<8 mmHg error), and HbA1c prediction (83% accuracy). Published in ACM TOCH, IEEE PEDS, and IEEE Access.',
            image: 'device.jpg',
            technologies: ['TensorFlow', 'IoT', 'Signal Processing', 'Deep Learning', 'Streamlit', 'Machine Learning'],
            github: 'https://github.com/sharmaritik1703/DiaPress',
            live: null,
            featured: true
        },
        {
            title: 'Low-Dose CT Image Denoising',
            description: 'Advanced deep learning framework using encoder-decoder architectures with multi-head channel attention for medical image enhancement. Achieved 43 dB PSNR with Flask-based visualization platform for quantitative model performance assessment.',
            image: 'CT images.png',
            technologies: ['PyTorch', 'Medical Imaging', 'Attention Mechanisms', 'Encoder-Decoder Networks', 'Generative Models'],
            github: 'https://github.com/sharmaritik1703/LDCT-Denoising',
            live: null,
            featured: true
        },
        {
            title: 'Deep RL for Network Intrusion Detection',
            description: 'Deep reinforcement learning framework for network intrusion detection achieving 98% accuracy across DoS, Probe, R2L, and U2R attacks. Features real-time threat detection and interactive Streamlit dashboard for network security visualization and monitoring.',
            technologies: ['Reinforcement Learning', 'PyTorch', 'Streamlit', 'Network Security', 'DQN'],
            github: 'https://github.com/sharmaritik1703/RL-Based-Network-Intrusion-Detection-System-',
            live: null,
            featured: true
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Here are some of my recent works</p>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                            {project.featured && <span className="featured-badge">Featured</span>}
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <i className="fas fa-external-link-alt"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a project in mind? Let's work together!</p>
                
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:sharmaritik351@gmail.com">sharmaritik351@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:+918219985227">+91 82199-85227</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Shimla, Himachal Pradesh, India</p>
                            </div>
                        </div>
                        <div className="contact-social">
                            <h4>Connect with me</h4>
                            <div className="social-links">
                                <a href="https://github.com/sharmaritik1703" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/ritiksharma351" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://scholar.google.com/citations?user=oaxq5LYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-graduation-cap"></i>
                                </a>
                                <a href="https://orcid.org/0009-0008-2193-399X" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-orcid"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="form-success">Message sent successfully! I'll get back to you soon.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

// Footer
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Ritik Sharma. All rights reserved.</p>
                <p className="footer-subtitle">AI/ML Research Scholar | IIT Mandi</p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'publications', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Publications />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

