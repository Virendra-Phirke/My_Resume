const uae = {
  id: "uae",
  label: "United Arab Emirates",
  documentName: "CV",
  locale: "en",
  page: { size: "A4", width: "210mm", height: "297mm", margins: "15mm 18mm" },
  sections: {
    order: ["summary", "skills", "experience", "education", "projects", "certifications", "languages", "custom"],
    headings: {
      summary: "PROFESSIONAL SUMMARY", skills: "CORE COMPETENCIES", experience: "PROFESSIONAL EXPERIENCE",
      projects: "SELECTED PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "One to two pages is a useful starting point; expand only when the role and experience justify it.",
    includeByDefault: ["name", "professional contact details", "current city/country", "relevant experience", "education", "skills"],
    generallyOmit: ["unnecessary sensitive personal details"],
    conditional: ["professional photo", "nationality", "visa or residency status", "notice period", "driving licence"],
    notes: ["Treat photo and personal-detail expectations as employer-specific, not universal UAE rules.", "State work authorization only accurately and when relevant.", "Highlight relevant regional experience, languages, and role-specific certifications."]
  }
};

export default uae;
