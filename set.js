let set = new Set();

set.add(12)

console.log(set);

set.add(12)
set.add(34)


set.delete(12)
console.log(set.size);


console.log(set.has(34));
set.clear()

  console.log(set);

//set has only the unique values 
