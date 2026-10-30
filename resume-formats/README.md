
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

## Exact country layouts & ATS profiles

The resume builder supports 7 distinct country profiles matching international recruitment standards and the reference layouts:

1. **🇺🇸 USA – Resume (1 page • ATS-friendly):**
   - Single-column ATS layout with dark navy accents.
   - All-caps section headings with solid divider lines (`PROFESSIONAL SUMMARY`, `TECHNICAL SKILLS`, `PROJECTS`, `WORK EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`).
   - Categorized skills table (`Languages`, `Frontend`, `Backend`, `Databases`, `Tools`).
   - Quantified bullet points; no photos, age, or marital status for compliance with US anti-discrimination practices.

2. **🇬🇧 UK – CV (1–2 pages • British English):**
   - Single-column British CV layout with Title Case headings (`Personal Profile`, `Key Skills`, `Work Experience`, `Education`, `Projects`, `Certifications`).
   - Role subtitle below candidate name (`Data Analyst & Software Developer`).
   - Multi-column 2-column Key Skills bullet grid for high scannability.
   - Outcome-oriented reverse-chronological work experience.

3. **🇨🇦 Canada – Resume (1–2 pages • Canadian English):**
   - Single-column Canadian resume with forest slate accent colors.
   - Role subtitle, clean contact list with icons.
   - `Core Competencies` presented as a 2-column bullet grid.
   - `Volunteer Experience` and community work prominently supported.

4. **🇦🇺 Australia – Resume (2 pages • Australian English):**
   - Solid full-width Dark Navy header banner with crisp white and light-blue typography.
   - `Career Profile` followed by a 2-column `Key Capabilities` grid.
   - `Employment History` in reverse chronological order with CAR/STAR bullet points.
   - Standalone `Key Achievements` section and formal `Referees: Available upon request` notice.

5. **🇩🇪 Germany – Lebenslauf (1–2 pages • German or English):**
   - Two-column layout with a cool-tinted left sidebar (`width: 32%`) and white main column (`width: 68%`).
   - Left sidebar: square rounded professional photo/avatar, name, role subtitle, vertical contact list with icons, and `Languages` with proficiency levels (`English (Fluent)`, `German (Basic)`).
   - Right column: `Professional Profile` / `Berufliches Profil`, `Work Experience` / `Berufserfahrung`, `Education` / `Ausbildung`, `Technical Skills` / `Kenntnisse`, `Certifications` / `Zertifikate`.

6. **🇦🇪 UAE – CV (1–2 pages • Professional photo common):**
   - Full-width Dark Navy top banner featuring candidate's circular profile photo/avatar, candidate name in bold white, role subtitle in gold, and contact information with icons.
   - Two-column body below header:
     - Left sidebar: `Professional Information` block displaying `Nationality`, `Visa Status`, and `Notice Period`, followed by `Skills` list and `Languages`.
     - Right column: `Professional Summary`, `Work Experience`, `Education`, `Projects`, `Certifications`.

7. **🇮🇳 India – Resume (1 page • Indian English):**
   - Header with name, role subtitle, and 2 clean contact rows with icons on the left, and a circular photo/avatar on the right.
   - Single-column structured body: `Career Objective`, categorized `Technical Skills` table, `Education` with highlighted CGPA/percentage badge, `Projects`, `Certifications`, `Languages`.

8. **Original layout (A4):**
   - Retains the exact, pixel-perfect Word .docx clone (Calibri 10pt, margins 43.15pt 57.6pt 39.6pt 57.6pt, color #1F3864).

## Interactive features & export choices

- **Country Guide Modal:** Built-in interactive guide in the toolbar displaying the "Key Differences at a Glance" comparison matrix and ATS tips.
- **Save Vector PDF (ATS):** Browser print with 100% selectable vector text and clickable links; suppresses photos and avatars for robot ATS parsers.
- **Save Visual PDF:** Browser print with exact visual design including photos, avatars, and navy banners for human reviewers.
- **Quick PDF (Raster):** Direct download via html2pdf matching preview dimensions.
- **Customization Preservation:** Source resume JSON schema remains canonical; custom headings, ordering, and user data are never mutated.

## AI Resume Workflow (ChatGPT / Claude / Gemini)

The application is engineered so users can effortlessly tailor their resume with AI:

1. Click **`AI prompt`** in the toolbar to copy the complete prompt and strict JSON schema.
2. Paste the prompt into ChatGPT or Claude along with your target Job Description.
3. Ask the AI to tailor your resume for the role.
4. Copy the JSON returned by the AI and paste it directly into the editor.
   *(Markdown code blocks like ```` ```json ```` are automatically stripped and formatted upon pasting).*
5. Select any country format (USA, UK, Canada, Australia, Germany, UAE, India) and export your tailored Vector PDF!

## 2-Page Layout & Section Break Integrity

To guarantee that multi-page resumes look completely professional and never split awkwardly across page boundaries:
- **Atomic Item Blocks (`.r-item-block`):** Projects (`.r-proj-item`), job roles (`.r-exp-item`), degrees (`.r-edu-item`), and certifications (`.r-cert-block`) are wrapped in atomic containers with strict `break-inside: avoid; page-break-inside: avoid;`.
- **Project Descriptions Stay Bound:** Project titles, live links, tech stacks, and bullet descriptions are encapsulated in a single item unit. They will never be separated or pushed away from each other.
- **Heading Protection:** Section headings (`.r-h`, `.r-sidebar-heading`) use `break-after: avoid;` and `break-before: avoid;` so an orphan heading is never stranded at the bottom of Page 1 while its content begins on Page 2.
- **Printable Area Guide:** Visual page-break guides dynamically calculate the true printable content area (`pageHeight - margins`) to show precisely where Page 1 ends and Page 2 begins.
