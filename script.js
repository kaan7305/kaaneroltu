let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles the close icon
    navbar.classList.toggle('active');  // Toggles the menu visibility
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');  // Ensures the icon reverts when scrolling
    navbar.classList.remove('active');  // Ensures the menu closes when scrolling
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.services-container', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Student', 'Computer Scientist', 'Electrical Engineering'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const typedAbout = new Typed('.typed-about', {
    strings: [
        'I am Kaan Eroltu, a Hodson Scholar at Johns Hopkins University, where I am pursuing a degree in Computer Science and Electrical Engineering. With a strong foundation in interdisciplinary research, I have worked on diverse projects spanning quantum mechanics, machine learning, and computational biology. My academic journey has been fueled by scholarships like the Dare to Dream (Shelby Davis) Full Scholarship at UWC Adriatic and numerous accolades for academic excellence, including national and international distinctions in mathematics, physics, and engineering.',
        'My passion for innovation and problem-solving is evident in my research endeavors. From modeling the optical properties of nanocomposites at UC Santa Cruz to developing a convolutional neural network for Alzheimer’s detection, I thrive in merging theory with application. As an advocate for societal impact, I co-founded initiatives like "Help People with Disabilities" and launched non-profit projects to combat social isolation, reflecting my commitment to community engagement.',
        'In addition to research, I have a keen interest in entrepreneurship. Through programs such as LaunchX and the Entrepreneurship Club at UWC Adriatic, I’ve honed my skills in business strategy, leadership, and product development. My ventures, including AI-powered designs and phone case sales on Etsy, highlight my ability to merge creativity with technology for tangible results.',
        'Outside academia, I am an accomplished athlete and a lifelong learner. As a competitive tennis and table tennis player, I’ve represented my teams at regional and national levels, demonstrating discipline, leadership, and teamwork. My hobbies extend to hiking, kayaking, and writing poetry, where I explore personal narratives and broader societal themes.',
        'Proficient in multiple languages, including Turkish, English, Italian, and German, I enjoy building connections across cultures and disciplines. I am deeply passionate about leveraging my technical and creative abilities to address global challenges, whether in advancing AI ethics, promoting education equity, or developing sustainable solutions for the future.',
        'Looking ahead, I aim to blend my academic pursuits with entrepreneurial ventures, contributing to cutting-edge innovations and impactful community projects. Driven by curiosity and resilience, I am eager to take on challenges that inspire growth and create meaningful change.'
    ],
    typeSpeed: 25,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
});
