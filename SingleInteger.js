function onerep(array){
    const one = [];
    let i;
    
    if(array.length < 1){
        one.push(array[0]); // if condition return if array size is one than no need to exc code simply return frst element
    }
    else{
        for( i = 0; i < array.length ; i++){  // array.length checks length of array
        if(array.indexOf(array[i],array.indexOf(array[i])+1) == -1) //indexOf returns first occ in array  
        
        one.push(array[i]);  // push method in js add value into array example array.push("3") push 3 in array
        
    }
    return one; 
    }
   
}

const array = ['1'];

console.log(onerep(array))
