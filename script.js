let description_box = document.querySelectorAll(".description_box");

description_box.forEach(element => {
    let button = element.querySelector("button");
    button.onclick = function() {
        element.classList.toggle("active");
        button.classList.toggle("active_button");
    
        if(button.classList.contains("active_button")) {
            button.innerHTML = "Read Less";
        }else{
            button.innerHTML = "Read More";
        }
    }
});
