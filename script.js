class CustomHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <div id="header">
            <div><img src="" alt=""></div>
            <nav id="nav">
                <ul id="navlinks">
                    <li><a href="Services.html">Services</a> </li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Fleet.html">Fleet</a></li>
                    <button id="mobileInner">X</button>
                </ul>
            </nav>
            <button id="mobile">Menu</button>
        </div>
    </header>`;
    }
}

customElements.define("custom-header",CustomHeader)


document.addEventListener('DOMContentLoaded',function(){

    const menuButtonInner = document.getElementById('mobileInner');
    const navlinks = document.getElementById('nav');
    menuButtonInner.addEventListener('click', function() {
        navlinks.style.left = '-100%';
    });

    const menuButton = document.getElementById('mobile');
    menuButton.addEventListener('click', function() {
        navlinks.style.left = '0';
    });


    
    const discoverText = document.querySelector('#discoverParagraph');

    function handleIntersection(entries) {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        });
      }

      const observer = new IntersectionObserver(handleIntersection);

      observer.observe(discoverText);


      document.querySelectorAll('.flip-card-inner').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });


    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('activate');
        currentIndex = (currentIndex + 1) % totalTestimonials;
        testimonials[currentIndex].classList.add('activate');
    }

    setInterval(showNextTestimonial, 3000); 
   
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

})