addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")

    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        console.log(dato);
        precio=Number(dato.precio)
            if(dato.moneda=="dolares"){
                respuesta.innerHTML="dolares a pesos = "+ precio*5056.34
                
            }
            else if (dato.moneda=="pesos" ){
                respuesta.innerHTML="pesos a dolares ="+precio*0.00020
            }
        })



        document.querySelector("#selecionar").addEventListener("change", (e)=>{          
            if(e.target.value =="dolares"){
                cambiar.innerHTML = "ingrese dolares a pesos colombianos "
    
            }
            else if(e.target.value =="pesos"){
                cambiar.innerHTML="ingrese pesos colombianos a dolares"
    
            }
        })


    
})