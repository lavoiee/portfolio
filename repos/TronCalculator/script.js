var displayArray = [];

//
// Function to add value passed in to an array and then
// write the contents out to the text area with an id
// of 'display' without the commas from the array.
//
function addToScreen(x){
    displayArray[displayArray.length] = x;
    document.getElementById("display").value = displayArray.join('');   
}


//
// Function to clear the contents of the array out
// and then clear the textarea of the display.
//
function clearDisplay(){
    for(var i = 0; i <= (displayArray.length + 1); ++i){
        displayArray.pop();
    }
    document.getElementById("display").value = '';
}

//
// Function to separate numbers from operators in displayArray
// and evaluate the expression.
//
function evaluateAnswer(){
    var numArray = [];
    var operatorArray = [];
    var operators = [];
    var terms = [];
    var termCount = 0;
    var operatorCount = 0;
    var total = 0;

    //
    // Separate out the numbers from the operators
    // Assign them to their own respective array and count them.
    //
    if(displayArray.join('') === ''){
        alert("Please enter a valid expression first, e.g., 4 + 5, then press =");
    }
    else{
        for (var i = 0; i <= displayArray.length; ++i){
            if(parseFloat(displayArray[i], 10)){
                numArray.push(displayArray[i]);
            }

            else{
                terms[termCount] = numArray.join('');              
                termCount += 1;
                for(var x = 0; x < (numArray.length + 1); ++x){
                    numArray.pop();
                }  
                switch(displayArray[i]){
                    case '*':
                        operatorArray[operatorCount] = displayArray[i];
                        operatorCount += 1;
                        break;
                    case '/':
                        operatorArray[operatorCount] = displayArray[i];
                        operatorCount += 1;
                        break;
                    case '+':
                        operatorArray[operatorCount] = displayArray[i];
                        operatorCount += 1;
                        break;
                    case '-':
                        operatorArray[operatorCount] = displayArray[i];
                        operatorCount += 1;
                        break;
                    default:
                        break;
                }                       
            }
    }
    }

    //
    // Need to implement PEMDAS and pop() the arrays clean.
    //
    total = terms[0];
    for(var i = 0; i < terms.length; ++i){
        switch(operatorArray[i]){
            case '*':
                total *= terms[(i + 1)];
                break;
            case '/':
                total /= terms[(i + 1)];
                break;
            case '+':
                total = Number(total);
                total += Number(terms[i + 1]);
                break;
            case '-':
                total -= terms[(i + 1)];
                break;
            default:
                break;
        }
    }

    //
    // Clear the display and write the resulting calculation to display
    //    
    clearDisplay();
    document.getElementById('display').value = total;    
}