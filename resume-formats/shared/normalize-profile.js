import { RESUME_FORMATS, DEFAULT_RESUME_FORMAT } from "../registry.js";

/**
 * Resolve a country format by ID.
 * Returns a fresh shallow profile object so callers can safely derive
 * display settings without mutating registry data.
 */
export function getResumeFormat(id = DEFAULT_RESUME_FORMAT) {
  const selected = RESUME_FORMATS[id] || RESUME_FORMATS[DEFAULT_RESUME_FORMAT];
  return {
    ...selected,
    page: { ...selected.page },
    layout: selected.layout ? { ...selected.layout } : null,
    sections: {
      order: [...selected.sections.order],
      headings: { ...selected.sections.headings },
      ...(selected.sections.headingsDE ? { headingsDE: { ...selected.sections.headingsDE } } : {}),
      skillsStyle: selected.sections.skillsStyle || "labeled-rows",
      experienceChronology: selected.sections.experienceChronology || "reverse"
    },
    guidance: {
      ...selected.guidance,
      includeByDefault: [...(selected.guidance.includeByDefault || [])],
      generallyOmit: [...(selected.guidance.generallyOmit || [])],
      conditional: [...(selected.guidance.conditional || [])],
      bulletStyle: [...(selected.guidance.bulletStyle || [])],
      notes: [...(selected.guidance.notes || [])]
    }
  };
}

/**
 * Apply only country defaults that the user has not explicitly supplied.
 * The input profile is never mutated; explicit section order and custom
 * headings override country defaults.
 */
export function resolveResumePresentation(resumeData, formatId) {
  const source =
    resumeData && typeof resumeData === "object" && !Array.isArray(resumeData)
      ? resumeData
      : {};
  const format = getResumeFormat(formatId);

  const baselineHeadings = {
    summary: "PROFESSIONAL SUMMARY",
    skills: "TECHNICAL SKILLS",
    experience: "WORK EXPERIENCE",
    projects: "PROJECTS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    github: "GITHUB PROFILE",
    languages: "LANGUAGES",
    custom: ""
  };

  const suppliedHeadings =
    source.headings &&
    typeof source.headings === "object" &&
    !Array.isArray(source.headings)
      ? source.headings
      : {};

  // Only treat a heading as "custom" if it differs from the baseline
  const customHeadings = Object.fromEntries(
    Object.entries(suppliedHeadings).filter(
      ([key, value]) =>
        baselineHeadings[key] == null || value !== baselineHeadings[key]
    )
  );

  return {
    format,
    data: {
      ...source,
      order:
        Array.isArray(source.order) && source.order.length
          ? [...source.order]
          : [...format.sections.order],
      headings: {
        ...format.sections.headings,
        ...customHeadings
      }
    }
  };
}

/**
 * Returns a human-readable summary of how this country's resume differs
 * from the universal default — useful for AI prompt injection or tooltips.
 */
export function getFormatGuidanceSummary(formatId) {
  const format = getResumeFormat(formatId);
  const g = format.guidance;
  const lines = [
    `Country: ${format.label} (${format.documentName})`,
    `Length: ${g.length}`,
    `Photo: ${g.photo === false ? "No" : g.photo === true ? "Yes" : g.photo}`,
    `Spelling: ${g.spellingConvention || "English"}`,
    `Date format: ${g.dateFormat || "Month YYYY – Month YYYY"}`,
    `Section order: ${format.sections.order.join(" → ")}`,
    `Key omissions: ${(g.generallyOmit || []).slice(0, 4).join(", ")}`
  ];
  if (g.notes && g.notes.length) {
    lines.push(`Notes: ${g.notes.slice(0, 3).join(" | ")}`);
  }
  return lines.join("\n");
}
