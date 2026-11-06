# Privacy Policy owner checklist (internal)

This file is not shown on the public Privacy Policy. Complete it, then have counsel review `/privacy-policy` before App Store submission.

## How to read findings

| Status | Meaning |
| --- | --- |
| Verified from website code | Observed in this repository’s frontend |
| Not present in website code | Not found in this repo; **not** proof it is absent from the iOS app or backend |
| Unknown (app/backend unavailable) | Cannot be determined without the mobile application and any servers |
| Requires owner confirmation | Operator must answer before the policy can be published |

This repository contains **website code only**. A website review does not verify the mobile application’s data practices.

## Outstanding questions

- [ ] Legal company name
- [ ] Official support / privacy email
- [ ] Registered business address (if applicable)
- [ ] Privacy jurisdiction / governing law
- [ ] Intended minimum age
- [ ] Custodial vs non-custodial architecture
- [ ] Private-key and recovery-phrase handling
- [ ] Whether account registration is required
- [ ] Personal information collected by the iOS app
- [ ] Device identifiers, IP, crash and diagnostic data
- [ ] Analytics providers
- [ ] Crash-reporting providers
- [ ] Blockchain RPC / node providers
- [ ] Other third-party APIs
- [ ] Local vs remote storage
- [ ] Encryption and access control
- [ ] Data sharing
- [ ] Retention periods
- [ ] International transfers
- [ ] Whether the website host stores access logs
- [ ] Production domain for the public Privacy Policy URL
- [ ] Effective date and last-updated date

After confirmation: set `privacyStatus: 'published'` in `src/config/site.ts` and replace draft banner copy only if counsel agrees the policy matches the live app.
