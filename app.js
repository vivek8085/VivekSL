// Portfolio Data
const portfolioData = {
    
    certifications: [
        {
            title: "JAVA",
            issuer: "NPTEL/IITK",
            image: "images/nptel java.png"
        },
        {
            title: "Internship",
            issuer: "Microsoft&Edunet",
            image: "images/internmic.png"
        },
        {
            title: "Internship",
            issuer: "ShellIndia&Edunet",
            image: "images/internsh.png"
        },
        {
            title: "Internship",
            issuer: "ShellIndia&Edunet",
            image: "images/internsh1.png"
        },
        {
            title: "Agile",
            issuer: "Infosys Springboard",
            image: "images/agile-info.png"
        },
        {
            title: "AI Data Engineer",
            issuer: "RF-NSDC",
            image: "images/aidata-RF.png"
        },
        {
            title: "Python FullStack",
            issuer: "BitLabs",
            image: "images/bit.png"
        },
        {
            title: "SoftSkills",
            issuer: "BitLabs",
            image: "images/bitinter.png"
        },
        {
            title: "Web Development",
            issuer: "BitLabs",
            image: "images/bitlabsfull.png"
        },
        {
            title: "SQL",
            issuer: "BitLabs",
            image: "images/bitssql.png"
        },
        {
            title: "Internship",
            issuer: "Cognifyz",
            image: "images/cognifyz.png"
        },
        {
            title: "Python Financial Analysis",
            issuer: "Coursera",
            image: "images/coursera-py.png"
        },
        {
            title: "Wordpress",
            issuer: "Coursera",
            image: "images/coursera-web.png"
        },
        {
            title: "Ethereum Development",
            issuer: "NSDC-RF",
            image: "images/ethRF.png"
        },
        {
            title: "Software development",
            issuer: "Citi-Forage",
            image: "images/forage-software.png"
        },
        {
            title: "IOT Network Specialist-1",
            issuer: "NSDC-RF",
            image: "images/IOTRF.png"
        },
        {
            title: "IOT Network Specialist-2",
            issuer: "NSDC-RF",
            image: "images/iotRF2.png"
        },
        {
            title: "Java",
            issuer: "HackerRank",
            image: "images/java-hackerrank.png"
        },
        {
            title: "Java",
            issuer: "Infosys SpringBoard",
            image: "images/java-in.png"
        },
        {
            title: "Java",
            issuer: "Infosys",
            image: "images/java-infosys.png"
        },
        {
            title: "React",
            issuer: "LetsUpgrade",
            image: "images/letsupgrade-react.png"
        },
        {
            title: "Neo4j",
            issuer: "Neo4j-GraphAcademy",
            image: "images/neo4j.png"
        },
        {
            title: "BackEnd Development",
            issuer: "PW",
            image: "images/pwbackend.png"
        },
        {
            title: "NLP",
            issuer: "Upgrad",
            image: "images/upgrad.png"
        },
        {
            title: "Java",
            issuer: "Infosys",
            image: "images/javainfo.png"
        },
        {
            title: "Html",
            issuer: "Udemy",
            image: "images/u-html.png"
        },
        {
            title: "Business Project Management",
            issuer: "Udemy",
            image: "images/u-bpr.png"
        },
        {
            title: "CyberSecurity",
            issuer: "Udemy",
            image: "images/u-cs.png"
        },
        {
            title: "DataScience",
            issuer: "Udemy",
            image: "images/u-data.png"
        },
        {
            title: "IBM SPSS",
            issuer: "Udemy",
            image: "images/u-ibm.png"
        },
        {
            title: "Python",
            issuer: "Udemy",
            image: "images/u-pygame.png"
        },
        {
            title: "Technical Project Management",
            issuer: "Udemy",
            image: "images/u-pr.png"
        },
        {
            title: "Social Media Marketing",
            issuer: "Udemy",
            image: "images/u-smm.png"
        }

    ],

    personalInfo: {
        name: "Vivek Lokolakar",
        role: "Computer Science Student & AI Developer",
        phone: "9343553051",
        email: "viveklokolakar@gmail.com",
        linkedin: "www.linkedin.com/in/viveklokolakar",
        github: "https://github.com/vivek8085",
        education: {
            institution: "Jain College Of Engineering",
            degree: "B.E(Computer Science & Engg)",
            semester: "6th semester",
            cgpa: "9.05"
        }
    },
    skills: {
        programming: ["Java", "Python", "C", "JavaScript"],
        frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"],
        fullstack:["React","Node.js","Express.js","MongoDB","MySQL","Neo4j"],
        aiml: ["CNN", "Machine Learning", "Analytics", "Prompt Engineering","NLP"],
        dataScience: ["Python", "MS SQL", "DBMS", "Data Visualization"],
        tools: ["Blender", "UI/UX", "Figma", "Git","Canva","Photoshop"],
        Cloud:["Google Cloud Platform", "AWS", "Azure"],
        CyberSecuirty:["Kali","Kodachi","Ethical Hacking","Digital forensics","Network security","Communication"],
        ManagementSkills:["Agile","Technical Project Management","SocialMedia Marketing","IBM SPSS","Business Project Management"]
    },
    experience: [
        {
            company: "IBM SkillBuild & Edunet Foundation",
            role: "AIML Development",
            duration: "Jun-July 2025",
            projects: [
                {
                    name: "Employee Salary Prediction",
                    accuracy: "88%+",
                    tech: "ML algorithms, colab, Keras, TensorFlow, Scikit-learn,streamlit"
                }
            ]
        },
        {
            company: "Shell India Markets & Edunet Foundation",
            role: "AI Development",
            duration: "Apr-May 2025",
            projects: [
                {
                    name: "Forest Fire Detection",
                    accuracy: "90%+",
                    tech: "CNN, TensorFlow, Keras"
                },
                {
                    name: "Plant Disease Detection",
                    description: "Real-time agricultural AI",
                    tech: "CNN, Image Processing"
                }
            ]
        },
        {
            company: "TECHSAKSHAM (Microsoft, Edunet)",
            role: "AI Development",
            duration: "Nov-Dec 2024",
            projects: [
                {
                    name: "Care-Genie Chatbot",
                    accuracy: "92%+",
                    tech: "NLP, Logistic Regression, TF-IDF"
                }
            ]
        },
    ],
    projects: [
        {
            name: "Forest Fire Detection System",
            description: "90%+ accuracy, CNN-based detection system",
            category: "AI/ML",
            tech: ["CNN", "TensorFlow", "Python", "Computer Vision"],
            highlights: ["90%+ accuracy", "Real-time processing", "5,000+ images dataset"]
        },
        {
            name: "Plant Disease Detection",
            description: "Real-time agricultural AI solution",
            category: "AI/ML",
            tech: ["Deep Learning", "Image Processing", "Python"],
            highlights: ["Real-time prediction", "Edge device compatibility", "Agricultural integration"]
        },
        {
            name: "Care-Genie Chatbot",
            description: "92%+ accuracy, NLP-powered hospital management",
            category: "NLP",
            tech: ["NLP", "Machine Learning", "Python", "Streamlit"],
            highlights: ["92%+ accuracy", "Medical query classification", "Conversation logging"]
        },
        {
            name: "Hospital Management System",
            description: "Full-stack development solution",
            category: "Web Development",
            tech: ["Java", "Database Management", "Full Stack"],
            highlights: ["Full-stack development", "Database integration", "User management"]
        },
        {
            name: "Yukti Trilingual Voice Chatbot",
            description: "Multi-language support voice assistant",
            category: "AI/ML",
            tech: ["Voice Recognition", "NLP", "Multi-language Processing"],
            highlights: ["Trilingual support", "Voice interaction", "AI-powered responses"]
        },
        {
            name:"BullFighting Game",
            description:"A Simple WebGame to play with bull",
            category:"Web Development",
            tech:["Html","CSS","Javascript"],
            highlights:["live interaction","play with keyboard"]
        }
    ],
    achievements: [
        {
            title: "ODESSEY HACKATHON",
            position: "2nd Place",
            date: "March 2025",
            organization: "Jain College of Engineering",
            description: "Inter-college hackathon focused on solving real-time problems in AI and Computer Science"
        },
        {
            title: "NATIONAL SCIENCE DAY HACKATHON",
            position: "1st Place",
            date: "February 2025",
            organization: "Jain College of Engineering",
            description: "Developed a smart Hotel Management App for efficient city-wide hospitality operations"
        },
        {
            title: "IEEE Quiz Competition",
            position: "3rd Place",
            category: "Cybersecurity",
            organization: "IEEE",
            description: "Inter-Department IEEE Quiz on Cybersecurity"
        },
        {
            title: "Google Arcade Games",
            position: "Legend",
            category: "Cloud",
            organization: "Google Cloud Platform",
            description: "Cloud Practice Program By GCP Skill Boost"
        },
        {
            title: "Credly",
            position: "85+ SkillBadges",
            category: "All Skills",
            organization: "Various Organizations",
            description: "Mastered Futureproof and OnDemand skills"
        }
    ]
};

