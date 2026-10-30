/**
 * Canada – Resume
 * Layout: 1–2 pages · Canadian English
 * Key differences: No photo · "Professional Summary" · "Core Competencies" skills grid ·
 *   Professional Experience · Projects prominent · No volunteering section required
 */
const canada = {
  id: "canada",
  label: "Canada",
  flag: "🇨🇦",
  documentName: "Resume",
  locale: "en-CA",
  page: {
    size: "Letter",
    width: "8.5in",
    height: "11in",
    margins: "0.55in 0.65in 0.5in 0.65in"
  },
  layout: {
    type: "single-column",
    photoPlacement: "none",
    headerStyle: "centered-name-contact"
  },
  sections: {
    order: ["summary", "skills", "experience", "projects", "education", "custom"],
    headings: {
      summary: "Professional Summary",
      skills: "Core Competencies",
      experience: "Professional Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      github: "GitHub",
      custom: "Volunteer Experience"
    },
    skillsStyle: "two-column-bullets",
    experienceChronology: "reverse"
  },
  guidance: {
    length: "1–2 pages · Canadian English",
    targetLength: 2,
    photo: false,
    includeByDefault: [
      "name",
      "city, province (no full address)",
      "professional email",
      "phone",
      "LinkedIn URL",
      "GitHub URL (for technical roles)",
      "Professional Summary — 2–3 sentences, role-tailored",
      "Core Competencies — two-column grid of 6–8 skills",
      "Professional Experience in reverse-chronological order",
      "Projects (especially for new grads and technical roles)",
      "Education with degree, institution, year",
      "Certifications"
    ],
    generallyOmit: [
      "photograph",
      "date of birth",
      "marital status",
      "Social Insurance Number (SIN)",
      "full street address",
      "gender",
      "references on the resume itself"
    ],
    conditional: [
      "work authorization / PR status only if specifically requested",
      "bilingual proficiency in French — highlight prominently for Quebec or federal government roles",
      "GPA — include if 3.5+ and recent graduate only"
    ],
    bulletStyle: [
      "Lead with action verbs: Built, Delivered, Analysed, Spearheaded, Collaborated…",
      "Quantify results: percentages, dollar amounts, user counts, time saved",
      "Canadian spelling acceptable: 'behaviour', 'centre', 'colour' — be consistent",
      "Tailor keywords from the specific job posting (ATS is widely used in Canada)"
    ],
    spellingConvention: "Canadian English (mix of British/American acceptable — be consistent)",
    dateFormat: "Month YYYY – Month YYYY  (e.g., Jun 2025 – Aug 2025)",
    notes: [
      "No photo — Canadian human rights legislation discourages photo inclusion",
      "No age, DOB, marital status, or SIN on resume",
      "French language proficiency is a significant differentiator for federal and Quebec roles",
      "Highlight volunteering for non-profit/government positions where community involvement matters"
    ]
  }
};

export default canada;
