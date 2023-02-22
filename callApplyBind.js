/*
     Call -> when we are about to use the function inside a object for another object , we use the call  method to call that method for other object 
     apply -> we give arguments in simple form but in apply method we give arguments in form of array 
     bind -> bind says that you just bind the reference and store to some variable and use when you want to call


      
    
 */

     let obj1 = {
        name:"vipul",
        class:"bca",
        getName:function(){
            console.log(this.name);
        }
     }
     let obj2 = {
        name:"Ashish",
        class:"bca",
       
     }
     
     obj1.getName();
     obj1.getName.call(obj2);  // one way to call with another reference
     
     
     
          let obj3 = {
             name:"Manshi",
             class:"bca",
           
          }

         let getName1=(a)=>{
            console.log(a);
            console.log(this);
        }
          let obj4 = {
             name:"Ankita",
             class:"bca",
            
          }
     
          getName1.call(obj4,"raj")
          getName1.call(obj2)