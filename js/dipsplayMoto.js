import { fetchMotoData } from "./fetchMotoData.js";
import { motoData } from "./motoData.js";




const motoCard = (item) => `
<div class="gallery-item">
    <img src="${item.imgSrc || item.name}" alt="${item.alt}">
    <div class="info">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div class="rent-button-cnt">
            <span>${item.price}€ / Day</span>
            <button class="open-modal">See Details</button>
        </div>
    </div>
</div>
` ;

const motoInfo = (info)=>  `
<div id="modal-inner-cnt">
    <div id="modal-img-cnt"><img src="${info.imgSrc}" alt="${info.alt}"></div>
    <div id="modal-details-cnt">
        <h2>${info.name}</h2>
        <p>${info.description}</p>
        <p>Price: ${info.price}</p>
        <p>Availability: ${info.availability}</p>
        <p>Features: ${info.features.join(', ')}</p>
        <p>Rating: ${info.rating}</p>
        <p>License Required: ${info.licenseRequired}</p>
    </div>
</div>`;

async function displayMotoData() {
    try {
        const data = await fetchMotoData();
        const modal = document.querySelector('.fleet-modal');
        const gallery = document.querySelector('.gallery');
        
        if (data){
            gallery.innerHTML = data.map(item =>motoCard(item)).join('');
        modal.style.display="none";
        }
    } catch (error) {
        console.error('Error fetching moto data:', error);
    }
    
}


async function makeModalInfo(motoName){
    try{
        const data = await fetchMotoData();
        const moto  = data.find(moto => moto.name === motoName);
        if (moto) {
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
    
    displayMotoData().then(() => {
        const motos = document.querySelectorAll('.gallery-item');
        // console.log(motos);

        motos.forEach((moto) => {
            moto.addEventListener('click', async function(e) {
                const motoName = this.children[1].firstElementChild.innerText;
                modal.style.display='flex';
                
                const actualMoto = await makeModalInfo(motoName);
                
                if (actualMoto) {
                    const motoModalcnt = document.querySelector('.moto-modal-inner-wrapper');
                    motoModalcnt.innerHTML = motoInfo(actualMoto);
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


    async function filterMotos(value){
        const data = await fetchMotoData();
        const res =  data.sort((a, b) => {
            if (value === 'price') {
                return a.price - b.price;
            } 
            else if (value === 'name') {
                return a.name.localeCompare(b.name);
            } else if (value === 'rating') {
                return a.rating - b.rating;
            }
        });  
        return res;
    }

    const filter = document.getElementById('filter');

    function makeMotoCards(data){
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML='';
        if (data){
            gallery.innerHTML = data.map(item => motoCard(item)).join('');
        modal.style.display="none";
       
        }else{
            console.log('ERROR');
        }

        const motos = document.querySelectorAll('.gallery-item');
        motos.forEach((moto) => {
            moto.addEventListener('click', async function(e) {
                const motoName = this.children[1].firstElementChild.innerText;
                modal.style.display='flex';
                
                const actualMoto = await makeModalInfo(motoName);
                
                if (actualMoto) {
                    const motoModalcnt = document.querySelector('.moto-modal-inner-wrapper');
                    motoModalcnt.innerHTML = motoInfo(actualMoto);
                    motoModal.style.display = 'block';
                    modal.style.display='none'
                }
                else{
                    
                    modal.style.display='flex'
                }
            });
        });
    }
    

    filter.addEventListener('change', async function(e){
        modal.style.display= "flex";
        const motos = await filterMotos(e.target.value);
       if(motos){
        makeMotoCards(motos)
        modal.style.display= 'none';
       }
    })

});

