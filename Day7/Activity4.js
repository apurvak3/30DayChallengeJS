//Activity4:
/**
 * task:7 Add a method to the book object that uses this keyword to return a string with the book's title and year,and log the result of calling this method.
 */
let book = {
    author:'Apurva',
    name: 'It ends with us',
    year:'2023',
    getdetails : function(){
     return `author: ${this.author} name: ${this.name} year: ${this.year}`
    }
}
console.log(book.getdetails());
