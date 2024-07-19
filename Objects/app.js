// Object in javaScript

const book = {
    title:"javascript",
    author:"kamran",
    year:2024
    
}

console.log(book);

// acces title and author 
console.log(`Title is ${book.title}`);
console.log(`author is ${book.author}`);



// Addin method to book to return title and author

book.titleAndAuthor = function () {
    return `title is ${this.title} and Author is ${this.author}`
}


console.log(book.titleAndAuthor());


// Method to update year

book.updateYear = (y) => {
    book.year = y;
}
console.log(book);
book.updateYear(2030);
console.log(book);



book.library = {
    name:"hamza",
    books:[
        {
            title:"computer",
            author:"huzaifa"
        },
        {
              title:"oop",
              author:"hafiz"
       },
        {
            title:"dsa",
              author:"hamza"
        }
    ]
}
console.log(book.library.name);
for (let i = 0; i < book.library.books.length; i++) {
    console.log(book.library.books[i].title);
    
}


// using this function 
book.useThisFunction = function () {
    return `title is ${this.title} and Author is ${this.author}`
}

console.log(book.useThisFunction());



for(const pro in book){
    console.log(`key is ${pro} and value is ${book.pro}`);
}
// Object keys() and values() methods
console.log(Object.keys(book));
console.log(Object.values(book))