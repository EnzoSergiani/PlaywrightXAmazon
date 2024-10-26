# Tests du site d'Amazon avec Playwright

Ce projet utilise [Playwright](https://playwright.dev/) pour effectuer des tests end-to-end sur le site d'Amazon.

## Installation

Clonez le dépôt et installez les dépendances :

```sh
git clone https://github.com/EnzoSergiani/PlaywrightXAmazon
cd PlaywrightXAmazon
npm install
```

## Lancer les tests

Pour lancer les tests Playwright, utilisez les commandes suivantes :

```sh
npx playwright test                # executer tous les tests
npx playwright test <NOM_DU_TEST>  # executer un ensemble de tests en particulier
```

## Tests

`compte` : Tests sur un compte

- accès à la page principale
- création d'un compte,
- connexion à un compte,
- tentative création de compte avec la même adresse mail,
- déconnexion.

`produit` : Tests sur un produit

- rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer,
- acheter les produits fréquemment achetés ensemble.

`commande` : Tests sur une commande

- passer une commande avec un login pendant le checkout,
- rechercher un produit dans le moteur de recherche puis l’acheter,
- passer une commande avec un register pendant le checkout,
- rechercher un produit dans le moteur de recherche puis l’acheter,
- vérification du panier,
- vérification du prix total du panier,
- mettre un article de côté,
- remettre un article de côté.

`livraison` : Test sur une livraisons

- vérifier l'adresse de livraison.

`catégorie` : Tests sur une catégorie

- ???

## Auteurs

- Thibaut LEMICHEL
- Antoine RICHARD
- Enzo SERGIANI
- Adam VIDAL

---

## Consignes

- [ ] Me donner la liste de vos tests rédiger en Gherkin dans un fichier (au moins 10)
  - [x] création de compte,
  - [x] login,
  - [x] logout,
  - [ ] création de compte avec un email existant,
  - [ ] vérifier le contenu de la page d’accueil,
  - [x] rechercher un produit dans le moteur de recherche puis l’acheter,
  - [x] rechercher un produit par une catégorie de produit,
  - [x] mettre un produit dans le panier,
  - [ ] vérifier les quantités de produit dans le panier,
  - [ ] passer une commande avec une création de compte pendant le checkout,
  - [x] passer une commande avec un login pendant le checkout,
  - [ ] supprimer produit du panier, Sur une catégorie vérifier les filtres et différentes catégories,
  - [ ] Acheter les “Produits fréquemment achetés ensemble”,
  - [x] vérifier les adresses de livraison
- [x] utiliser des POMs
  - [x] fiche produit,
  - [x] page de catégorie,
  - [x] Home page,
  - [x] page de création de compte,
  - [x] page checkout,
- [x] une fixture,
- [ ] les scripts des tests avec l’ID correspondant au fichier Gherkin,
- [ ] ils doivent être exécutable plusieurs fois
