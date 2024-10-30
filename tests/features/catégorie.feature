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