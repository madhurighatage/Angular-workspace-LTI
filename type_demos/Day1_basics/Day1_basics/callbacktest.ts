function runAfterCountingToTen1(functionToExecute, argumentToPass) {
    
    functionToExecute(argumentToPass);
    //printSquareOfNumber1(7)
}

function printGreeting1(name) {
    console.log('Hello', name);
}
function printSquareOfNumber1(n) {
    console.log(n*n);
}
runAfterCountingToTen1(printSquareOfNumber1, 7);
runAfterCountingToTen1(printGreeting1, 'Jerry');

