class CustomHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <div id="header">
            <div><img src="" alt=""></div>
            <nav id="nav">
                <ul id="navlinks">
                    <li><a class="nav-link href="#">Home</a> </li>
                    <li><a class="nav-link href="Sercives.html">Services</a> </li>
                    <li><a class="nav-link href="Fleet.html">Fleet</a></li>
                    <li><a class="nav-link href="#contact">Contact</a></li>
                    <li><a class="nav-link href="About.html">About</a></li>
                    <button id="mobileInner">X</button>
                </ul>
            </nav>
            <button id="mobile">Menu</button>
        </div>
    </header>`;
    }
}



class CustomFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@motobikerentals.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Bike Lane, Moto City, MC 56789</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Bikes</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 MotoBike Rentals. All rights reserved.</p>
        </div>
    </footer>`
    }
}

customElements.define("custom-header",CustomHeader)
customElements.define("custom-footer",CustomFooter)


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


    const header = document.getElementById('header');

    var links = document.querySelectorAll('.nav-link');
    console.log(links)
    function instersector(){
        links.forEach((link) => {
            link.setAttribute('style', `color:#eec201;
                                        padding:2px 5px; border-radius:5px; flex-grow:1`);
        });  
    }

    function wipeInstersector(){
        links.forEach((link) => {
            link.setAttribute('style', `background: none;
                                        padding:2px 5px; border-radius:0; `);
        });  
    }
    


    try{
        const discoverText = document.querySelector('#discoverParagraph');

        const video = document.querySelector('.video-cnt');
        const nav = document.querySelector('#header');

    function handleIntersection(entries) {
        entries.map((entry) => {
           
          if (entry.isIntersecting) {
            header.classList.add('transparent');
            instersector();
            // entry.target.classList.add('visible')
            

          } else {
            // console.log(entry,'NotIntersecting');
            wipeInstersector()
            header.classList.remove('transparent');
        
            // entry.target.classList.remove('visible')
            
          }

        


        });
      }

      const observer = new IntersectionObserver(handleIntersection);

    //   observer.observe(discoverText);
    observer.observe(video);
    }
    catch(e){
        return null;
    }


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

const modal = document.getElementById('bookModal');
    const openModalBtn = document.getElementById('openBookModal');
    const closeModalBtn = document.querySelector('.custom-close-button');
    const circle = document.querySelector('.custom-circle');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        setTimeout(() => {
            circle.classList.add('animate');
        }, 1000); // Adjust timing as needed
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        circle.classList.remove('animate');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            circle.classList.remove('animate');
        }
    });