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

### Proposed integration

1. Add an optional country-format selector to the existing toolbar/editor.
2. Load `resume-formats/registry.js` as an ES module (or bundle the registry into the current script if deployment constraints require it).
3. Resolve the selected profile through `shared/normalize-profile.js`.
4. Apply a root format identifier such as `data-resume-format="uk"` to the preview and export clone.
5. Use country-scoped CSS classes/variables for page size, margins, typography, heading labels, spacing, and section ordering. Do not replace the current default style.
6. Keep user-supplied JSON authoritative. Country presets may provide section order and labels only when the user has not explicitly supplied them.
7. Preserve unknown/custom fields in the JSON. Never silently remove photo, address, work authorization, nationality, or other fields; show country guidance and let the user decide.
8. Persist the selected format separately from resume JSON so existing JSON files remain backward-compatible.

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
