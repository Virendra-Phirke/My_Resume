import us from "./countries/us.js";
import uk from "./countries/uk.js";
import canada from "./countries/canada.js";
import australia from "./countries/australia.js";
import germany from "./countries/germany.js";
import uae from "./countries/uae.js";
import india from "./countries/india.js";

export const DEFAULT_RESUME_FORMAT = "india";

export const RESUME_FORMATS = Object.freeze({
  us,
  uk,
  canada,
  australia,
  germany,
  uae,
  india
});

export const RESUME_FORMAT_OPTIONS = Object.freeze(
  Object.values(RESUME_FORMATS).map(({ id, label, documentName }) =>
    Object.freeze({ value: id, label: `${label} — ${documentName}` })
  )
);
