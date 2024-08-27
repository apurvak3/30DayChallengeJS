//Activity5
/**
 * task:8 use a for...in loop to iterate over the properties of book object and log each property and its value.
 * task:9 use object.key and object.values method to log all the keys and values of  the book object
 */
let book3 = {
    author: 'Apurva kanth',
    name : 'The life At seria',
    year : 2021,
    getDetail : function(){
    return `author :${this.author} name of the book: ${this.name} year: ${this.year}`;
    },
    updatedYear : function(newYear){
     this.year = newYear;
    }
}
console.log(book3.getDetail());
console.log(book3.updatedYear(2023));
console.log(book3.getDetail());

for(let property in book3){
    if(book3.hasOwnProperty(property)){
        console.log(`${property} : ${book3[property]}`);
    }
}