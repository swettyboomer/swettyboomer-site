---
# ─────────────────────────────────────────────────────────────────────────────
#  Shelf for Music — Privacy Policy content.
#
#  THIS FILE IS THE SINGLE SOURCE OF TRUTH for
#  https://swettyboomer.dev/privacy/shelf-for-music
#  The desktop app links straight to that URL, so editing this file (and pushing)
#  updates the policy everywhere — no app release needed.
#
#  How the routing works: src/pages/privacy/[slug].astro looks for a file named
#  src/policies/<app-slug>.md. If it finds one (like this), it renders it as the
#  app's policy. If not, it falls back to a generic templated policy. So to give
#  another app a full custom policy, drop a <slug>.md file in this folder.
#
#  To edit:  change the prose below, bump `lastUpdated`, save, commit, push.
#            The site rebuilds and goes live in about a minute.
# ─────────────────────────────────────────────────────────────────────────────
lastUpdated: "July 21, 2026"
---

Shelf for Music (&ldquo;the app&rdquo;) is a local-first desktop application for
managing a music collection. This policy explains, in plain language, what data
the app handles, what leaves your computer, to whom, and why.

**The short version:** your collection lives on your own computer. The app has
**no analytics and no telemetry** — it never reports your usage to us or anyone
else. Apart from an automatic check for updates when the app starts (described
below), the only data that leaves your machine is data you actively choose to
send by using a specific feature.

## What is stored, and where

All of your data — your collection, wishlist, settings, scan results, and your
API credentials — is stored **locally** on your computer as plain JSON files in
the app's data folder. Nothing is stored on our servers; we do not operate any
server that receives your collection or personal data.

Your API keys and OAuth tokens (Anthropic, Discogs, Google) are stored in
`config.json` in plain text. Keep your data folder private.

## What the app does automatically on launch

When you open Shelf for Music, it contacts **GitHub** for two things:

1. **Update check.** It asks whether a newer version of the app is available.
2. **Enrichment database.** It downloads (or refreshes) a music
   &ldquo;enrichment database&rdquo; — a shared reference file used to fill in
   details about your releases.

These requests go to GitHub and are subject to
[GitHub's privacy statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).
They do **not** send your collection or personal data — they simply fetch files.
As with any web request, GitHub necessarily sees your IP address and the fact
that the app asked for these files.

## What leaves your computer when you use these features

1. **Photo identification (Anthropic).** When you use Photo ID to scan a record,
   the photo you capture is sent to Anthropic's Claude API to read the text on
   the label or cover and identify the release. The image and the extracted text
   are processed by Anthropic under their terms and privacy policy. Photos are
   sent **only when you initiate a scan**. If you never use Photo ID, no images
   are ever transmitted.

2. **Discogs.** When you connect a Discogs account (via Discogs OAuth) or run a
   search, the app contacts the Discogs API to fetch release metadata and to
   sync your collection and wishlist to and from your Discogs account. Album
   metadata and cover-art URLs come from Discogs.

3. **MusicBrainz / Cover Art Archive.** The app may fetch supplementary metadata
   and cover art from these public music databases to enrich your releases.

4. **Optional Cloud Backup (your own Google Drive).** If you connect Google Drive
   and enable Cloud Backup (it is **off by default and opt-in**), the app uploads
   a backup ZIP of your collection, wishlist, settings, scan results, and artist
   data to a folder in **your own Google Drive account**. The app uses the
   `drive.file` scope, meaning it can only see files it created. **Your API keys
   and secrets are stripped from the config before the backup is uploaded.** We
   never receive these backups; they reside in your Google account.

## What we do NOT do

- We do **not** collect analytics, usage statistics, or telemetry.
- We do **not** operate servers that receive your collection or personal data.
- We do **not** sell, share, or transmit your data to any party other than the
  services listed above, and only when you use the corresponding feature (or, for
  the launch-time update check, to GitHub as described).

## Third-party services

When you use the features above, your data is handled by those providers under
their own policies:

- Anthropic — [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy)
- Discogs — [discogs.com/help/privacy](https://www.discogs.com/help/privacy)
- Google — [policies.google.com/privacy](https://policies.google.com/privacy)
- MusicBrainz — [metabrainz.org/privacy](https://metabrainz.org/privacy)
- GitHub — [GitHub Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)

## Your control

- Photo ID, Discogs sync, and Cloud Backup are all optional. If you don't use
  them, no corresponding data leaves your machine.
- You can disconnect Discogs or Google Drive at any time in Settings.
- Because your data is stored in plain files on your computer, you can back it
  up, move it, or delete it yourself at any time.

## Changes to this policy

We may update this policy from time to time. When we do, we revise the
&ldquo;Last updated&rdquo; date at the top of this page. Because the app links to
this page directly, you always see the current version here.

## Contact

Questions about this policy can be directed to
[hello@swettyboomer.dev](mailto:hello@swettyboomer.dev).
