/**
 * India – Resume
 * Layout: 1 page · Indian English · Career Objective at top for freshers ·
 *   Technical Skills (categorized) · Projects prominent before Experience ·
 *   Education, Certifications, Languages
 * Key differences: Career Objective (not Summary) · Technical Skills as labeled rows ·
 *   Projects BEFORE experience for freshers · CGPA included · Languages listed
 */
const india = {
  id: "india",
  label: "India",
  flag: "🇮🇳",
  documentName: "Resume",
  locale: "en-IN",
  page: {
    size: "A4",
    width: "210mm",
    height: "297mm",
    margins: "15mm 18mm 15mm 18mm"
  },
  layout: {
    type: "header-photo-right-single-column",
    photoPlacement: "header-right",
    headerStyle: "name-left-photo-right",
    skillsStyle: "labeled-rows"
  },
  sections: {
    order: ["summary", "skills", "education", "projects", "certifications", "languages"],
    headings: {
      summary: "Career Objective",
      skills: "Technical Skills",
      experience: "Internship / Work Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub Profile"
    },
    skillsStyle: "labeled-rows",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1 page · Indian English",
    targetLength: 1,
    photo: false,
    includeByDefault: [
      "name",
      "city, state, India",
      "professional email",
      "phone (10-digit Indian mobile)",
      "LinkedIn URL",
      "GitHub URL (essential for CS/IT freshers)",
      "Career Objective — 2–3 sentences targeting the specific role and company",
      "Technical Skills as labeled rows: Languages, Frontend, Backend, Databases, Tools",
      "Projects — 2–3 projects with tech stack, bullets and GitHub/live links",
      "Internship / Work Experience (if any)",
      "Education — degree, institution, CGPA/percentage, graduation year",
      "Certifications (online certs from Coursera, NPTEL, AWS etc.)",
      "Languages (English + regional languages)"
    ],
    generallyOmit: [
      "photograph (increasingly omitted for IT/tech roles)",
      "date of birth (optional; include only if the form or employer explicitly asks)",
      "marital status",
      "religion, caste, community",
      "father's/mother's name (unless specifically requested by the application form)",
      "Aadhaar or PAN number"
    ],
    conditional: [
      "photograph — include only if the job posting or application form requests it",
      "date of birth — include for government job applications where it's mandatory",
      "declaration — 'I hereby declare that all the information given above is true and correct to the best of my knowledge' — include only when the employer or job portal specifically asks for it",
      "full postal address — include only for government or non-tech roles",
      "CGPA / percentage — always include for freshers; omit only if very low (< 6.0 out of 10)"
    ],
    bulletStyle: [
      "Start with verbs: Built, Developed, Implemented, Designed, Optimized, Created…",
      "For projects: mention the problem, what you built, and the tech stack used",
      "Include GitHub link and live demo URL where available",
      "For certifications: mention the issuing platform (Coursera, AWS, NPTEL, etc.)"
    ],
    spellingConvention: "Indian English (generally follows British spelling)",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "For freshers: Projects section should appear BEFORE work experience",
      "Career Objective is preferred over 'Professional Summary' for freshers",
      "CGPA or percentage must be included — Indian recruiters always look for it",
      "Technical skills should be categorized: Languages, Frontend, Backend, Databases, Tools",
      "Do NOT add a Declaration paragraph unless the employer specifically requests it",
      "GitHub and live project URLs significantly improve shortlisting chances for IT roles",
      "Keep to 1 page — recruiters in India receive high volumes and prefer concise resumes"
    ]
  }
};

export default india;
