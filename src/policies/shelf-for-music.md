---
# ─────────────────────────────────────────────────────────────────────────────
#  Shelf for Music — Privacy Policy content, served at
#  https://swettyboomer.dev/privacy/shelf-for-music
#
#  THIS FILE IS A COPY. The canonical text is PRIVACY.md in the Shelf for Music
#  repository (swettyboomer/Shelf-for-Discogs, branch main), which is also what
#  biglittlebrother.dev/privacy/shelf-for-music publishes. Change PRIVACY.md
#  first, then copy its body here: everything after its "# Privacy Policy" title
#  and "_Last updated_" lines, because this site's page prints its own title and
#  the date below (src/pages/privacy/[slug].astro). Set lastUpdated to the same
#  date, then commit and push; the site rebuilds in about a minute.
# ─────────────────────────────────────────────────────────────────────────────
lastUpdated: "October 14, 2026"
---

Shelf for Music is published by Big Little Brother LLC ("we", "us"). Shelf for Music ("the app") is a
local-first desktop application for managing a music collection. This policy explains, in plain
language, what data the app handles, what leaves your computer, to whom, and why.

**The short version:** your collection lives on your own computer. The app has **no analytics and no
telemetry**: it never reports your usage to us or to anyone else, and we operate no server that
receives your collection, your photos or your personal data. Apart from the background downloads
described under "What the app does by itself", data leaves your computer only when you use a
feature that needs it.

## What is stored, and where

All of your data (your collection, wishlist, settings, scan results, scan photos and your
credentials) is stored **locally** on your computer, as plain files in the app's data folder
(scan photos go to a folder you can choose in Settings).

Your credentials (your Anthropic API key and your Discogs and Google sign-in tokens) are stored in
`config.json` in plain text. Keep your data folder private.

## What the app does by itself

1. **The enrichment database (GitHub).** When the app starts, it asks GitHub whether a newer
   edition of its shared music reference database exists, and downloads it if so. You can also
   download it from within the app. These requests fetch files; they do not send your collection or
   any personal data. As with any web request, GitHub sees your IP address and which files were
   requested.
2. **Images on the app's pages.** When you view albums, the app's pages load country flags from
   flagcdn.com and cover images from Discogs and the Cover Art Archive. Those services see your IP
   address and which images were requested.
3. **Updates.** The app does not check for updates itself. If you installed it from the
   Microsoft Store, the Store keeps it up to date under Microsoft's own terms.

## What leaves your computer when you use a feature

1. **Photo identification (Anthropic).** When you scan a record with Photo ID or Deep Scan, the
   photos you capture are sent **directly from your computer to Anthropic's Claude API**, using the
   Anthropic API key you entered, to read the text on the label or cover and identify the release.
   They are processed under your own Anthropic account and Anthropic's terms and privacy policy; we
   never receive them. Photos are sent only when you start a scan. If you never scan, no images are
   transmitted. When you enter or test your key, the app sends Anthropic a one-word test message to
   confirm that the key works.
2. **Discogs.** When you connect a Discogs account (through Discogs sign-in) or run a search, the app
   contacts Discogs to fetch release details and cover images and to keep your collection and
   wishlist in step with your Discogs account.
3. **MusicBrainz and the Cover Art Archive.** The app may fetch additional release details and cover
   art from these public music databases.
4. **Optional backup to your own Google Drive.** If you connect Google Drive and turn on cloud backup
   (it is **off by default**), the app uploads a backup ZIP of your collection data (collection,
   wishlist, settings, scan results, artist data and similar files) to a folder in **your own Google
   Drive**. Photos are not included in this backup. The app uses Google's `drive.file` permission, so
   it can see only the files it created, and it receives your Google account's email address, which
   it stores to show you which account is connected. **Your API key and sign-in tokens are removed from the
   settings before the backup is uploaded.** We never receive these backups; they stay in your
   Google account.
5. **Gemini research (optional).** The Research button copies a research prompt (the album's
   artist, title, catalogue number and Discogs release number) to your clipboard and opens gemini.google.com in your browser. The app itself sends
   nothing to Google; anything you paste there is handled by Google under its own terms.

## What stays on your computer

- **Local backups.** The app's automatic and manual backups, which include your photos by default,
  are saved to a folder on your computer (the app picks one by default; you can choose another). If you choose a folder that a cloud service
  synchronizes, that service's terms apply to the copy it makes.
- **Phone scanning.** Scanning with your phone is off by default. When you turn it on, your phone
  connects to the app over your own local network, paired by a QR code, and its photos go to your
  computer, not to us.

## What we do not do

- We do **not** collect analytics, usage statistics or telemetry.
- We do **not** operate any server that receives your collection, your photos or your personal data.
- We do **not** sell, share or transmit your data to anyone other than the services listed in this
  policy, and only as this policy describes.

## Children

Shelf for Music is not directed at children. We do not knowingly collect information from anyone,
children included; the app sends us nothing at all.

## Your data and deletion

We hold no personal data about you, so there is nothing for us to access, correct or delete. Your
data is in files on your own computer and in the accounts you choose to connect (Discogs, Google,
Anthropic). You can delete the files yourself at any time, and manage or delete those accounts with
the services that run them.

## Third-party services

When you use the features above, your data is handled by those services under their own policies:

- Anthropic — https://www.anthropic.com/legal/privacy
- Discogs — https://www.discogs.com/help/privacy
- Google (Drive, Gemini) — https://policies.google.com/privacy
- MusicBrainz and the Cover Art Archive — https://metabrainz.org/privacy
- GitHub — https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement
- Microsoft (Store installs and updates) — https://privacy.microsoft.com/privacystatement
- flagcdn.com (country flag images)

## Your control

- Photo ID, Discogs, Google Drive backup, Gemini research and phone scanning are all optional. If you
  don't use them, no corresponding data leaves your computer.
- You can disconnect Discogs or Google Drive at any time in Settings.
- Because your data is stored in plain files on your computer, you can back it up, move it or delete
  it yourself at any time.

## Changes to this policy

We may update this policy from time to time. When we do, we change the "Last updated" date at the top
of this page. Because the app links to this page directly, you always see the current version here.

## Contact

Questions about this policy can be sent to Big Little Brother LLC at hello@biglittlebrother.dev.
