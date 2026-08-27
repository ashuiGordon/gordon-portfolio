# Gordon — Personal Portfolio

A terminal-inspired personal portfolio for Gordon, focused on open-source work and concise internship experience.

Planned GitHub Pages URL: [ashuigordon.github.io/gordon-portfolio](https://ashuigordon.github.io/gordon-portfolio/)

## Highlights

- Five GitHub projects ordered by repository creation date
- Privacy-safe profile with only email and GitHub contact details
- Compact internship timeline with employer logos
- CRT scanlines, terminal windows, responsive navigation, and desktop project previews
- Fully static Next.js export ready for GitHub Actions and GitHub Pages

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run check
```

The production build is exported to `out/`.

## Deployment

After Pages is enabled, run `.github/workflows/deploy-pages.yml` from GitHub Actions. It builds the static site with the `/gordon-portfolio` base path and deploys the `out/` artifact.

## Privacy

The public site intentionally excludes Gordon's telephone number, legal name, school background, home address, and student information.

## Credits

- Scaffolded from [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)
- Visual direction inspired by [jonsaxton.com](https://www.jonsaxton.com/), rebuilt with Gordon's own content and assets

The scaffold's MIT license is retained in [LICENSE](./LICENSE).
