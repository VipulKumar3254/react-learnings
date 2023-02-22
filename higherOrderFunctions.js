const cities=["newyork","delhi","panipat","sonipat"]

const data = cities.map( city=> city.toUpperCase())

console.log(data);
//  map is used to iterate over collection like object and array 

// map is used over for loop


// *********************filter function in js


// filter is used to filter collection based on some condition

var nums = [1,56,78,20, 23, 88]


const data1 = nums.filter(num=>num>=40);
console.log(data1);


// *************8888 reduce in js 



data3 = nums.reduce(( num, sum)=>num+=sum,0)

console.log(data3);

const peoples =[ {
    name:"raju bhai",
    age:30

},
{
    name:"vipul kumar",
    age:20

}
]


const eligible = peoples.filter( people=>people.age>=25)
console.log(eligible );

