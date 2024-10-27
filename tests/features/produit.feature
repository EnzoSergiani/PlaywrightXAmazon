Fonctionnalité: Gestion des produits

  Scénario: Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer (ID: produit_001)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "souris"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute le produit au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur attend 2 secondes
    Et que l'utilisateur supprime le produit du panier
    Alors le panier devrait être vide

  Scénario: Acheter les produits fréquemment achetés ensemble (ID: produit_002)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "laptop"
    Et que l'utilisateur sélectionne le premier produit
    Et que l'utilisateur ajoute les produits fréquemment achetés ensemble au panier
    Et que l'utilisateur va à la page du panier
    Et que l'utilisateur passe la commande du panier
    Et que l'utilisateur se connecte
    Alors l'achat devrait être effectué avec succès