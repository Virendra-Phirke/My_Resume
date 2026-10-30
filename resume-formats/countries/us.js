/**
 * USA – Resume
 * Layout: 1 page · ATS-friendly · single-column
 * Key differences: No photo/DOB/marital status · achievement-led bullets · quantified results
 */
const us = {
  id: "us",
  label: "USA",
  flag: "🇺🇸",
  documentName: "Resume",
  locale: "en-US",
  page: {
    size: "Letter",
    width: "8.5in",
    height: "11in",
    margins: "0.5in 0.65in 0.45in 0.65in"
  },
  layout: {
    type: "single-column",
    photoPlacement: "none",
    headerStyle: "centered-name-contact"
  },
  sections: {
    order: ["summary", "skills", "projects", "experience", "education", "certifications", "languages"],
    headings: {
      summary: "PROFESSIONAL SUMMARY",
      skills: "TECHNICAL SKILLS",
      experience: "WORK EXPERIENCE",
      projects: "PROJECTS",
      education: "EDUCATION",
      certifications: "CERTIFICATIONS",
      languages: "LANGUAGES",
      github: "GITHUB PROFILE"
    },
    skillsStyle: "labeled-rows",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1 page — strict for students and early-career. Expand to 2 pages only with 5+ years of relevant experience.",
    targetLength: 1,
    photo: false,
    includeByDefault: [
      "name",
      "city & state (no full street address)",
      "professional email",
      "phone",
      "LinkedIn URL",
      "GitHub URL (if public work is relevant)",
      "professional summary (2–3 lines)",
      "technical skills grouped by category",
      "relevant projects with tech stack and measurable impact",
      "work experience in reverse-chronological order",
      "education with GPA only if 3.5+"
    ],
    generallyOmit: [
      "photograph",
      "date of birth",
      "marital status",
      "nationality",
      "full street address",
      "Social Security Number",
      "references (write 'References available upon request' only if space allows)"
    ],
    conditional: [
      "work authorization / visa status only when explicitly requested by the job posting",
      "GPA — include only if 3.5 or higher, and within last 3 years of graduation"
    ],
    bulletStyle: [
      "Start every bullet with a strong action verb (Built, Designed, Optimized, Led…)",
      "Quantify impact wherever possible (e.g., 'reduced load time by 40%', 'served 10k+ users')",
      "Keep each bullet to one line; two lines maximum",
      "Use ATS-safe formatting — plain text bullets, standard section headings, no tables or columns"
    ],
    spellingConvention: "US English",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "ATS-friendly: use standard section headings (EXPERIENCE, EDUCATION, SKILLS)",
      "No decorative icons, columns, or graphics — plain single-column layout",
      "Use the exact job-posting keywords naturally in your bullets and skills section",
      "Do NOT include an objective statement unless you are switching careers"
    ]
  }
};

export default us;