// Global Variables
let skillsChart;
let currentFilter = 'all';
let isTyping = false;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeCertificationsMarquee() {
    const container = document.getElementById('certifications-marquee');
    const preview = document.getElementById('cert-preview');
    const previewImg = document.getElementById('cert-preview-img');

    if (!container || !portfolioData.certifications) return;

    container.innerHTML = portfolioData.certifications.map((cert, index) => `
        <div class="cert-item" data-image="${cert.image}">
            <img src="${cert.image}" alt="${cert.title}" class="cert-img">
            <span>${cert.title} - ${cert.issuer}</span>
        </div>
    `).join('');

    document.querySelectorAll('.cert-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const image = item.getAttribute('data-image');
            previewImg.src = image;
            preview.classList.add('show');
            preview.style.top = `${e.clientY + 20}px`;
            preview.style.left = `${e.clientX + 20}px`;
        });

        item.addEventListener('mouseleave', () => {
            preview.classList.remove('show');
        });
    });
}



function initializeApp() {
    // Show loading screen
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);

    // Initialize all components
    initializeCertificationsMarquee();
    initializeNavigation();
    initializeFloatingShapes();
    initializeScrollAnimations();
    initializeSkills();
    initializeExperience();
    initializeProjects();
    initializeAchievements();
    initializeContactForm();
    initializeModal();
    initialize3DEffects();
    initializeThemeToggle();
    initializeLogoTilt();
    initializeHeroTilt();

    // Add event listeners
    window.addEventListener('scroll', debounce(handleScroll, 10));
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
    
    setTimeout(() => {
        startTypewriterEffect();
        startFloatingAnimation();
    }, 500);
}

