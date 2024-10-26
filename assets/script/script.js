const body=document.querySelector("body");
let upSection=document.getElementById("upSection");
// body.addEventListener("scroll",SchrollUP());
// // function SchrollUP(){
// //     if(document.documentElement.scrollTop>300){
// //         upSection.style.display="block";
// //     }
    
// //     else{
// //         upSection.style.display="none";
// //     }
// // }
setInterval(()=>{
        if(document.documentElement.scrollTop>300){
            upSection.style.display="block";
        }
        
        else{
            upSection.style.display="none";
        }
},500)


