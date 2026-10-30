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

These files are deliberately isolated and are not imported by `index.html` yet. This keeps the existing resume editor, JSON schema, preview, local-storage behavior, print output, and PDF export unchanged while the country profiles are reviewed. The next integration stage can add an optional format selector and apply the selected profile through a controlled rendering adapter.

## Usage (module consumers)

```js
import { getResumeFormat } from "./resume-formats/shared/normalize-profile.js";

const format = getResumeFormat("uk");
// format.id, format.page, format.sections, format.guidance
```

Use `registry.js` for supported IDs and display labels. A country profile is a formatting baseline, not a guarantee of compliance with every employer's instructions.
