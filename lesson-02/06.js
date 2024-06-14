let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

console.log( passportWithAddress.address.city );
let clon = {}; 

for (let key in  passportWithAddress) {
  clon[key] =  passportWithAddress[key];
}

clon.address.city = "Bobryisk"; 
console.log( clon.address.city );