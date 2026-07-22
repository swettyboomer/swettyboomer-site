// Site-wide constants. Edit these in one place and they update everywhere.

export const SITE = {
  name: 'SwettyBoomer',
  domain: 'swettyboomer.dev',
  url: 'https://swettyboomer.dev',
  email: 'hello@swettyboomer.dev',
  tagline: 'A small shelf of well-made tools.',
  description:
    'SwettyBoomer is an independent software publisher. Quiet, focused desktop apps for cataloging what you own — plus Attune, a calmer way to plan a vaporization session.',
  // The date shown on every privacy policy. Update when you revise a policy.
  privacyEffective: 'July 19, 2026',
} as const;

// Human-readable platform label derived from which store links an app has.
export function platformLabel(storeLinks: {
  microsoft?: string;
  apple?: string;
  google?: string;
}): string {
  const parts: string[] = [];
  if (storeLinks.microsoft) parts.push('Windows');
  if (storeLinks.apple) parts.push('iOS');
  if (storeLinks.google) parts.push('Android');
  return parts.join(' · ') || 'Coming soon';
}
