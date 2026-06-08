/**
 * Canonical list of session IDs that have an in-app reference page at
 * /reference/<id>. Kept in a standalone module (no heavy content imports) so it
 * can be imported by client bundles, the sitemap, and the lessons index without
 * pulling in all the reference-content text.
 */
export const referenceSessionIds: string[] = [
  '2a-m1-s1', '2a-m1-s2', '2a-m1-s3',
  '2a-m2-s1', '2a-m2-s2', '2a-m2-s3',
  '2a-m3-s1', '2a-m3-s2', '2a-m3-s3',
  '2a-m4-s1', '2a-m4-s2', '2a-m4-s3',
  '2a1c-m1-s1', '2a1c-m1-s2', '2a1c-m1-s3',
  '2a1c-m2-s1', '2a1c-m2-s2', '2a1c-m2-s3',
  '2a1c-m3-s1', '2a1c-m3-s2', '2a1c-m3-s3',
  '2a1c-m4-s1', '2a1c-m4-s2', '2a1c-m4-s3',
];

export function hasReferencePage(sessionId: string): boolean {
  return referenceSessionIds.includes(sessionId);
}
