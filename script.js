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

})