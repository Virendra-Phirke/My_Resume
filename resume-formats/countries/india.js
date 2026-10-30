const india = {
  id: "india",
  label: "India",
  documentName: "Resume",
  locale: "en-IN",
  page: { size: "A4", width: "210mm", height: "297mm", margins: "15mm 18mm" },
  sections: {
    order: ["summary", "skills", "projects", "experience", "education", "certifications", "languages", "custom"],
    headings: {
      summary: "PROFESSIONAL SUMMARY", skills: "TECHNICAL SKILLS", experience: "INTERNSHIP / WORK EXPERIENCE",
      projects: "PROJECTS", education: "EDUCATION", certifications: "CERTIFICATIONS",
      languages: "LANGUAGES"
    }
  },
  guidance: {
    length: "One page is a strong target for many fresh graduates; use a second page only for substantial relevant content.",
    includeByDefault: ["name", "professional contact details", "education", "skills", "relevant projects", "internships or experience"],
    generallyOmit: ["unrequested sensitive personal details", "photograph unless specifically requested"],
    conditional: ["photo", "date of birth", "nationality", "full postal address", "declaration only when requested by the employer or application"],
    notes: ["Put relevant projects and technical skills prominently for fresher roles.", "Use concise, evidence-based bullets.", "Do not add a declaration or personal details by default."]
  }
};

export default india;
