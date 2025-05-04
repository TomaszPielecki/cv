// CV Interaktywne - skrypt JavaScript 2025
// Konfiguracja danych CV
const cvConfig = {
    profilePhoto: 'assets/images/tom.jpg', // Zaktualizowana ścieżka do zdjęcia
    showPhotoPlaceholder: false, // Zmieniłem na false, ponieważ mamy już zdjęcie
    
    // Obecny stan (możesz zmienić na: "Frontend Developer", "Backend Developer", "Full-Stack Developer")
    currentRole: 'Full-Stack Developer',
    
    // Dostosuj poziomy umiejętności (jeżeli chcesz)
    skills: {
        // Wartości są już ustawione w HTML i CSS
    },
    
    // Dodatkowe ustawienia
    settings: {
        animationsEnabled: true,
        printOptimized: true,
        enhancedVisuals: true
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Obsługa przełącznika trybu ciemnego
    initDarkModeToggle();
    
    // Animacja na sekcji umiejętności
    animateSkillBars();
    
    // Animacje przy scrollowaniu
    initScrollAnimations();
    
    // Interaktywne karty projektów
    initProjectCards();
    
    // Licznik doświadczenia
    initCounters();
    
    // Dodaj prawdziwe zdjęcie jeśli istnieje
    if (!cvConfig.showPhotoPlaceholder) {
        const profilePhoto = document.querySelector('.profile-photo');
        if (profilePhoto) {
            const placeholder = profilePhoto.querySelector('.photo-placeholder');
            if (placeholder) {
                profilePhoto.removeChild(placeholder);
                
                const img = document.createElement('img');
                img.src = cvConfig.profilePhoto;
                img.alt = 'Tomasz Pielecki';
                img.className = 'profile-image';
                profilePhoto.appendChild(img);
            }
        }
    }
    
    // Aktualizuj tytuł zawodowy
    const roleTitle = document.querySelector('.profile h2');
    if (roleTitle) {
        roleTitle.textContent = cvConfig.currentRole;
    }
    
    // Wyłącz animacje jeśli wybrano
    if (!cvConfig.settings.animationsEnabled) {
        document.querySelectorAll('.typewriter').forEach(el => {
            el.classList.remove('typewriter');
        });
    }

    // Inicjalizacja nowych funkcji
    if (cvConfig.settings.enhancedVisuals) {
        initParticleBackground();
        addProjectBadges();
        addSkillChart();
        addProgressBar();
        enhanceInterpersonalItems();
        addStatisticsCounters();
        addPrintButton();
    }
});

// Inicjalizacja przełącznika trybu ciemnego
function initDarkModeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    
    // Sprawdź preferencje zapisane w localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Obsługa kliknięcia przycisku
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Zmiana ikony
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Animacja pasków poziomu umiejętności
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const level = item.getAttribute('data-level');
        const progressBar = item.style;
        
        // Początkowo ukryj pasek progresu
        progressBar.width = '0';
        
        // Animuj pasek progresu po krótkim opóźnieniu
        setTimeout(() => {
            item.classList.add('animated');
        }, 300);
    });
}

// Animacje elementów przy scrollowaniu
function initScrollAnimations() {
    // Opcje dla Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // Callback dla observer'a
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Utwórz observer
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Elementy do animacji
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    // Dodaj klasy do stylowania przed animacją
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    projectCards.forEach(card => {
        card.classList.add('slide-up');
        observer.observe(card);
    });
    
    timelineItems.forEach(item => {
        item.classList.add('slide-in');
        observer.observe(item);
    });
    
    certificateItems.forEach(cert => {
        cert.classList.add('scale-in');
        observer.observe(cert);
    });
}

// Interaktywne karty projektów
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Efekt podświetlenia przy najechaniu
        card.addEventListener('mouseenter', function() {
            this.classList.add('highlighted');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('highlighted');
        });
        
        // Dodaj tagi technologiczne z dodatkowym efektem
        const techTags = card.querySelectorAll('.project-tech span');
        techTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Dodaj klasę 'active' do klikniętego taga
                this.classList.toggle('active');
                
                // Opcjonalnie możesz dodać logikę filtrowania projektów po technologiach
            });
        });
    });
}

