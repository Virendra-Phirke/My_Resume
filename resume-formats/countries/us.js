const us = {
  id: "us",
  label: "United States",
  documentName: "Resume",
  locale: "en-US",
  page: { size: "Letter", width: "8.5in", height: "11in", margins: "0.55in 0.65in" },
  sections: {
    order: ["summary", "skills", "experience", "projects", "education", "certifications", "custom", "languages"],
    headings: {
      summary: "PROFESSIONAL SUMMARY", skills: "SKILLS", experience: "EXPERIENCE",
      projects: "PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "Usually one page for students and early-career applicants; use a second page only for relevant content.",
    includeByDefault: ["name", "professional contact details", "relevant experience", "skills", "education", "relevant projects"],
    generallyOmit: ["photograph", "date of birth", "marital status", "government identification numbers"],
    conditional: ["work authorization details only when requested or useful for the application"],
    notes: ["Use concise, quantified, achievement-led bullets.", "Use reverse-chronological experience.", "Use US spelling and date conventions."]
  }
};

export default us;
