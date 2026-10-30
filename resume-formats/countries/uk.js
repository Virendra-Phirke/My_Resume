const uk = {
  id: "uk",
  label: "United Kingdom",
  documentName: "CV",
  locale: "en-GB",
  page: { size: "A4", width: "210mm", height: "297mm", margins: "15mm 18mm" },
  sections: {
    order: ["summary", "skills", "experience", "education", "projects", "certifications", "languages", "custom"],
    headings: {
      summary: "PERSONAL PROFILE", skills: "KEY SKILLS", experience: "EMPLOYMENT HISTORY",
      projects: "SELECTED PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "Usually up to two pages; keep an early-career CV focused and concise.",
    includeByDefault: ["name", "professional contact details", "town or region", "relevant experience", "education", "skills"],
    generallyOmit: ["photograph", "date of birth", "marital status", "nationality unless specifically relevant"],
    conditional: ["right-to-work information when requested or useful for the application"],
    notes: ["Use the term CV.", "Use reverse-chronological employment history.", "Use UK spelling and date conventions.", "Avoid first-person pronouns in profile and bullet points."]
  }
};

export default uk;
