const germany = {
  id: "germany",
  label: "Germany",
  documentName: "Lebenslauf (CV)",
  locale: "de-DE",
  page: { size: "A4", width: "210mm", height: "297mm", margins: "15mm 18mm" },
  sections: {
    order: ["experience", "education", "skills", "projects", "certifications", "languages", "summary", "custom"],
    headings: {
      summary: "PROFIL", skills: "KENNTNISSE", experience: "BERUFSERFAHRUNG",
      projects: "PROJEKTE", education: "AUSBILDUNG", certifications: "ZERTIFIKATE",
      languages: "SPRACHKENNTNISSE"
    }
  },
  guidance: {
    length: "One to two pages is a practical target for many early-career applicants; follow the employer's requested format.",
    includeByDefault: ["name", "professional contact details", "reverse-chronological experience", "education", "skills", "languages"],
    generallyOmit: ["unrequested sensitive personal information"],
    conditional: ["professional photo", "place/date line and signature", "German-language version", "additional personal details requested by the employer"],
    notes: ["Use clear month/year date ranges and consistent chronology.", "A professional photo is optional and should never be treated as mandatory.", "Use A4 and a structured, restrained layout.", "Translate headings only when preparing a German-language CV."]
  }
};

export default germany;
