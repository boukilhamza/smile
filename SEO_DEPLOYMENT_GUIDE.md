# Guide de Déploiement SEO - Smile & Greet

## ✅ Travaux Complétés

### 1. Architecture Multilingue i18n
- ✅ Structure de routes par locale: `/fr`, `/en`, `/ar`
- ✅ Middleware de redirection automatique vers `/fr`
- ✅ Layout séparé par langue avec métadonnées dynamiques
- ✅ Hreflang et canonicals configurés pour chaque page
- ✅ JSON-LD Schema adapté par langue

### 2. Métadonnées SEO Optimisées

#### Version Française (`/fr`)
- **Title:** "Smile & Greet - N°1 Agence Hôtesses Accueil Maroc | Événements & Salons"
- **Keywords:** agence hôtesses Maroc, hôtesse accueil Casablanca, etc.
- **Canonical:** `https://smileandgreet.ma/fr`

#### Version Anglaise (`/en`)
- **Title:** "Smile & Greet - Top Hostess Agency Morocco | Event Hostesses Casablanca Marrakech Rabat"
- **Keywords:** hostess agency morocco, event hostesses morocco, hostess agency casablanca, etc.
- **Canonical:** `https://smileandgreet.ma/en`

### 3. Landing Page SEO (`/en/hostess-agency-morocco`)
- ✅ 1200+ mots de contenu optimisé
- ✅ Structure H1-H6 sémantique
- ✅ Mots-clés naturellement intégrés:
  - "hostess agency morocco" (densité optimale)
  - "event hostesses casablanca"
  - "hostess agency marrakech"
  - "trade show hostesses morocco"
- ✅ Schema FAQ pour Google Rich Snippets
- ✅ Sections par ville (Casablanca, Marrakech, Rabat)
- ✅ CTA multiples avec liens internes

### 4. Sitemap XML
- ✅ URLs mises à jour avec structure `/[locale]/`
- ✅ Balises hreflang pour chaque URL
- ✅ x-default pointant vers `/fr`
- ✅ Landing page incluse avec priorité 0.95

## 📋 Actions à Prendre IMMÉDIATEMENT Après Déploiement

### Étape 1: Déployer sur Vercel/Production

```bash
# Commiter les changements
git add .
git commit -m "SEO: i18n architecture + landing page EN hostess agency morocco"
git push

# Le déploiement Vercel se fera automatiquement
```

### Étape 2: Google Search Console (CRITIQUE)

