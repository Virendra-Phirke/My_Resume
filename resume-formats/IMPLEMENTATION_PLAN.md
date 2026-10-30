# International Resume Formats — Implementation Plan

## Existing application findings

The current application is a single-page HTML/CSS/JavaScript resume builder:

- `index.html` contains the UI, all styles, the default JSON profile, rendering logic, validation, local-storage persistence, preview scaling, and PDF/print export.
- The renderer creates semantic DOM nodes with `textContent`; it supports summary, skills, experience, projects, education, certifications, GitHub, languages, and custom sections.
- The current visual template is a one-column A4 layout with fixed margins and typography intended to reproduce the existing resume.
- Print uses browser-native vector text; the separate quick-download path uses html2pdf.
- `vercel.json` only enables clean URLs.
- `Virendra_Phirke_Resume.html` is a standalone HTML resume artifact and should remain untouched unless a later task explicitly targets it.

## Design decision

Keep the existing JSON schema as the canonical content model. Country profiles must be presentation metadata and guidance, not separate incompatible resume data schemas. A selected country profile should be applied as a non-destructive rendering layer.

## Integration completed

1. Added an optional country-format selector to the toolbar, with an explicit `Original layout (A4)` choice.
2. Loaded `resume-formats/registry.js` and `shared/normalize-profile.js` as ES modules.
3. Resolved country-specific section order and default headings without mutating the source JSON. User-customized headings and explicit section order take precedence.
4. Applied selected page size and margins to the preview and browser-native print output.
5. Applied matching paper size, content width, and margins to the html2pdf export path.
6. Persisted the selected format under a separate local-storage key, leaving existing resume JSON storage backward-compatible.
7. Kept the original A4 layout as the initial/default selection.

## Remaining release verification

- Test the selector, mobile toolbar, page dimensions, print preview, and both PDF paths in a real browser.
- Verify no clipping or page-break regressions for all seven profiles.
- Verify JSON import/export, reset, local storage, theme, zoom, and existing editor controls.

## Country profile principles

- United States: use “resume”; concise, achievement-led, reverse chronological; normally omit photo and sensitive personal details; Letter page size is the default convention.
- United Kingdom: use “CV”; concise, evidence-led, reverse chronological; normally omit photo, date of birth, marital status, and similar personal details.
- Canada: use “resume”; achievement-led and ATS-readable; normally omit photo and personal demographics.
- Australia: use “resume”; skills and outcomes should be explicit; normally omit photo and personal demographics.
- Germany: use “Lebenslauf”; structured reverse chronology and clear dates; A4 is standard; photo and signature are optional/employer-dependent, not universal requirements.
- UAE: use “CV”; clear contact/location and relevant experience; photo, nationality, and visa/work-authorization details are employer- and role-dependent rather than universal requirements.
- India: use “resume”; concise, role-focused and ATS-readable; photo and demographic details should be included only when specifically requested or clearly relevant.

These are defaults, not legal rules. Employer instructions and regulated-role requirements take precedence.

## Non-goals

- No automatic translation.
- No fabrication or inference of credentials, visa status, nationality, age, or work authorization.
- No forced deletion or addition of personal data.
- No change to the existing default resume appearance unless a user selects another format.
- No replacement of the current print/PDF export pipeline in this phase.

## Validation and regression checklist

Before integration is considered complete:

- Verify every profile ID resolves and unknown IDs safely fall back to the default profile.
- Verify profile resolution does not mutate the source JSON.
- Verify explicit JSON `order` and `headings` override country defaults.
- Verify missing optional fields do not render empty sections.
- Verify current/default mode remains pixel-identical to the baseline.
- Verify each format in preview, browser print, vector PDF, and quick PDF.
- Verify Letter and A4 dimensions/margins are reflected in print and export.
- Verify mobile editor/preview tabs and zoom continue to work.
- Verify JSON import/export, reset, local storage, and AI prompt behavior.
- Run syntax checks and inspect generated PDFs for clipping, broken links, and selectable text.
