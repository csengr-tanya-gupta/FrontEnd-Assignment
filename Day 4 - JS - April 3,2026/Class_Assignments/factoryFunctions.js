function factory(name, age){
    return{
        name : name,
        age : age
    }
}

let obj ={
    name : "qwerty",
    age:1234,
    address: {
        city : "jaipur",
        state : "rajasthan"
    },
    printDetails : function(){
        console.log(`Name : ${this.name} , Age : ${this.age} , City : ${this.address.city} , State : ${this.address.state}`);
    }
}
obj.printDetails();
console.log(obj);

