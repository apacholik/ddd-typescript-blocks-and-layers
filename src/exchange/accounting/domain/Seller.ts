export class Seller {
  private name: string;
  private firstName: string;
  private lastName: string;
  private taxIdentificationNumber: string;

  constructor(
    name: string,
    firstName: string,
    lastName: string,
    taxIdentificationNumber: string,
  ) {
    this.name = name;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxIdentificationNumber = taxIdentificationNumber;
  }

  toString(): string {
    return `${this.name} : ${this.firstName} : ${this.lastName}`;
  }
}