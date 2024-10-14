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
npx playwright test
npx playwright test –ui
npx playwright test –trace on
```

## Test

- n°1 : création de compte et connexion
- n°2 : rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer
- n°3 : rechercher un produit, ajouter les produits fréquemment achetés ensemble au panier
- n°4 : vérifier les adresses de livraison
- n°5 : ...
- n°6 : rechercher un produit dans le moteur de recherche puis l’acheter,
- n°7 : ...
- n°8 : ...
- n°9 : ...
- n°10 : ...

## Consignes

- [ ] Me donner la liste de vos tests rédiger en Gherkin dans un fichier (au moins 10)
  - [X] création de compte,
  - [X] login,
  - [ ] logout,
  - [ ] création de compte avec un email existant,
  - [ ] vérifier le contenu de la page d’accueil,
  - [X] rechercher un produit dans le moteur de recherche puis l’acheter,
  - [X] rechercher un produit par une catégorie de produit, 
  - [X] mettre un produit dans le panier,
  - [ ] vérifier les quantités de produit dans le panier,
  - [ ] passer une commande avec une création de compte pendant le checkout,
  - [ ] passer une commande avec un login pendant le checkout,
  - [ ] supprimer produit du panier, Sur une catégorie vérifier les filtres et différentes catégories,
  - [ ] Acheter les “Produits fréquemment achetés ensemble”,
  - [ ] vérifier les adresses de livraison
- [ ] utiliser des POMs
  - [ ] fiche produit,
  - [ ] page de catégorie,
  - [ ] Home page,
  - [ ] page de création de compte,
  - [ ] page checkout,
- [ ] une fixture,
- [ ] les scripts des tests avec l’ID correspondant au fichier Gherkin,
- [ ] ils doivent être exécutable plusieurs fois

## Auteurs

- Thibaut LEMICHEL
- Antoine RICHARD
- Enzo SERGIANI
- Adam VIDAL
