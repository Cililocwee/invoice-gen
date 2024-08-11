export interface LineItem {
  id: string;
  itemLabel: string;
  quantity: number;
  rate: number;
  itemTotal: number;
}

export interface InvoiceData {
  from: string;
  billTo: string;
  shipTo: string;
  invoiceNumber: string;
  date: string;
  paymentTerms: string;
  dueDate: string;
  poNumber: string;
  notes: string;
  terms: string;
  amountPaid: number;
  tax: number;
  lineItems: LineItem[];
}
