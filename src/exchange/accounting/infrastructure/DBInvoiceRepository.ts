import { Invoice } from "../domain/Invoice";
import { InvoiceRepository } from "../domain/InvoiceRepository";
import { InvoiceFactory } from "../domain/InvoiceFactory";
import { PositionAttributes } from "../domain/PositionAttributes";
import { InvoicePosition } from '../application/InvoicePosition';
import { PLNPositionLimitPolicy } from '../domain/policy/PLNPositionLimitPolicy';

export class DBInvoiceRepository implements InvoiceRepository {
  private invoiceFactory: InvoiceFactory = new InvoiceFactory();

  get(number: string): Invoice {
    // NOTE: This data should get from DB
    const dbData = {
        value: 245,
        currency: "PLN",
      }


    const positions: PositionAttributes = new InvoicePosition(dbData.value, dbData.currency);

    const invoice = this.invoiceFactory.createInvoice([positions], number, new PLNPositionLimitPolicy())
    return invoice;
  }

  save(invoice: Invoice): void {
    console.log('Save !', invoice.toString());
  }
}