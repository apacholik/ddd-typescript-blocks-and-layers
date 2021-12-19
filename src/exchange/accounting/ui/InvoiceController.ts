import { Router } from 'express';
import { InvoiceApplicationService } from '../application/InvoiceApplicationService';

export function createInvoiceController(invoiceApplicationService: InvoiceApplicationService): Router {
  const router: Router = Router();

  router.get('/', (_, res, next) => {
    try {
      res.status(200).send(invoiceApplicationService.createInvoice().toString());
    } catch (e) {
      if (e instanceof Error) {
        next(e);
      } else {
        const error = new Error('Unknown error');
        next(error);
      }
    }
  });

  router.get('/:invoiceNo', (req, res, next) => {
    if (!req.params.invoiceNo) {
      res.status(400).send("No invoice number was provided");
      return;
    }

    try {
      res.status(200).send(invoiceApplicationService.createInvoice(req.params.invoiceNo).toString());
    } catch (e) {
      if (e instanceof Error) {
        next(e);
      } else {
        const error = new Error('Unknown error');
        next(error);
      }
    }
  });

  return router;
}