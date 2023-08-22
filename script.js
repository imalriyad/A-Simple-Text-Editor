let text = document.getElementById('text-area')
let isBold = false;
let isItalic = false
let isUnderLine = false



// make text bold
document.getElementById('bold-icon').addEventListener('click',function(){

    isBold = !isBold;
 
    if (isBold) {
    text.classList.add('bold'); // Add the 'bold' class
    } 

    else {
    text.classList.remove('bold'); // Remove the 'bold' class
    }
   
})  

// make text Italic
document.getElementById('italic-icon').addEventListener('click',function(){
   
    isItalic = !isItalic;
 
    if (isItalic) {
    text.classList.add('italic'); 
    } 

    else {
    text.classList.remove('italic');
    }
})

// make text UnderLine
document.getElementById('underline-icon').addEventListener('click',function(){
   
    isUnderLine = !isUnderLine;
 
    if (isUnderLine) {
    text.classList.add('underline'); 
    } 

    else {
    text.classList.remove('underline'); 
    }
})

// make text Left
document.getElementById('text-left').addEventListener('click',function(){
    text.style.textAlign = 'left'
})

// make text Center
document.getElementById('text-center').addEventListener('click',function(){
    text.style.textAlign = 'center'
    
})

// make text right
document.getElementById('text-right').addEventListener('click',function(){
    text.style.textAlign = 'right'
})

// change fontSize
document.getElementById('font-size').addEventListener('keyup',function(event){ 
    let fontSize = parseInt(event.target.value)
    text.style.fontSize = fontSize+'px'
     
})

// Color picker
document.getElementById('color-picker').addEventListener('input',function(event){ 
   let colorCode = event.target.value
   text.style.color = colorCode

})


// changing font family 
let transformState = 0; // 0: normal, 1: uppercase, 2: capitalize
const transformStates = ['none', 'uppercase', 'capitalize'];

document.getElementById('font-case').addEventListener('click',function(){
    transformState = (transformState + 1) % 3; // Cycle through 0, 1, 2

    text.style.textTransform = transformStates[transformState];

})