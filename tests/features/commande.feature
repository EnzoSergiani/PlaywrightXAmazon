Fonctionnalité: Gestion des commandes

  Scénario: Acheter les produits fréquemment achetés ensemble (ID: commande_001)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "laptop"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute les produits fréquemment achetés ensemble au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur passe la commande du panier
    Et que l'utilisateur se connecte
    Alors l'achat devrait être effectué avec succès

  Scénario: Passer une commande avec un login pendant le checkout (ID: commande_002)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "laptop"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur achète le produit
    Et que l'utilisateur se connecte
    Alors l'achat devrait être effectué avec succès

  Scénario: Rechercher un produit dans le moteur de recherche puis l’acheter (ID: commande_003)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "laptop"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur passe la commande du panier
    Et que l'utilisateur procède au paiement
    Alors l'achat devrait être effectué avec succès

  Scénario: Vérification du panier (ID: commande_004)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "souris"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur définit la quantité à 2
    Et que l'utilisateur ajoute le produit au panier
    Alors la quantité dans le panier devrait être de 2

  Scénario: Vérification du prix total du panier (ID: commande_005)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Disque dur"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur définit la quantité à 2
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Alors le prix total du panier devrait être correct

  Scénario: Mettre un article de côté (ID: commande_006)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Disque dur"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur met le produit de côté
    Et que l'utilisateur va à la page du panier
    Alors la quantité dans le panier devrait être de 0

  Scénario: Remettre l'article dans le panier (ID: commande_007)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Disque dur"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur met le produit de côté
    Et que l'utilisateur remet le produit de côté dans le panier
    Et que l'utilisateur va à la page du panier
    Alors la quantité dans le panier devrait être de 1

  Scénario: Supprimer un produit du panier (ID: commande_008)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Disque dur"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur supprime le produit du panier
    Alors le message "Votre panier Amazon est vide" devrait être affiché

  Scénario: Supprimer un produit du panier > actualisation du panier (ID: commande_009)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Disque dur"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur supprime le produit du panier
    Alors la quantité dans le panier devrait être de 0