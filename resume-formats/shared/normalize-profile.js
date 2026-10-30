import { RESUME_FORMATS, DEFAULT_RESUME_FORMAT } from "../registry.js";

/**
 * Resolve a country format by ID. Returns a fresh shallow profile object so
 * callers can safely derive display settings without mutating registry data.
 */
export function getResumeFormat(id = DEFAULT_RESUME_FORMAT) {
  const selected = RESUME_FORMATS[id] || RESUME_FORMATS[DEFAULT_RESUME_FORMAT];
  return {
    ...selected,
    page: { ...selected.page },
    sections: {
      order: [...selected.sections.order],
      headings: { ...selected.sections.headings }
    },
    guidance: {
      ...selected.guidance,
      includeByDefault: [...selected.guidance.includeByDefault],
      generallyOmit: [...selected.guidance.generallyOmit],
      conditional: [...selected.guidance.conditional]
    }
  };
}

/**
 * Apply only country defaults that the user has not explicitly supplied.
 * The input profile is never mutated; explicit order/headings remain intact.
 */
export function resolveResumePresentation(resumeData, formatId) {
  const source = resumeData && typeof resumeData === "object" && !Array.isArray(resumeData)
    ? resumeData
    : {};
  const format = getResumeFormat(formatId);
  return {
    format,
    data: {
      ...source,
      order: Array.isArray(source.order) && source.order.length
        ? [...source.order]
        : [...format.sections.order],
      headings: {
        ...format.sections.headings,
        ...(source.headings && typeof source.headings === "object" && !Array.isArray(source.headings)
          ? source.headings
          : {})
      }
    }
  };
}
