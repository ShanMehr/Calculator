const input =
{
    // Holds the operands and operators
    operand1:"",
    operand2:"",
    operator:"",
};

const calculatorDisplay=  document.getElementById("calc-result");



function add(operand1,operand2)
{
    // Addition
    return operand1+operand2;
}

function subtract(operand1,operand2)
{
    // Subtraction
    return operand1-operand2;
}

function multiply(operand1,operand2)
{
    // Multiplication
    return operand1*operand2;
}

function divide(operand1,operand2)
{
    // Division
    if(operand2!=0)
    {
        // Can's divide by zero
        return operand1/operand2;
    }
    else
    {
        return 0;
    }
}



function addEventListenersToButtons()
{
    // Get the containers that has the operators
    
    let operatorContainer = document.getElementById("operators-container").children;

    // Get the container that has the operands
    let operandContainer = document.getElementById("keys-container").children;

    // Add Event click Listeners to the child nodes

    // First add Event Listeners to the operators
    addEventListenersToOperators(operatorContainer);

    // Then add event listeners to the operands
    addEventListenersToOperands(operandContainer);
}

function addEventListenersToOperators(operatorContainer)
{
    // Adds Event Listeners to Operators
    for(let index=0;index<operatorContainer.length;index++)
    {
        operatorContainer[index].addEventListener('click', handleOperatorInput);
     
    }
   
}

function addEventListenersToOperands(operandContainer)
{
    console.log("Adding Event Listeners To Operands");
    // Adds Event Listeners to Operators
    for(let index=0;index<operandContainer.length;index++)
    {
        operandContainer[index].addEventListener('click', handleOperandInput);
    }
}

function handleOperatorInput(event)
{

    console.log("handleOperatorInput")
    console.log("Operator clicked");
    console.log(event);
    console.log(event.path[0].innerHTML);

    
    if(event.path[0].innerHTML=="AC")
    {
        clearScreen();

    }
    else if(event.path[0].innerHTML=="=>")
    {
        let string =calculatorDisplay.innerHTML;
        calculatorDisplay = string.substring(0,string.length-1);
        
    }
    else if(!operatorIsChosen())
    {
        // Store the currently chosen operator
        input.operator=event.path[0].innerHTML;

        // clear the display
        calculatorDisplay.innerHTML="";
         
    }
    else if(operatorIsChosen())
    {
        // If an operator was chosen

        // Perform an operation 
        performOperation(input.operator);

        // Store the recently added operator
        input.operator= event.path[0].innerHTML;

        // Erase the old operand
       
        
        
    }
    
}
    


function handleOperandInput(event)
{   
    console.log(event.path[0].innerHTML);  

    if(operatorIsChosen())
    {
        // Performs Action when an operator has been chosen 
        // And when another number has been chosen

        // When a number has been entered after an operator
        
        input.operand2+=event.path[0].innerHTML;
        calculatorDisplay.innerHTML=input.operand2;
        console.log(input.operand2);
        
           
    }
    else if(!operatorIsChosen())
    {
        // Performs when the first number is chosen
       input.operand1+=event.path[0].innerHTML;
       calculatorDisplay.innerHTML=input.operand1;
       console.log(input.operand1);
    }

}

function clearScreen()
{
    // Clears the display
    calculatorDisplay.innerHTML="";
    input.operand2="";
    input.operand1="";
    input.operator="";
}

function firstOperandIsChosen()
{    
    return (input.operand1!="");
}

function secondOperandIsChosen()
{    
    return (input.operand1!="");
}

function operatorIsChosen()
{
    return (input.operator!="");
}

function performOperation(operator)
{
    // Convert the operands to ints
    let operand1=parseInt(input.operand1);
    console.log(operand1);
    let operand2= parseInt(input.operand2);
    console.log(operand2);

    // Find which operator was chosen and perform an operation
    if(operator==="+")
    {
        input.operand1= add(operand1,operand2);
        

    }
    else if(operator==="-")
    {
        input.operand1= subtract(operand1,operand2);
        
    }
    else if(operator==="÷")
    {
        input.operand1= divide(operand1,operand2);
        
    } 
    else if(operator==="x")
    {
        input.operand1= multiply(operand1,operand2);input.operand2="";        
    }
    console.log(`Result `+input.operand1);
    calculatorDisplay.innerHTML=input.operand1;
    input.operand2="";  


}

addEventListenersToButtons()