#### A. Soumettre le Sitemap
1. Accéder à [Google Search Console](https://search.google.com/search-console)
2. Sélectionner votre propriété `smileandgreet.ma`
3. Aller dans **Sitemaps** (menu gauche)
4. Ajouter: `https://smileandgreet.ma/sitemap.xml`
5. Cliquer sur "Soumettre"

#### B. Demander l'Indexation des Pages Clés
1. Dans Search Console, aller dans **Inspection d'URL**
2. Inspecter et demander l'indexation pour:
   - `https://smileandgreet.ma/fr`
   - `https://smileandgreet.ma/en`
   - `https://smileandgreet.ma/en/hostess-agency-morocco`
   - `https://smileandgreet.ma/fr/services`
   - `https://smileandgreet.ma/en/services`

#### C. Vérifier les Hreflang
1. Dans Search Console → **Couverture**
2. Après quelques jours, vérifier dans **Améliorations** → **Versions internationales**
3. S'assurer qu'il n'y a pas d'erreurs hreflang

### Étape 3: Google Business Profile (SEO Local)

1. Créer/optimiser votre fiche Google Business
2. **Catégorie principale:** "Event Management Company"
3. **Catégories secondaires:** "Marketing Agency", "Event Planning Service"
4. **Nom:** Smile & Greet - Hostess Agency Morocco
5. **Description:** Utiliser le texte de la landing page (200 mots max)
6. **Services:** Ajouter tous les services (Event Hostesses, Trade Show Staff, VIP Reception, etc.)
7. **Photos:** Minimum 10 photos professionnelles
8. **Zone de service:** Casablanca, Marrakech, Rabat, etc.

### Étape 4: Backlinks (2-4 semaines)

#### Obtenir 5-10 Backlinks EN de Qualité

**Annuaires Professionnels:**
1. **Clutch.co** - Créer un profil agence événementiel
2. **LinkedIn Company Page** - Ajouter lien vers landing page EN
3. **Chambre de Commerce Maroc** - Inscription + lien
4. **Morocco Board** - Annuaire business

**Stratégie de Contenu:**
1. Publier un article invité sur un blog événementiel marocain
2. Créer une page sur **Medium** avec article "Top Event Hostess Tips Morocco"
3. S'inscrire sur **Eventbrite** et ajouter le lien du site dans le profil

**Ancres à utiliser (naturelles):**
- "hostess agency in Morocco"
- "professional event staffing Morocco"
- "Smile & Greet"
- "event hostesses Casablanca"
- URL nue: "smileandgreet.ma"

### Étape 5: Maillage Interne (Déjà fait)

La landing page `/en/hostess-agency-morocco` contient déjà des liens internes vers:
- `/en#contact` (formulaire de contact)
- Ancres internes pour navigation fluide

**À faire:** Ajouter des liens depuis d'autres pages EN vers la landing:
- Dans `/en` (page d'accueil EN): ajouter 1-2 liens "Learn more about our hostess agency in Morocco"
- Dans `/en/services`: ajouter lien contextuel vers la landing

### Étape 6: Surveillance & Optimisation

#### Outils à configurer:
1. **Google Analytics 4** - Tracker le trafic FR vs EN
2. **Google Search Console** - Surveiller les mots-clés
3. **Ahrefs/SEMrush** (optionnel) - Suivre le ranking

#### KPIs à surveiller (3-6 mois):
- Position moyenne pour "hostess agency morocco"
- Impressions/Clics pour mots-clés anglais
- Taux de conversion formulaire de contact EN
- Backlinks acquis

## 🎯 Résultats Attendus

### Semaine 1-2
- Google indexe les nouvelles URLs FR/EN
- Hreflang reconnus
- Sitemap validé

### Mois 1
- Classement page 2-3 Google pour "hostess agency morocco"
- Trafic organique EN commence

### Mois 2-3
- Top 10 pour "hostess agency morocco" (avec backlinks)
- Top 5 pour mots-clés longue traîne:
  - "hostess agency casablanca"
  - "event hostesses marrakech"
  - "trade show staff morocco"

### Mois 4-6
- Top 3-5 pour "hostess agency morocco"
- Augmentation du trafic EN de 300%+
- Leads qualifiés depuis la landing page

## 📝 Checklist Post-Déploiement

- [ ] Déployer sur production
- [ ] Vérifier que toutes les URLs fonctionnent:
  - [ ] `smileandgreet.ma` → redirige vers `/fr`
  - [ ] `smileandgreet.ma/fr` → OK
  - [ ] `smileandgreet.ma/en` → OK
  - [ ] `smileandgreet.ma/en/hostess-agency-morocco` → OK
- [ ] Soumettre sitemap à Google Search Console
- [ ] Demander indexation des 5 pages clés
- [ ] Créer/optimiser Google Business Profile
- [ ] Obtenir premiers 3 backlinks EN (semaine 1-2)
- [ ] Configurer Google Analytics 4
- [ ] Vérifier hreflang après 7 jours dans GSC
- [ ] Publier 1 article blog/Medium avec lien vers landing
- [ ] Surveiller classements avec GSC (weekly)

## 🚨 Points d'Attention

1. **Core Web Vitals:** Vérifier les performances de la landing page
2. **Mobile-First:** Tester sur mobile (Google indexe mobile-first)
3. **Contenu Unique:** Ne pas dupliquer le contenu FR→EN (déjà fait)
4. **Backlinks Qualité:** Éviter les annuaires spam, privilégier sites .ma et sites événementiels de qualité

## 📊 Dashboard de Suivi

Créer un tableur avec:
- Date
- Mot-clé
- Position Google
- Volume recherche estimé
- Backlinks acquis
- Trafic organique EN (GA4)

Mettre à jour **hebdomadairement** les 4 premières semaines, puis **mensuellement**.

---

**Bon déploiement ! 🚀**

Pour toute question sur l'implémentation, vérifier:
- `/app/[locale]/layout.tsx` - Métadonnées par langue
- `/middleware.ts` - Redirection locale
- `/public/sitemap.xml` - Hreflang et URLs
- `/app/[locale]/hostess-agency-morocco/page.tsx` - Landing page optimisée
