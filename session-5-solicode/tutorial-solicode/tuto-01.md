Transformation des entités en tables

 1. Table : VILLE

- id_ville (PK)
- nom_ville!l

## 2. Table : AUTEUR

- id_auteur (PK)
- nom_auteur
- prenom_auteur
- email_auteur

## 3. Table : ARTICLE

- id_article (PK)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article

## 4. Table : CATEGORIE

- id_categorie (PK)
- nom_categorie

## Conclusion

Chaque entité du MCD est transformée en une table dans le MLD. L'identifiant de chaque entité devient une clé primaire (PK).

Aucune clé étrangère (FK) n'est ajoutée à cette étape.
