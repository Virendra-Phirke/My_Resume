const australia = {
  id: "australia",
  label: "Australia",
  documentName: "Resume",
  locale: "en-AU",
  page: { size: "A4", width: "210mm", height: "297mm", margins: "15mm 18mm" },
  sections: {
    order: ["summary", "skills", "experience", "education", "projects", "certifications", "languages", "custom"],
    headings: {
      summary: "CAREER PROFILE", skills: "KEY SKILLS", experience: "EMPLOYMENT HISTORY",
      projects: "SELECTED PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "Commonly two to three pages for experienced candidates; keep graduate resumes shorter and role-relevant.",
    includeByDefault: ["name", "professional contact details", "relevant experience", "skills", "education"],
    generallyOmit: ["photograph", "date of birth", "marital status", "unnecessary personal demographics"],
    conditional: ["work rights or visa details when requested or relevant to the role"],
    notes: ["Use specific examples and outcomes.", "Use reverse-chronological employment history.", "Use Australian spelling and date conventions."]
  }
};

export default australia;
