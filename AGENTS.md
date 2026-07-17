# SeasideBeer website operating rules

## Product direction

- SeasideBeer is not an alcohol business. It is a Matsuyama-based project for AI education, AI implementation support, young AI talent development, and local company support.
- The primary business-facing offer is corporate AI training and implementation support. The academy is a talent-development and regional-ecosystem track.
- The current KPI is "10 people whose completed work can be shown to companies." Do not replace this with vanity metrics.
- Keep the tagline `AIに仕事を任せて、海辺でビールでも飲もう。` as a philosophy, not as a promise of effortless automation.

## Truth and trust

- Never invent client names, participant counts, revenue, testimonials, outcomes, partnerships, certifications, or publication dates.
- It is confirmed that the representative is 貝崎泰我, the base is Matsuyama, and AI guidance has been provided to a university professor. Keep the university anonymous unless publication permission is recorded.
- The management-oriented generative AI book is in progress. Do not describe it as published until confirmed.
- SeasideBeer is preparing for incorporation. Do not call it a corporation or company until confirmed.

## Content workflow

- Blog posts live in `src/content/insights/` as one Markdown file per article.
- Every article needs a concrete claim, a short description, a publication date, a category, and an intended reader.
- Prefer specific work scenes and decisions over generic AI explanations.
- Do not publish private context, third-party personal data, or unapproved logos and photographs.

## Quality gate

- Run `npm run build` before proposing publication.
- Check 390px mobile and a desktop viewport for horizontal overflow, navigation, readable line length, and form usability.
- Keep one real H1 per page, associated form labels, visible keyboard focus, reduced-motion support, canonical metadata, and descriptive page titles.
- Do not commit secrets. The Web3Forms access key is a public form identifier; any other credentials belong in hosted environment settings.

## Release workflow

- Work on a `codex/` branch.
- Use a preview deployment for review.
- Merge to `main` only after factual content and the final public appearance are approved.
