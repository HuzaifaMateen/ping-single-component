let input = document.getElementById("input");

let error = document.getElementById("error");

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    if(input.value === ""){
        error.innerText = "Input field is empty";
    } else if(input.value.indexOf("@") === -1){
        error.innerText = "Please provide valid email";
    } else {
        input.value = "";
        error.innerText = "";
    }
});