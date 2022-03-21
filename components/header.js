// a simple ES5 Class declaring a custom Header component
// by extending the generic HTMLElement class, you can create any type of element you want
class Header extends HTMLElement {
    constructor(props) {
        super(props);
        this.addEventListener('click', () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');
            //toggle nav
            nav.classList.toggle('nav-active');

            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0}s';
                }
            });
            //Burger Animation
            burger.classList.toggle('toggle')
            })        
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
        <div data-nc-container="top-center">
            <nav class="sticky Header-nav Header-nav--primary" data-nc-element="primary-nav" data-content-field="navigation">
                <div class="logo">
                    <a href="index.html"><img src="assets/images/FortressHBlogo_color_texture_web.jpg" alt="logo" class="image-logo"></a>
                </div>
                <div class="nav-links">
                    <a href="index.html" class="Header-nav-item" data-test="template-nav">Home</a>
                    <a href="portfolio.html" class="Header-nav-item" data-test="template-nav">Portfolio</a>
                    <a href="about.html" class="Header-nav-item" data-test="template-nav">About</a>
                    <a href="services.html" class="Header-nav-item" data-test="template-nav">Services</a>
                    <a href="contact.html" class="Header-nav-item" data-test="template-nav">Contact</a>
                </div>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </div>
    </header>
    `;
    }  
}

// before you can start using your custom element, you'll need to register it with the customElements.define() method
customElements.define('header-component', Header);