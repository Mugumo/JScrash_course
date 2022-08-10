// object oriented programming

// constructor functions

function Person(first_name,last_name,dob){
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = new Date(dob);

    this.getBirthyear = () => this.dob.getFullYear();

    
}

Person.prototype.getFullName = function() {return `${this.first_name} ${this.last_name}`;}


john = new Person('John','Doe','12-02-1992'); 
console.log(john);

frank = new Person('Frank', 'DiCaprio', '3-6-1978');
console.log(frank);

console.log(frank.dob.getFullYear());
console.log((john.dob))

console.log(john.getBirthyear());
console.log(john.getFullName());

