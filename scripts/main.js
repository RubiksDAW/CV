const botones = document.querySelectorAll('.w3-container .w3-text-teal button');


botones.forEach(boton =>{
    boton.addEventListener('click', e=>{
        const  texto = e.target.parentElement.nextElementSibling;
        
        texto.classList.toggle('texto-oculto')
    })
})