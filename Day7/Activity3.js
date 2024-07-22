//Nested object
/**
 * task5: create a nested object representing a library with properties like name and book (an array of book oject ), and 
 * log the library object to the console.
 * task6:Access and log tha name of the library and the titles of all the books in the library.
 * 
 */
let book1 = {
    author :"Apurva",
    name:  "I love Myself",
    year : 2006,
getdetails : function (){
 return `author :  ${this.author}, name: ${this.name} , year: ${this.year}`
 },
 updateYear :function(newYear){
    this.year = newYear 
 }  
}
console.log(book1.getdetails());
console.log(book1.updateYear(2027));
let book2 = {
    author: "sanjana",
    name : "lets break the rule",
    year : 2007,
    getdetails2 : function(){
        return `author: ${this.author} , name: ${this.name} , year: ${this.year}`
    }
}
console.log(book2.getdetails2());
 let library ={
    book : [book1 , book2],
    getDetails3: function(){
        return  this.books.map(book => book.getdetails ? book.getdetails() : book.getdetails2()).join("; ");
    }
 }
 console.log(library.getDetails3());
