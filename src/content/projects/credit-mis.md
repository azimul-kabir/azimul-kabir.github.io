---
tagline: Month-end credit portfolio reporting for management, processed locally from the loan workbooks.
facts:
  - { label: Type, value: Internal tool }
  - { label: Built with, value: TypeScript · React }
  - { label: Runs on, value: Windows PC · Synology NAS }
  - { label: Network, value: 'Offline, office LAN' }
gallery:
  - layout: wide
    items:
      - src: ../../assets/projects/credit-mis/overview.webp
        alt: Executive overview with portfolio totals and asset-quality signals
        caption: 'Executive overview: the month at a glance.'
      - src: ../../assets/projects/credit-mis/trend.webp
        alt: Trend analysis charts across reporting months
        caption: 'Trend analysis: how the portfolio moves month to month.'
      - src: ../../assets/projects/credit-mis/customer-group.webp
        alt: Customer and group exposure tables
        caption: 'Customer & group: concentration by borrower and group.'
      - src: ../../assets/projects/credit-mis/branch-zone.webp
        alt: Branch and zone comparison
        caption: 'Branch & zone: side-by-side comparison across the network.'
      - src: ../../assets/projects/credit-mis/network-scorecard.webp
        alt: Network scorecard ranking branches
        caption: 'Network scorecard: one view of every branch.'
      - src: ../../assets/projects/credit-mis/portfolio-analysis.webp
        alt: Portfolio analysis breakdowns
        caption: 'Portfolio analysis: breakdowns by product and classification.'
      - src: ../../assets/projects/credit-mis/early-warning.webp
        alt: Early warning watchlist
        caption: 'Early warning: accounts to watch before they slip.'
      - src: ../../assets/projects/credit-mis/monthly-upload.webp
        alt: Monthly upload workflow with validation and approval
        caption: 'Monthly upload: validate, resolve exceptions and approve a month.'
---

## What it is

Portfolio Pulse is a management information dashboard I built for my work in banking MIS. Every month-end, the credit
portfolio arrives as large Excel workbooks. Portfolio Pulse turns them into a set of management views covering asset
quality, concentration, branch performance and early warning, ready to review as soon as the month is approved.

It's an internal tool, so the code isn't public. The screenshots use synthetic demonstration data.

## What it does

- **Eleven management views**, from an executive overview and trend analysis to customer and group exposure, branch
  and zone comparison, a network scorecard and an early-warning watchlist.
- **A guided monthly upload.** Select the month-end workbooks, resolve any blocking validation exceptions, approve the
  funded snapshot, then save the non-funded month separately.
- **Automatic comparisons.** Each month is compared with the previous month and with the latest quarter-end, down to
  account level.
- **History that stays put.** Approved snapshots are kept in one shared file on the host PC or NAS, so every
  authorised browser on the office network sees the same months.
- **Raw files never retained.** Only processed snapshots are stored; the original workbooks are not kept.

## How it's built

The dashboard is a TypeScript and React app that processes the workbooks locally, so the data never leaves the office
network. It ships as two offline releases: a dependency-free PowerShell launcher for a Windows PC on the LAN,
and a container for a Synology NAS. An automated interaction audit covers all eleven pages, the approval flow, month
ordering, quarter selection and historical trend values.
