import { v4 as uuid } from 'uuid';

export class PositionBusinessId {
  private number: string;

  constructor() {
    this.number = uuid();
  }

  toString(): string {
    return this.number.toString()
  }
}