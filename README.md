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

`livraison` : Test sur la livraison

- vérifier l'adresse de livraison.

`catégorie` : Tests sur une catégorie

- accéder à un catégorie spécifique.

## Auteurs

- Thibaut LEMICHEL
- Antoine RICHARD
- Enzo SERGIANI
- Adam VIDAL
