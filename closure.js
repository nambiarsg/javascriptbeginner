const myclosure = x => y => x+y; //this is also an example of currying

let func1 = myclosure(2);


let add2and3 = func1(3);
let add2and5 = func1(5);

console.log(add2and3);
console.log(add2and5);

//without arrow functions; uncomment below to exectue;

/* function myclosure (x){
	return function add (y){
		return x+y;
	}
}

const func1 = myclosure(2);
let add2and3 = func1(3);
let add2and5 = func1(5);

 console.log(add2and3);
console.log(add2and5);*/