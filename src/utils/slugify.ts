/**
 * Slugifies a string by converting it to lowercase, replacing non-alphanumeric
 * characters with hyphens, and trimming leading/trailing hyphens.
 *
 * @param text The input string to slugify.
 * @returns The slugified string.
 */
export const slugify = (text: string): string => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
};
