// a simple ES5 Class declaring a custom Header component
// by extending the generic HTMLElement class, you can create any type of element you want
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="footer-left">
            <p class="footer-links">
                <a href="portfolio.html">Portfolio</a>
                <a href="contact.html">Contact</a>
                <a href="services.html">Services</a>
                <a href="about.html">About</a>
            </p>

        </div>
        <div class="footer-center">
            <div class="footer-icons">
                <a href="https://www.facebook.com/Fortress-Home-Builders-2271096979879466/"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/fortresshomebuilders/"><i class="fab fa-instagram"></i></a>
            </div>
            <br />
            <div class="contact-info">
                <a class="contact-link" href="tel:+1406-270-0275">406-270-0275</a>
                <p>436 Fehlberg Lane</p>
                <p>Coram, MT 59913</p>
            </div>
        </div>
        <div class="footer-right">
            <div class="logo">
                <a href="index.html"><img src="assets/images/FortressHBlogo_color_texture_web.jpg" alt="logo" class="image-logo"></a>
            </div>
            <br />

            <p class="copyright">&copy; Fortress Home Builders. All Rights Reserved </p>
        </div>
    </footer>
    `;
    }
}

// before you can start using your custom element, you'll need to register it with the customElements.define() method
customElements.define('footer-component', Footer);