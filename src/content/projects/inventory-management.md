---
tagline: A self-hosted back office for small trading businesses, with stock, sales and money that always add up.
facts:
  - { label: Runs on, value: Docker · NAS or server }
  - { label: Built with, value: Django · PostgreSQL · HTMX }
  - { label: Works, value: Fully offline on a LAN }
  - { label: Made for, value: Shops · wholesalers }
gallery:
  - layout: wide
    items:
      - src: ../../assets/projects/inventory-management/dashboard.png
        alt: Dashboard with sales, gross profit, purchases, cash position, receivables and payables for the period
        caption: 'Dashboard: the period''s sales, gross profit, purchases, cash, receivables and payables.'
      - src: ../../assets/projects/inventory-management/sale-editor.png
        alt: Sales invoice line-item editor showing stock availability, cost and margin per line
        caption: 'Sales editor: quantities in any unit, with stock, cost and margin as you type.'
      - src: ../../assets/projects/inventory-management/sales.png
        alt: Sales list with invoice status, totals and gross profit
        caption: 'Sales: searchable invoice history with totals and gross profit.'
      - src: ../../assets/projects/inventory-management/stock.png
        alt: Current stock per product and warehouse with quantity, trays and average cost
        caption: 'Current stock: per product and warehouse, with weighted-average cost.'
      - src: ../../assets/projects/inventory-management/receivables-aging.png
        alt: Receivables aging grouped by days overdue
        caption: 'Receivables aging: what customers owe, by days overdue.'
      - src: ../../assets/projects/inventory-management/dashboard-dark.png
        alt: Dashboard in the dark theme
        caption: Every screen also comes in a dark theme with your own accent colour.
---

## What it is

Inventory Management is a web-based inventory and back-office system for small trading businesses: shops, wholesalers
and distributors that buy goods, keep stock, sell on cash or credit, and need to know what they hold, what it cost,
what they're owed and what they owe. It started life as an egg-trading application and is growing into a
general-purpose system.

It's built for the person behind the counter rather than an accountant: plain, task-based screens (Sell, Buy, Money,
Stock, Reports), a few clicks per transaction, and numbers that always add up. The screenshots use synthetic demo data.

## What it does

- **Products and units.** A catalogue with SKUs, barcodes, brands and categories. Units convert exactly, so rice can be
  bought by the kilogram and sold by the gram while eggs stay in pieces and trays.
- **Stock you can trust.** An immutable stock ledger with weighted-average costing per product and warehouse. Stock
  can't silently go negative, and posted documents are corrected by reversal, never edited or deleted.
- **Buying and selling.** Purchases and sales on cash or credit, stock shown as you type, and gross profit on every
  sale.
- **Money.** Customer receipts, supplier payments, expenses and transfers between cash, bank and mobile-money accounts,
  with balances, statements and ageing.
- **Insight.** Dashboards, product, customer and supplier analysis, stock value and sales and purchase reports, plus
  CSV import and export.
- **Run it yourself.** Roles and permissions, backup and restore from the browser, and no internet needed at runtime.

It's an operations system, not an accounting package: there's no general ledger or tax handling, and the screens don't
pretend otherwise.

## How it's built

Django 5.2 on Python 3.13 with PostgreSQL 17, server-rendered templates with HTMX and Bootstrap, and Gunicorn behind
Nginx in Docker Compose. Money is always exact decimals, business rules live in tested services, and every screen works
without internet access. Tests run with pytest, with Ruff and djlint keeping the code and templates tidy.
