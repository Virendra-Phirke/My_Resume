/**
 * Germany – Lebenslauf (CV)
 * Layout: 1–2 pages · German or English · Professional photo common (optional) ·
 *   Sidebar with photo, personal info, contact, languages, skills ·
 *   Main column: Professional Profile, Work Experience, Education, Tech Skills, Projects, Certifications
 * Key differences: Photo left column · Personal info visible · Reverse-chronological in German style ·
 *   Signature line optional · German headings when submitting in German
 */
const germany = {
  id: "germany",
  label: "Germany",
  flag: "🇩🇪",
  documentName: "Lebenslauf",
  locale: "de-DE",
  page: {
    size: "A4",
    width: "210mm",
    height: "297mm",
    margins: "15mm 18mm 15mm 18mm"
  },
  layout: {
    type: "two-column-sidebar",
    photoPlacement: "sidebar-top-left",
    headerStyle: "name-in-sidebar",
    sidebarWidth: "35%",
    sidebarSections: ["photo", "contact", "languages", "skills"],
    mainSections: ["summary", "experience", "education", "projects", "certifications"]
  },
  sections: {
    order: ["summary", "experience", "education", "skills", "projects", "certifications", "languages"],
    headings: {
      summary: "Professional Profile",
      skills: "Technical Skills",
      experience: "Work Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub"
    },
    headingsDE: {
      summary: "Profil",
      skills: "Kenntnisse",
      experience: "Berufserfahrung",
      projects: "Projekte",
      education: "Ausbildung",
      certifications: "Zertifikate",
      languages: "Sprachkenntnisse"
    },
    skillsStyle: "labeled-rows",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1–2 pages · German or English",
    targetLength: 2,
    photo: "optional-common",
    photoGuidance: "Professional headshot (DSLR or phone portrait mode) in business attire. Light background. Optional but widely expected in Germany.",
    includeByDefault: [
      "name",
      "city, Germany",
      "professional email",
      "phone",
      "LinkedIn URL",
      "GitHub URL (for technical roles)",
      "Professional Profile — 3–4 sentences about your background",
      "Work Experience in reverse-chronological order with month/year",
      "Education with degree, institution, graduation year",
      "Technical Skills — labeled rows (Python, SQL, React.js, etc.)",
      "Languages with proficiency levels",
      "Certifications"
    ],
    generallyOmit: [
      "Marital status (increasingly omitted by modern applicants)",
      "Number of children (increasingly omitted)",
      "Place of birth (increasingly omitted for international applicants)",
      "Religion (never include)"
    ],
    conditional: [
      "professional photo — strongly common, but not legally required",
      "nationality — include if applying without EU work rights to flag visa situation",
      "signature and date line — traditional; include when submitting in German",
      "German-language version — required for roles where German is the working language",
      "marital status and children — traditional; omit if submitting an international-style CV"
    ],
    bulletStyle: [
      "Use clear action verbs: Entwickelt (Developed), Analysiert (Analysed), Implementiert, Unterstützt",
      "Bullet style: short, factual, result-oriented",
      "Month and year format: Jun 2025 – Aug 2025",
      "If writing in German: use formal 'Sie' in any cover letter; Lebenslauf is always written in 3rd person implied",
      "Avoid overly casual or subjective language"
    ],
    spellingConvention: "German or English — be consistent throughout the document",
    dateFormat: "MM/YYYY – MM/YYYY  (e.g., 06/2025 – 08/2025) for German; Month YYYY for English",
    notes: [
      "Document is called 'Lebenslauf', not 'Résumé' or 'CV' in German applications",
      "German CVs traditionally include Lichtbild (professional photo) — widely expected though optional",
      "A two-column sidebar layout (photo + info left, content right) is a popular modern German format",
      "Translate all section headings to German when the application is in German",
      "Add 'Ort, Datum' (City, Date) and a signature line at the bottom for traditional applications"
    ]
  }
};

export default germany;
