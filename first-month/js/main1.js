const x = 10 ;

const color = x > 12 ? 'red' : 'blue' ;

switch(color){
    case 'red':
        console.log(`the color is ${color}`);
        break;
    case 'blue':
        console.log(`the color is ${color}`);
        break;
    default:
        console.log('the color is not red or blue');
        break;
}

function addNum(a = 1, b = 1){
    return a+b;
}

console.log(addNum(5,5));

const addNumArrow = (a = 1, b = 1) => a+b;
console.log(addNumArrow(5,4));

