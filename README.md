# SelfWebsite

A responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. The site keeps career content separate from its presentation so projects, experience, skills, and profile links can be maintained as data rather than duplicated across pages.

## Stack

- Next.js with the App Router
- React and TypeScript
- Tailwind CSS

## Content model

| Content | Source |
| --- | --- |
| Profile and CV links | `src/data/profile.ts` |
| Experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |

Project detail pages are generated from the same project data under `src/app/projects/[id]/page.tsx`.

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validate a production build

```bash
npm run lint
npm run build
```

## Notes

- Content is stored in `src/data/*` so it can be updated without rewriting page components.
- PDF assets live in `public/` and are linked from `src/data/profile.ts`; publish only documents intended for public distribution.
- Deployment steps are documented in [DEPLOYMENT.md](DEPLOYMENT.md).
- Public reference deployment: [selfwebsite-ten.vercel.app](https://selfwebsite-ten.vercel.app/).
