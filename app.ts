import express from 'express';
import { createInvoiceController } from './src/exchange/accounting/ui/InvoiceController';
import { InvoiceApplicationService } from './src/exchange/accounting/application/InvoiceApplicationService';
import { DBInvoiceRepository } from './src/exchange/accounting/infrastructure/DBInvoiceRepository';



const app = express();
const port = 3000;

const invoiceApplicationService = new InvoiceApplicationService(new DBInvoiceRepository());
app.use('/invoice', createInvoiceController(invoiceApplicationService));

app.use(function errorHandler (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
})

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});