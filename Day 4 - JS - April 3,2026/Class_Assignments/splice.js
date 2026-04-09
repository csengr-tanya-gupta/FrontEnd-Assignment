a=[1,2,3,4,5,6,7,8];
a.splice(7,1);
console.log(a);

a.splice(6,0,10);
console.log(a);

a.splice(a.length-1,1);
console.log(a); //pop operation using splice

a.splice(a.length,0,11);
console.log(a); //push opertaion using splice


