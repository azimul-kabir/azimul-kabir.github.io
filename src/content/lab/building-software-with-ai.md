---
title: 'Building Software with AI Without Giving Up Engineering Judgment'
description: 'How AI coding assistants fit into my workflow, where they save time, where they make mistakes, and why testing, reviewing and understanding the code still matter.'
date: 2026-10-14
tags: ['AI', 'Software engineering', 'Actua', 'Open source']
draft: false
---

I build [Actua](/projects/actua), [Harmony](/projects/harmony) and this website in the time left over from a full-time job in banking. I could not keep that many projects moving without AI coding assistants. I also would not trust any of them if the assistant were the one making the decisions.

This post is about where that line sits for me.

## Where AI saves real time

The biggest win is not writing code faster. It is getting through the work around the code.

- **Finding my way around.** Asking "where does this value come from?" across a large codebase, or a library I have never used, gets me to the right file in minutes instead of an evening.
- **The boring parts.** Workflow files, build configuration, migrations, test fixtures, changelogs, release notes. Necessary, easy to get subtly wrong, and rarely the interesting part of the problem.
- **First drafts.** A working first version of a screen, a script or a test gives me something concrete to review and reshape, which is faster than starting from an empty file.
- **Second opinions.** A pull request on Actua can be sent to an AI reviewer by adding a label. It reads the diff as text and leaves comments. It catches things I miss, and occasionally points at things that are not problems at all.

For a solo developer, that adds up to something like a small team's worth of throughput. But only if I stay the one who decides what is correct.

## Where it gets things wrong

AI mistakes rarely look like mistakes. The code compiles, the explanation sounds confident and the change is often 90% right. The remaining 10% is where the trouble is.

**It acts on the most likely reading, not the right one.** When I asked for my nickname to change from Apu to AziM on this site, the first version changed my full name too. A sensible guess, and wrong. It was a two-minute fix because I read the result before it went live.

**It assumes the obvious cause.** My website was showing an old Actua version after a release. The obvious explanation was that the daily rebuild had not run yet. The real cause was that azimulkabir.com is served by Cloudflare Pages, which only rebuilds on a code push, while the daily rebuild only refreshed the GitHub Pages copy. Finding that meant comparing what each host was actually serving. Fixing the first explanation would have changed nothing.

**It does not know which rules are sacred.** A finance app has invariants that look like ordinary code: amounts are stored as whole cents, never floating-point numbers; every synchronised change has to go through the same message log so other devices can merge it; dates and deletions have to be encoded exactly the way Actual expects. An assistant can write perfectly reasonable code that quietly breaks one of these, and the bug will not show up until someone's budget stops syncing.

**Its knowledge has a date on it.** Library versions, APIs and platform rules move. An answer can be correct for last year's version of a tool. Before upgrading anything, I still read the release notes myself.

## How I keep my judgment in the loop

None of these problems mean AI is not useful. They mean the safeguards have to live in the project, not in my hope that the assistant gets it right.

### Write the rules down

Actua has an `AGENTS.md` file that every contributor, human or AI, is expected to read first. It explains how the code is organised and lists the data and sync rules that must not be broken: integer cents, routing changes through the existing writers, never logging credentials or real financial data, using only synthetic test data. Writing these down helped me as much as the assistant. Rules that only exist in my head are rules I will eventually forget.

### Let the tests decide, not the explanation

"This should work" is not evidence. For Actua's most important behaviour, the tests compare against Actual itself rather than against my own idea of what Actual does:

- The **rules** and **budget month** tests generate expected results from Actual's own engine and replay them through Actua. If the two disagree, the build fails.
- The **two-client** test makes the same edits through Actual and through Actua against a throwaway server, syncs them, and compares the rows.

When an assistant changes sync or budget code, it does not matter how convincing its explanation is. Either the numbers match Actual or they do not.

### Review harder where the stakes are higher

Every Actua pull request is labelled automatically by which files it touches. Documentation and assets are low risk. Sync, database, security, budget and rules code is high risk and gets a slow, careful review, whoever wrote it. AI makes it cheap to produce large changes, so I try to keep pull requests small enough that I can actually read them.

### Test on a real device before release

Continuous integration is the automated gate, but it cannot prove everything. Actua has a release smoke-test checklist: install over the previous version without losing data, make an edit in Actua and confirm it appears in Actual, and the reverse, check that transfers stay paired, back up and restore. Some of the most important checks are simply using the app the way a person would.

### Understand it before merging it

My personal rule is simple. If I could not explain a change to someone else, it is not ready to merge. That does not mean I type every line myself. It means I know what the change does, why it is needed and what would break if it were wrong. When I cannot answer those questions, I ask the assistant to explain or I read the code until I can.

## Speed comes from the guardrails

The surprising part is that this discipline is what makes AI fast. Because the parity tests exist, I can let an assistant attempt a sync change without fear. Because the rules are written down, its first attempt is usually closer. Because pull requests are small and labelled, reviewing them is quick.

AI has changed how much I can build on my own. It has not changed who is responsible. When someone trusts Actua with their budget, the person answerable for that is me, not the tool that helped write the code.
