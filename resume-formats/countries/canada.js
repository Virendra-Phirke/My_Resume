const canada = {
  id: "canada",
  label: "Canada",
  documentName: "Resume",
  locale: "en-CA",
  page: { size: "Letter", width: "8.5in", height: "11in", margins: "0.6in 0.7in" },
  sections: {
    order: ["summary", "skills", "experience", "projects", "education", "certifications", "languages", "custom"],
    headings: {
      summary: "SUMMARY OF QUALIFICATIONS", skills: "CORE SKILLS", experience: "WORK EXPERIENCE",
      projects: "SELECTED PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "Often one to two pages depending on experience; students and new graduates should prioritize relevance.",
    includeByDefault: ["name", "professional contact details", "relevant experience", "skills", "education", "selected projects"],
    generallyOmit: ["photograph", "date of birth", "marital status", "Social Insurance Number"],
    conditional: ["work authorization details when requested or relevant to the posting"],
    notes: ["Use achievement-focused bullets with outcomes.", "Tailor terminology to the posting.", "Use Canadian spelling where appropriate."]
  }
};

export default canada;
