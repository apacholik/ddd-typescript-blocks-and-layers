import { Buyer } from "./Buyer";
import { Invoice } from "./Invoice";
import { InvoiceNo } from "./InvoiceNo";
import { Line } from "./Line";
import { Money } from "./Money";
import { PLNPositionLimitPolicy } from "./policy/PLNPositionLimitPolicy";
import { PositionLimitPolicy } from "./policy/PositionLimitPolicy";
import { PositionAttributes } from "./PositionAttributes";
import { Seller } from "./Seller";

export class InvoiceFactory {
  // NOTE: for the sake of simplicity
  private seller: Seller = new Seller('Coztymit', 'Jan', 'Kowalski', "123456");
  private buyer: Buyer = new Buyer('aPacholik', 'Andrzej', 'Pacholik', "789012");

  createInvoice(positionAttributes: PositionAttributes[], number: string, limitPolicy: PositionLimitPolicy | undefined = undefined): Invoice {
    const invoice = new Invoice(this.seller, this.buyer, new InvoiceNo(number));

    return this.prepareInvoice(positionAttributes, invoice, limitPolicy);
  }

  prepareInvoice(positionAttributes: PositionAttributes[], invoice: Invoice, initLimitPolicy: PositionLimitPolicy | undefined = undefined): Invoice {
    let limitPolicy: PositionLimitPolicy;
    if (limitPolicy) {
      limitPolicy = initLimitPolicy;
    } else {
      limitPolicy  = new PLNPositionLimitPolicy();
    }

    positionAttributes.forEach((position) => {
      invoice.addLine(
        new Line(position.productNumber(), new Money(position.productValue())),
        limitPolicy
      );
    });

    return invoice;
  }
}