const mytxt = document.getElementById("mytxt");
const submit = document.getElementById("submit");
const resultElement = document.getElementById("resultElement");

let age;

submit.onclick = function () {
    age = mytxt.value; 
    age = Number(age); 

    if (age >= 18) {
        resultElement.textContent = "You can vote";
    } else if (age === 0) {
        resultElement.textContent = "You are just born";
    } else if (age < 0) {
        resultElement.textContent = "You are not born";
    } else {
        resultElement.textContent = "You can't vote";
    }
}
