console.log("script working")

const cardName=document.querySelector('#card-name');
const cardNumber=document.querySelector('#card-number')
const cardCVC=document.querySelector('#card-cvc')
const cardMM=document.querySelector('#exp-month')
const cardYY=document.querySelector('#exp-year')

let isFormValid=false;   

// =============== card name =================
const nameInput = document.querySelector('[data-type="name"]');

nameInput.addEventListener('input',()=>{
    resetelem(nameInput);

    if(nameInput.value.length>24){
        nameInput.value=nameInput.value.slice(0,24);
    }
    if(nameInput.value==''){
        cardName.textContent='jane appleseed';
    }else{
        cardName.textContent=nameInput.value;
    } 
});

// ============== card number =============
const numberInput= document.querySelector('[data-type="number"]');

numberInput.addEventListener('input',()=>{
    resetelem(numberInput);

    let val=numberInput.value;
    let newval='';

    val = val.replace(/\s/g, '');

    for(let i=0;i<val.length;i++){
        if(i%4 == 0 && i>0)
        newval=newval.concat(' ');
        newval=newval.concat(val[i]);
    }

    numberInput.value=newval;

    if(numberInput.value.length>19){
        numberInput.value=numberInput.value.slice(0,19);
    }
    if(numberInput.value==''){
        cardNumber.textContent='0000 0000 0000 0000';
    }else{
        cardNumber.textContent=numberInput.value;
    }
});

// =============== exp month ================
let monthInput= document.querySelector('[data-type="month"]');
monthInput.addEventListener('input',()=>{
    resetelem(monthInput);
    if(monthInput.value.length>=2){
        monthInput.value=monthInput.value.slice(0,2);
    }
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
    if(yearInput.value.length>=2){
        yearInput.value=yearInput.value.slice(0,2);
    }

    if(yearInput.value<0) yearInput.value=0;

    if(yearInput.value=='' || yearInput.value==0){
        cardYY.textContent='00';
    }else{
        cardYY.textContent=yearInput.value;
    } 
});

// =============== cvc ================
let cvcInput= document.querySelector('[data-type="cvc"]');

cvcInput.addEventListener('input',()=>{
    resetelem(cvcInput);
    
    if(cvcInput.value.length>=3){
        cvcInput.value=cvcInput.value.slice(0,3);
    }
    if(cvcInput.value=='' || cvcInput.value==0){
        cardCVC.textContent='000';
    }else{
        cardCVC.textContent=cvcInput.value;
    }
});

let resetelem = (elem)=>{   
    let msg=elem.closest('.parent').querySelector('.msg');
    msg.innerHTML="";
    elem.classList.remove('invalid');
}



const form=document.querySelector('.card-form');
const thanks=document.querySelector('.thankyou');

// ===========submit btn ================
const submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();

    validateInputs();
    
    if(isFormValid){
        form.remove();
        thanks.classList.remove('hidden');
    }
});

// err feilds
const nameError= document.getElementById('name-error');
const numberError= document.getElementById('number-error');
const expError= document.getElementById('exp-error');
const cvcError= document.getElementById('cvc-error');


// invalid inputs
const invalidate=(elem)=>{
    elem.classList.add('invalid');
    isFormValid=false;
}

// check input validity 
const validateInputs = () =>{
    
    isFormValid=true;

    let nameRegex=/^[a-z][a-z .,'-]{0,}$/ig;
    let numberRegex =/^\d{4} \d{4} \d{4} \d{4} *$/
    let monthRegex=/^0[1-9]$|^1[0-2]$/
    let yearRegex =/^\d{2}$/;
    let cvcRegex =/^\d{3}$/;
    let err1="Can't be blank";
    let err2="Wrong format";

    if(!nameInput.value){
        nameError.innerHTML=err1;
        invalidate(nameInput);
    }else if(nameRegex.test(nameInput.value)==false){
        nameError.innerHTML=err2;
        invalidate(nameInput);
    }

    if(!numberInput.value){
        numberError.innerHTML=err1;
        invalidate(numberInput);
    }else if(numberInput.value.length!=19){
        numberError.innerHTML=`${err2}, must contains 16 digits`;
        invalidate(numberInput);
    }else if(numberRegex.test(numberInput.value)==false){
        numberError.innerHTML=`${err2}, Numbers only`;
        invalidate(numberInput);
    }

    if(!monthInput.value  || monthInput.value==0){
        expError.innerHTML=err1;
        invalidate(monthInput);
    }else if(monthRegex.test(monthInput.value)==false){
        expError.innerHTML=err2;
        invalidate(monthInput);
    }

    if(!yearInput.value){
        if(expError.innerHTML===''){
            expError.innerHTML=err1;
        }else if(expError.innerHTML==err2){
            expError.innerHTML=`Month ${err2}, Year ${err1}`; 
        }
        invalidate(yearInput);
    }else if(yearRegex.test(yearInput.value)==false){
        if(expError.innerHTML===''){
            expError.innerHTML=err2;
        }else if(expError.innerHTML==err1){
            expError.innerHTML=`Month ${err1}, Year ${err2}`;
        }
        invalidate(yearInput);
    }

    if(!cvcInput.value){
        cvcError.innerHTML=err1;
        invalidate(cvcInput);
    }else if(cvcRegex.test(cvcInput.value)==false){
        cvcError.innerHTML=err2;
        invalidate(cvcInput);
    }
}

// ==============continue btn=============
const continueBtn=document.getElementById('continue');

continueBtn.addEventListener('click',()=>{
    location.reload();
});

