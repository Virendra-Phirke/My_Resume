/**
 * UAE – CV
 * Layout: 1–2 pages · Professional photo common · Personal info block visible
 * Key differences: Photo expected · Nationality, Visa Status, Notice Period expected ·
 *   Professional Summary · Skills as bullet grid · Professional Experience ·
 *   Personal Information block (Nationality, Visa, Notice Period)
 */
const uae = {
  id: "uae",
  label: "UAE",
  flag: "🇦🇪",
  documentName: "CV",
  locale: "en",
  page: {
    size: "A4",
    width: "210mm",
    height: "297mm",
    margins: "15mm 18mm 15mm 18mm"
  },
  layout: {
    type: "single-column-photo-header",
    photoPlacement: "header-right",
    headerStyle: "name-left-photo-right-contact-row"
  },
  sections: {
    order: ["summary", "custom", "skills", "experience", "education", "projects", "certifications", "languages"],
    headings: {
      summary: "Professional Summary",
      skills: "Skills",
      experience: "Professional Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub",
      custom: "Professional Information"
    },
    skillsStyle: "two-column-bullets",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1–2 pages · Professional photo common",
    targetLength: 2,
    photo: "common",
    photoGuidance: "Professional headshot — formal attire, plain background. Include in top-right corner of the header. Widely expected in the UAE market.",
    personalInfoBlock: {
      label: "Professional Information",
      fields: ["Nationality", "Visa Status", "Notice Period"]
    },
    includeByDefault: [
      "name",
      "Dubai/Abu Dhabi/UAE city",
      "professional email",
      "phone (with UAE or international code)",
      "LinkedIn URL",
      "GitHub URL (for technical roles)",
      "professional photo in header",
      "Professional Information block: Nationality, Visa Status, Notice Period",
      "Professional Summary — 3–4 sentences, role-tailored",
      "Skills — two-column bullet list",
      "Professional Experience in reverse-chronological order",
      "Education",
      "Projects (if relevant)",
      "Certifications",
      "Languages (Arabic proficiency is a strong plus)"
    ],
    generallyOmit: [
      "date of birth (not required but sometimes included)",
      "marital status (optional — include only if it's relevant or asked)",
      "religion (never include)",
      "salary history (include only if the posting explicitly requests it)"
    ],
    conditional: [
      "professional photo — expected by most UAE employers; include unless the company is a large multinational with strict anti-discrimination policies",
      "nationality — include; it is commonly expected and helps employers understand visa requirements",
      "visa status — include current visa type (e.g., Visit Visa, Employment Visa, Spouse Visa)",
      "notice period — include (e.g., 'Immediate' or '30 days'); highly valued by UAE recruiters",
      "Arabic language proficiency — include if applicable; a strong differentiator",
      "driving licence — include if relevant to the role"
    ],
    bulletStyle: [
      "Lead with action verbs: Developed, Delivered, Analysed, Managed, Increased…",
      "Quantify with UAE-relevant metrics: AED values, team size, % improvements",
      "Highlight regional experience (GCC/MENA) explicitly if you have it",
      "Keep bullets concise: one to two lines each"
    ],
    spellingConvention: "British English preferred in UAE (organised, optimised, programme)",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "Professional photo is expected — use a clean, professional headshot",
      "Include Nationality, Visa Status, and Notice Period — UAE recruiters expect these",
      "Arabic language skills are a significant advantage; always include if you have them",
      "Highlight any GCC/MENA regional experience explicitly",
      "Driving licence is often requested — mention it if you hold a valid UAE or international licence"
    ]
  }
};

export default uae;
