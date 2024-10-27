Fonctionnalité: Gestion des comptes

  Scénario: Accès à la page principale (ID: compte_001)
    Étant donné que l'utilisateur est sur la page d'accueil
    Alors l'utilisateur devrait voir le contenu principal

  Scénario: Création d'un compte (ID: compte_002)
    Étant donné que l'utilisateur est sur la page d'accueil
    Quand l'utilisateur navigue vers la page d'inscription
    Et que l'utilisateur enregistre un nouveau compte
    Alors le compte devrait être créé avec succès

  Scénario: Connexion à un compte (ID: compte_003)
    Étant donné que l'utilisateur est sur la page d'accueil
    Quand l'utilisateur navigue vers la page de connexion
    Et que l'utilisateur se connecte avec des identifiants valides
    Alors l'utilisateur devrait être connecté avec succès

  Scénario: Tentative de création de compte avec la même adresse mail (ID: compte_004)
    Étant donné que l'utilisateur est sur la page d'accueil
    Quand l'utilisateur navigue vers la page d'inscription
    Et que l'utilisateur essaie de s'inscrire avec un email existant
    Alors l'utilisateur devrait voir une alerte concernant l'email réutilisé

  Scénario: Déconnexion (ID: compte_005)
    Étant donné que l'utilisateur est connecté
    Quand l'utilisateur se déconnecte
    Alors l'utilisateur devrait être déconnecté avec succès