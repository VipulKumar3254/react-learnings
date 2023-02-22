
// closure in js 


/*


    by closure we can use variable of functions after the caling .

    in closure function returns a function and the variables of the function remains active ( they do not die after execution)
    in the return functin we can use those variable of the upper level function this phenomenon is called closure 

    In closure we can also return more than one function in form of object 


 */

var sum = (a) => {

    return {
        sumOfTwo: (b)=>{  return a+b},
        sumOfThree: (b,c)=>{ return a+b+c}

    }

}

store = sum(12)

console.log(store.sumOfTwo(12));
console.log(store.sumOfThree(12,12));
