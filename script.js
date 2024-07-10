let btns=document.querySelectorAll(".btn");
let inputs=document.querySelector("input");
let string="";
inputs.readOnly=true;
inputs.disabled=true;
btns.forEach((btn)=>{
     btn.addEventListener("click", (val)=>{
        
        if(val.target.innerHTML=='='){
            if(string.includes('%')){
                    string=eval(string.replace(/\%/g, "/100"));
                    
            }
            else if(string.includes('^')){
                
                    string=eval(string.replace(/\^/g, "**"));
            }
            
            else{
            string=eval(string);
           
            }
            inputs.value=string;
            let sound= new Audio("output-sound.mp3");
            sound.play();
            
           
            

         }
         else if(val.target.innerHTML=='C'){
               string="";
               let sound= new Audio("click-sound.mp3");
                sound.play();
                inputs.value=string;
                
        }
        else if(val.target.innerHTML=='Del'){
                  string=string.substring("",string.length-1);
                  let sound= new Audio("click-sound.mp3");
                  sound.play();
                  inputs.value=string;
        }
        else{
       string=string+val.target.innerHTML;
       let sound= new Audio("click-sound.mp3");
       sound.play();
       inputs.value=string;
       

        }
       
     })
})