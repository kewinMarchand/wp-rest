# wp-rest

## Wordpress API REST et React app

Cette application [React](https://fr.reactjs.org/docs/getting-started.html) utilise les données fournies par l'[API REST Wordpress](https://developer.wordpress.org/rest-api/).


### Admin

L'admin wordpress est [à cette adresse](https://kewin-purjus.alwaysdata.net/wp-admin/).

Elle est hébergée par [alwaysdata](https://www.alwaysdata.com/fr/).

### Front

L'app est en version Wordpress [à cette adresse](https://kewin-purjus.alwaysdata.net/) et version SPA react [à celle-ci](https://master--jolly-tereshkova-ca4b7e.netlify.app/).

Elle est hébergée par [netlify](https://www.netlify.com/).

L'app est bootstrappée avec [Create React App](https://github.com/facebook/create-react-app).

Le routing est fait avec [React router](https://reacttraining.com/react-router/).

Le framework UI disponible est [Material-ui](https://material-ui.com/).

### Dev local

Dans un terminal:

#### `git clone https://github.com/kewinMarchand/wp-rest.git`

Pour récupérer le projet.

---

#### `yarn`

Pour installer les dépendances.

---

#### `yarn start`	

Pour lancer le server local.

*L'application se lancera sur <http://localhost:3000/> et se mettera à jour à chaque changement.*

---

#### `yarn lint`	

Pour lancer le linter/prettier.

*A faire avant chaque demande de relecture.*

---

#### `git pull`

Pour être à jour de la branche master.

---

#### `git branch mabranche`

Pour créer une branche en local.

---

#### `git checkout mabranche`

Pour travailler sur la branche créée.

---

#### `git checkout -B mabranche`

Pour créer une branche en local et travailler sur la branche créée.

---

#### `git push --set-upstream origin mabranche`

Pour pousser la branche sur GitHub.

---

#### `git add .`

Pour ajouter les changements faits en local.

---

#### `git commit -m "mon message de commit"`

Pour commiter les changements faits en local.

---

#### `git push`

Pour pousser le commit sur GitHub.

---

**Enfin, créer une PR et demander une review sur GitHub, pour que les modifs soient ajoutées à la branche master.**

**Netlify refait un build à chaque changement de la branche master.**

---

*Si il y a des conflits (changements apportés à master depuis le pull).*

#### `git checkout master`

Pour retourner sur la branche master.

---

#### `git pull`

Pour être à jour de la branche master.

---

#### `git checkout mabranche`

Pour retourner sur la branche créée.

---

#### `git rebase master`

Pour voir ce qui conflicte.

*Résolution des conflits, commit*

---

#### `git rebase --continue`

Tant qu'il reste des conflits.

---

#### `git push -f`

Pour pousser en force sur GitHub.