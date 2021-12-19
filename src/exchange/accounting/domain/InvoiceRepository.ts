import { Invoice } from "./Invoice";
import { InvoiceNo } from "./InvoiceNo";

export interface InvoiceRepository {
  save: (invoice: Invoice) => void;
  //NOTE: Response should be Invoice.
  get: (number: InvoiceNo) => boolean;
}