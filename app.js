let inputValue = document.getElementById('input-value');
const numbers = document.querySelectorAll('.numbers')
const ac = document.getElementById('ac')
let egal = document.getElementById('egal')
numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        inputValue.value += e.target.innerText;
    
    })
})

ac.addEventListener('click',()=>{
    inputValue.value = "";
})




