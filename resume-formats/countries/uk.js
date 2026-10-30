/**
 * UK – CV
 * Layout: 1–2 pages · British English · Personal Profile at top
 * Key differences: Called "CV" not "Resume" · Personal Profile replaces Summary ·
 *   Key Skills grid · Work Experience (not "PROFESSIONAL EXPERIENCE") ·
 *   Education after Experience · No photo/age/marital status
 */
const uk = {
  id: "uk",
  label: "United Kingdom",
  flag: "🇬🇧",
  documentName: "CV",
  locale: "en-GB",
  page: {
    size: "A4",
    width: "210mm",
    height: "297mm",
    margins: "15mm 18mm 15mm 18mm"
  },
  layout: {
    type: "single-column",
    photoPlacement: "none",
    headerStyle: "name-left-contact-right"
  },
  sections: {
    order: ["summary", "skills", "experience", "education", "projects", "certifications", "languages"],
    headings: {
      summary: "Personal Profile",
      skills: "Key Skills",
      experience: "Work Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub"
    },
    skillsStyle: "two-column-bullets",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1–2 pages · British English",
    targetLength: 2,
    photo: false,
    includeByDefault: [
      "name",
      "town/region (no full address)",
      "professional email",
      "phone",
      "LinkedIn URL",
      "GitHub URL (for technical roles)",
      "Personal Profile — 3–4 lines, third-person phrasing, no 'I'",
      "Key Skills — use a two-column bullet grid of 6–8 skills",
      "Work Experience in reverse-chronological order with month/year dates",
      "Education — degree, institution, year, grade/classification",
      "Projects (if relevant, esp. for graduates)",
      "Certifications"
    ],
    generallyOmit: [
      "photograph",
      "date of birth",
      "age",
      "marital status",
      "nationality (unless Right to Work is specifically asked for)",
      "full postal address",
      "references (state 'References available on request' at bottom)"
    ],
    conditional: [
      "right-to-work status or visa details only when requested",
      "work history gaps — address briefly in cover letter rather than on CV",
      "volunteering — include if within last 2–3 years and relevant to the role"
    ],
    bulletStyle: [
      "Start with a strong verb: Developed, Analysed, Delivered, Managed, Led…",
      "Use UK spelling: 'optimised', 'organised', 'programme', 'behaviour'",
      "Include measurable outcomes where possible",
      "No first-person pronouns in Profile or bullets"
    ],
    spellingConvention: "British English (organised, optimised, behaviour)",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "Document title must be 'CV', never 'Resume'",
      "Personal Profile (not Objective/Summary) is expected at the top",
      "Skills shown as a visual two-column bullet grid for scannability",
      "References line at the very bottom: 'References available on request'",
      "Avoid Americanisms: 'programme' not 'program', 'whilst' not 'while'"
    ]
  }
};

export default uk;
