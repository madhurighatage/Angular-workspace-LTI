for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }

var arr = [10, 20, 30, 40];
for (let j of arr)    
 {
  console.log(j); // prints values: 10, 20, 30, 40
}

var arr1 = [10, 20, 30, 40];
for (let i in arr1) {
  console.log(i); // prints indexes: 0, 1, 2, 3
  console.log(arr[i]); // prints elements: 10, 20, 30, 40
}

let k: number = 2;

while (k < 4) {
    console.log( "Block statement" + "\n"+ "execution no." + k )
    k++;
}