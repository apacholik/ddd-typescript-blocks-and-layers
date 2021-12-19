import { InvoiceNo } from "./InvoiceNo";
import { Seller } from "./Seller";
import { Buyer } from "./Buyer";
import { Money } from "./Money";
import { Line } from "./Line";
import { PositionLimitPolicy } from "./policy/PositionLimitPolicy";

export class Invoice {
  private invoiceNo: InvoiceNo;
  private seller: Seller;
  private buyer: Buyer;
  private summ: Money;
  private lines: Line[];
  private positionsValue: Money = new Money(0);

  constructor(seller: Seller, buyer: Buyer, invoiceNo: InvoiceNo ) {
    this.seller = seller;
    this.buyer = buyer;
    this.invoiceNo = invoiceNo;
  }

  addLine(newLine: Line, positionLimitPolicy: PositionLimitPolicy) {
    if (!positionLimitPolicy.lessOrEqualsLimit(this.lines.length + 1)) {
      throw new Error('The number of items shall not exceed 10');
    }

    this.lines = this.lines.concat(newLine);

    //TODO: Add policy
    this.positionsValue = this.positionsValue.add(newLine.positionValue());
  }

  addManyLine(lines: Line[], positionLimitPolicy: PositionLimitPolicy) {
    if (!positionLimitPolicy.lessOrEqualsLimit(lines.length)) {
      throw new Error('The number of items shall not exceed 10');
    }

    this.lines = this.lines.concat(lines);

    //TODO: Add policy
    lines.forEach((line) => {
      this.positionsValue = this.positionsValue.add(line.positionValue());
    });
  }

  invoiceNumber(): string {
    return this.invoiceNo.toString();
  }

  toString(): string {
    return `${this.invoiceNo} : ${this.positionsValue.getValue()} : ${this.seller}`
  }
}