const arr = []; 
for (let n = 1; n < 101; n++) { 
    while(true) { 
        let rand = Math.floor(Math.random() * Math.floor(100)); 
        if (arr[rand] === undefined) { 
            arr[rand] = n; 
            break; 
        } 
    } 
} 

console.log("RANDOM ARRAY", arr);


//Remove last number form the ARRAY
const removed = arr.pop(); 
console.log('REMOVED INTEGER', removed); 

for(let n = 1; n < 100; n++) { 
    if (! arr.includes(n)) { 
        console.log('MISSING INTEGER', n); 
        break;
    } 
} 