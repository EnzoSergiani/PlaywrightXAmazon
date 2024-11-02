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

`catégorie` : Tests sur une catégorie

- accéder à une section et une sous-section spécifique,
- rechercher un produit puis filtrer avec une marque,
- trier les produits par prix croissant,
- trier les produits par prix décroissant,
- trier les produits par les commentaires clients.

`commande` : Tests sur une commande

- acheter les produits fréquemment achetés ensemble,
- passer une commande avec un login pendant le checkout,
- rechercher un produit dans le moteur de recherche puis l’acheter,
- vérification du panier,
- vérification du prix total du panier,
- mettre un article de côté,
- remettre un article de côté,
- supprimer un produit du panier,
- supprimer un produit du panier > actualisation du panier.

`compte` : Tests sur un compte

- accès à la page principale,
- création d'un compte,
- connexion à un compte,
- tentative création de compte avec la même adresse mail,
- déconnexion.

`livraison` : Test sur la livraison

- vérifier l'adresse de livraison.

`produit` : Tests sur un produit

- rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer,
- acheter les produits fréquemment achetés ensemble.

## Fichiers Gherkin

Les tests sont également disponibles sous forme de fichiers Gherkin dans le répertoire [features](./tests/features/).

## POMs et Fixtures

Le projet utilise des modèles de page (POMs) et des fixtures pour organiser et réutiliser le code de test. Ces fichiers se trouvent dans les répertoires [poms](./tests/poms/) et [fixtures](./tests/fixtures/fixture.ts).

## Auteurs

- Thibaut LEMICHEL
- Antoine RICHARD
- Enzo SERGIANI
- Adam VIDAL
