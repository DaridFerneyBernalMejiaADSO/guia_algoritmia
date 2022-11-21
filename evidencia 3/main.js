addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")
     cont=1;
    
    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        let imple=dato.imple
        let tabla =document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
             <tr>
                 <td>${cont}</td>
                 <td>${imple}</td>
              </tr>
        `)
        cont++
        
        
        
        
        
        


    })


    
})