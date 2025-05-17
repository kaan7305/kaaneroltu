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
    strings: ['Student', 'Computer Scientist', 'Electrical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const typedAbout = new Typed('.typed-about', {
     strings: [
          "I am Kaan Eroltu, a Hodson Scholar at Johns Hopkins University, where I pursue a Bachelor of Science degree in Computer Science and Electrical Engineering. Having an interest in interdisciplinary research, I have been part of a variety of research projects ranging from quantum mechanics, machine learning, to computational biology. I have earned multiple scholarships, including the Shelby Davis Full Scholarship, and numerous awards for academic excellence in several academic disciplines, including international and national awards in Mathematics, Physics, and Engineering.",
          "My eagerness for innovation and problem-solving comes directly from my all-rounded approach to research. From modeling optical properties of nanocomposites in UCSC to developing convolutional neural network architectures for Alzheimer's detection, I will appreciate a good interface of theory and practical application. Given my commitment to social impact, I have co-founded initiatives such as \"Help People with Disabilities\" and pursued multiple nonprofit projects to alleviate social isolation.",
          "Besides research, I am also passionate about entrepreneurship. Through programs like LaunchX and the Entrepreneurship Club at UWC Adriatic, I have sharpened my skills in business strategy, leadership, and product development. My entrepreneurial activities, including AI-generated designs and phone case sales on Etsy, stand as proof of my creative approach to integrating technology toward real-world applications.",
          "Outside of academia, I stand as an athlete and a lifelong learner. A competitive tennis and table tennis competitor, I have demonstrated discipline, leadership, and teamwork while representing my teams at the regional and national levels. My interests include hiking, kayaking, and poetry; the latter being both a personal outlet and a mode of expression for wider societal issues.",
          "I speak Turkish, English, Italian, and German, so I enjoy building bridges across cultures and disciplines. My biggest passion is to see my technical and creative talents working to solve global problems—whether maturing AI and its ethics, fighting for education equity, or seeking sustainable solutions for the future.",
          "Looking ahead, I want to continue creating a synergy between entrepreneurial ideas and academic efforts, where innovations at the frontier and community projects can be realized with impact. I am curious, resilient, willing to confront all that inspires my growth and meaningful change."
    ],

    typeSpeed: 25,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
});
