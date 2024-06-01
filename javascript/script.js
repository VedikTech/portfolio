

    let toggle_btn = document.getElementById("toggle");
    toggle_btn.addEventListener("click", () => {
        console.log("hey vedu");
        toggle_btn.classList.toggle("navitem2");
    });


     
        
     
   


/*toggle night mode light mode
let btn=document.getElementById("btnmode");
let body=document.querySelector("body");
let mode="dark";
btn.addEventListener("click", ()=>{
if(mode==="dark")
    {

        mode="light";
        body.classList.add("bodylightmode");
        body.classList.remove("body");
     console.log("light")
    }
    else{

        mode="dark";
        body.classList.add("body");
        body.classList.remove("bodylightmode");
        console.log("dark");
    }
 

  
   

});
*/