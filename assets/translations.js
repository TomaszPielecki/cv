// Obsługa wielu języków dla CV
const translations = {
    pl: {
        // Sekcja nagłówka
        role: "Full-Stack Developer",
        // Sekcja O mnie
        aboutTitle: "O mnie",
        aboutP1: "Ambitny i dokładny programista Full-Stack z mocnym doświadczeniem w tworzeniu aplikacji webowych w Python i PHP. Posiadam udokumentowaną zdolność do projektowania, rozwoju i wdrażania skalowalnych aplikacji webowych oraz systemów zarządzania danymi.",
        aboutP2: "Specjalizuję się w technologiach backendowych z wykorzystaniem Pythona i jego frameworków do analizy danych oraz tworzenia interaktywnych interfejsów z Streamlit i Flask. Na froncie pracuję z Vue.js 3 i Nuxt 3, tworząc wydajne i SEO-przyjazne aplikacje internetowe. Posiadam również doświadczenie w optymalizacji stron pod kątem wyszukiwarek i poprawie wskaźników Core Web Vitals.",
        aboutP3: "Moja praca koncentruje się na tworzeniu responsywnych, szybkich i dostępnych interfejsów użytkownika przy zachowaniu zasad nowoczesnego web developmentu. Nieustannie rozwijam swoje umiejętności w ekosystemie Vue.js, wykorzystując jego możliwości do budowania interaktywnych i wydajnych aplikacji SPA oraz SSR z pomocą frameworka Nuxt 3.",
        // Sekcja projektów
        projectsTitle: "Wybrane projekty",
        cryptoProject: {
            title: "CryptoVerse - Portal o kryptowalutach",
            description: "Kompleksowa aplikacja o kryptowalutach dostarczająca aktualne wykresy, dane i artykuły. Posiada backend napisany w Python umożliwiający predykcję cen kryptowalut z wykorzystaniem biblioteki NeuralProphet. Implementacja zaawansowanej wizualizacji danych i analiz w czasie rzeczywistym.",
            codeLink: "Kod źródłowy"
        },
        snaplyProject: {
            title: "Snaply - Narzędzie do zrzutów ekranu",
            description: "Zaawansowane narzędzie desktopowe i mobilne do tworzenia zrzutów ekranu, opracowane samodzielnie podczas stażu w Coody.it. Służy do wyłapywania różnic i błędów podczas tworzenia stron internetowych lub innych aplikacji. Wykorzystuje Selenium WebDriver do automatycznego przechwytywania elementów stron w różnych widokach, co znacząco usprawnia proces testowania i analizy layoutów.",
            codeLink: "Kod źródłowy"
        },
        cieslaProject: {
            title: "Ciesla - Strona wizytówkowa",
            description: "Statyczna strona internetowa typu one-page zaprojektowana jako wizytówka dla firmy stolarskiej. Wykorzystuje nowoczesne technologie frontendowe, a minimalistyczny design zapewnia czytelność i funkcjonalność.",
            codeLink: "Kod źródłowy"
        },
        vueShopProject: {
            title: "Vue Shop - Platforma eCommerce",
            description: "Nowoczesna platforma eCommerce zbudowana w oparciu o Vue.js 3 i Nuxt 3, wykorzystująca zalety SSR i SSG dla optymalnej wydajności i SEO. Implementacja dynamicznego ładowania treści, optymalizacja Core Web Vitals oraz integracja meta tagów i struktury danych zgodnej ze standardami Schema.org dla lepszej indeksacji w wyszukiwarkach.",
            codeLink: "Kod źródłowy"
        },
        // Sekcja doświadczenia
        experienceTitle: "Doświadczenie zawodowe",
        freelancer: {
            title: "Full-Stack Developer",
            company: "Freelancer",
            date: "2023 - 2025",
            description: "Rozwój i implementacja aplikacji webowych z wykorzystaniem Python, PHP oraz nowoczesnych technologii frontendowych. Tworzenie systemów analizy danych i rozwiązań do wizualizacji.",
            achievements: [
                "Zaprojektowanie i wdrożenie aplikacji do prognozowania kryptowalut",
                "Stworzenie narzędzia do analizy i przechwytywania zrzutów ekranu",
                "Implementacja stron wizytówkowych z wykorzystaniem Vue.js",
                "Współpraca z klientami w celu dostarczenia spersonalizowanych rozwiązań",
                "Optymalizacja aplikacji pod kątem wydajności i UX"
            ]
        },
        coodyIt: {
            title: "Staż - Developer eCommerce",
            company: "Coody.it, Kartuzy",
            date: "2024 - kwiecień 2025",
            description: "6-miesięczny staż obejmujący programowanie aplikacji eCommerce z wykorzystaniem PHP i Python. Tworzenie dashboardów, testowanie sklepów internetowych w konsoli oraz samodzielne opracowanie narzędzia Snaply 2025.",
            achievements: [
                "Samodzielne stworzenie aplikacji Snaply do robienia zrzutów ekranu na urządzeniach desktop i mobile z wykorzystaniem Pythona i Selenium WebDriver",
                "Implementacja i testowanie dashboardów dla platform sprzedażowych",
                "Rozwój i kompleksowe testowanie sklepów internetowych",
                "Współpraca z zespołem programistycznym w celu optymalizacji procesów"
            ]
        },
        agawa: {
            title: "Praktyki studenckie",
            company: "Agawa, Kartuzy",
            date: "2023",
            description: "Modernizacja i programowanie stron internetowych z wykorzystaniem HTML, CSS i JavaScript.",
            achievements: [
                "Aktualizacja oraz modernizacja stron internetowych",
                "Optymalizacja interfejsów użytkownika",
                "Praca z systemami zarządzania treścią",
                "Współpraca z zespołem projektowym w celu dostarczenia wysokiej jakości rozwiązań",
                "Udział w spotkaniach projektowych i prezentacjach"
            ]
        },
        studentProjects: {
            title: "Back-end Developer",
            company: "Projekty studenckie",
            date: "2021 - 2023",
            description: "Tworzenie i utrzymanie systemów zarządzania danymi z wykorzystaniem Python, PHP i relacyjnych baz danych. Implementacja algorytmów analizy danych i uczenia maszynowego.",
            achievements: [
                "Przeprowadzenie badań nad zastosowaniem algorytmu Adam do przewidywania trendów kryptowalut",
                "Opracowanie aplikacji z wykorzystaniem bibliotek do analizy danych Python"
            ]
        },
        // Sekcja edukacji
        educationTitle: "Edukacja",
        education: {
            degree: "Inżynier Oprogramowania",
            school: "Uniwersytet WSB Merito Gdańsk",
            date: "2019 - 2023",
            thesis: "Tytuł pracy: Weryfikacja poprawności zastosowania algorytmu Adam do predykcji i trendu kryptowalut",
            specialization: "Specjalizacja: Programowanie aplikacji webowych"
        },
        // Sekcja certyfikatów
        certificatesTitle: "Certyfikaty i szkolenia",
        certificates: [
            {
                name: "Python dla analityków danych",
                date: "2024 | DataCamp"
            },
            {
                name: "Machine Learning z TensorFlow",
                date: "2023 | Coursera"
            },
            {
                name: "Full-Stack Web Development",
                date: "2022 | Udemy"
            }
        ],
        // Sekcja umiejętności interpersonalnych
        interpersonalTitle: "Umiejętności interpersonalne",
        interpersonal: [
            {
                title: "Komunikacja",
                description: "Efektywna komunikacja i wyjaśnianie koncepcji technicznych"
            },
            {
                title: "Praca zespołowa",
                description: "Gotowość do pracy w zespole i współpracy z innymi specjalistami"
            },
            {
                title: "Szybkie uczenie",
                description: "Szybkie przyswajanie wiedzy i adaptacja do nowych technologii"
            },
            {
                title: "Jakość",
                description: "Zdolność do tworzenia wysokiej jakości aplikacji"
            }
        ],
        // Stopka
        footer: "© 2025 Tomasz Pielecki - CV Full-Stack Developer",
        // Inne elementy
        languages: "Języki",
        polish: "Polski",
        english: "Angielski",
        printButton: "Drukuj CV",
        themeToggle: "Przełącz tryb ciemny/jasny",
        languageToggle: "EN",
        nativeLang: "Język ojczysty",
        intermediateLang: "Poziom B1",
        technicalSkills: "Umiejętności techniczne",
        frontendSkills: "Frontend",
        backendSkills: "Backend",
        databaseSkills: "Bazy danych",
        dataAnalysisSkills: "Analiza danych i ML",
        toolsSkills: "Narzędzia"
    },
    en: {
        // Header section
        role: "Full-Stack Developer",
        // About section
        aboutTitle: "About Me",
        aboutP1: "Ambitious and meticulous Full-Stack Developer with strong experience in creating web applications using Python and PHP. I have a documented ability to design, develop, and deploy scalable web applications and data management systems.",
        aboutP2: "I specialize in backend technologies using Python and its frameworks for data analysis and creating interactive interfaces with Streamlit and Flask. On the frontend, I work with Vue.js 3 and Nuxt 3, creating efficient and SEO-friendly web applications. I also have experience in optimizing websites for search engines and improving Core Web Vitals indicators.",
        aboutP3: "My work focuses on creating responsive, fast, and accessible user interfaces while maintaining modern web development principles. I continuously develop my skills in the Vue.js ecosystem, using its capabilities to build interactive and efficient SPA and SSR applications with the help of the Nuxt 3 framework.",
        // Projects section
        projectsTitle: "Selected Projects",
        cryptoProject: {
            title: "CryptoVerse - Cryptocurrency Portal",
            description: "A comprehensive cryptocurrency application providing up-to-date charts, data, and articles. Features a Python backend enabling cryptocurrency price prediction using the NeuralProphet library. Implementation of advanced data visualization and real-time analysis.",
            codeLink: "Source Code"
        },
        snaplyProject: {
            title: "Snaply - Screenshot Tool",
            description: "Advanced desktop and mobile screenshot tool, developed independently during an internship at Coody.it. Used to capture differences and errors during website or application development. Uses Selenium WebDriver to automatically capture page elements in different views, significantly improving the process of testing and layout analysis.",
            codeLink: "Source Code"
        },
        cieslaProject: {
            title: "Ciesla - Business Card Website",
            description: "A static one-page website designed as a business card for a carpentry company. Uses modern frontend technologies, and its minimalist design ensures readability and functionality.",
            codeLink: "Source Code"
        },
        vueShopProject: {
            title: "Vue Shop - eCommerce Platform",
            description: "Modern eCommerce platform built with Vue.js 3 and Nuxt 3, leveraging the advantages of SSR and SSG for optimal performance and SEO. Implementation of dynamic content loading, Core Web Vitals optimization, and integration of meta tags and data structure compliant with Schema.org standards for better indexing in search engines.",
            codeLink: "Source Code"
        },
        // Experience section
        experienceTitle: "Professional Experience",
        freelancer: {
            title: "Full-Stack Developer",
            company: "Freelancer",
            date: "2023 - 2025",
            description: "Development and implementation of web applications using Python, PHP, and modern frontend technologies. Creation of data analysis systems and visualization solutions.",
            achievements: [
                "Design and implementation of a cryptocurrency forecasting application",
                "Creation of a screenshot analysis and capture tool",
                "Implementation of business card websites using Vue.js",
                "Collaboration with clients to deliver personalized solutions",
                "Optimization of applications for performance and UX"
            ]
        },
        coodyIt: {
            title: "Internship - eCommerce Developer",
            company: "Coody.it, Kartuzy",
            date: "2024 - April 2025",
            description: "6-month internship including eCommerce application programming using PHP and Python. Creation of dashboards, testing online stores in the console, and independent development of the Snaply 2025 tool.",
            achievements: [
                "Independent creation of the Snaply application for taking screenshots on desktop and mobile devices using Python and Selenium WebDriver",
                "Implementation and testing of dashboards for sales platforms",
                "Development and comprehensive testing of online stores",
                "Collaboration with the development team to optimize processes"
            ]
        },
        agawa: {
            title: "Student Internship",
            company: "Agawa, Kartuzy",
            date: "2023",
            description: "Modernization and programming of websites using HTML, CSS, and JavaScript.",
            achievements: [
                "Updating and modernizing websites",
                "Optimization of user interfaces",
                "Work with content management systems",
                "Collaboration with the project team to deliver high-quality solutions",
                "Participation in project meetings and presentations"
            ]
        },
        studentProjects: {
            title: "Back-end Developer",
            company: "Student Projects",
            date: "2021 - 2023",
            description: "Creation and maintenance of data management systems using Python, PHP, and relational databases. Implementation of data analysis and machine learning algorithms.",
            achievements: [
                "Conducting research on the application of the Adam algorithm for predicting cryptocurrency trends",
                "Development of applications using Python data analysis libraries"
            ]
        },
        // Education section
        educationTitle: "Education",
        education: {
            degree: "Software Engineering",
            school: "WSB Merito University Gdańsk",
            date: "2019 - 2023",
            thesis: "Thesis: Verification of the validity of applying the Adam algorithm for cryptocurrency prediction and trend",
            specialization: "Specialization: Web application programming"
        },
        // Certificates section
        certificatesTitle: "Certificates & Training",
        certificates: [
            {
                name: "Python for Data Analysts",
                date: "2024 | DataCamp"
            },
            {
                name: "Machine Learning with TensorFlow",
                date: "2023 | Coursera"
            },
            {
                name: "Full-Stack Web Development",
                date: "2022 | Udemy"
            }
        ],
        // Interpersonal skills section
        interpersonalTitle: "Interpersonal Skills",
        interpersonal: [
            {
                title: "Communication",
                description: "Effective communication and explanation of technical concepts"
            },
            {
                title: "Teamwork",
                description: "Readiness to work in a team and collaborate with other specialists"
            },
            {
                title: "Fast Learning",
                description: "Quick acquisition of knowledge and adaptation to new technologies"
            },
            {
                title: "Quality",
                description: "Ability to create high-quality applications"
            }
        ],
        // Footer
        footer: "© 2025 Tomasz Pielecki - Full-Stack Developer CV",
        // Other elements
        languages: "Languages",
        polish: "Polish",
        english: "English",
        printButton: "Print CV",
        themeToggle: "Toggle dark/light mode",
        languageToggle: "PL",
        nativeLang: "Native",
        intermediateLang: "B1 Level",
        technicalSkills: "Technical Skills",
        frontendSkills: "Frontend",
        backendSkills: "Backend",
        databaseSkills: "Databases",
        dataAnalysisSkills: "Data Analysis & ML",
        toolsSkills: "Tools"
    }
};

