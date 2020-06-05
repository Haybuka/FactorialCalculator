 let num = document.querySelector("input");
 let display = document.querySelector(".display");
 let calculate = document.querySelector("#Calculate");
 let reset = document.querySelector("#Reset");
 let values = document.querySelector("#values");
 let x = Number(num.value);




 function factorial(x) {

    let result = x;
    console.log(x);

    for (let i = x - 1; i >= 1; i--) {
       console.log(x);
       console.log(i);
       result *= i;
    }
    values.textContent = result;
    values.classList.add("new");
    display.textContent = Number(num.value);
    display.classList.add("new");
    console.log(result);
    return result;
 }

 calculate.addEventListener("click", function () {
    let x = Number(num.value);
    console.log(x)
    factorial(num.value);
    console.log(x);
    console.log(num.value);


 })

 num.addEventListener("change", function () {
    display.textContent = Number(num.value);
    display.classList.add("new");
 })

 reset.addEventListener("click", function () {
    display.classList.remove("new");
    values.classList.remove("new");
    display.textContent = 0;
    values.textContent = 1;
    num.value = 0;
 })