---
tagline: A native Android client for Actual Budget, built in the open.
facts:
  - { label: Platform, value: Android 9+ }
  - { label: Built with, value: Kotlin · Jetpack Compose }
  - { label: License, value: MIT }
gallery:
  - layout: phone
    items:
      - src: ../../assets/projects/actua/budget.png
        alt: Budget screen with category balances, targets and Ready to Budget
        caption: Plan every category, down to the cent.
      - src: ../../assets/projects/actua/transactions.png
        alt: Transactions list grouped by date with categories and accounts
        caption: Every transaction, synced with your server.
      - src: ../../assets/projects/actua/reports.png
        alt: Reports overview with a monthly income versus expenses chart
        caption: Actual's reports and dashboards.
      - src: ../../assets/projects/actua/bills-calendar.png
        alt: Bills calendar showing upcoming, overdue and paid scheduled transactions
        caption: A calendar of upcoming bills.
      - src: ../../assets/projects/actua/accounts.png
        alt: Accounts screen with on-budget and off-budget balances
        caption: All your accounts in one place.
      - src: ../../assets/projects/actua/rules.png
        alt: Rules screen for automatic categorisation
        caption: Rules that categorise for you.
---

## What it is

[Actual Budget](https://actualbudget.org/) is a local-first, self-hostable envelope budgeting app. Actua brings it to
Android with a native Material You interface. It connects directly to your own Actual server, keeps a local copy of
your budget for offline use, and syncs changes back with Actual's encrypted sync.

## What it does

- Budgeting, category targets, budget automations and moving money between categories
- Transactions, splits, transfers, reconciliation and scheduled transactions with a bills calendar
- Accounts, credit cards and payment reminders
- Actual's dashboard and saved custom reports, with drill-down to transactions
- Rules and automatic categorisation
- Imports from CSV, XLSX, PDF, SMS and notifications, plus Tasker intents
- Password and OpenID Connect login, automatic local backups and a home-screen widget

## How it's built

Actua is written in Kotlin with Jetpack Compose. Much of the work is _parity_: making sure the app reads and writes a
budget exactly the way Actual's own clients do, so the two never disagree. Each area (sync, transactions, rules,
reports, scheduled transactions) has its own parity document in the repository, alongside performance baselines,
recomposition audits and a release smoke test.

## Built in the open

Development happens on GitHub: issues, pull requests and a public changelog. The first alpha shipped in early
September 2026, and after a long run of beta builds for testers, 1.0.0 was released on 25 September 2026. Releases
are available from Google Play, as APKs on GitHub, and through Obtainium. There's a
[Discord](https://discord.gg/FyGxRjmhw) for users and testers.

## What I've learned

<!-- TODO(AziM): replace with your own reflections. -->

This section is still being written.

<p class="text-sm text-muted">
  Actua is an independent community project and is not affiliated with or endorsed by Actual Budget.
</p>
