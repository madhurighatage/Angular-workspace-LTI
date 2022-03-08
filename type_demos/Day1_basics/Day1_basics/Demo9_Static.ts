class Circle {
    static readonly pi = 3.14; 
    // pass:String;
    
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }
    calculateCircumference(x:number):number { 
        return 2 * Circle.pi * x;
    }
}
Circle.calculateArea(5); // returns 78.5
let circleObj = new Circle();
//Circle.pi=100;


circleObj.calculateCircumference(5) // returns 31.4000000
//circleObj.calculateArea();// <-- cannot call this
