// currying function in js 

function addition(a,b,c)
{
    return a+b+c;
}

let data =addition(1,2,3)

function Addition(a)
{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}


const res =Addition(3)
console.log(res);
let res1=res(5)
console.log(res1);
console.log(res1(1));


// now currying 

actualResponse = Addition(5)(4)(4) // it is called currying
console.log(actualResponse);

//real world exaple of currying 

userObj={
    name:"Ajay",
    age:30,

}

function userInfo(obj)

{
    return (key)=>{
        return obj[key]
    }
}


let response = userInfo(userObj)
console.log(response("age"));




//infinite currying



console.log("ok");
function add1(a)
{
    return function (b){
        if(b) 
        return add1(a+b)
        return a;
    }
}

console.log(add1(3)());