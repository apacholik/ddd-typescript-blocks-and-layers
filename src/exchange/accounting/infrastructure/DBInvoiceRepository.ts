import { Invoice } from "../domain/Invoice";
import { InvoiceNo } from "../domain/InvoiceNo";
import { InvoiceRepository } from "../domain/InvoiceRepository";

export class DBInvoiceRepository implements InvoiceRepository {
  //NOTE: This should return Invoice
  get(number: InvoiceNo): boolean {
    return false;
  }

  save(invoice: Invoice): void {
    console.log('Save !', invoice.toString());
  }
}