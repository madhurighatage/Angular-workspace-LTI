function addn(a: any, b:any): any {
    return a + b;
}

let strn=addn("Hello ", "Steve"); // returns "Hello Steve" 
console.log(strn);
let num=addn(10, 20);
console.log(num);

function addsec(a: any, b:any) {
   console.log(a + b) ;
}

addsec(100,200);

let svar=function() {
   console.log('hello');
}
svar();