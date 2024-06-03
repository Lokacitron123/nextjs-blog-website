# Next.js 14 Blog with MDX

## Project Overview

This is a blog application built with Next.js 14, utilizing MDX for markdown file support. The project is styled using TailwindCSS and leverages several plugins for enhanced markdown reading and highlighting. This project serves as an exploration of using MDX as a method for blogging instead of using a CMS like Sanity, aiming to learn the flexibility and simplicity of MDX for content management in a smaller application.

## Features

- **MDX Support**: Write blog posts using MDX.
- **Styling with TailwindCSS**: Utilizes TailwindCSS for styling.
- **Syntax Highlighting**: Code blocks in markdown are highlighted using `highlight.js`.
- **Automatic Heading Links**: Headings in markdown files are automatically linked.
- **SEO Optimization**: Uses `generateMetadata` and `next-sitemap` for SEO and sitemaps.
- **Advanced Rendering Techniques**: Implements SSG, SSR, revalidation, and ISR.

## Technologies Used

- **Next.js**: v14
  - **App Router**
  - **SSG (Static Site Generation)**
  - **SSR (Server-Side Rendering)**
  - **ISR (Incremental Static Regeneration)**
  - **ESO (Edge Side Optimization)**
- **MDX**: Markdown with JSX
- **TailwindCSS**: Utility-first CSS framework
  - `@tailwindcss/aspect-ratio`: ^0.4.2
  - `@tailwindcss/typography`: ^0.5.13
- **highlight.js**: ^11.9.0
- **rehype Plugins**:
  - `rehype-autolink-headings`: ^7.1.0
  - `rehype-highlight`: ^7.0.0
  - `rehype-slug`: ^6.0.0
- **next-sitemap**: For generating sitemaps
