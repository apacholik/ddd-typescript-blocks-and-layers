export class Buyer {
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
}