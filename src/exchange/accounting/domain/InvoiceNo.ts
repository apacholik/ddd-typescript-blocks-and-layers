export class InvoiceNo {
  number: string;

  constructor(number: string) {
    const isValidate = this.validate(number);

    if (!isValidate) {
      throw new Error('Invoice number is incorrect')
    }

    this.number = number;
  }

  private validate(number: string): boolean {
    const regEx = /[A-Za-z0-9]{5,}/;

    return regEx.test(number);
  }

  toString(): string {
    return this.number.toString();
  }
}