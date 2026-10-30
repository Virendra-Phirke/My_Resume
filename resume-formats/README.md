# International Resume Formats

This folder contains country-specific resume/CV format profiles for the existing JSON-driven resume builder.

## Supported profiles

- `us` — United States resume
- `uk` — United Kingdom CV
- `canada` — Canadian resume
- `australia` — Australian resume
- `germany` — German Lebenslauf
- `uae` — UAE-focused CV
- `india` — Indian resume

## Architecture

- `countries/<country>.js`: one independent profile per country.
- `registry.js`: the only module that imports and exposes the country profiles.
- `shared/normalize-profile.js`: safe profile lookup and non-mutating profile resolution.
- `IMPLEMENTATION_PLAN.md`: staged integration and regression plan.

Profiles contain presentation and editorial guidance only. They do not rewrite a candidate's facts, infer work authorization, add personal information, or silently delete JSON fields.

## Current integration status

The profiles are integrated through an optional country-format selector in `index.html`. The original A4 layout remains the default. Country selection is stored separately from resume JSON, applies country-specific section ordering, default headings, page size, margins, and both print/PDF export settings. The existing JSON schema and user content remain canonical; custom headings and section order are preserved. Browser-level visual and exported-PDF regression checks are still required before release.

## Usage (module consumers)

```js
import { getResumeFormat } from "./resume-formats/shared/normalize-profile.js";

const format = getResumeFormat("uk");
// format.id, format.page, format.sections, format.guidance
```

Use `registry.js` for supported IDs and display labels. A country profile is a formatting baseline, not a guarantee of compliance with every employer's instructions.
