# Animuslim — Les Aventures Islamiques pour Enfants

Visual novel éducatif islamique pour enfants de 5-8 ans, perspective sunnite salafiste.

**3 langues** : Français · English · Bahasa Indonesia

## Démarrage rapide

### Test local (web)
Double-clique sur `index.html` ou lance un serveur local :
```bash
npm install
npm run serve   # http://localhost:8080
```

### Build Windows .exe
```bash
npm install
npm run build:win
# → dist/Animuslim-0.2.0-Setup.exe
```

### Build Android / iOS
```bash
npm install
npm run cap:add:android   # ou cap:add:ios
npm run cap:sync
npm run cap:open:android  # ouvre Android Studio pour builder
```

### Déploiement web (GitHub Pages)
1. Push le dossier `animuslim_app/` sur un repo GitHub
2. Settings → Pages → Source : `main` branch / root
3. URL publique disponible en quelques minutes

## Documentation complète

Voir `../doc/` à la racine du projet pour toute la documentation.

## Licence

Projet privé — animuslimfamily — tous droits réservés.
