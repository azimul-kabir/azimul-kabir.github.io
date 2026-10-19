---
tagline: A native Android client for Actual Budget, built in the open.
facts:
  - { label: Platform, value: Android 9+ }
  - { label: Built with, value: Kotlin · Jetpack Compose }
  - { label: License, value: GPLv3 }
gallery:
  - layout: phone
    items:
      - src: ../../assets/projects/actua/light/home.png
        dark: ../../assets/projects/actua/dark/home.png
        alt: Home screen with Ready to Budget, favourite categories and accounts, and upcoming bills
      - src: ../../assets/projects/actua/light/budget.png
        dark: ../../assets/projects/actua/dark/budget.png
        alt: Budget screen with category balances, targets and Ready to Budget
      - src: ../../assets/projects/actua/light/add-transaction.png
        dark: ../../assets/projects/actua/dark/add-transaction.png
        alt: Add transaction screen with payee, category, account, date and notes
      - src: ../../assets/projects/actua/light/accounts.png
        dark: ../../assets/projects/actua/dark/accounts.png
        alt: Accounts screen with favourites, on-budget and off-budget balances
      - src: ../../assets/projects/actua/light/reports.png
        dark: ../../assets/projects/actua/dark/reports.png
        alt: Spending by category report with a donut chart
      - src: ../../assets/projects/actua/light/net-worth.png
        dark: ../../assets/projects/actua/dark/net-worth.png
        alt: Net worth and cash flow charts
      - src: ../../assets/projects/actua/light/bills-calendar.png
        dark: ../../assets/projects/actua/dark/bills-calendar.png
        alt: Bills calendar with upcoming, overdue and paid bills
      - src: ../../assets/projects/actua/light/rules.png
        dark: ../../assets/projects/actua/dark/rules.png
        alt: Rules screen for automatic categorisation
---

## What it is

[Actual Budget](https://actualbudget.org/) is a local-first, self-hostable budgeting app with envelope and tracking
budgets. Actua brings it to Android with a native Material You interface. It connects directly to your own Actual
server, keeps a local copy of your budget for offline use, and syncs changes back with Actual's encrypted sync.

## What it does

- Standalone on-device budgets with no server, plus optional Google Drive backup with client-side encryption
- Envelope and tracking budgets, category targets, budget automations and moving money between categories
- Transactions, splits, transfers, reconciliation and scheduled transactions with a bills calendar
- Accounts with collapsible groups, credit cards and payment reminders
- Bank sync through your Actual server, including SimpleFIN and GoCardless
- Actual's dashboard and saved custom reports, a custom report builder, and drill-down to transactions
- Rules and automatic categorisation, payee management, tags and global search
- Imports from CSV, XLSX, PDF, OFX, QFX, QIF, CAMT.053, SMS and bank notifications, plus a Tasker plugin, with captured transactions
  reviewed before they are saved
- Password and OpenID Connect login, automatic local backups and home-screen widgets

## How it's built

Actua is written in Kotlin with Jetpack Compose. Much of the work is _parity_: making sure the app reads and writes a
budget exactly the way Actual's own clients do, so the two never disagree. Each area (sync, transactions, rules,
reports, scheduled transactions) has its own parity document in the repository, alongside performance baselines,
recomposition audits and a release smoke test.

## Built in the open

Development happens on [GitHub](https://github.com/azimul-kabir/actua), with issues, pull requests and a public
changelog. The first alpha shipped in early September 2026, and after a long run of beta builds for testers, 1.0.0
was released on 25 September 2026, and 2.0.0 followed on 19 October 2026 with standalone budgets, Google Drive backup and a move to the GPLv3 licence. Actua is now available to everyone on
[Google Play](https://play.google.com/store/apps/details?id=com.azimulkabir.actua). You can also download APKs from
[GitHub Releases](https://github.com/azimul-kabir/actua/releases) or install through
[Obtainium](https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/azimul-kabir/actua).
For help and discussion, join the [Actua Discord](https://discord.gg/FhedEyP97f).

## What I've learned

- **A finance app is judged on its details.** Quick, predictable transactions, clear balances and easy categories
  matter more than any headline feature. A bug is not just an annoyance: it is someone's money that no longer adds up.
- **Testers are the best guide.** Shipping a beta almost every day only worked because testers kept installing builds
  and reporting what broke.
- **Using the product helps.** I use Actual myself and know its ins and outs, so I usually know how something should
  work and where it could be better.
- **Parity needs proof.** Comparing Actua's results with Actual's own engine catches the mistakes a convincing
  explanation would miss.

There's more in [The Journey of Actua](/blog/the-journey-of-actua).

<p class="text-sm text-muted">
  Actua is an independent community project and is not affiliated with or endorsed by Actual Budget.
</p>
