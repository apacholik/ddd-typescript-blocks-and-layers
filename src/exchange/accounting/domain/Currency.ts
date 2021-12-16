enum CurrencyType {
  PLN,
  EUR,
}

export class Currency {
  private type: CurrencyType = CurrencyType.PLN;

  constructor(initType: CurrencyType | undefined = undefined) {
    if (initType !== undefined) {
      this.type = initType;
    }
  }

  equals(currency: Currency): boolean {
    return this.type === currency.type;
  }
}