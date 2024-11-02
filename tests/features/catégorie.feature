Fonctionnalité: Gestion des catégories

  Scénario: Accéder à une section et sous-section spécifique (ID: catégorie_001)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur ouvre le menu
    Et que l'utilisateur sélectionne la section "High-Tech"
    Et que l'utilisateur sélectionne la sous-section "Objets connectés"
    Alors la sous-section "Objets connectés" devrait être affichée

  Scénario: Rechercher un produit puis filtrer avec une marque (ID: catégorie_002)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "souris"
    Et que l'utilisateur filtre par la marque "Logitech"
    Alors les résultats de recherche devraient être filtrés par la marque "Logitech"

  Scénario: Trier les produits par prix croissant (ID: produit_003)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Lego"
    Et que l'utilisateur trie les produits par prix croissant
    Alors le premier produit devrait être le moins cher

  Scénario: Trier les produits par prix décroissant (ID: produit_004)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Lego"
    Et que l'utilisateur trie les produits par prix décroissant
    Alors le premier produit devrait être le plus cher

  Scénario: Trier par les commentaires clients (ID: produit_005)
    Étant donné que l'utilisateur est sur la page d'accueil
    Et que l'utilisateur refuse les cookies
    Quand l'utilisateur recherche un produit "Poubelle"
    Et que l'utilisateur trie les produits par prix décroissant
    Et que l'utilisateur trie les produits par note des clients
    Alors les produits devraient être triés par note des clients