// Animowane liczniki dla doświadczenia
function initCounters() {
    // Dodaje liczniki do osiągnięć w sekcji doświadczenia
    const achievements = document.querySelectorAll('.timeline-achievements li');
    
    achievements.forEach(item => {
        // Szukaj liczb w tekście osiągnięć
        const text = item.textContent;
        const numbers = text.match(/\d+%?/g);
        
        if (numbers && numbers.length > 0) {
            numbers.forEach(number => {
                const numValue = parseInt(number);
                const isPercent = number.includes('%');
                
                // Utwórz span dla animowanej liczby
                const numSpan = document.createElement('span');
                numSpan.classList.add('counter');
                numSpan.setAttribute('data-target', numValue);
                numSpan.textContent = '0' + (isPercent ? '%' : '');
                
                // Zamień tekst z liczbą na animowany span
                const newText = text.replace(number, `<span class="counter" data-target="${numValue}">0${isPercent ? '%' : ''}</span>`);
                item.innerHTML = newText;
            });
        }
    });
    
    // Animuj liczniki, gdy są widoczne
    const options = {
        threshold: 0.8
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const isPercent = counter.textContent.includes('%');
                    let count = 0;
                    
                    const updateCounter = () => {
                        const increment = target / 50; // Szybkość animacji
                        if (count < target) {
                            count += increment;
                            counter.textContent = Math.ceil(count) + (isPercent ? '%' : '');
                            setTimeout(updateCounter, 30);
                        } else {
                            counter.textContent = target + (isPercent ? '%' : '');
                        }
                    };
                    
                    updateCounter();
                });
                
                counterObserver.unobserve(entry.target);
            }
        });
    }, options);
    
    // Obserwuj sekcję z osiągnięciami
    const timelineContent = document.querySelector('.timeline');
    if (timelineContent) {
        counterObserver.observe(timelineContent);
    }
}

// Dodaj efekt przewijania do nawigacji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dodatkowe style CSS dla animacji JS
document.head.insertAdjacentHTML('beforeend', `
<style>
    /* Animacje dla elementów strony */
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .slide-up {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .slide-in {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .visible {
        opacity: 1;
        transform: translate(0) scale(1);
    }
    
    .highlighted {
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
        border-left: 5px solid var(--primary-color);
    }
    
    .counter {
        font-weight: bold;
        color: var(--primary-color);
    }
    
    .project-tech span.active {
        background-color: var(--primary-color);
        color: white;
        transform: scale(1.1);
    }
    
    .skill-item.animated::after {
        animation: growBar 1s forwards;
    }
    
    @keyframes growBar {
        from { width: 0; }
        to { width: attr(data-level); }
    }
</style>
`);

// Dostosuj CV do wydruków
const printStyles = `
@media print {
    body {
        background-color: white !important;
        font-size: 12pt;
    }
    
    .container {
        display: block;
        box-shadow: none;
        margin: 0;
        width: 100%;
    }
    
    .sidebar {
        background-color: white !important;
        color: black !important;
        padding: 1cm 0;
    }
    
    .profile-photo {
        border: 1px solid #333;
    }
    
    .photo-placeholder {
        background-color: #eee !important;
        color: #333 !important;
    }
    
    .skills-section h3, .languages-section h3,
    .profile h2, .info-item i {
        color: #333 !important;
    }
    
    section h2 i, .timeline-date, .education-year {
        color: #333 !important;
    }
    
    footer {
        background-color: white !important;
        color: #333 !important;
    }
    
    .project-card, .certificate-item {
        box-shadow: none;
        border: 1px solid #ddd;
    }
    
    /* Ukryj animacje i efekty */
    .skill-item::after,
    .timeline::before,
    .timeline-dot {
        background-color: #333 !important;
    }
    
    /* Strona łamania */
    .content section {
        page-break-inside: avoid;
    }
}`;

const printStyleSheet = document.createElement('style');
printStyleSheet.textContent = printStyles;
document.head.appendChild(printStyleSheet);

// Efekty particle.js - animowane cząsteczki w tle
function initParticleBackground() {
  const particleScript = document.createElement('script');
  particleScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  document.head.appendChild(particleScript);
  
  particleScript.onload = function() {
    // Dodaj kontener dla cząsteczek
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    particlesContainer.style.cssText = 'position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 0;';
    document.querySelector('.content').prepend(particlesContainer);
    
    // Konfiguracja cząsteczek
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 20,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#3b82f6" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#000000" },
          "polygon": { "nb_sides": 5 }
        },
        "opacity": {
          "value": 0.1,
          "random": true,
          "anim": { "enable": true, "speed": 1, "opacity_min": 0.05, "sync": false }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": { "enable": true, "speed": 2, "size_min": 1, "sync": false }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#2563eb",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
          "push": { "particles_nb": 3 }
        }
      },
      "retina_detect": true
    });
  };
}

// Dodajemy dynamiczne kolorowe znaczniki projektów
function addProjectBadges() {
  const projects = document.querySelectorAll('.project-card');
  
  const badges = [
    { text: 'Full-Stack', color: '#2563eb', textColor: 'white' },
    { text: 'Python', color: '#16a34a', textColor: 'white' },
    { text: 'Frontend', color: '#8b5cf6', textColor: 'white' }
  ];
  
  projects.forEach((project, index) => {
    const header = project.querySelector('.project-header');
    const badgeContainer = document.createElement('div');
    badgeContainer.className = 'project-badges';
    badgeContainer.style.cssText = 'display: flex; gap: 0.5rem; margin-bottom: 0.8rem;';
    
    // Przypisz odpowiedni badge do projektu
    const badge = document.createElement('span');
    const badgeType = badges[index % badges.length];
    
    badge.textContent = badgeType.text;
    badge.style.cssText = `
      background-color: ${badgeType.color};
      color: ${badgeType.textColor};
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `;
    
    badgeContainer.appendChild(badge);
    header.after(badgeContainer);
  });
}

