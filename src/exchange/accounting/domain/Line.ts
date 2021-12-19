import { PositionBusinessId } from './PositionBusinessId'
import { Money } from "./Money";

export class Line {
  private id: PositionBusinessId;
  private productNumber: number;
  private value: Money;

  constructor(productNumber: number, value: Money) {
    this.id = new PositionBusinessId();
    this.productNumber = productNumber;
    this.value = value;
  }

  positionValue(): Money {
    return this.value;
  }

  positionNumber(): number {
    return this.productNumber;
  }
}