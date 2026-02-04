# 🌍 Structure de la Base de Données - Africa Power Platform

Cette base de données MySQL est le cœur de la configuration de l'application Africa Power Platform. Elle adopte une approche **"Configuration-Driven"**, permettant de piloter les paramètres clés et les données dynamiques du site sans nécessiter de déploiement de code.

Le contenu textuel principal (titres, descriptions) est géré directement dans l'application Next.js pour plus de simplicité et de performance.

## 🚀 Initialisation

Pour configurer la base de données, exécutez le fichier de schéma principal :

```bash
mysql -u [user] -p [database] < 00_schema.sql
```

---

## 🏗️ Architecture des Tables

La structure est organisée en trois piliers clairs :

### 1. ⚙️ `event_settings` (La Tour de Contrôle)
Cette table est le cerveau de la configuration. Elle utilise un système clé-valeur pour stocker tous les paramètres qui peuvent changer d'une année à l'autre ou nécessiter une mise à jour rapide.

**Exemples de clés :**
- `event_venue_name`: Nom du lieu.
- `event_start_date`: Date de début pour le compte à rebours.
- `url_registration_attendee`: Lien du formulaire d'inscription.
- `whatsapp_community_url`: Lien vers le groupe WhatsApp.
- `social_linkedin_url`: URL de la page LinkedIn.

### 2. 🎤 `speakers` & `sponsors` (Données Dynamiques)
Ces tables gèrent le contenu qui évolue naturellement au fil du temps.

| Table | Rôle |
| :--- | :--- |
| **`speakers`** | Annuaire des intervenants avec leurs titres, entreprises, photos et liens sociaux. |
| **`sponsors`** | Liste des partenaires avec leurs logos, sites web et niveaux de partenariat (Platinum, Gold, etc.). |

### 3. 👥 `registrations` (Données Utilisateurs)
Cette table est essentielle pour la fonctionnalité principale de l'événement : l'inscription.

| Table | Rôle |
| :--- | :--- |
| **`registrations`** | Collecte et stocke les informations des participants inscrits via le formulaire du site. |

---

## 🛠️ Exemples de Gestion

### Changer le lien d'inscription
```sql
UPDATE event_settings 
SET setting_value = 'https://nouveau-formulaire.com' 
WHERE setting_key = 'url_registration_attendee';
```

### Mettre à jour la date de l'événement
```sql
UPDATE event_settings 
SET setting_value = '2027-07-15T09:00:00' 
WHERE setting_key = 'event_start_date';
```

### Ajouter un nouveau speaker
```sql
INSERT INTO speakers (name, title, company, image_url, display_order) 
VALUES ('Nouveau Speaker', 'Expert en IA', 'Africa AI Labs', 'https://example.com/photo.jpg', 5);
```

---

## 📋 Bonnes Pratiques
1. **Backups** : Toujours exporter la table `registrations` avant toute maintenance.
2. **Clés Uniques** : Ne jamais modifier les `setting_key` car elles sont utilisées comme références dans le code frontend.
3. **Encodage** : La base utilise `utf8mb4_unicode_ci` pour supporter tous les caractères spéciaux.