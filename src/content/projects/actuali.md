---
tagline: A native iOS companion app for Actual Budget, by Matt Farrell. I contribute features and fixes.
facts:
  - { label: Platform, value: iPhone · iPad }
  - { label: Built with, value: Swift · SwiftUI }
  - { label: My role, value: Contributor }
  - { label: License, value: MIT }
gallery:
  - layout: phone
    items:
      - src: ../../assets/projects/actuali/view-accounts.png
        alt: All Accounts view with a searchable transaction list
        caption: Accounts and a searchable transaction history.
      - src: ../../assets/projects/actuali/add-transactions.png
        alt: Add Transaction screen with type, amount, account and category
        caption: Add expenses, deposits and transfers.
      - src: ../../assets/projects/actuali/view-budgets.png
        alt: Budget tab showing budgeted versus spent per category
        caption: Budgeted versus spent for every category.
      - src: ../../assets/projects/actuali/reports-dark-light.png
        alt: Reports tab shown half in dark mode and half in light mode
        caption: Your Actual dashboards, in dark or light.
---

## What it is

[Actuali](https://github.com/MattFaz/actuali) brings Actual Budget to the iPhone and iPad, much as
[Actua](/projects/actua) does on Android. It talks directly to a self-hosted [Actual Budget](https://actualbudget.org/) server using the
same sync protocol as Actual's own clients, keeps every budget locally in SQLite so it works offline, and has no cloud,
accounts or analytics in the middle.

It's Matt Farrell's project, and I contribute features and fixes to it through pull requests. The screenshots are from
the project's README.

## What it does

- Accounts and net worth, a searchable transaction history, splits, transfers and reconciliation
- Budgeting with carryover, moving money between categories and covering overspending
- The reports and dashboards you set up in Actual, rendered with real data
- Siri and Shortcuts, Apple Wallet imports, scheduled transactions and your Actual rules
- Password or OpenID Connect sign-in and end-to-end encrypted budgets

## What I've contributed

My merged pull requests are mostly around the Budget tab and everyday editing:

- Reordering categories and groups, renaming categories from the long-press menu, and a Hide Income Group setting
- Pinned budget group headers with balances and long-press actions, and budget actions in their own button
- Actionable guidance on budget categories, and a refined budget check-in and category editing flow
- Clearer transaction rows, with notes on their own line and tags shown as coloured chips
- Accounts offered as transfer targets in the payee picker
- A Hide Decimal Places preference and Bangladeshi Taka in the currency picker
- Editing connected server URLs, a fallback server address, and a fix for budget data after a foreground sync

<p class="text-sm text-muted">
  Actuali is an unofficial community project and is not affiliated with or endorsed by the Actual Budget team.
</p>
