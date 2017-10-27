interface CartItem {
  name: string,
  price: number
  qty?: number
}

class Cashier {
  total: number = 0
  length: number = 0

  add(name: string, price: number, qty: number = 1): Cashier {
    this.total += price * qty;
    this.length += qty;

    return this;
  }

  addItem({ name, price, qty = 1 }: CartItem): Cashier {
    this.total += price * qty;
    this.length += qty;

    return this;
  }
}

export function cashier() {
  return new Cashier();
}
