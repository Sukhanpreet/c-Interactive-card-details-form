console.log("script working")

let cardName=document.querySelector('#card-name');
let cardNumber=document.querySelector('#card-number')
let cardCVC=document.querySelector('#card-cvc')
let cardMM=document.querySelector('#exp-month')
let cardYY=document.querySelector('#exp-year')

let isFormValid=false;   

// =============== name input =================
let nameInput = document.querySelector('[data-type="name"]');

let resetelem = (elem)=>{   
    elem.closest('.parent').lastElementChild.innerHTML="";
    elem.classList.remove('invalid');
}

nameInput.addEventListener('input',()=>{
    resetelem(nameInput);

    if(nameInput.value.length<=24) {
        if(nameInput.value==''){
            cardName.textContent='jane appleseed';
        }else{
            cardName.textContent=nameInput.value;
        }
    }
});

// ============== card number =============
let numberInput= document.querySelector('[data-type="number"]');
numberInput.addEventListener('input',()=>{
    resetelem(numberInput);

    if(numberInput.value.length<=19) {
        if(numberInput.value==''){
            cardNumber.textContent='0000 0000 0000 0000';
        }else{
            cardNumber.textContent=numberInput.value;
        }
    }
});

// =============== exp month ================
let monthInput= document.querySelector('[data-type="month"]');
monthInput.addEventListener('input',()=>{
    resetelem(monthInput);
    
    if(monthInput.value>12) monthInput.value=12;
    if(monthInput.value<0) monthInput.value=0;
    
    if(monthInput.value=='' || monthInput.value==0){
        cardMM.textContent='00';
    }else{
        cardMM.textContent=monthInput.value;
    }

});

// =============== exp year ================
let yearInput= document.querySelector('[data-type="year"]');

yearInput.addEventListener('input',()=>{
    resetelem(yearInput);
    
    if(yearInput.value>99) yearInput.value=99;
    if(yearInput.value<0) yearInput.value=0;
    
    if(yearInput.value=='' || yearInput.value==0){
        cardYY.textContent='00';
    }else{
        cardYY.textContent=yearInput.value;
    }
    console.log(yearInput.value);
});
// =============== exp year ================
let cvcInput= document.querySelector('[data-type="cvc"]');

cvcInput.addEventListener('input',()=>{
    resetelem(cvcInput);
    
    if(cvcInput.value>999) cvcInput.value=999;
    if(cvcInput.value<0) cvcInput.value=0;
    
    if(cvcInput.value=='' || cvcInput.value==0){
        cardCVC.textContent='000';
    }else{
        cardCVC.textContent=cvcInput.value;
    }
    console.log(cvcInput.value);
});



let submit=document.getElementById('submit');
const form=document.querySelector('.card-form');
const thanks=document.querySelector('.thankyou');

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('here');
    
    validateInputs();
    
    if(isFormValid){
        form.remove();
        thanks.classList.remove('hidden');
    }
});

const validateInputs = () =>{
    isFormValid=true;

    let nameRegex=/^[a-z][a-z .,'-]{0,31}$/ig;
    let numberRegex =/^\d{4} \d{4} \d{4} \d{4} *$/
    let expRegex =/^\d{2}$/;
    let cvcRegex =/^\d{3}$/;

    if(!nameInput.value){
        nameInput.closest('.parent').lastElementChild.innerHTML="Can't be blank";
        nameInput.classList.add('invalid');
        isFormValid=false;
    }else if(nameRegex.test(nameInput.value)==false){
        nameInput.closest('.parent').lastElementChild.innerHTML="Wrong format";
        nameInput.classList.add('invalid');
        isFormValid=false;
    }

    if(!numberInput.value){
        numberInput.closest('.parent').lastElementChild.innerHTML="Can't be blank number";
        numberInput.classList.add('invalid');
        isFormValid=false;
    }else if(numberRegex.test(numberInput.value)==false){
        numberInput.closest('.parent').lastElementChild.innerHTML="Wrong format number";
        numberInput.classList.add('invalid');
        isFormValid=false;
    }

    if(!monthInput.value){
        monthInput.closest('.parent').lastElementChild.innerHTML="Can't be blank";
        monthInput.classList.add('invalid');
        isFormValid=false;
        console.log(expRegex.test(monthInput.value));
    }else if(expRegex.test(monthInput.value)==false || monthInput.value==0){
        monthInput.closest('.parent').lastElementChild.innerHTML="Wrong format";
        monthInput.classList.add('invalid');
        isFormValid=false;
    }

    if(!yearInput.value){
        yearInput.closest('.parent').lastElementChild.innerHTML=" Can't be blank";
        yearInput.classList.add('invalid');
        isFormValid=false;
    }else if(expRegex.test(yearInput.value)==false){
        yearInput.closest('.parent').lastElementChild.innerHTML="Wrong format";
        yearInput.classList.add('invalid');
        isFormValid=false;
    }
    if(!cvcInput.value){
        cvcInput.closest('.parent').lastElementChild.innerHTML=" Can't be blank cvc";
        cvcInput.classList.add('invalid');
        isFormValid=false;
    }else if(cvcRegex.test(cvcInput.value)==false){
        cvcInput.closest('.parent').lastElementChild.innerHTML="Wrong format cvc";
        cvcInput.classList.add('invalid');
        isFormValid=false;
    }


}