// Dodajemy profesjonalny wykres umiejętności
function addSkillChart() {
  // Dodaj bibliotekę Chart.js
  const chartScript = document.createElement('script');
  chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  document.head.appendChild(chartScript);
  
  chartScript.onload = function() {
    // Dodaj kontener na wykres
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      const chartContainer = document.createElement('div');
      chartContainer.style.cssText = 'margin-top: 2rem; height: 250px; margin-bottom: 1rem;';
      
      const chartCanvas = document.createElement('canvas');
      chartCanvas.id = 'skillsChart';
      chartContainer.appendChild(chartCanvas);
      
      skillsSection.appendChild(chartContainer);
      
      // Utwórz wykres
      const ctx = chartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Python', 'JavaScript', 'HTML/CSS', 'Vue.js', 'Bazy Danych', 'ML/AI'],
          datasets: [{
            label: 'Umiejętności',
            data: [95, 85, 90, 85, 82, 78],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#2563eb',
            borderWidth: 2,
            pointBackgroundColor: '#2563eb',
            pointRadius: 5
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            r: {
              angleLines: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                stepSize: 20,
                backdropColor: 'transparent'
              }
            }
          }
        }
      });
    }
  };
}

// Dodajemy animowany pasek postępu na górze strony
function addProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(to right, #2563eb, #8b5cf6);
    z-index: 1000;
    transition: width 0.2s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  });
}

// Dodajemy efekt najazdów na elementy interpersonalne
function enhanceInterpersonalItems() {
  const items = document.querySelectorAll('.interpersonal-item');
  
  const colors = ['#2563eb', '#8b5cf6', '#16a34a', '#f59e0b'];
  
  items.forEach((item, index) => {
    const color = colors[index % colors.length];
    const icon = item.querySelector('i');
    
    item.addEventListener('mouseenter', () => {
      icon.style.color = color;
      icon.style.transform = 'scale(1.2) rotateY(180deg)';
      icon.style.transition = 'all 0.5s';
    });
    
    item.addEventListener('mouseleave', () => {
      icon.style.color = '';
      icon.style.transform = '';
    });
  });
}

// Dodajemy dynamiczne liczniki statystyk
function addStatisticsCounters() {
  const statsSection = document.createElement('section');
  statsSection.className = 'statistics-section';
  
  const statsTitle = document.createElement('h2');
  statsTitle.innerHTML = '<i class="fas fa-chart-line"></i> Statystyki';
  
  const statsGrid = document.createElement('div');
  statsGrid.className = 'statistics-grid';
  statsGrid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  `;
  
  const stats = [
    { icon: 'laptop-code', number: 15, text: 'Ukończonych projektów' },
    { icon: 'clock', number: 2000, text: 'Godzin kodowania' },
    { icon: 'coffee', number: 1270, text: 'Filiżanek kawy' },
    { icon: 'code-branch', number: 320, text: 'Commitów Git' }
  ];
  
  stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    statItem.style.cssText = `
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
    `;
    
    statItem.innerHTML = `
      <i class="fas fa-${stat.icon}" style="font-size: 2rem; color: #2563eb; margin-bottom: 1rem;"></i>
      <div class="stat-number" data-count="${stat.number}">0</div>
      <p style="color: #334155;">${stat.text}</p>
    `;
    
    statsGrid.appendChild(statItem);
  });
  
  statsSection.appendChild(statsTitle);
  statsSection.appendChild(statsGrid);
  
  // Dodaj sekcję przed stopką
  const footer = document.querySelector('footer');
  document.querySelector('.container').insertBefore(statsSection, footer);
  
  // Animacja liczników
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-count');
          let count = 0;
          
          const updateCounter = () => {
            const increment = target / 100;
            if (count < target) {
              count += increment;
              counter.textContent = Math.ceil(count);
              setTimeout(updateCounter, 10);
            } else {
              counter.textContent = target;
            }
          };
          
          updateCounter();
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  observer.observe(statsSection);
}

// Tryb drukowania
function addPrintButton() {
  const printBtn = document.createElement('button');
  printBtn.className = 'print-button';
  printBtn.innerHTML = '<i class="fas fa-print"></i> Drukuj CV';
  printBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  
  printBtn.addEventListener('mouseenter', () => {
    printBtn.style.transform = 'translateY(-3px)';
    printBtn.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
  });
  
  printBtn.addEventListener('mouseleave', () => {
    printBtn.style.transform = '';
    printBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
  
  printBtn.addEventListener('click', () => {
    window.print();
  });
  
  document.body.appendChild(printBtn);
}