function startTypewriterEffect() {
    if (isTyping) return;
    
    const heroName = document.getElementById('hero-name');
    if (!heroName) return;
    
    isTyping = true;
    const originalText = heroName.textContent;
    heroName.textContent = '';
    
    let index = 0;
    const cursor = document.createElement('span');
    cursor.style.cssText = `
        border-right: 3px solid var(--color-primary);
        animation: blink 1s infinite;
    `;
    heroName.appendChild(cursor);
    
    function typeWriter() {
        if (index < originalText.length) {
            heroName.textContent = originalText.substring(0, index + 1);
            heroName.appendChild(cursor);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                if (heroName.contains(cursor)) {
                    heroName.removeChild(cursor);
                }
                isTyping = false;
            }, 1000);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Navigation - Fixed smooth scrolling issue
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate proper offset position
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
                const offsetTop = targetElement.offsetTop - navbarHeight - 20;
                
                // Use smooth scrolling
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
                
                // Update active nav link immediately
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
            
            // Close mobile menu
            navMenu?.classList.remove('active');
            navToggle?.classList.remove('active');
        });
    });
}

// Floating Shapes
function initializeFloatingShapes() {
    const shapesContainer = document.getElementById('floating-shapes');
    if (!shapesContainer) return;
    
    const shapes = [
        { type: 'circle', count: 15 },
        { type: 'square', count: 10 },
        { type: 'triangle', count: 8 }
    ];
    
    shapes.forEach(shapeType => {
        for (let i = 0; i < shapeType.count; i++) {
            createFloatingShape(shapesContainer, shapeType.type);
        }
    });
}

