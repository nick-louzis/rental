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
        modal.style.display="none";
       
        }else{
            console.log('hello');
        }
        // Example: Render the data to the DOM
        
       
    } catch (error) {
        console.error('Error fetching moto data:', error);
    }
    
}


async function makeModalInfo(motoName){

    try{
        const data = await fetchMotoData();

        const moto  = data.find(moto => moto.name === motoName)
        if (moto) {
            // console.log(moto);
            return moto;
        } else {
            console.log(`Motorcycle with name ${motoName} not found`);
            return null;
        }

    } catch(error){
        console.log(error);
    }
}






document.addEventListener('DOMContentLoaded', function(){
    const fleetModalTooger = document.querySelector('#toogle-fleet-modal');
    const motoModal = document.querySelector('.moto-modal')
    const modal = document.querySelector('.fleet-modal');
    console.log(modal);
    displayMotoData().then(() => {
        const motos = document.querySelectorAll('.gallery-item');
        // console.log(motos);

        motos.forEach((moto) => {
            moto.addEventListener('click', async function(e) {
                const motoName = this.children[1].firstElementChild.innerText;
                modal.style.display='flex';
                
                const actualMoto = await makeModalInfo(motoName);
                
                if (actualMoto) {
                    let motoInfo = `
                        <div id="modal-inner-cnt">
                            <div id="modal-img-cnt"><img src="${actualMoto.imgSrc}" alt="${actualMoto.alt}"></div>
                            <div id="modal-details-cnt">
                                <h2>${actualMoto.name}</h2>
                                <p>${actualMoto.description}</p>
                                <p>Price: ${actualMoto.price}</p>
                                <p>Availability: ${actualMoto.availability}</p>
                                <p>Features: ${actualMoto.features.join(', ')}</p>
                                <p>Rating: ${actualMoto.rating}</p>
                                <p>License Required: ${actualMoto.licenseRequired}</p>
                            </div>
                        </div>`;
                    
                    
                    const motoModalcnt = document.querySelector('.moto-modal-inner-wrapper');
                    motoModalcnt.innerHTML = motoInfo;
                    motoModal.style.display = 'block';
                    modal.style.display='none'
                }
                else{
                    
                    modal.style.display='flex'
                }
            });
        });
    }).catch((error) => {
        console.log(error);
    });;

    
    fleetModalTooger.addEventListener('click',function(){
        motoModal.style.display='none'
    })

});

