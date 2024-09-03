# Gestion de Parking Frontend

Ceci est l'application frontend pour le système de gestion de parking, construite avec Vue.js, Pinia, TypeScript et TailwindCSS. L'application permet aux utilisateurs d'interagir avec le système de parking en visualisant les places disponibles, en créant des tickets pour occuper une place et en libérant les places lorsqu'elles ne sont plus nécessaires.

## Fonctionnalités

- **Visualisation des places de parking** : Affiche une liste de toutes les places de parking, indiquant si chaque place est occupée ou disponible.
- **Création de ticket de parking** : Permet aux utilisateurs de créer un ticket de parking, marquant ainsi une place comme occupée.
- **Libération d'une place de parking** : Les utilisateurs peuvent libérer une place, la rendant ainsi disponible pour d'autres.

## Technologies utilisées

- **Vue.js** : Framework JavaScript pour construire des interfaces utilisateur.
- **Pinia** : Bibliothèque de gestion d'état pour Vue.js.
- **TypeScript** : Sur-ensemble de JavaScript qui ajoute le typage statique.
- **TailwindCSS** : Framework CSS basé sur des utilitaires.
- **Vite** : Outil de build rapide et serveur de développement.
- **Jest** : Framework de tests pour JavaScript.

## Configuration du projet en local

### Cloner le projet

```bash
git clone git@github.com:vincentverges/parking-management-vue.git
```

### Installation des dépendances

```bash
npm install
````

### Lancer le serveur de développement

```bash
npm run dev
```

### Lancer les tests

```bash
npm run test
```

### Build pour la production

```bash
npm run build 
```

## Lancement du projet avec Docker

### Cloner le projet

```bash
git clone git@github.com:vincentverges/parking-management-vue.git
```

### Installation de l'application

Lancement des containers :
```bash
cd parking_management-vue
docker compose up -d --build
```