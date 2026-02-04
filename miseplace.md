# Guide de Mise en Place Locale - Africa Power Platform

Ce guide vous explique comment installer et configurer l'ensemble du projet Africa Power Platform sur votre machine locale.

## Architecture du Projet

Le projet est composé de deux parties principales :
1.  **Frontend** : Une application moderne construite avec **Next.js** (React).
2.  **Backend** : Une **API PHP** simple qui communique avec une base de données **MySQL**.

Pour que tout fonctionne, vous devez configurer ces deux parties pour qu'elles puissent communiquer entre elles.

---

## 1. Prérequis

Avant de commencer, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

*   **Environnement de serveur local :** **XAMPP** (recommandé), WAMP ou MAMP. Cela installera Apache (serveur web), MySQL (base de données) et PHP.
*   **Node.js et npm :** Pour gérer et exécuter l'application Next.js. Téléchargez-le depuis [nodejs.org](https://nodejs.org/).
*   **Un éditeur de code :** Comme Visual Studio Code.

---

## 2. Configuration du Backend (PHP & MySQL)

Cette partie concerne la mise en place de votre base de données et de l'API qui la dessert.

### Étape 2.1 : Démarrer votre serveur local

- Lancez le panneau de contrôle de **XAMPP**.
- Démarrez les modules **Apache** et **MySQL**.

### Étape 2.2 : Créer la base de données

1.  Ouvrez votre navigateur et allez sur `http://localhost/phpmyadmin/`.
2.  Créez une nouvelle base de données. Nommez-la `africa_power_platform`. Assurez-vous d'utiliser l'interclassement `utf8mb4_unicode_ci`.
3.  Une fois la base de données créée, cliquez sur son nom dans la barre latérale, puis allez dans l'onglet **"Importer"**.
4.  Cliquez sur "Choisir un fichier" et sélectionnez le fichier `databases/00_schema.sql` qui se trouve dans les fichiers du projet.
5.  Cliquez sur **"Exécuter"** en bas de la page.

✅ **Vérification :** Les tables `event_settings`, `speakers`, `sponsors` et `registrations` devraient maintenant apparaître dans votre base de données.

### Étape 2.3 : Placer les fichiers de l'API

1.  Trouvez le dossier `htdocs` de votre installation XAMPP (généralement `C:\xampp\htdocs` sur Windows).
2.  Copiez le dossier `power_api` (qui contient `settings.php`, `speakers.php`, etc.) depuis les fichiers du projet directement dans le dossier `htdocs`.

### Étape 2.4 : Configurer la connexion à la base de données

1.  Ouvrez le fichier `power_api/config.php` dans votre éditeur de code.
2.  Vérifiez que les informations de connexion correspondent à votre configuration MySQL locale. La configuration par défaut de XAMPP est généralement correcte :
    ```php
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'africa_power_platform');
    define('DB_USER', 'root'); // Utilisateur par défaut de XAMPP
    define('DB_PASS', '');     // Mot de passe vide par défaut
    ```

### Étape 2.5 : Tester l'API

Ouvrez les liens suivants dans votre navigateur. Vous devriez voir du texte au format JSON, et non une page blanche ou du code PHP.

- `http://localhost/power_api/settings.php`
- `http://localhost/power_api/speakers.php`

Si vous voyez du JSON, votre backend est prêt !

---

## 3. Configuration du Frontend (Next.js)

Cette partie concerne la mise en place de l'interface utilisateur du site.

### Étape 3.1 : Installer les dépendances

1.  Ouvrez un terminal (ou l'invite de commande) et naviguez jusqu'à la racine du dossier de votre projet (là où se trouve `package.json`).
2.  Exécutez la commande suivante pour installer toutes les bibliothèques nécessaires :
    ```bash
    npm install
    ```

### Étape 3.2 : Configurer les variables d'environnement (Clé API)

Le chatbot IA utilise l'API Gemini de Google. Vous devez fournir votre propre clé API.

1.  À la racine du projet, créez un fichier nommé `.env.local`.
2.  Ajoutez la ligne suivante dans ce fichier, en remplaçant `VOTRE_CLE_API_ICI` par votre véritable clé API Gemini :
    ```
    API_KEY=VOTRE_CLE_API_ICI
    ```
    *(Note : Si vous n'avez pas de clé, le chatbot ne fonctionnera pas, mais le reste du site si.)*

### Étape 3.3 : Relier le Frontend au Backend

Pour que votre site (ex: `http://localhost:3000`) puisse appeler votre API PHP (ex: `http://localhost/power_api/...`) sans problème de CORS, nous allons configurer une redirection.

1.  Ouvrez le fichier `next.config.js` à la racine du projet.
2.  Modifiez-le pour qu'il ressemble à ceci :

    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      images: {
        domains: ['picsum.photos', 'logo.clearbit.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.googleusercontent.com',
          },
        ],
      },
      // Ajout de la redirection pour l'API PHP
      async rewrites() {
        return [
          {
            source: '/power_api/:path*',
            destination: 'http://localhost/power_api/:path*',
          },
        ]
      },
    };

    module.exports = nextConfig;
    ```
    *Cette configuration dit à Next.js : "Chaque fois que tu vois une requête pour `/power_api/...`, envoie-la discrètement à `http://localhost/power_api/...`."*

### Étape 3.4 : Lancer le site

1.  Dans votre terminal, toujours à la racine du projet, exécutez la commande :
    ```bash
    npm run dev
    ```
2.  Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`.

---

## 🚀 C'est Terminé !

Votre site Africa Power Platform devrait maintenant être entièrement fonctionnel en local. Les données des speakers, des sponsors et les paramètres de l'événement sont chargés depuis votre base de données MySQL via l'API PHP, et affichés par l'application Next.js.
