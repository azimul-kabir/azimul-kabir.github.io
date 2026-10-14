---
title: 'Actua: from 1.0 to 1.4 in a week'
description: 'What changed in the first week after Actua left beta, and what shipping five releases in six days looked like.'
date: 2026-09-30
tags: ['Actua', 'Android', 'Open source']
# Draft: review and rewrite in your own words before setting this to false.
draft: true
---

[Actua](/projects/actua) is a native Android client for [Actual Budget](https://actualbudget.org/). It left beta on 25 September 2026 with version 1.0.0. Six days later it is on 1.4.0. These are my notes on what changed.

## 1.0.0: removing the beta label

Most of 1.0 was finishing touches rather than features: budget template actions scoped to a category group, a "set budgets to zero" action, and links to a privacy policy and to actualbudget.org for new users who have never run an Actual server.

## 1.1 and 1.2: accounts and reports

Accounts can be reordered by drag and drop and shown in Actual's account groups. Bank sync now matches an imported transaction to one you already entered by hand, instead of creating a duplicate. Custom reports can show a total and an average per period.

## 1.3: sync, storage and backups

1.3 was the riskiest release so far. It changed how Actua syncs, stores and backs up budgets, and it came with upgrade notes: sync before updating, and keep an independent backup from Actual. When an app holds people's financial data, a clear upgrade path matters more than any single feature.

## 1.4: one consistent design

1.4 redesigned Add transaction as a single page. The sign of the amount decides expense or income, and choosing an account as the payee makes a transfer. The same card-based layout then spread to Budget, Accounts, Reports, Rules and Settings.

## What I'm taking away

<!-- TODO: your own reflections, e.g. testers, release cadence, working with AI tools. -->
