# SaaS Document Generator

This project is a web application that allows users to generate PDF documents (e.g., invoices, reports) by filling out a simple form.

## Features (MVP)

*   **Form Input**: Users can input data like client name, address, service details, prices, etc.
*   **PDF Generation**: Documents are generated in PDF format based on the form input.
*   **Authentication**: Users can create accounts and log in (e.g., via email or Google).
*   **PDF Download**: Generated PDFs can be downloaded directly by the user.
*   **Payment Integration (Freemium Model)**: Offers a certain number of free documents, after which a subscription or one-time payment is required (Stripe integration).

## Tech Stack (Proposed)

*   **Frontend**: Next.js (React)
*   **Backend**: Next.js API Routes
*   **Database**: Supabase (or local JSON for simplicity initially)
*   **Authentication**: Clerk or Supabase Auth
*   **PDF Generation**: pdf-lib or Puppeteer
*   **Payment**: Stripe
*   **Deployment**: Vercel

## Project Structure

```
/saas-doc-gen
├── pages/
│   ├── index.tsx         → Page d’accueil
│   ├── dashboard.tsx     → Page utilisateur connecté
│   └── api/
│       └── generate.ts   → API pour générer le PDF
├── components/
│   ├── Form.tsx          → Formulaire pour les données
│   └── Navbar.tsx        → Menu
├── lib/
│   └── pdf.ts            → Code pour créer le PDF
├── public/               → Fichiers statiques (images, favicon, etc.)
├── styles/               → Styles globaux et CSS modules
├── .env.local            → Clés Stripe et Supabase (ne pas commiter si sensible)
├── package.json          → Dépendances et scripts
└── README.md             → Ce fichier
```

## Getting Started

(Instructions to be added once the project is further developed, e.g., how to install dependencies, run the development server, and configure environment variables.)
