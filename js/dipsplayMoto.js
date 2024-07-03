import { fetchMotoData } from "./fetchMotoData.js";



async function displayMotoData() {
    try {
        const data = await fetchMotoData();
        // console.log(data);
        const modal = document.querySelector('.fleet-modal');
        const gallery = document.querySelector('.gallery');
        
        if (data){
            gallery.innerHTML = data.map(item => `
            <div class="gallery-item">
                <img src="${item.imgSrc || item.name}" alt="${item.alt}">
                <div class="info">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
        // modal.style.display="none";
        }else{
            console.log('hello');
        }
        // Example: Render the data to the DOM
        
       
    } catch (error) {
        console.error('Error fetching moto data:', error);
    }
}


document.addEventListener('DOMContentLoaded', function(){
    displayMotoData();
})

