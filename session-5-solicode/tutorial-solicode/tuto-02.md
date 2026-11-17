# Transformation des relations en clés étrangères

## 1. Table : VILLE

- id_ville (PK)
- nom_ville

## 2. Table : AUTEUR

- id_auteur (PK)
- nom_auteur
- prenom_auteur
- email_auteur
- id_ville (FK)

## 3. Table : CATEGORIE

- id_categorie (PK)
- nom_categorie

## 4. Table : ARTICLE

- id_article (PK)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article
- id_auteur (FK)
- id_categorie (FK)

## Conclusion

Les relations 1-N sont transformées en clés étrangères (FK).

Chaque clé étrangère est ajoutée dans la table située du côté de la cardinalité (1,1).