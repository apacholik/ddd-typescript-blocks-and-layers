import { PositionLimitPolicy } from './PositionLimitPolicy';

export class PLNPositionLimitPolicy  implements PositionLimitPolicy{
  private positionLimit = 10;

  lessOrEqualsLimit(positionsCount: number) {
    return positionsCount <= this.positionLimit;
  }
}