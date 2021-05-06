const contlink = document.getElementById("contlink");
const content = document.getElementById("cont");
const main = document.getElementById("maindiv");
function show (){
    if (content.classList.contains ("hide")){
        main.classList.remove ("full");
        main.classList.add("mainDiv");
        content.classList.remove("hide");
        content.classList.add("contact");   
    }
    else{
        main.classList.add ("full");
        main.classList.remove("mainDiv");
        content.classList.add("hide");
        content.classList.remove("contact"); 
    }
}
contlink.addEventListener ("click", show);
