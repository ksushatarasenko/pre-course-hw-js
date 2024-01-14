let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = { ...passportMarried, ...passportMarried.married, address: { ...passportMarried.address } } 
passportMarried2.married = true
 
console.log(passportMarried); 
console.log(passportMarried2);