// Domyślny język
let currentLanguage = 'pl';

// Funkcja do zmiany języka
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageContent();
    localStorage.setItem('language', lang);
}

// Funkcja aktualizująca zawartość strony
function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Aktualizacja tytułu
    document.title = `Tomasz Pielecki | Full-Stack Developer | ${currentLanguage === 'pl' ? 'CV 2025' : 'Resume 2025'}`;
    
    // Nagłówek - rola zawodowa
    document.querySelector('.profile h2').textContent = t.role;
    
    // Przycisk zmiany języka
    document.getElementById('languageToggle').textContent = t.languageToggle;
    
    // Aktualizacja sekcji "O mnie"
    document.querySelector('.about-section h2 i + span').textContent = t.aboutTitle;
    const aboutParagraphs = document.querySelectorAll('.about-section p');
    if (aboutParagraphs.length >= 3) {
        aboutParagraphs[0].textContent = t.aboutP1;
        aboutParagraphs[1].textContent = t.aboutP2;
        aboutParagraphs[2].textContent = t.aboutP3;
    }
    
    // Aktualizacja sekcji "Projekty"
    document.querySelector('.projects-section h2 i + span').textContent = t.projectsTitle;
    
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length >= 4) {
        // CryptoVerse
        projectCards[0].querySelector('h3').textContent = t.cryptoProject.title;
        projectCards[0].querySelector('.project-description').textContent = t.cryptoProject.description;
        projectCards[0].querySelector('.project-links a').textContent = t.cryptoProject.codeLink;
        
        // Snaply
        projectCards[1].querySelector('h3').textContent = t.snaplyProject.title;
        projectCards[1].querySelector('.project-description').textContent = t.snaplyProject.description;
        projectCards[1].querySelector('.project-links a').textContent = t.snaplyProject.codeLink;
        
        // Ciesla
        projectCards[2].querySelector('h3').textContent = t.cieslaProject.title;
        projectCards[2].querySelector('.project-description').textContent = t.cieslaProject.description;
        projectCards[2].querySelector('.project-links a').textContent = t.cieslaProject.codeLink;
        
        // Vue Shop
        projectCards[3].querySelector('h3').textContent = t.vueShopProject.title;
        projectCards[3].querySelector('.project-description').textContent = t.vueShopProject.description;
        projectCards[3].querySelector('.project-links a').textContent = t.vueShopProject.codeLink;
    }
    
    // Aktualizacja sekcji "Doświadczenie"
    document.querySelector('.experience-section h2 i + span').textContent = t.experienceTitle;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length >= 4) {
        // Freelancer
        timelineItems[0].querySelector('h3').textContent = t.freelancer.title;
        timelineItems[0].querySelector('h4').textContent = t.freelancer.company;
        timelineItems[0].querySelector('.timeline-date').textContent = t.freelancer.date;
        timelineItems[0].querySelector('p').textContent = t.freelancer.description;
        
        const freelancerAchievements = timelineItems[0].querySelectorAll('.timeline-achievements li');
        t.freelancer.achievements.forEach((achievement, index) => {
            if (freelancerAchievements[index]) {
                freelancerAchievements[index].textContent = achievement;
            }
        });
        
        // Coody.it
        timelineItems[1].querySelector('h3').textContent = t.coodyIt.title;
        timelineItems[1].querySelector('h4').textContent = t.coodyIt.company;
        timelineItems[1].querySelector('.timeline-date').textContent = t.coodyIt.date;
        timelineItems[1].querySelector('p').textContent = t.coodyIt.description;
        
        const coodyItAchievements = timelineItems[1].querySelectorAll('.timeline-achievements li');
        t.coodyIt.achievements.forEach((achievement, index) => {
            if (coodyItAchievements[index]) {
                coodyItAchievements[index].textContent = achievement;
            }
        });
        
        // Agawa
        timelineItems[2].querySelector('h3').textContent = t.agawa.title;
        timelineItems[2].querySelector('h4').textContent = t.agawa.company;
        timelineItems[2].querySelector('.timeline-date').textContent = t.agawa.date;
        timelineItems[2].querySelector('p').textContent = t.agawa.description;
        
        const agawaAchievements = timelineItems[2].querySelectorAll('.timeline-achievements li');
        t.agawa.achievements.forEach((achievement, index) => {
            if (agawaAchievements[index]) {
                agawaAchievements[index].textContent = achievement;
            }
        });
        
        // Projekty studenckie
        timelineItems[3].querySelector('h3').textContent = t.studentProjects.title;
        timelineItems[3].querySelector('h4').textContent = t.studentProjects.company;
        timelineItems[3].querySelector('.timeline-date').textContent = t.studentProjects.date;
        timelineItems[3].querySelector('p').textContent = t.studentProjects.description;
        
        const studentAchievements = timelineItems[3].querySelectorAll('.timeline-achievements li');
        t.studentProjects.achievements.forEach((achievement, index) => {
            if (studentAchievements[index]) {
                studentAchievements[index].textContent = achievement;
            }
        });
    }
    
    // Aktualizacja sekcji "Edukacja"
    document.querySelector('.education-section h2 i + span').textContent = t.educationTitle;
    
    const educationItem = document.querySelector('.education-item');
    if (educationItem) {
        educationItem.querySelector('.education-year').textContent = t.education.date;
        educationItem.querySelector('.education-content h3').textContent = t.education.degree;
        educationItem.querySelector('.education-content h4').textContent = t.education.school;
        
        const educationParagraphs = educationItem.querySelectorAll('.education-content p');
        if (educationParagraphs.length >= 2) {
            educationParagraphs[0].textContent = t.education.thesis;
            educationParagraphs[1].textContent = t.education.specialization;
        }
    }
    
    // Aktualizacja sekcji "Certyfikaty"
    document.querySelector('.certificates-section h2 i + span').textContent = t.certificatesTitle;
    
    const certificateItems = document.querySelectorAll('.certificate-item');
    t.certificates.forEach((cert, index) => {
        if (certificateItems[index]) {
            certificateItems[index].querySelector('h3').textContent = cert.name;
            certificateItems[index].querySelector('p').textContent = cert.date;
        }
    });
    
    // Aktualizacja sekcji "Umiejętności interpersonalne"
    document.querySelector('.interpersonal-section h2 i + span').textContent = t.interpersonalTitle;
    
    const interpersonalItems = document.querySelectorAll('.interpersonal-item');
    t.interpersonal.forEach((skill, index) => {
        if (interpersonalItems[index]) {
            interpersonalItems[index].querySelector('h3').textContent = skill.title;
            interpersonalItems[index].querySelector('p').textContent = skill.description;
        }
    });
    
    // Aktualizacja sekcji językowych
    document.querySelector('.languages-section h3').textContent = t.languages;
    const languages = document.querySelectorAll('.language span');
    if (languages.length >= 2) {
        languages[0].textContent = t.polish;
        languages[1].textContent = t.english;
    }
    
    // Aktualizacja poziomów językowych
    document.querySelector('.level.native').title = t.nativeLang;
    document.querySelector('.level.intermediate').title = t.intermediateLang;
    
    // Aktualizacja sekcji umiejętności
    document.querySelector('.skills-section h3').textContent = t.technicalSkills;
    const skillGroups = document.querySelectorAll('.skill-group h4');
    if (skillGroups.length >= 5) {
        skillGroups[0].textContent = t.frontendSkills;
        skillGroups[1].textContent = t.backendSkills;
        skillGroups[2].textContent = t.databaseSkills;
        skillGroups[3].textContent = t.dataAnalysisSkills;
        skillGroups[4].textContent = t.toolsSkills;
    }
    
    // Aktualizacja przycisku drukowania
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.innerHTML = `<i class="fas fa-print"></i> ${t.printButton}`;
    }
    
    // Aktualizacja stopki
    document.querySelector('footer p').textContent = t.footer;
    
    // Aktualizacja przycisku zmiany trybu
    document.getElementById('themeToggle').setAttribute('aria-label', t.themeToggle);
}

// Inicjalizacja języka na podstawie preferencji zapisanej w localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'pl' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    }
    
    // Pierwsze ładowanie zawartości w wybranym języku
    updatePageContent();
    
    // Obsługa przycisku przełączania języka
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const newLang = currentLanguage === 'pl' ? 'en' : 'pl';
            changeLanguage(newLang);
        });
    }
});