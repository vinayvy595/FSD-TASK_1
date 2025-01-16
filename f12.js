class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.status = 'available';
        this.borrowedDate = null;
    }

    borrow() {
        if (this.status === 'available') {
            this.status = 'borrowed';
            this.borrowedDate = new Date();
            console.log(`${this.title} by ${this.author} has been borrowed.`);
        } else {
            console.log(`${this.title} is currently not available.`);
        }
    }

    return() {
        this.status = 'available';
        this.borrowedDate = null;
        console.log(`${this.title} has been returned and is now available.`);
    }

    isOverdue() {
        if (this.status === 'borrowed' && this.borrowedDate) {
            const dueDate = new Date(this.borrowedDate);
            dueDate.setDate(dueDate.getDate() + 14);
            return new Date() > dueDate;
        }
        return false;
    }

    calculateFine() {
        if (this.isOverdue()) {
            const dueDate = new Date(this.borrowedDate);
            dueDate.setDate(dueDate.getDate() + 14);
            const daysOverdue = Math.ceil((new Date() - dueDate) / (1000 * 60 * 60 * 24));
            return daysOverdue * 1;
        }
        return 0;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Added: ${book.title} by ${book.author}`);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Removed: ${removedBook.title} by ${removedBook.author}`);
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            book.borrow();
        } else {
            console.log(`Book titled "${title}" not found in the library.`);
        }
    }

    searchBooks(query) {
        const results = this.books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            console.log("Search Results:");
            results.forEach(book => console.log(`- ${book.title} by ${book.author} [${book.status}]`));
        } else {
            console.log("No books found.");
        }
    }

    checkOverdueBooks() {
        let totalFine = 0;

        this.books.forEach(book => {
            if (book.isOverdue()) {
                const fine = book.calculateFine();
                totalFine += fine;
                console.log(`${book.title} is overdue. Fine: $${fine}`);
            }
        });

        if (totalFine === 0) {
            console.log("No overdue books.");
        } else {
            console.log(`Total fines for overdue books: $${totalFine}`);
        }
    }
}

const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.searchBooks("1984");

library.borrowBook("1984");

setTimeout(() => {
    library.checkOverdueBooks();

    library.borrowBook("The Great Gatsby");

    setTimeout(() => {
        library.checkOverdueBooks();

        library.removeBook("1984");

        library.searchBooks("Harper");

        library.checkOverdueBooks();

        library.books[0].return();
        library.checkOverdueBooks();

    }, 1000);

}, 1000);
