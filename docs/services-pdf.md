---
id: services-pdf
title: PDF
---

The PDF service allows you to generate & fill PDF files that you can use in your workflows.

## Text

Required details:

- **Text** Content

[Example file](/services/pdf/text.pdf) / [Example input](https://github.com/tideflow-io/tideflow/blob/master/private/pdfs/text.html)

## Bill

Required details:

- **Bill** both the bill's id and the currency (defaults to 'eur')
- **Notes** a list of notes to be shown 
- **Comapny** the sender's details (see the example below)
- **Customer** addressee's detatils
- **Itemss** list of billed items, with name and price

Additional details are:

- **Texts** texts placements to be shown
- **Date** bill's date (defaults to current date)
- **Total** bill's total. Gets calculated based on the items if not provided

[Example file](/services/pdf/bill.pdf) / [Example input](https://github.com/tideflow-io/tideflow/blob/master/private/pdfs/bill.html)
