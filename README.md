# Africa Power Platform 2026 - Site Officiel

Ce dépôt contient le code source du site web officiel de l'événement Africa Power Platform 2026. Il s'agit d'une application web moderne, responsive et riche en fonctionnalités, conçue pour fournir toutes les informations nécessaires aux participants, partenaires et intervenants.

## ✨ Fonctionnalités

-   **Multilingue :** Support complet pour le Français (FR) et l'Anglais (EN).
-   **Thème Sombre & Clair :** Interface adaptable avec un mode sombre et un mode clair pour le confort visuel.
-   **Design Responsive :** Entièrement optimisé pour une expérience utilisateur fluide sur tous les appareils (mobile, tablette, bureau).
-   **Sections Complètes :**
    -   **Hero :** Section d'accueil avec un compte à rebours avant l'événement.
    -   **À Propos :** Présentation de la vision et des objectifs de l'événement.
    -   **Speakers :** Grille des intervenants avec des modales détaillées.
    -   **Programme :** Agenda détaillé des deux jours de l'événement.
    -   **Inscription :** Appel à l'action clair pour l'inscription.
    -   **Galerie :** Archives visuelles des éditions précédentes.
    -   **Lieu :** Informations sur le lieu de l'événement avec une carte intégrée.
    -   **Sponsors & Partenaires :** Affichage des logos des partenaires.
    -   **Équipe :** Présentation de l'équipe organisatrice.
    -   **FAQ :** Section de questions-réponses pour lever les doutes.
    -   **Contact :** Formulaire de contact et d'inscription à la newsletter.
-   **Composants Interactifs :**
    -   **Chatbot IA :** Un assistant virtuel pour répondre aux questions des visiteurs.
    -   **Bouton WhatsApp :** Un bouton flottant pour rejoindre la communauté.
    -   **Splash Screen :** Écran de chargement animé au lancement du site.
-   **Panneau d'Administration :** Une interface privée (`/admin`) pour gérer le contenu du site (speakers, programme, etc.).

## 🚀 Stack Technique

-   **Framework :** [Next.js](https://nextjs.org/) (React)
-   **Langage :** [TypeScript](https://www.typescriptlang.org/)
-   **Styling :** [Tailwind CSS](https://tailwindcss.com/)
-   **Icônes :** [Lucide React](https://lucide.dev/)
-   **API Backend :** PHP (dossier `power_api/`) - *Note : De nombreux composants utilisent actuellement des données de fallback (mock) pour le développement.*

## ⚙️ Installation et Lancement

Suivez ces étapes pour lancer le projet sur votre machine locale.

### Prérequis

-   [Node.js](https://nodejs.org/) (version 18.x ou supérieure)
-   [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)

### Étapes

1.  **Clonez le dépôt :**
    ```bash
    git clone <URL_DU_DEPOT>
    cd africapowerplatform
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

4.  **Ouvrez votre navigateur :**
    L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## 🗂️ Structure du Projet

```
africapowerplatform/
├── app/                  # Pages et layouts principaux (App Router)
│   ├── admin/            # Pages du panneau d'administration
│   ├── gallery/          # Page de la galerie
│   ├── globals.css       # Styles globaux
│   └── layout.tsx        # Layout racine
│   └── page.tsx          # Page d'accueil
├── components/           # Composants React réutilisables
├── contexts/             # Contextes React (Thème, Langue)
├── public/               # Fichiers statiques (images, logos, favicons)
│   └── assets/
├── power_api/            # Scripts PHP pour l'API backend
└── utils/                # Fonctions utilitaires (ex: fetch API)
```

## 🔒 Panneau d'Administration

Un panneau d'administration simple est inclus pour la gestion du contenu.

-   **URL :** `/admin`
-   **Identifiants (développement) :**
    -   **Email :** `admin@app.com`
    -   **Mot de passe :** `password`

> **Note :** Ces identifiants sont pour le développement uniquement et la logique d'authentification est simulée. Pour une mise en production, une authentification sécurisée doit être implémentée.

## 🌐 Déploiement

Pour construire la version de production de l'application, exécutez la commande suivante :

```bash
npm run build
```

Cette commande générera un dossier `.next` optimisé que vous pourrez déployer sur une plateforme d'hébergement compatible avec Next.js (comme Vercel, Netlify, etc.).