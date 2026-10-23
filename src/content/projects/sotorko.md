---
tagline: A Bangla-first Android app that helps you check a suspicious bKash or Nagad message before you send money.
facts:
  - { label: Status, value: Coming soon }
  - { label: Platform, value: Android 7.0+ }
  - { label: Built with, value: Kotlin · Jetpack Compose }
  - { label: Languages, value: বাংলা · English }
gallery:
  - title: Bangla (the default)
    layout: phone
    items:
      - src: ../../assets/projects/sotorko/bn-home.webp
        alt: Sotorko home screen with illustrated tiles for checking a message, checking a number, family, hotlines and "I've been scammed"
        caption: Home, with one big picture tile for each job.
      - src: ../../assets/projects/sotorko/bn-result.webp
        alt: Result of checking a message, listing the red flags found and asking who sent it
        caption: Check a message and see the red flags, in plain language.
      - src: ../../assets/projects/sotorko/bn-scammed.webp
        alt: 'The "I''ve been scammed" screen with hotline numbers and a step checklist'
        caption: If it already happened, the steps to take and who to call.
      - src: ../../assets/projects/sotorko/bn-family.webp
        alt: Family guardian screen for linking with a trusted family member
        caption: Optionally link a family guardian who is told about dangerous messages.
  - title: Complaint letter
    layout: phone
    items:
      - src: ../../assets/projects/sotorko/bn-gd.webp
        alt: Print preview of a filled-in General Diary application letter
        caption: A draft General Diary letter to print and take to the police station.
      - src: ../../assets/projects/sotorko/en-home.webp
        alt: The home screen in English
        caption: The same app in English, one tap from the settings.
      - src: ../../assets/projects/sotorko/en-result.webp
        alt: A message check result in English
        caption: A result in English.
---

## What it is

Scams on mobile financial services are common in Bangladesh: a message says money was sent by mistake and asks for
it back, an "agent" asks for a PIN or OTP, a link looks like bKash but isn't. Sotorko is an Android app for the person
who gets one of these. Paste or share the message into it, and it points out the red flags in plain Bangla, with a
spoken explanation for people who would rather listen than read.

It is built for ordinary phones, including Android Go devices, and the home screen is only big illustrated tiles, so it
works for people who are not comfortable with text-heavy apps.

## What it does

- Checks a message for the patterns scammers use, entirely on the phone, with no internet needed
- Reads the verdict aloud in Bangla or English
- Looks up how many people have reported a phone number, shown as unverified reports and never as a verdict
- Guides you through what to do if you've already been scammed: hotlines, a checklist, and a draft complaint and
  General Diary letter you can print
- Lets a family member act as a guardian who is alerted about dangerous messages, only if the person agrees
- Offers an optional app lock for shared phones and three text sizes

## Principles

- Results say "red flags found" or "no warning signs found". It never calls a message a confirmed scam, and never says
  something is safe.
- Message checks stay on the phone. The only things that go online are the optional family guardian and crowd reports,
  and nothing is collected for analytics.
- It never holds, moves or asks for money. It only reads and records.
- It needs no SMS or call-log permission: you share or paste a message yourself.

Sotorko is still in development and has not been released yet. This page will get download links when it is.
