addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")

    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        hora=Number(dato.hora)
        direccion=dato.direccion
        if (hora>=5)
        respuesta.innerHTML=`ya es hora de ir al trabajo son las ${hora} la direcion es : ${direccion} `
        else{
            respuesta.innerHTML=`aun puedes seguir durmiendo`
        }
    })


    
})