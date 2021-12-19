import { Currency } from './Currency';

export class Money {
  private currency: Currency = new Currency();
  private value: number;

  constructor(value: number, currency: Currency | undefined = undefined) {
    if (currency !== undefined) {
      this.currency = new Currency();
    }
    this.value = value;
  }

  add(money: Money) {
    if (!this.currency.equals(money.currency)) {
      throw new Error("You cannot add different currencies");
    }

    const newValue = this.value + money.value;

    return new Money(newValue, this.currency);
  }

  subtract(money: Money) {
    if (this.currency.equals(money.currency)) {
      throw new Error("You cannot subtract different currencies");
    }

    const newValue = this.value - money.value;

    if (newValue < 0) {
      throw new Error("You cannot subtract a larger value from a smaller one");
    }

    return new Money(newValue, this.currency);
  }

  getValue(): number {
    return this.value;
  }

  greaterThan(money: Money): boolean {
    return this.value > money.value;
  }
}