# Site Vitrine – Département Informatique EFREI Paris

Projet réalisé dans le cadre du cours **TI402 – Programmation Web**  
2ème année de classe préparatoire intégrée – EFREI Paris  
**Auteurs :** Raphaël Derobien & Sebastien Ramirez

---

## Structure du projet
efrei-info/
├── index.html
├── formations.html
├── enseignants.html
├── projets.html
├── vie-etudiante.html
├── contact.html
├── apropos.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── img/
└── logo-efrei.png

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Accueil : bannière, chiffres clés, carrousel, section "Pourquoi l'info" |
| `formations.html` | Cartes des matières + tableau récapitulatif W3C |
| `enseignants.html` | 35 enseignants réels EFREI avec filtre par spécialité |
| `projets.html` | Projet du mois + 6 projets étudiants avec détails masqués |
| `vie-etudiante.html` | Clubs, hackathons, conférences, frise chronologique |
| `contact.html` | Formulaire avec validation JS + coordonnées du département |
| `apropos.html` | Présentation du binôme, choix de design, fonctionnalités JS |

---

## Technologies

- **HTML5** – Sémantique, conforme W3C
- **CSS3** – Variables CSS, Flexbox, Grid, animations, responsive
- **JavaScript** – Vanilla JS, sans aucun framework ni bibliothèque

---

## Fonctionnalités JavaScript

1. **Burger menu** – menu mobile via `classList.toggle('ouverte')`
2. **Lien actif** – détection de la page courante via `window.location.pathname`
3. **Carrousel** – défilement automatique toutes les 4s avec `transform: translateX`
4. **Toast de bienvenue** – notification discrète au chargement de l'accueil
5. **Filtre enseignants** – affichage/masquage par `data-specialite`
6. **Voir plus / Voir moins** – toggle des détails projets avec animation `fadeIn`
7. **Validation formulaire** – vérification champs vides + présence du `@` dans l'email

---

## Design

- **Palette** : bleu nuit `#0d1b2a`, cyan `#00b4d8`, violet `#7b2d8b`
- **Cartes** : `border-radius: 12px`, `box-shadow`, hover avec `translateY(-5px)`
- **Animations** : `@keyframes glisser-bas` à l'entrée de page, `fadeIn` sur les détails
- **Responsive** : media queries à `900px`, `700px` et `480px`
- **Header** : sticky, dégradé, logo EFREI officiel

---

## Lancer le projet

Ouvrir `index.html` directement dans un navigateur.  
Aucune installation requise, aucune dépendance externe.

---

## Conformité W3C

Chaque page respecte les règles suivantes :
- `<!DOCTYPE html>` et `<html lang="fr">` sur chaque fichier
- `<meta charset="UTF-8">` et `<meta name="viewport">` présents
- `<title>` unique par page
- Tous les `<label>` liés à leur champ via `for` / `id`
- Tableau avec `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`
- Pas de CSS inline, pas d'attributs obsolètes
- Entités HTML : `&amp;`, `&lt;`, etc.

Validé sur [https://validator.w3.org](https://validator.w3.org) sans erreur majeure.

---

## Auteurs

| Nom | Rôle |
|-----|------|
| Raphaël Derobien | Design, CSS, pages Accueil / Projets / Vie étudiante |
| Sebastien Ramirez | JavaScript, pages Formations / Enseignants / Contact / À propos |

Projet TI402 – EFREI Paris – 2025
