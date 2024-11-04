import arreglo_sobres from './data/arreglo_sobres.js';

document.addEventListener("DOMContentLoaded", () => {
    const sobresSection = document.getElementById("sobres"); // Selecciona la sección del DOM donde se mostrarán los sobres

    for (const propiedad of arreglo_sobres) {
        let resistenciaAguaHTML = '';
        
        //condiciones si resistencia_aguar = true 
        if (propiedad.resistencia_agua) 
            {resistenciaAguaHTML = 
                `<p class="text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                        <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                    </svg> Resistente al agua
                </p>`;
                       
        //condiciones si resistencia_aguar = false 
        } else 
            {resistenciaAguaHTML = 
                `<p class="text-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                        <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
                        <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
                    </svg> No resistente al agua
                </p>`;
        }        
    
        const propertyCard = 
        `<div class="col-md-4 mb-4">
                <div class="card" style="display: flex; justify-content: center; align-items: center; ">
                    <img style="width: 200px;" src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p>
                            <a href="${propiedad.enlace}" target="_blank">Ver enlace de compra</a>
                        </p>
                        <p>${propiedad.sobres} Sobres | +${propiedad.cartas} Cartas</p>
                        <p>${propiedad.costo} USD</p>
                        ${resistenciaAguaHTML}
                    </div>
                </div>
            </div>`;
        sobresSection.innerHTML += propertyCard;
    }
});

