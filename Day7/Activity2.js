//Object Methods
/**
 * task3:Add a method to the book object that returns a string with the book title and author and log the result of calling this method.
 * task4:Add a method to the book that takes a parameter (year) and updates the books year property, then log the updated result.
 *    
 */
const book ={
    title : "Love is a lossing game",
    Author:"Apurva",
    year:2050,
    getDetail : function(){
     return `title:${this.title}, Author: ${this.author} , year: ${this.year}`
    },
     updatedYear : function(newYear){
       this.year = newYear;

     }
}

console.log(book.getDetail());
book.updatedYear(2025);
console.log(book.getDetail());