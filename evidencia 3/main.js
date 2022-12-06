addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")
    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        nacimiento=Number(dato.nacimiento)
        actual=Number(dato.actual)
        edad=(actual-nacimiento)
         console.log(`${edad}`)
        tabla =document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
             <tr>
                 <td>${edad}</td>
                 
              </tr>
        `)
        
        
        
        
        
        


    })


    
})