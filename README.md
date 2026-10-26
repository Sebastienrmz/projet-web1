# Site vitrine EFREI Informatique

Projet réalisé en binôme dans le cadre du cours TI402 – Programmation Web à l'EFREI.

Le site présente des formations, une équipe enseignante, la vie étudiante et un formulaire de contact. Il utilise HTML, CSS et JavaScript, sans framework.

## Essayer dans le navigateur

**[Ouvrir la démonstration](https://sebastienrmz.github.io/projet-web1/)**

Aucune installation nécessaire. Essayer le carrousel de l’accueil, le filtre des enseignants et la validation du formulaire de contact. Le formulaire est une démonstration : aucun message n’est envoyé. Il s’agit d’un projet étudiant, pas du site officiel de l’EFREI.

## Aperçu

La page d'accueil sur ordinateur, une rubrique du site et la version mobile :

![Accueil sur ordinateur](docs/captures/accueil.jpg)

![Rubrique enseignants et filtre par spécialité](docs/captures/enseignants.jpg)

<img src="docs/captures/mobile.jpg" alt="Accueil sur mobile" width="300">

## Ouvrir le site

Télécharger le dépôt et ouvrir `index.html` dans un navigateur. Aucun outil de compilation n'est nécessaire.

On peut aussi lancer un serveur local depuis le dossier du projet :

```sh
python -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000`.

## Fichiers utiles

- `index.html` : accueil et carrousel.
- `formations.html` : présentation des matières.
- `enseignants.html` : cartes et filtre par spécialité.
- `vie-etudiante.html` : événements et associations.
- `contact.html` : validation du formulaire dans le navigateur.
- `apropos.html` : présentation du travail du binôme.
- `css/styles.css` et `js/script.js` : styles et interactions communes.

## Interactions

La navigation mobile, le carrousel, le filtrage des enseignants et les messages d'erreur du formulaire sont gérés en JavaScript. La mise en page utilise Flexbox, Grid et des media queries.

Le formulaire est une démonstration : il ne transmet aucun message et ne possède pas de serveur. Le site est un projet étudiant, pas le site officiel de l'école. Les 37 portraits des enseignants sont conservés dans `photos-enseignants/`, avec leurs liens de provenance dans `SOURCES.md`. Les autres photos peuvent utiliser des liens externes ; les informations de la maquette et les coordonnées n'ont pas été actualisées ni vérifiées.

## Répartition du travail

- Raphaël Derobien : design, CSS et pages Accueil / Projets / Vie étudiante.
- Sébastien Ramirez : JavaScript et pages Formations / Enseignants / Contact / À propos.

La page Projets figurait dans le travail initial du binôme, mais elle n’est pas présente dans ce dépôt.
