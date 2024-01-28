Le code du front-end est dans la branche principale et le code du back-end est dans la branche de développement.
1.	Paramètre de base de données
Vous devez d'abord télécharger pgadmin. Après avoir ouvert pgadmin, vous devez créer une base de données appelée covid-db. Si vous avez déjà une base de données avec un autre nom, vous devez ouvrir le fichier application.ymal et le remplacer par le nom de votre base de données.
 
Vous devrez ensuite remplacer ce nom par votre nom d'utilisateur et votre mot de passe.

Exécuter le programme après les modifications

Pour vous aider à en tirer le meilleur parti, vous devez créer un compte superAdmin dans la base de données.
Recherchez les schémas dans la base de données et ouvrez super_admin dans la table. Vous pouvez afficher et modifier les données en faisant un clic droit sur super_admin et en sélectionnant afficher/modifier les données.
Vous devrez ajouter un compte super_admin comme indiqué ci-dessous. Ce compte peut être créé comme vous le souhaitez !
 



2.	fonctionnement du programme
Après avoir effectué les opérations ci-dessus, vous êtes prêt à utiliser notre programme !
Tout d'abord, vous devez démarrer les programmes front-end et back-end en même temps. （Le port du backend doit être démarré sur le port 8080）
Vous devez ensuite ouvrir http://localhost:4200 dans votre navigateur. L'écran suivant s'affiche：
 
Vous pouvez vous connecter en tant que super-administrateur dans l'écran de connexion super-admin. 
Ici, vous devez vous connecter avec l'adresse électronique et le mot de passe du super administrateur que vous venez d'ajouter à la base de données.
 

Vous pouvez créer des centres en cliquant sur ‘creat centers’. 
Une fois que vous avez créé quelques centres, vous pouvez les retrouver et les modifier en cliquant dessus sur le côté gauche. Vous pouvez rechercher des centres par ville, et noter que la recherche floue est prise en charge ici.
 
Comme pour les Centres, vous pouvez créer un administrateur dans 'créer un administrateur'
Comme pour les Centres, vous pouvez créer un administrateur dans 'create administrateur'. Vous pouvez le modifier dans 'administrateur'. Cette fonction permet d'imprimer tous les administrateurs.

Après avoir créé quelques administrateurs, vous pouvez vous connecter en tant qu'administrateur via "login administrateur". L'administrateur peut ajouter, supprimer, modifier et contrôler les médecins. Lors de la création d'un médecin, celui-ci doit être lié à un centre de vaccination, c'est-à-dire que le médecin et le centre de vaccination sont en relation multiple.
Les patients peuvent prendre rendez-vous en ‘créer un rdv’. 
Le patient doit d'abord sélectionner un centre de vaccination, ce qu'il peut faire en tapant le nom de la ville et en sélectionnant l'un des centres de vaccination.
 
Il devra ensuite compléter ses données personnelles et choisir une heure de rendez-vous.
 



# CovidApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
