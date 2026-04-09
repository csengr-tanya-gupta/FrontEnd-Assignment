a=[1,2,3,4,5,6,7,8,9,10];
a.forEach((i)=>{console.log(i);});

let mapped=a.map(ele =>ele*2);
console.log(mapped);

let filtered = a.filter(ele => ele%2!=0);
console.log(filtered);

let reduced = a.reduce((acc,ele)=>acc*=ele,10); //10 is the initail avlue of acc;
console.log(reduced);
