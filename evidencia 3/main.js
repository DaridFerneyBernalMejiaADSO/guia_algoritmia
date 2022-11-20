addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")

    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        numero=Number(dato.numero)
        let fare=(9/5*numero)+32;
        respuesta.innerHTML=``+fare

        })


    
})