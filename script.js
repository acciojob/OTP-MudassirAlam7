//your JS code here. If required.
let codes = document.querySelectorAll('.code')
let resetBtn = document.querySelector('#submit')
codes.forEach((input, index) =>{
    input.addEventListener('input', ()=>{
        if(input.value && index<codes.length-1){
            codes[index+1].focus()
        }
    })
    input.addEventListener('keydown', (e)=>{
        if(e.key === "Backspace" && !input.value && index>0){
            codes[index-1].focus()
        }
    })
})
