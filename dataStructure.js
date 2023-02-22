// map set weakmap weakset map
 /*
 
 */
let arr = [ 1,2,3,4,5,6,1,2,3,34,]

let set = new Set(arr);
console.log(set);
console.log(set.size);
set.add(67)
console.log(set);
set.delete(2)
console.log(set);
set.add("raju bhai ")
var obj = { name:"vipul kumar"}
set.add(obj)
console.log(set);
console.log(set.has(4));


set.forEach( element=> console.log(element))

// map  ***********



/*


 */

let mymap = new Map([["name","vipul"],[ "rolll no",56]]);

for(let [key,value] of mymap)
{
    console.log(key,value);
}


mymap.forEach((key,value) => {
    console.log(key,value);
});




mymap.clear();



// weakset 

/* 
in weakset we can't iterate the object
we can add remove and has but can't iterate
we can only add objects in weakset 
we can't event console.log the weakset

 */


let weakset = new WeakSet();
let obj1 = new Object({
    name:"vipul",
    class:"bca"
})
let obj2 = new Object({
    name:"raju bhai",
    class:"bca"
})

weakset.add(obj1);
weakset.add(obj2);


console.log(weakset.has(obj1))
console.log(weakset.delete(obj1));




// weakmap 


let wm = new WeakMap();

console.log(wm);
obj3 = {
    name:"vipul"
}

wm.set(obj3,"key")
console.log(wm);















