import { PositionAttributes } from "../domain/PositionAttributes";

export class InvoicePosition implements PositionAttributes {
  private number: number;
  private value: number;
  private currency: string;


  constructor( value: number, currency: string ) {
    this.value = value;
    this.currency = currency;
    this.number = Math.floor((Math.random() * 10000) + 1);
  }

  productNumber(): number {
    return this.number;
  }

  productValue(): number {
    return this.value;
  }

  valueCurrency(): string {
    return this.currency;
  }
}