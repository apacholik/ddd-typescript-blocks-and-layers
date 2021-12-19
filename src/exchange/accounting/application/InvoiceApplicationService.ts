import { InvoiceFactory } from "../domain/InvoiceFactory";
import { InvoiceRepository } from "../domain/InvoiceRepository";
import { PositionAttributes } from "../domain/PositionAttributes";
import { InvoicePosition } from "./InvoicePosition";

export class InvoiceApplicationService {
  private repository: InvoiceRepository;
  private factory: InvoiceFactory = new InvoiceFactory();

  constructor(invoiceRepository: InvoiceRepository) {
    this.repository = invoiceRepository;
  }

  createInvoice(): string {
    const positions: PositionAttributes[] = [];

    positions.push(new InvoicePosition(100, 'PLN'));

    const invoice = this.factory.createInvoice(positions, '12M2021');

    this.repository.save(invoice);

    return invoice.invoiceNumber();
  }
}