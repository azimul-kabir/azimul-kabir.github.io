---
tagline: Merge overlapping photo and video backups into one verified, deduplicated library, without touching the originals.
facts:
  - { label: Runs on, value: Synology NAS · macOS }
  - { label: Built with, value: Python · SQLite }
  - { label: Interface, value: CLI · local web UI }
  - { label: Made for, value: Immich }
gallery:
  - layout: full
    items:
      - src: ../../assets/projects/photo-migrator/gui-plan-review.png
        alt: Plan review showing 89 new files, 33 already in the library and 14 duplicates, with a table of each duplicate and the copy it matches
        caption: Review the plan before anything is copied. Here, 14 photos on an old laptop duplicate phone-backup photos, so only the higher-priority phone copy is imported.
  - layout: wide
    items:
      - src: ../../assets/projects/photo-migrator/gui-setup.png
        alt: Setup form with a clean library folder, an import folder and two prioritised read-only sources
        caption: 'First run: describe your folders and a configuration file is created for you.'
      - src: ../../assets/projects/photo-migrator/gui-confirm.png
        alt: Confirmation dialog to copy 89 files into the clean library, with a required checkbox confirming the plan and dry run were reviewed
        caption: Import only unlocks after a dry run of the same plan, and still asks you to confirm.
---

## What it is

Years of phones, laptops and backup drives leave the same photos scattered across several overlapping folders.
Photo Migrator consolidates them into one clean library, ready for [Immich](https://immich.app/), and treats every
original as precious along the way.

It indexes the library you already have, scans your old sources, and imports only what's missing. The same photo found
in three backups is imported once, from the source you rank highest.

## What it does

- **Exact duplicates only.** Files are compared by size, then by SHA-256. Nothing is merged on a guess, and the image
  and video halves of a Live Photo stay as separate files.
- **Originals stay untouched.** Sources are only ever read. Imports copy through a temporary file and are verified
  before and after they're placed.
- **Your library stays as it is.** The existing library is indexed in place and never reorganised; only new content is
  copied in.
- **Plan, dry run, then import.** You review a plan of new files, files already in the library and duplicates, run a
  dry run, and only then import.
- **Everything is on record.** Plans, runs and errors are kept in SQLite and CSV reports, and an interrupted run
  resumes where it stopped.

## How it's built

Photo Migrator is a Python package (3.9 to 3.13) with a single SQLite inventory behind it, tested in CI on Linux and
macOS. It runs from the command line, one step at a time, or through `photo-migrator gui`, a small web interface built
on the Python standard library that calls the same code.

The web interface is deliberately cautious: it listens only on the local machine, needs a private token for every
request, runs one step at a time with a safe stop, and keeps rollback on the command line. On a headless NAS you reach
it through an SSH tunnel.
