const student={
     firstName:"vipul",
    lastName:"kumar",
    get fullName(){  //getter of object 
        return this.firstName + " " + this.lastName;
    },

    set fullName(name){ //setter of object
        this.firstName =name.split(" ")[0];
        this.lastName = name.split(" ")[1];

    }
}

console.log(student.fullName);
student.fullName="raju bhaiii"
console.log(student.fullName);



