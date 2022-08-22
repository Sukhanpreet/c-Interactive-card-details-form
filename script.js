console.log("script working")

let cardNumber=document.querySelector('#card-number')
let cardName=document.querySelector('#card-name');
let cardCVC=document.querySelector('#card-cvc')
let cardMM=document.querySelector('#exp-month')
let cardYY=document.querySelector('#exp-year')


console.log(cardName.innerHTML);
console.log(cardNumber.innerHTML);
console.log(cardCVC.innerHTML);
console.log(cardMM.innerHTML);
console.log(cardYY.innerHTML);


let inputs=document.querySelectorAll('[data-type]');
console.log(inputs);
