class CustomHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <div id="header">
            <div><img src="" alt=""></div>
            <nav id="nav"><ul id="navlinks">
                <li><a href="Sercives.html">Services</a> </li>
                <li><a href="About.html">About</a></li>
                <li><a href="Fleet.html">Fleet</a></li>
                <button id="mobileInner">X</button>
            </ul>
            
            </nav>
            <button id="mobile">X</button>
        </div>

    </header>`;
    }
}

customElements.define("custom-header",CustomHeader)


document.addEventListener('DOMContentLoaded',function(){

    const menuButtonInner = document.getElementById('mobileInner');
    const navlinks = document.getElementById('nav');
    menuButtonInner.addEventListener('click',function(){
        navlinks.style.left='100%';
     })

    const menuButton = document.getElementById('mobile');
    menuButton.addEventListener('click',function(){
        navlinks.style.left='0px';
     })


    
   
    const target = document.querySelector('#cards-wrapper');
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

      observer.observe(target);
      observer.observe(discoverText);

      document.querySelectorAll('.flip-card-inner').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
})