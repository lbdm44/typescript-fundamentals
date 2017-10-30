interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private items: T[] = []

  push(item: T): IStack<T>
  push(items: T[]): IStack<T>
  push(items: T | T[]): IStack<T> {
    if (items instanceof Array) {
      this.items.push(...items);
    } else {
      this.items.push(items);
    }

    return this;
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  length(): number {
    return this.items.length;
  }

  print() {}
}