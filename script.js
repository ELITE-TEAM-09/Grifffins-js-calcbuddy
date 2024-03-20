//Import the readline module to talk with the user in the consule
const readline = require('readline')

//create an interface to talk with the user

const rl = readline.createInterface( {
    //listen to user's keyboard input
    input: process.stdin,
    //display message
    output: process.stdout
});

//functions to do the math operations

//function addition
function add(a, b) {
    return a + b;
}

//function sub
function substract(a, b){
    return a - b;
}

//function multiply
function multiply(a, b){
    return a * b;
}

//function division
function divide(a, b){
    //twe check if division is by a zero
    if (b === 0){
    return "yoh wacha jaba msee!";
}
return a / b;
}



//ask the user for the inputs
rl.question("Enter first Number: ", function(num1)

{
    //convert user input to an actual number
    num1 = parseFloat(num1);

    rl.question("Enter Operator (+, -, /, *)", function(Operator)
    
    
    {

        //ask the user for the second inputs
rl.question("enter second number:", function(num2)


{
    num2 = parseFloat(num2);

//do the math based on the operators

let result;
switch (Operator){
    case '+':
        result = add(num1, num2)
        break;

        case '-':
            result = substract(num1, num2)
            break;


            case '*':
                result = multiply(num1, num2)
                break;


                case '/':
                    result = divide(num1, num2)
                    break;

            default:
                result = "Ei My lawd i wandaa"

}
//display the results
console.log("Ans = ", result);

//close the conversation
rl.close();

});
});



});

   


