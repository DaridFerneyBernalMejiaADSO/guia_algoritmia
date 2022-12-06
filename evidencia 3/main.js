addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")
    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries(new FormData(e.target));
        año=Number(dato.año)
        if(año%4==0 && año%100 !=0 || año % 400 ==0){
            rta.innerHTML=`es bisisento ${año}`

        }
        else{
            rta.innerHTML=`no es bisisento ${año}`
        }
  
        
        
        
        
        


    })


    
})