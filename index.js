document.getElementById("Btn").addEventListener("click", pcheck);
document.getElementById("mode").addEventListener("click", mode);
function pcheck(){
    const text = document.getElementById("Input")
    const v = text.value;
    const value = v.toLowerCase();
    const Upvalue= value.split('').reverse().join('')
    const Result = document.getElementById("r1")
    if(value==Upvalue){
        console.log("done")
        Result.textContent=`"${text.value}" is a palindrome`;
    }
    else{
        Result.textContent=`"${text.value}" is not a palindrome`
        console.log("Error")
    }  
   text.value=""
}
function mode() {
    // Toggle text color of the body
    if (document.body.style.color === "white" || window.getComputedStyle(document.body).color === "rgb(255, 255, 255)") {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white";
    }

    // Toggle background color of the body
    if (document.body.style.background === "black" || window.getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)") {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "black";
    }

    // Toggle border color of the container element
    const container = document.querySelector(".container");
    if (container) {
        const computedBorderColor = window.getComputedStyle(container).borderColor;
        if (computedBorderColor === "rgb(255, 255, 255)") {
            container.style.borderColor = "black";
            console.log("Border color changed to black");
        } else {
            container.style.borderColor = "white";
            console.log("Border color changed to white");
        }
    } else {
        console.error("Element with class 'container' not found.");
    }
    const re = document.querySelector(".result");
    if (re) {
        const computedBorderColor = window.getComputedStyle(re).borderColor;
        if (computedBorderColor === "rgb(255, 255, 255)") {
            re.style.borderColor = "black";
            console.log("Border color changed to black");
        } else {
            re.style.borderColor = "white";
            console.log("Border color changed to white");
        }
    } else {
        console.error("Element with class 'container' not found.");
    }
}

    const container=  document.querySelector(".container")
    console.log(container.style)
   // container.style.borderColor="black";

    
    
