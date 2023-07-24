
const numberButtons = document.querySelectorAll(".Number-Button")
const operatorButtons=document.querySelectorAll(".Operator-Button")
const displayContainer = document.querySelector(".Display")
const clearButton=document.querySelector(".Clear-Button")
const enterButton=document.querySelector("#Equal-Button")


const calcObject ={
    disaplyNumber: 0,
    operator:null,
    tempNumber: null,
    answered: false,
    

}



numberButtons.forEach((button)=>{ 
button.onclick =()=>{

    if(calcObject.answered == true){
        calcObject.disaplyNumber = 0 
        operator= null;
        calcObject.tempNumber = null;
        calcObject.answered = false;
    }

    else if(calcObject.operator !== null){
            calcObject["tempNumber"] =  calcObject["disaplyNumber"]
            calcObject["disaplyNumber"] = 0
                
        }   
    
        
    getNumbers(button.textContent)
}
}
)

operatorButtons.forEach((button)=>{
    button.onclick=()=>{
        calcObject['operator'] = button.textContent
        calcObject.answered = false;
        displayContainer.textContent = `${calcObject["disaplyNumber"]}  ${calcObject['operator']}`

 
    }
})

enterButton.onclick =()=>{
    if(calcObject.tempNumber == null){
        
        display()
    }
    else{
        calcObject.disaplyNumber= calculate(calcObject.disaplyNumber,calcObject.tempNumber,calcObject.operator)  
    
        display()
        calcObject['operator'] = null 
        calcObject["tempNumber"] =  calcObject["disaplyNumber"]
        console.log(calcObject) 
    }    
}

clearButton.onclick=()=>{
    calcObject.disaplyNumber = 0 
    calcObject.operator= null;
    calcObject.tempNumber = null;
    calcObject.answered = false;
    display()

}



function add(disaplyNumber, tempNumber){
 
 
return Number(disaplyNumber)+ Number(tempNumber);

}

function subtract(disaplyNumber , tempNumber){
   

    return  tempNumber - disaplyNumber 
}

function multiply(disaplyNumber , tempNumber){

    return disaplyNumber * tempNumber
}

function divide(disaplyNumber , tempNumber){

    return tempNumber/disaplyNumber
}

function calculate(disaplyNumber, tempNumber , operator){
    calcObject.answered = true;
    switch(operator){
        case "+":
            calcObject['operator'] = null 
            console.log(calcObject)
            return  add(disaplyNumber, tempNumber);
            break

        case "-":
            calcObject['operator'] = null 
            console.log(calcObject)
            return subtract(disaplyNumber , tempNumber);
            break 
        
        case "*":
            calcObject['operator'] = null 
            console.log(calcObject)
            return multiply(disaplyNumber , tempNumber);
            break 
            
        case "÷":
            calcObject['operator'] = null 
            console.log(calcObject)
            return divide(disaplyNumber,tempNumber);
            break
        
        default:
            break    

    }
    calcObject['operator'] = null 
    console.log(calcObject)
}


function display(){
displayContainer.textContent = calcObject["disaplyNumber"]
}



function getNumbers(newNumber){
    
    
    let currentNumber =  calcObject.disaplyNumber;

    if(currentNumber == 0){
        calcObject.disaplyNumber = newNumber
    }
    else{

    
    calcObject.disaplyNumber =  currentNumber+ newNumber
    console.log(currentNumber, newNumber)
    }
    display()
}
display()