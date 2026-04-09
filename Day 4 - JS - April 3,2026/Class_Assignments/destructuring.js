let {name,age}=obj;

let arr = [1,2,3,4];
let[a,b,,d]=arr;
console.log(abc);

let copyobj = {...arr};
console.log(copyobj);


//!rest parameter
function name(a,...arr){
    console.log(a);
    console.log(arr);
}

//rest parameter should always be ast one on parameters list
