/**
 * Australia – Resume
 * Layout: 2 pages · Australian English · "Career Profile" at top
 * Key differences: 2 pages typical · Career Profile (not Summary) · Key Capabilities grid ·
 *   Employment History · Key Achievements section · Referees listed at bottom
 */
const australia = {
  id: "australia",
  label: "Australia",
  flag: "🇦🇺",
  documentName: "Resume",
  locale: "en-AU",
  page: {
    size: "A4",
    width: "210mm",
    height: "297mm",
    margins: "15mm 18mm 15mm 18mm"
  },
  layout: {
    type: "single-column",
    photoPlacement: "none",
    headerStyle: "name-right-contact-right"
  },
  sections: {
    order: ["summary", "skills", "experience", "education", "projects", "custom", "certifications", "languages"],
    headings: {
      summary: "Career Profile",
      skills: "Key Capabilities",
      experience: "Employment History",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub",
      custom: "Key Achievements"
    },
    skillsStyle: "two-column-bullets",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "2 pages · Australian English",
    targetLength: 2,
    photo: false,
    includeByDefault: [
      "name",
      "suburb/city, state (no full address)",
      "professional email",
      "phone",
      "LinkedIn URL",
      "GitHub URL (for technical roles)",
      "Career Profile — 3–4 sentences about your background and value proposition",
      "Key Capabilities — two-column bullet grid of 6–8 competencies",
      "Employment History in reverse-chronological order with month/year dates",
      "Education with degree, institution, year",
      "Key Achievements section (2–4 standalone measurable wins)",
      "Referees — 'Available upon request' at the bottom"
    ],
    generallyOmit: [
      "photograph",
      "date of birth",
      "age",
      "marital status",
      "nationality (unless work rights are specifically asked for)",
      "Tax File Number (TFN)",
      "full postal address"
    ],
    conditional: [
      "work rights / visa status only when explicitly requested",
      "referees — provide 2–3 names and contact details only when asked, or on a separate page",
      "volunteering or community work — include if within the last 3 years and relevant"
    ],
    bulletStyle: [
      "Use the CAR or STAR method: Context → Action → Result",
      "Lead with strong action verbs: Delivered, Developed, Managed, Optimised…",
      "Australian spelling: 'organised', 'recognised', 'programme', 'colour'",
      "Include quantified results wherever possible (%, $, user count, time saved)"
    ],
    spellingConvention: "Australian English (organised, recognised, behaviour, programme)",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "Called 'Career Profile', not 'Summary' or 'Objective'",
      "Key Achievements is a separate, highly valued section in Australian resumes",
      "Referees note at the bottom: 'Referees available upon request'",
      "Two pages is the norm; one page is unusual except for very junior roles",
      "Australian employers expect specific examples and outcomes, not generic duty lists"
    ]
  }
};

export default australia;
