const input =
{
    operand1:"",
    operand2:"",
    operator:"",
};

const calculatorDisplay=  document.getElementById("calc-result");



function add(operand1,operand2)
{
    return operand1+operand2;
}

function subtract(operand1,operand2)
{
    return operand1-operand2;
}

function multiply(operand1,operand2)
{
    return operand1*operand2;
}

function divide(operand1,operand2)
{
    if(operand2!=0)
    {
        return operand1/operand2;
    }
    else
    {
        return 0;
    }
}

function percentage(operand1)
{
    return operand1*0.01;
}

function power(operand1,operand2)
{
    return Math.pow(operand1,operand2);
}

function sqrt(operand1)
{
    return Math.sqrt(operand1);
}



function addEventListenersToButtons()
{
    // Get the containers that has the operators
    let extraOperatorContainer=document.getElementById("output-control-keys-container").children;
    console.log(extraOperatorContainer);
    let operatorContainer = document.getElementById("operators-container").children;

    // Get the container that has the operands
    let operandContainer = document.getElementById("keys-container").children;

    // Add Event click Listeners to the child nodes

    // First add Event Listeners to the operators
    addEventListenersToOperators(operatorContainer,extraOperatorContainer);

    // Then add event listeners to the operands
    addEventListenersToOperands(operandContainer);
}

function addEventListenersToOperators(operatorContainer,extraOperatorContainer)
{
    // Adds Event Listeners to Operators
    for(let index=0;index<operatorContainer.length;index++)
    {
        operatorContainer[index].addEventListener('click', handleOperatorInput);
     
    }
    for(let index=0;index<extraOperatorContainer.length;index++)
    {
        extraOperatorContainer[index].addEventListener('click', handleOperatorInput);
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
    console.log("Operator clicked");
    console.log(event);
    console.log(event.path[0].innerHTML);
    if(!operatorIsChosen())
    {
        input.operator=event.path[0].innerHTML;
        calculatorDisplay.innerHTML="";
        clearScreen();
    }
    else
    {
        //let calculation= performOperation();
        //calculatorDisplay.innerHTML=calculation;
    }
    
    
}

function handleOperandInput(event)
{   
    console.log(event.path[0].innerHTML);  

    if(operatorIsChosen()&&firstOperandIsChosen())
    {
        // Performs Action when an operator has been chosen 
        // And when another number has been chosen

        input.operand2+=event.path[0].innerHTML;
        calculatorDisplay.innerHTML=input.operand2;
        input.operator="";
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
    
}

addEventListenersToButtons()