class Item {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = this.loadCart();
    }

    loadCart() {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.updateQuantity(existingItem.quantity + item.quantity);
        } else {
            this.items.push(item);
        }
        this.saveCart();
        this.displayCart();
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.saveCart();
        this.displayCart();
    }

    updateItemQuantity(itemName, quantity) {
        const item = this.items.find(i => i.name === itemName);
        if (item) {
            item.updateQuantity(quantity);
            if (item.quantity <= 0) {
                this.removeItem(itemName);
            } else {
                this.saveCart();
            }
            this.displayCart();
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    applyDiscount(code) {
        const discounts = { 'SAVE10': 10, 'SAVE20': 20 };
        const discountValue = discounts[code] || 0;
        return this.calculateTotal() * (1 - discountValue / 100);
    }

    displayCart() {
        console.log("Current Cart Contents:");
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }

        this.items.forEach(item => {
            console.log(`${item.name} - Price: $${item.price.toFixed(2)}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice().toFixed(2)}`);
        });

        console.log(`Total Price: $${this.calculateTotal().toFixed(2)}`);
    }
}

const cart = new Cart();

cart.addItem(new Item("Apple", 1.00, 3));
cart.addItem(new Item("Banana", 0.50, 5));
cart.addItem(new Item("Orange", 0.75, 2));

cart.displayCart();

cart.updateItemQuantity("Banana", 4);
cart.displayCart();

cart.removeItem("Apple");
cart.displayCart();

const totalAfterDiscount = cart.applyDiscount('SAVE10');
console.log(`Total after discount: $${totalAfterDiscount.toFixed(2)}`);
