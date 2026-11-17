# MLD Complet du Blog

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

## 4. Table : TAG

- id_tag (PK)
- nom_tag

## 5. Table : ARTICLE

- id_article (PK)
- titre_article
- contenu_article
- date_publication
- statut_article
- image_article
- id_auteur (FK)
- id_categorie (FK)

## 6. Table : ARTICLE_TAG

- id_article (PK, FK)
- id_tag (PK, FK)

## Conclusion

Le MLD complet du Blog contient 6 tables relationnelles.

- Les entités deviennent des tables avec leurs clés primaires (PK).
- Les relations 1-N sont représentées par des clés étrangères (FK).
- La relation N-N est représentée par une table de liaison ARTICLE_TAG avec une clé primaire composée.

Le MLD est maintenant prêt pour la création des tables en SQL.