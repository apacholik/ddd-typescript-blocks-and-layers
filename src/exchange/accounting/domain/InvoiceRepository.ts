import { Invoice } from "./Invoice";

export interface InvoiceRepository {
  save: (invoice: Invoice) => void;
  get: (number: string) => Invoice;
}