function createFloatingShape(container, type) {
    const shape = document.createElement('div');
    shape.classList.add('floating-shape');
    
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    shape.style.cssText = `
        position: absolute;
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(45deg, var(--color-primary), var(--color-teal-300));
        opacity: 0.1;
        animation: float ${duration}s ease-in-out infinite ${delay}s;
    `;
    
    switch (type) {
        case 'circle':
            shape.style.borderRadius = '50%';
            break;
        case 'triangle':
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid var(--color-primary)`;
            shape.style.background = 'none';
            break;
        default:
            shape.style.transform = `rotate(${Math.random() * 360}deg)`;
            break;
    }
    
    container.appendChild(shape);
}

function startFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.float-elem');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.glass-card, .skill-card, .timeline-item, .project-card, .achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Skills Section
function initializeSkills() {
    renderSkills();
    initializeSkillsChart();
}

function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    const skillCategories = [
        { name: 'Programming Languages', skills: portfolioData.skills.programming, icon: 'fas fa-code' },
        { name: 'Frontend Technologies', skills: portfolioData.skills.frontend, icon: 'fas fa-palette' },
        {name:'FullStack Development',skills:portfolioData.skills.fullstack,icon:'fas fa-laptop-code'},
        { name: 'AI/ML', skills: portfolioData.skills.aiml, icon: 'fas fa-brain' },
        { name: 'Data Science', skills: portfolioData.skills.dataScience, icon: 'fas fa-chart-bar' },
        { name: 'Tools & Technologies', skills: portfolioData.skills.tools, icon: 'fas fa-tools' },
        { name: 'Cloud Technologies', skills: portfolioData.skills.Cloud, icon: 'fas fa-cloud' },
        {name:'CyberSecurity',skills:portfolioData.skills.CyberSecuirty,icon:'fas fa-shield-alt'},
        {name:'Management Skills',skills:portfolioData.skills.ManagementSkills,icon:'fas fa-handshake'}
    ];
    
    skillsGrid.innerHTML = '';
    
    skillCategories.forEach((category, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card glass-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon" style="font-size: 2rem; color: var(--color-primary); margin-bottom: 15px;">
                <i class="${category.icon}"></i>
            </div>
            <h3 class="skill-category">${category.name}</h3>
            <div class="skill-items">
                ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

function initializeSkillsChart() {
    const ctx = document.getElementById('skillsChart')?.getContext('2d');
    if (!ctx) return;
    
    const skillData = [
        { name: 'Programming', count: portfolioData.skills.programming.length },
        { name: 'Frontend', count: portfolioData.skills.frontend.length },
        { name: 'FullStack', count: portfolioData.skills.fullstack.length },
        { name: 'AI/ML', count: portfolioData.skills.aiml.length },
        { name: 'Data Science', count: portfolioData.skills.dataScience.length },
        { name: 'Tools', count: portfolioData.skills.tools.length },
        { name: 'Cloud', count: portfolioData.skills.Cloud.length },
        { name: 'CyberSecurity', count: portfolioData.skills.CyberSecuirty.length }
    ];
    
    const colors = ['#1FB8CD', '#FFC185', '#E11D48', '#10B981', '#8B5CF6', '#F59E0B', '#3B82F6', '#EF4444'];
    
    skillsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: skillData.map(item => item.name),
            datasets: [{
                data: skillData.map(item => item.count),
                backgroundColor: colors,
                borderWidth: 0,
                cutout: '60%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        color: '#FF6B35'  // Orange legend labels
                    }
                }
            },
            animation: {
                animateScale: true,
                duration: 2000,
                easing: 'easeOutBounce'
            }
        }
    });
}


// Experience Section
function initializeExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content glass-card">
                <div class="timeline-date">${exp.duration}</div>
                <h3 class="timeline-title">${exp.role}</h3>
                <div class="timeline-company">${exp.company}</div>
                <ul class="timeline-projects">
                    ${exp.projects.map(project => `
                        <li>
                            <strong>${project.name}</strong> 
                            ${project.accuracy ? `- ${project.accuracy} accuracy` : ''}
                            ${project.description ? `- ${project.description}` : ''}
                            <br><em>Tech: ${project.tech}</em>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Projects Section - Fixed filtering and modal functionality
function initializeProjects() {
    renderProjects();
    initializeProjectFilters();
}

function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    const filteredProjects = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(project => project.category === filter);
    
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.dataset.category = project.category;
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <ul class="project-highlights">
                ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        `;
        
        // Add click handler for modal
        projectCard.addEventListener('click', () => {
            openProjectModal(project);
        });
        
        // Add hover cursor
        projectCard.style.cursor = 'pointer';
        
        projectsGrid.appendChild(projectCard);
    });
}

/* ---------- Theme toggle ---------- */
function initializeThemeToggle() {
    const button = document.getElementById('theme-toggle');
    const icon   = document.getElementById('theme-icon');
    const root   = document.documentElement;
    
    // 1.  Load saved preference or system setting
    const stored = localStorage.getItem('color-scheme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const current= stored || system;
    root.setAttribute('data-color-scheme', current);
    icon.className = current === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  
    // 2.  Toggle handler
    button.addEventListener('click', () => {
      const newTheme = root.getAttribute('data-color-scheme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-color-scheme', newTheme);
      localStorage.setItem('color-scheme', newTheme);
      icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
  }
  
  /* ---------- 3D logo tilt ---------- */
  function initializeLogoTilt() {
    const logo = document.getElementById('logo-tilt');
    if (!logo) return;
  
    logo.addEventListener('mousemove', (e) => {
      const rect = logo.getBoundingClientRect();
      const x = (e.clientX - rect.left)  / rect.width  - 0.5;
      const y = (e.clientY - rect.top)   / rect.height - 0.5;
      logo.style.transform =
        `rotateX(${ -y * 20 }deg) rotateY(${ x * 20 }deg)`;
    });
  
    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
  

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button with visual feedback
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'translateY(0)';
            });
            button.classList.add('active');
            button.style.transform = 'translateY(-2px)';
            
            // Update current filter and render projects
            currentFilter = filter;
            
            // Add loading effect
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                projectsGrid.style.opacity = '0.5';
                projectsGrid.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    renderProjects(filter);
                    projectsGrid.style.opacity = '1';
                    projectsGrid.style.transform = 'translateY(0)';
                }, 200);
            }
        });
    });
}

// Achievements Section
function initializeAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = '';
    
    portfolioData.achievements.forEach((achievement, index) => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card glass-card';
        achievementCard.style.animationDelay = `${index * 0.1}s`;
        
        let icon = '🏆';
        if (achievement.position.includes('1st')) icon = '🥇';
        else if (achievement.position.includes('2nd')) icon = '🥈';
        else if (achievement.position.includes('3rd')) icon = '🥉';
        
        achievementCard.innerHTML = `
            <div class="achievement-icon">${icon}</div>
            <h3 class="achievement-title">${achievement.title}</h3>
            <div class="achievement-position">${achievement.position}</div>
            <p class="achievement-description">${achievement.description}</p>
            <div class="achievement-meta">${achievement.date} • ${achievement.organization}</div>
        `;
        
        achievementsGrid.appendChild(achievementCard);
    });
}

// Contact Form
// function initializeContactForm() {
//     const form = document.getElementById('contact-form');
//     if (!form) return;
    
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         handleFormSubmission(form);
//     });
    
//     // Add floating labels effect
//     const formControls = form.querySelectorAll('.form-control');
//     formControls.forEach(control => {
//         control.addEventListener('focus', () => {
//             control.parentElement.classList.add('focused');
//         });
        
//         control.addEventListener('blur', () => {
//             if (!control.value) {
//                 control.parentElement.classList.remove('focused');
//             }
//         });
//     });
// }

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // If using FormSubmit, skip JS entirely
    // Leave this function empty or remove it
    // form.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     // EmailJS logic removed for FormSubmit
    // });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (validateForm(data)) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        }, 2000);
    }
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name.trim()) errors.push('Name is required');
    if (!data.email.trim()) errors.push('Email is required');
    if (!isValidEmail(data.email)) errors.push('Please enter a valid email');
    if (!data.subject.trim()) errors.push('Subject is required');
    if (!data.message.trim()) errors.push('Message is required');
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        white-space: pre-line;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #10B981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #EF4444, #DC2626)';
            break;
        default:
            notification.style.background = 'linear-gradient(45deg, #6B7280, #4B5563)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Modal - Fixed modal functionality
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    
    if (!modal || !closeBtn) return;
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <h2 style="margin-bottom: 20px; color: var(--color-text); font-size: var(--font-size-2xl);">${project.name}</h2>
            <p style="margin-bottom: 25px; color: var(--color-text-secondary); font-size: var(--font-size-lg); line-height: 1.7;">${project.description}</p>
            
            <div style="margin-bottom: 25px;">
                <h3 style="margin-bottom: 15px; color: var(--color-text); font-size: var(--font-size-lg);">Category:</h3>
                <span class="tech-tag" style="background: var(--color-primary); color: var(--color-btn-primary-text); padding: 8px 16px; border-radius: 20px; font-weight: 500;">${project.category}</span>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h3 style="margin-bottom: 15px; color: var(--color-text); font-size: var(--font-size-lg);">Technologies Used:</h3>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${project.tech.map(tech => `
                        <span class="tech-tag" style="background: var(--color-secondary); color: var(--color-text); padding: 6px 12px; border-radius: 15px; font-size: 0.9rem;">${tech}</span>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h3 style="margin-bottom: 15px; color: var(--color-text); font-size: var(--font-size-lg);">Key Highlights:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${project.highlights.map(highlight => `
                        <li style="margin-bottom: 10px; padding-left: 25px; position: relative; color: var(--color-text-secondary);">
                            <span style="position: absolute; left: 0; color: var(--color-primary); font-weight: bold; font-size: 1.2rem;">✓</span>
                            ${highlight}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1) rotateX(0deg)';
    }, 50);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Add exit animation
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.transform = 'scale(0.9) rotateX(-15deg)';
    }
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 200);
}

// 3D Effects
function initialize3DEffects() {
    // Add parallax effect to laptop
    const laptop = document.getElementById('laptop-3d');
    if (laptop) {
        laptop.addEventListener('mousemove', (e) => {
            const rect = laptop.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 20;
            const rotateY = -(x / rect.width) * 20;
            
            laptop.style.transform = `
                translate(-50%, -50%) 
                perspective(800px) 
                rotateX(${15 + rotateX}deg) 
                rotateY(${-15 + rotateY}deg)
            `;
        });
        
        laptop.addEventListener('mouseleave', () => {
            laptop.style.transform = `
                translate(-50%, -50%) 
                perspective(800px) 
                rotateX(15deg) 
                rotateY(-15deg)
            `;
        });
    }
}

// Scroll Handling
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(var(--color-surface-rgb), 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(var(--color-surface-rgb), 0.05)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    updateActiveNavLink();
    addParallaxEffect();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function addParallaxEffect() {
    const floatingShapes = document.getElementById('floating-shapes');
    if (floatingShapes) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        floatingShapes.style.transform = `translateY(${parallax}px)`;
    }
}

// Mouse Movement Effects
function handleMouseMove(e) {
    const floatingElements = document.querySelectorAll('.float-elem');
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.0001;
        const x = (e.clientX * speed);
        const y = (e.clientY * speed);
        
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Resize Handling
function handleResize() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
    }
    
    if (skillsChart) {
        skillsChart.resize();
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Additional Animations
function addHoverEffects() {
    // Add 3D tilt effect to cards
    const cards = document.querySelectorAll('.glass-card, .skill-card, .project-card, .achievement-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = -(x / rect.width) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

// Initialize additional effects after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addHoverEffects();
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('hero-name');
    if (name) {
        name.addEventListener('mousemove', (e) => {
            const rect = name.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
            name.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        });

        name.addEventListener('mouseleave', () => {
            name.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
});

function initializeHeroTilt() {
    const heroName = document.getElementById('hero-name');
    if (!heroName) return;

    heroName.style.transformStyle = 'preserve-3d';
    heroName.style.transition = 'transform 0.2s ease';

    heroName.addEventListener('mousemove', (e) => {
        const rect = heroName.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const offsetY = (e.clientY - rect.top - rect.height / 2) / rect.height;

        const rotateX = -offsetY * 15; // rotate upward/downward
        const rotateY = offsetX * 15;  // rotate left/right

        const moveX = offsetX * 10; // translate left/right
        const moveY = offsetY * 10; // translate up/down

        heroName.style.transform = `
            perspective(800px)
            translate(${moveX}px, ${moveY}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    heroName.addEventListener('mouseleave', () => {
        heroName.style.transform = 'translate(0, 0) rotateX(0deg) rotateY(0deg)';
    });
}