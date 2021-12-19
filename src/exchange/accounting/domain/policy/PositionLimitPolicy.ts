export interface PositionLimitPolicy {
  lessOrEqualsLimit: (n: number) => boolean;
}