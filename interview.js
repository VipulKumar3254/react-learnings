// minimum number in array  in js 
arr  = [56,4,23,23,23,5,6,];

let min = arr[0]

arr.filter( ( num,index)=>{
    console.log(num,index);

    if(arr[index]>min)
    { }
    else{
        min = arr[index]
    }




    
})
// find method in js
console.log(min);


 const value = arr.find( element=> element %2==0)


 

 console.log(value);


