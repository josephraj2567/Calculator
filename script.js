const display = document.querySelector('#display')

const buttons = document.querySelectorAll('button')

buttons.forEach((item)=>{
      item.onclick = ()=>{
            if(item.id=='clr'){
                  display.innerText = ''
}else if(item.id=='backspace'){
     let string = display.innerText.toString()
      display.innerText = string.substr(0,string.length-1)
} else if(display.innerText!='' && item.id == 'equal'){
         let expression = display.innerText
        .replaceAll('×', '*')
        .replaceAll('÷', '/');

     display.innerText = eval(expression)
}else if(display.innerText=='' && item.id=='equal'){
 display.innerText=''
}
else{
   display.innerText+= item.innerText
}
}
})



































