
function handleOperatorInput(event)
{
    console.log(event);
}

function handleOperandInput(event)
{
    console.log(event);
}

function addEventListenersToButtons()
{
    console.log("Adding Event Listeners");
    let extraOperatorContainer=document.getElementById("output-control-keys-container").children;
    console.log(extraOperatorContainer);
    let operatorContainer = document.getElementById("keys-container").children;
    let operandContainer = document.getElementById("operators-container").children;

    addEventListenersToOperators(extraOperatorContainer,operandContainer);
    addEventListenersToOperands(operandContainer);
    
}

function addEventListenersToOperators(operatorCollection,otherOperatorCollection)
{
    console.log("Adding Event Listeners To Operators");
    // Adds Event Listeners to Operators
    for(let index=0;index<operatorCollection.length;index++)
    {
        operatorCollection[index].addEventListener('click', handleOperatorInput);
        console.log("Operator Added");
        console.log(operatorCollection[index]);
        
    }
    for(let index=0;index<otherOperatorCollection.length;index++)
    {
        otherOperatorCollection[index].addEventListener('click', handleOperatorInput);
        console.log("Operator Added");
        console.log(otherOperatorCollection[index]);
    }
}

function addEventListenersToOperands(operandContainer)
{
    console.log("Adding Event Listeners To Operands");
    // Adds Event Listeners to Operators
    for(let index=0;index<operandContainer.length;index++)
    {
        console.log("Operand Added");
        operandContainer[index].addEventListener('click', handleOperandInput);
        console.log("Operand Added");
        console.log(operandContainer[index]);
    }
    
}

addEventListenersToButtons();