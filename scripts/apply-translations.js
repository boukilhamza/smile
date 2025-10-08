const fs = require('fs');
const path = require('path');

// Mapping des composants et leurs modifications
const componentUpdates = {
  'components/About.tsx': {
    imports: "import { useLanguage } from '@/contexts/LanguageContext'",
    hookCall: "  const { t } = useLanguage();",
    replacements: [
      { from: '"Qui sommes-nous"', to: '{t.about.title}' },
      { from: `"Smile & Greet est une agence spécialisée dans les services d'accueil et d'animation événementielle au Maroc. Forte d'une expertise de plusieurs années, nous nous imposons comme un partenaire incontournable pour toutes vos manifestations professionnelles et événements d'entreprise."`, to: '{t.about.description1}' },
      { from: `"Notre mission est de créer des moments d'exception en alliant élégance, professionnalisme et savoir-faire unique. Chaque détail compte pour transformer vos événements en expériences mémorables."`, to: '{t.about.description2}' },
      { from: '"Passion"', to: '{t.about.values.passion.title}' },
      { from: `"L'enthousiasme et la passion animent notre équipe au quotidien"`, to: '{t.about.values.passion.description}' },
      { from: '"Excellence"', to: '{t.about.values.excellence.title}' },
      { from: '"Nous visons l\'excellence dans chaque prestation, sans compromis"', to: '{t.about.values.excellence.description}' },
      { from: '"Équipe"', to: '{t.about.values.team.title}' },
      { from: '"Une équipe soudée et professionnelle à votre service"', to: '{t.about.values.team.description}' },
      { from: '"Reconnaissance"', to: '{t.about.values.recognition.title}' },
      { from: '"La satisfaction de nos clients est notre plus grande récompense"', to: '{t.about.values.recognition.description}' },
      { from: `"Notre équipe d'hôtesses professionnelles"`, to: '{t.about.teamTitle}' },
      { from: '"Découvrez nos ambassadrices de charme et de professionnalisme"', to: '{t.about.teamDescription}' },
      { from: `"Hôtesse d'accueil"`, to: '{t.about.hostessRole}' }
    ]
  },
  'components/Footer.tsx': {
    imports: "import { useLanguage } from '@/contexts/LanguageContext'",
    hookCall: "  const { t } = useLanguage();",
    replacements: [
      { from: '"Agence des Hôtesses d\'accueil au Maroc"', to: '{t.footer.description}' },
      { from: '"Tous droits réservés"', to: '{t.footer.rights}' },
      { from: '"contact@smilegreet.ma"', to: '{t.common.email}' },
      { from: '"+212 661 51 91 01"', to: '{t.common.phone}' }
    ]
  },
  'components/WhatsAppFloat.tsx': {
    imports: "import { useLanguage } from '@/contexts/LanguageContext'",
    hookCall: "  const { t } = useLanguage();",
    replacements: [
      { from: 'encodeURIComponent("Bonjour Smile & Greet ! Je suis intéressé(e) par vos services d\'hôtesses pour mon événement. Pouvez-vous me contacter ?")', to: 'encodeURIComponent(t.whatsapp.defaultMessage)' }
    ]
  }
};

// Fonction pour appliquer les modifications
function updateComponent(componentPath, updates) {
  const fullPath = path.join(__dirname, '..', componentPath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Ajouter l'import
  if (updates.imports && !content.includes(updates.imports)) {
    const importIndex = content.lastIndexOf('import');
    const importEndIndex = content.indexOf('\n', importIndex);
    content = content.slice(0, importEndIndex + 1) + updates.imports + '\n' + content.slice(importEndIndex + 1);
  }
  
  // Ajouter le hook call après la déclaration du composant
  if (updates.hookCall && !content.includes('useLanguage')) {
    const componentMatch = content.match(/const \w+ = \(\) => \{/);
    if (componentMatch) {
      const insertIndex = componentMatch.index + componentMatch[0].length;
      content = content.slice(0, insertIndex) + '\n' + updates.hookCall + content.slice(insertIndex);
    }
  }
  
  // Appliquer les remplacements
  updates.replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  fs.writeFileSync(fullPath, content);
  console.log(`Updated: ${componentPath}`);
}

// Appliquer les mises à jour
Object.entries(componentUpdates).forEach(([componentPath, updates]) => {
  updateComponent(componentPath, updates);
});

console.log('Translation updates completed!');