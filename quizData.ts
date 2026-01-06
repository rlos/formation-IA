
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0, 1, or 2
  explanation: string;
}

export const QUIZ_DATA: Record<string, Question[]> = {
  demystification: [
    {
      id: 1,
      question: "Comment l'IA choisit-elle le mot suivant dans une phrase ?",
      options: [
        "Elle réfléchit au sens profond de la vie",
        "Elle calcule statistiquement le mot le plus probable (comme un correcteur)",
        "Elle cherche la vérité absolue dans sa base de données"
      ],
      correctAnswer: 1,
      explanation: "L'IA ne 'pense' pas. Elle agit comme un super-correcteur en prédisant le mot qui a la plus haute probabilité statistique d'apparaître après le précédent."
    },
    {
      id: 2,
      question: "Quelle est la meilleure analogie pour décrire le comportement d'une IA générative ?",
      options: [
        "Un magicien omniscient",
        "Une calculatrice géante",
        "Un stagiaire brillant mais qui peut baratiner"
      ],
      correctAnswer: 2,
      explanation: "Comme un stagiaire brillant, elle a lu tout internet (culture immense) mais veut tellement vous faire plaisir qu'elle peut inventer des réponses (baratiner) si elle ne sait pas."
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une 'Hallucination' dans le contexte de l'IA ?",
      options: [
        "Quand l'IA génère une réponse grammaticalement correcte mais factuellement fausse",
        "Quand l'IA refuse de répondre",
        "Quand l'IA devient consciente"
      ],
      correctAnswer: 0,
      explanation: "L'IA privilégie la plausibilité à la vérité. Elle peut inventer des dates, des faits ou des sources avec une assurance totale."
    },
    {
      id: 4,
      question: "L'IA possède-t-elle une conscience ou des émotions ?",
      options: [
        "Oui, elle ressent de la tristesse quand on est méchant",
        "Non, c'est un système informatique basé sur des statistiques",
        "Peut-être, cela dépend du modèle"
      ],
      correctAnswer: 1,
      explanation: "L'IA simule des émotions par mimétisme linguistique, mais ne ressent rien. C'est un assemblage d'algorithmes mathématiques."
    },
    {
      id: 5,
      question: "Quelle est la règle d'or donnée dans le cours pour utiliser l'IA ?",
      options: [
        "Toujours dire s'il te plaît",
        "Ne jamais copier-coller un résultat critique sans le vérifier/relire",
        "Utiliser l'IA uniquement pour des poèmes"
      ],
      correctAnswer: 1,
      explanation: "Quoi qu'en dise l'IA, vous restez responsable. La vérification humaine est obligatoire pour éviter les erreurs factuelles."
    }
  ],
  types_ia: [
    {
      id: 1,
      question: "Quel est l'objectif principal de l'IA Traditionnelle (Discriminative) ?",
      options: [
        "Créer de nouvelles images",
        "Analyser, classer et prédire à partir de données existantes",
        "Écrire des romans"
      ],
      correctAnswer: 1,
      explanation: "L'IA traditionnelle agit comme un 'Juge'. Elle reconnait des schémas (ex: Spam ou Pas Spam) mais ne crée rien de nouveau."
    },
    {
      id: 2,
      question: "Lequel de ces services utilise principalement de l'IA Traditionnelle ?",
      options: [
        "ChatGPT (Génération de texte)",
        "Midjourney (Génération d'images)",
        "Netflix (Recommandation de films)"
      ],
      correctAnswer: 2,
      explanation: "Netflix analyse vos goûts passés pour prédire ce que vous aimerez. Il ne crée pas le film, il le recommande."
    },
    {
      id: 3,
      question: "Quelle est la grande différence de l'IA Générative ?",
      options: [
        "Elle coûte moins cher",
        "Elle crée du contenu entièrement nouveau (texte, image, son)",
        "Elle ne fait jamais d'erreurs"
      ],
      correctAnswer: 1,
      explanation: "L'IA Générative (l'Artiste) ne se contente pas de classer, elle utilise ce qu'elle a appris pour produire quelque chose d'inédit."
    },
    {
      id: 4,
      question: "Quelle analogie correspond le mieux à l'IA Traditionnelle ?",
      options: [
        "Un Peintre fou",
        "Un Documentaliste qui range les livres",
        "Un Auteur de science-fiction"
      ],
      correctAnswer: 1,
      explanation: "L'IA traditionnelle classe, trie et organise l'information existante, comme un bibliothécaire ou un documentaliste rigoureux."
    },
    {
      id: 5,
      question: "Pourquoi confond-on parfois les deux types d'IA ?",
      options: [
        "Parce qu'elles ont le même nom",
        "Parce que l'IA Générative utilise aussi la prédiction (mot suivant) pour créer",
        "Il n'y a aucune différence"
      ],
      correctAnswer: 1,
      explanation: "L'IA Générative utilise la mécanique de prédiction (propre à l'IA traditionnelle) comme moteur pour construire ses créations."
    }
  ],
  llm: [
    {
      id: 1,
      question: "Que signifie l'acronyme LLM ?",
      options: [
        "Logiciel Libre Moderne",
        "Large Language Model (Grand Modèle de Langue)",
        "Long Learning Machine"
      ],
      correctAnswer: 1,
      explanation: "LLM désigne ces programmes entraînés sur des quantités phénoménales de textes pour comprendre la structure du langage."
    },
    {
      id: 2,
      question: "Qu'est-ce un 'Token' pour une IA ?",
      options: [
        "Une pièce de monnaie virtuelle",
        "Un morceau de mot ou de ponctuation (l'unité de base)",
        "Un mot de passe"
      ],
      correctAnswer: 1,
      explanation: "L'IA ne lit pas des mots entiers mais des 'tokens'. Si le texte était un mur de LEGO, les tokens seraient les briques."
    },
    {
      id: 3,
      question: "Comment l'IA trouve-t-elle une réponse ?",
      options: [
        "Elle cherche la vérité dans une encyclopédie",
        "Elle prédit le prochain token le plus probable statistiquement",
        "Elle appelle un ami"
      ],
      correctAnswer: 1,
      explanation: "L'IA est une machine à probabilités. Elle calcule : 'Statistiquement, quel est le prochain morceau de mot logique après ceux-ci ?'."
    },
    {
      id: 4,
      question: "Pourquoi l'IA hallucine-t-elle parfois ?",
      options: [
        "Parce qu'elle privilégie ce qui 'sonne bien' statistiquement sur ce qui est vrai",
        "Parce qu'elle a un virus",
        "Parce qu'elle veut nous tromper"
      ],
      correctAnswer: 0,
      explanation: "Pour que la phrase soit statistiquement élégante, l'IA peut inventer un fait plausible mais faux."
    },
    {
      id: 5,
      question: "Qu'est-ce que la 'fenêtre de contexte' ?",
      options: [
        "La taille de l'écran",
        "Le nombre maximum de tokens que l'IA peut garder en mémoire vive",
        "Une fonctionnalité de Windows"
      ],
      correctAnswer: 1,
      explanation: "C'est la limite de mémoire immédiate de l'IA. Au-delà de ce nombre de tokens, elle 'oublie' le début de la conversation."
    }
  ],
  ethics: [
    {
      id: 1,
      question: "Pourquoi l'IA a-t-elle des biais (sexistes, racistes...) ?",
      options: [
        "Elle a une opinion politique",
        "Elle apprend sur Internet, qui est rempli de stéréotypes humains",
        "C'est un bug informatique"
      ],
      correctAnswer: 1,
      explanation: "L'IA est un miroir déformant. Elle reproduit statistiquement les préjugés présents dans les données sur lesquelles elle a été entraînée."
    },
    {
      id: 2,
      question: "Quelle est la règle d'or pour éviter les problèmes d'Hallucinations ?",
      options: [
        "Demander poliment à l'IA",
        "Ne jamais utiliser l'IA",
        "Faire confiance mais vérifier (surtout les faits précis)"
      ],
      correctAnswer: 2,
      explanation: "L'IA invente pour plaire. Ne copiez jamais un fait historique, technique ou juridique sans une source externe fiable."
    },
    {
      id: 3,
      question: "Une œuvre générée à 100% par l'IA est-elle protégée par le droit d'auteur ?",
      options: [
        "Oui, c'est mon œuvre",
        "Non, dans la plupart des pays, il faut une intervention humaine significative",
        "Uniquement si je paie l'abonnement"
      ],
      correctAnswer: 1,
      explanation: "Juridiquement, une création sans intervention humaine créative (simple prompt) tombe souvent dans le domaine public."
    },
    {
      id: 4,
      question: "Si je demande une pub pour une banque et que je ne vois que des hommes en costume, c'est...",
      options: [
        "Un Biais Cognitif",
        "Une Hallucination",
        "De la Propriété Intellectuelle"
      ],
      correctAnswer: 0,
      explanation: "C'est un biais de représentation. L'IA associe statistiquement 'banquier' à 'homme en costume' à cause de ses données d'entraînement."
    },
    {
      id: 5,
      question: "Le 'Test de la Boîte Noire' consiste à se poser quelles questions ?",
      options: [
        "Est-ce rapide ? Est-ce gratuit ? Est-ce joli ?",
        "Biais ? Hallucination ? Propriété ?",
        "Qui ? Quoi ? Où ?"
      ],
      correctAnswer: 1,
      explanation: "Avant d'utiliser un résultat, vérifiez ces 3 piliers : Est-ce biaisé ? Est-ce vrai ? À qui ça appartient ?"
    }
  ],
  prompter: [
    {
      id: 1,
      question: "Dans le cadre COSTAR, à quoi sert le 'C' (Contexte) ?",
      options: [
        "À définir la couleur du texte",
        "À donner les contraintes invisibles et le décor à l'IA",
        "À corriger les fautes d'orthographe"
      ],
      correctAnswer: 1,
      explanation: "Sans contexte, l'IA répond par des généralités. Le contexte permet de situer l'entreprise, le niveau technique ou la situation spécifique."
    },
    {
      id: 2,
      question: "Quelle est la force principale du cadre BAB (Before-After-Bridge) ?",
      options: [
        "Écrire du code Python",
        "Faire de la vente et du storytelling émotionnel",
        "Résumer des documents PDF"
      ],
      correctAnswer: 1,
      explanation: "BAB joue sur la psychologie : on part de la douleur (Before) pour vendre le rêve (After), la solution (Bridge) faisant le lien."
    },
    {
      id: 3,
      question: "Pourquoi utiliser un 'Role' (R) dans le cadre RTF ?",
      options: [
        "Pour activer des clusters de connaissances spécifiques (ex: Expert Excel)",
        "Pour que l'IA soit plus polie",
        "C'est inutile, c'est juste pour faire joli"
      ],
      correctAnswer: 0,
      explanation: "L'amorçage de rôle ('Act as...') permet à l'IA d'adopter le vocabulaire, le ton et l'expertise d'une profession spécifique."
    },
    {
      id: 4,
      question: "Dans la méthode C.R.E.F.O, que signifie le 'E' ?",
      options: [
        "Élégant (Style soutenu)",
        "Explicite (Tâche précise avec verbe d'action)",
        "Extraordinaire (Surprendre le lecteur)"
      ],
      correctAnswer: 1,
      explanation: "Le E de Explicite rappelle qu'il faut donner une instruction claire et non ambiguë (verbes d'action) pour que l'IA sache quoi faire."
    },
    {
      id: 5,
      question: "Dans un prompt, si je ne précise pas le Format (Output), que risque-t-il d'arriver ?",
      options: [
        "L'IA va planter",
        "L'IA va refuser de répondre",
        "L'IA va générer un pavé de texte dense et difficile à lire"
      ],
      correctAnswer: 2,
      explanation: "Sans contrainte de format (tableau, liste à puces, JSON), l'IA tend naturellement vers des paragraphes de texte standard."
    }
  ],
  models: [
    {
      id: 1,
      question: "Quelle est la particularité principale de Google Gemini ?",
      options: [
        "Il ne fonctionne que sur Android",
        "Il est multimodal natif (texte, image, vidéo, audio)",
        "Il est payant pour tout le monde"
      ],
      correctAnswer: 1,
      explanation: "Gemini a été entraîné dès le départ sur différents médias, ce qui lui permet de 'voir' et 'entendre' mieux que les autres modèles."
    },
    {
      id: 2,
      question: "Quel modèle est réputé pour son style d'écriture 'Humain' et moins robotique ?",
      options: [
        "Claude 3.5 (Anthropic)",
        "GPT-3",
        "Mistral Small"
      ],
      correctAnswer: 0,
      explanation: "Claude est souvent plébiscité pour sa 'plume' plus naturelle, empathique et moins chargée en clichés d'IA."
    },
    {
      id: 3,
      question: "Quel est l'avantage du modèle Mistral ?",
      options: [
        "C'est un modèle français très performant et open-weights",
        "Il peut faire le café",
        "Il est le seul à comprendre l'anglais"
      ],
      correctAnswer: 0,
      explanation: "Mistral est une fierté technologique européenne, offrant des performances rivalisant avec GPT-4 tout en étant plus transparent."
    },
    {
      id: 4,
      question: "Si je veux analyser 50 PDF en une seule fois, quel modèle a la plus grande fenêtre contextuelle ?",
      options: [
        "GPT-4",
        "Gemini 1.5 Pro",
        "Mistral Large"
      ],
      correctAnswer: 1,
      explanation: "Gemini 1.5 Pro possède une fenêtre contextuelle massive (jusqu'à 2 millions de tokens), idéale pour les très gros volumes de données."
    },
    {
      id: 5,
      question: "GPT-4 est souvent considéré comme :",
      options: [
        "Obsolète",
        "Le standard de référence pour la polyvalence",
        "Uniquement bon pour le code"
      ],
      correctAnswer: 1,
      explanation: "GPT-4 reste le point de comparaison standard du marché pour sa capacité à tout faire à un niveau très élevé."
    }
  ],
  security: [
    {
      id: 1,
      question: "Que se passe-t-il avec les données envoyées aux versions publiques des IA ?",
      options: [
        "Elles sont détruites immédiatement",
        "Elles peuvent être utilisées pour entraîner le modèle",
        "Elles sont cryptées et inaccessibles à jamais"
      ],
      correctAnswer: 1,
      explanation: "Sur les versions gratuites/publiques, vos conversations nourrissent l'IA. Ne donnez jamais de secrets industriels."
    },
    {
      id: 2,
      question: "Qu'est-ce qu'une 'Hallucination' en IA ?",
      options: [
        "Quand l'IA voit des fantômes",
        "Quand l'IA invente une information fausse avec une totale assurance",
        "Quand l'IA refuse de répondre"
      ],
      correctAnswer: 1,
      explanation: "L'IA est une machine à probabilités. Si elle ne sait pas, elle peut inventer des faits, des dates ou des sources très convaincantes mais fausses."
    },
    {
      id: 3,
      question: "Quelle est la règle d'or pour utiliser l'IA professionnellement ?",
      options: [
        "Faire confiance aveuglément",
        "Human in the Loop (Toujours vérifier)",
        "Copier-coller sans relire"
      ],
      correctAnswer: 1,
      explanation: "L'IA est un copilote. Le commandant de bord (vous) doit toujours vérifier le travail avant diffusion."
    },
    {
      id: 4,
      question: "L'affaire 'Samsung' concerne quel type de risque ?",
      options: [
        "Fuite de code source confidentiel",
        "Piratage de webcam",
        "Vol de téléphones"
      ],
      correctAnswer: 0,
      explanation: "Des ingénieurs ont collé du code propriétaire dans ChatGPT, le rendant potentiellement accessible via l'entraînement du modèle."
    },
    {
      id: 5,
      question: "Comment éviter les fausses citations juridiques ou scientifiques ?",
      options: [
        "Demander à l'IA de promettre de ne pas mentir",
        "Vérifier manuellement chaque source, URL ou DOI",
        "Utiliser uniquement GPT-3"
      ],
      correctAnswer: 1,
      explanation: "La vérification manuelle est la seule parade fiable contre les hallucinations bibliographiques."
    }
  ],
  productivity: [
    {
      id: 1,
      question: "Quelle est l'approche 'Email Gilet Pare-balles' ?",
      options: [
        "Ne jamais répondre aux emails",
        "Donner le fond (le refus) et laisser l'IA gérer la forme (l'empathie)",
        "Écrire en majuscules pour faire peur"
      ],
      correctAnswer: 1,
      explanation: "Cela permet de gagner du temps émotionnel : vous décidez du message dur, l'IA met les formes sociales."
    },
    {
      id: 2,
      question: "Pour synthétiser un rapport, que vaut-il mieux demander ?",
      options: [
        "Fais-moi un résumé",
        "Extrais les 3 chiffres clés et propose 2 actions correctives",
        "Réécris le texte"
      ],
      correctAnswer: 1,
      explanation: "Une demande spécifique orientée vers l'action donne des résultats bien plus exploitables qu'un simple résumé générique."
    },
    {
      id: 3,
      question: "En brainstorming (Idéation), l'IA est meilleure pour :",
      options: [
        "La qualité immédiate d'une seule idée",
        "La quantité et la divergence (donner 50 idées)",
        "Juger ce qui est drôle"
      ],
      correctAnswer: 1,
      explanation: "La force de l'IA est le volume. Demandez beaucoup d'idées pour ensuite faire le tri vous-même."
    },
    {
      id: 4,
      question: "Comment utiliser l'IA pour préparer une négociation ?",
      options: [
        "Lui demander de prier pour nous",
        "Lui demander d'agir comme l'opposant sceptique (Avocat du Diable)",
        "Lui faire écrire notre lettre de démission"
      ],
      correctAnswer: 1,
      explanation: "Simuler l'opposition permet d'identifier les failles de votre argumentation avant le jour J."
    },
    {
      id: 5,
      question: "Pour transformer des notes en vrac en plan d'action, quel format demander ?",
      options: [
        "Un poème",
        "Un tableau avec colonnes : Qui, Quoi, Quand",
        "Un long paragraphe"
      ],
      correctAnswer: 1,
      explanation: "Le format tableau force la structuration et la clarté des responsabilités."
    }
  ],
  routine: [
    {
      id: 1,
      question: "Qu'est-ce que la règle des 5 minutes ?",
      options: [
        "On fait une pause café toutes les 5 minutes",
        "Si une tâche numérique prend > 5 min, on demande si l'IA peut aider",
        "On ne travaille que 5 minutes par jour"
      ],
      correctAnswer: 1,
      explanation: "C'est le déclencheur réflexe pour sortir du mode 'pilote automatique' et déléguer la structure à l'IA."
    },
    {
      id: 2,
      question: "Pourquoi 80% des gens abandonnent l'usage de l'IA après une formation ?",
      options: [
        "C'est trop cher",
        "Le retour aux vieilles habitudes dès qu'on est sous pression",
        "L'IA ne marche plus"
      ],
      correctAnswer: 1,
      explanation: "Le 'Piège des 48h' : sans ancrage immédiat d'une habitude, le cerveau reprend le chemin de moindre résistance (faire soi-même)."
    },
    {
      id: 3,
      question: "Quelle est la première étape facile pour ancrer l'habitude ?",
      options: [
        "Apprendre à coder en Python",
        "Mettre l'IA en favoris dans le navigateur",
        "Acheter un nouvel ordinateur"
      ],
      correctAnswer: 1,
      explanation: "Réduire la friction est clé. Si l'IA est à un clic, vous l'utiliserez. Si elle est à trois clics, vous l'oublierez."
    },
    {
      id: 4,
      question: "À quoi sert le 'Morning Prompt' ?",
      options: [
        "À dire bonjour à l'IA",
        "À prioriser sa To-Do List brute selon la loi de Pareto (80/20)",
        "À générer de la musique pour le réveil"
      ],
      correctAnswer: 1,
      explanation: "C'est un excellent rituel pour commencer la journée avec clarté en déléguant l'organisation des tâches."
    },
    {
      id: 5,
      question: "La nouvelle méthode de travail avec l'IA consiste à :",
      options: [
        "Tout faire faire par l'IA et dormir",
        "Prompter (cadrer) + Relire/Vérifier, au lieu de rédiger de zéro",
        "Travailler deux fois plus"
      ],
      correctAnswer: 1,
      explanation: "On passe du rôle de 'Rédacteur' (faire) au rôle de 'Rédacteur en Chef' (commander et valider)."
    }
  ],
  copypaste: [
    {
      id: 1,
      question: "Dans les prompts fournis, que signifient les éléments entre crochets comme [Lieu] ?",
      options: [
        "Ce sont des erreurs de code",
        "Ce sont des variables que vous devez remplacer par vos vraies infos",
        "Ce sont des options facultatives"
      ],
      correctAnswer: 1,
      explanation: "Les crochets indiquent les 'trous' à remplir pour personnaliser le modèle à votre situation spécifique."
    },
    {
      id: 2,
      question: "Pourquoi est-il utile d'utiliser le cadre RTF pour une offre d'emploi (Cas 1) ?",
      options: [
        "Pour que l'IA agisse comme un expert (Rôle) et structure la réponse (Format)",
        "Pour que l'offre soit plus courte",
        "Pour traduire l'offre en anglais"
      ],
      correctAnswer: 0,
      explanation: "RTF permet de donner une posture professionnelle (Recruteur expert) et d'exiger une structure claire (Accroche, Missions, Profil)."
    },
    {
      id: 3,
      question: "Dans le Cas 4 (Marketing), pourquoi utiliser le cadre BAB ?",
      options: [
        "Pour faire des rimes",
        "Pour partir de la situation actuelle (Before) et vendre l'objectif futur (After)",
        "Pour écrire en majuscules"
      ],
      correctAnswer: 1,
      explanation: "BAB est idéal pour la stratégie : on définit d'où on part (problème de visibilité) et où on veut aller (référence), l'IA crée le pont."
    },
    {
      id: 4,
      question: "Quel est l'intérêt de la Matrice des Risques (Cas 8) générée par l'IA ?",
      options: [
        "Faire peur à l'équipe",
        "Anticiper les blocages (Impact/Probabilité) avant qu'ils n'arrivent",
        "Calculer le budget"
      ],
      correctAnswer: 1,
      explanation: "L'IA aide à identifier les angles morts et à classer les risques par priorité pour mieux s'y préparer."
    },
    {
      id: 5,
      question: "Quel est l'avantage principal d'avoir cette bibliothèque de prompts 'prêts à l'emploi' ?",
      options: [
        "Gagner du temps et garantir une structure professionnelle sans réfléchir à la formulation",
        "C'est joli à regarder",
        "Cela remplace le besoin de travailler"
      ],
      correctAnswer: 0,
      explanation: "Ces modèles réduisent la friction de démarrage et assurent que les éléments clés (contexte, rôle, format) sont toujours présents."
    }
  ],
  multimodal: [
    {
      id: 1,
      question: "Qu'est-ce que la 'Multimodalité' en IA ?",
      options: [
        "Une IA qui parle plusieurs langues",
        "La capacité d'une IA à traiter simultanément texte, image, audio et vidéo",
        "Un mode de transport urbain"
      ],
      correctAnswer: 1,
      explanation: "C'est la fin du 'tout texte'. L'IA voit, écoute et parle, traitant tous les types de médias en même temps."
    },
    {
      id: 2,
      question: "Quel est l'avantage principal de la génération d'images par IA pour un pro ?",
      options: [
        "C'est moins cher que de prendre des photos",
        "Créer le visuel exact de sa pensée sans chercher des heures dans des banques d'images génériques",
        "Faire des dessins animés"
      ],
      correctAnswer: 1,
      explanation: "Fini les compromis. Vous pouvez générer une image sur-mesure ('Bouclier numérique bleu sur un immeuble') instantanément."
    },
    {
      id: 3,
      question: "Comment la multimodalité transforme-t-elle les réunions ?",
      options: [
        "Elle filme la réunion pour surveiller les employés",
        "Elle transforme l'audio/vidéo en compte-rendu textuel et analyse même les schémas au tableau",
        "Elle remplace les participants"
      ],
      correctAnswer: 1,
      explanation: "L'IA 'regarde' et 'écoute' la réunion pour en extraire l'essence, y compris les diagrammes dessinés au tableau."
    },
    {
      id: 4,
      question: "Dans la vie quotidienne, comment utiliser l'IA multimodale sur un document complexe ?",
      options: [
        "Le scanner et l'envoyer par fax",
        "Prendre une photo et demander à l'IA d'expliquer ou d'optimiser une ligne précise",
        "Le lire à voix haute"
      ],
      correctAnswer: 1,
      explanation: "Une simple photo d'une facture ou d'un schéma technique permet à l'IA d'analyser le contenu visuel et textuel."
    },
    {
      id: 5,
      question: "Pour un compte-rendu 'zéro effort', que faut-il faire ?",
      options: [
        "Importer l'audio dans l'IA et lui demander d'agir comme un secrétaire expert",
        "Écrire le compte-rendu soi-même",
        "Ne pas faire de réunion"
      ],
      correctAnswer: 0,
      explanation: "L'import direct du fichier audio permet à l'IA de faire tout le travail de transcription et de synthèse."
    }
  ],
  interface_pro: [
    {
      id: 1,
      question: "Pourquoi renommer les conversations dans l'historique ?",
      options: [
        "C'est obligatoire",
        "Pour retrouver l'information rapidement et organiser sa base de connaissances",
        "Pour faire plaisir à l'IA"
      ],
      correctAnswer: 1,
      explanation: "Les titres automatiques sont vagues. Renommer permet de créer une bibliothèque personnelle organisée."
    },
    {
      id: 2,
      question: "Quelle est la meilleure méthode pour corriger une erreur dans un prompt (ChatGPT) ?",
      options: [
        "Écrire 'Non, tu t'es trompé' dans un nouveau message",
        "Utiliser le bouton 'Crayon' (Edit) pour modifier le message initial (Branching)",
        "Supprimer son compte"
      ],
      correctAnswer: 1,
      explanation: "Le Branching (Crayon) est plus propre : il efface l'erreur de la mémoire de l'IA et évite de perdre des tokens à se justifier."
    },
    {
      id: 3,
      question: "Sur Gemini, que permet la fonction 'Drafts' (Ébauches) ?",
      options: [
        "De sauvegarder le texte en brouillon",
        "De voir plusieurs variantes de réponse simultanément sans avoir à reprompter",
        "De dessiner"
      ],
      correctAnswer: 1,
      explanation: "Gemini génère souvent 3 ébauches en parallèle. C'est idéal pour choisir le meilleur style (court, long, créatif) en un clic."
    },
    {
      id: 4,
      question: "Que signifie le surlignage orange après avoir cliqué sur le 'Bouton G' (Google) dans Gemini ?",
      options: [
        "L'information est confirmée",
        "C'est une information importante",
        "Google n'a pas trouvé de source confirmant ce point (Risque d'hallucination)"
      ],
      correctAnswer: 2,
      explanation: "Le surlignage orange indique que le moteur de recherche n'a pas pu corroborer l'affirmation, ce qui invite à la prudence."
    },
    {
      id: 5,
      question: "Quel est l'avantage des curseurs de réglage (Sliders) dans Gemini ?",
      options: [
        "Changer la couleur du texte",
        "Réécrire instantanément la réponse (plus court, plus simple, plus pro) sans écrire de nouveau prompt",
        "Augmenter le volume sonore"
      ],
      correctAnswer: 1,
      explanation: "Ces options de post-traitement permettent d'adapter le format du texte à la cible (email, rapport, SMS) très rapidement."
    }
  ],
  memory_perso: [
    {
      id: 1,
      question: "À quoi servent les 'Custom Instructions' (ChatGPT) ?",
      options: [
        "À changer la couleur de l'interface",
        "À donner un briefing permanent à l'IA pour ne plus répéter qui on est",
        "À traduire les textes en anglais"
      ],
      correctAnswer: 1,
      explanation: "C'est le socle de la personnalisation sur ChatGPT. Elles définissent votre rôle et le style de réponse attendu pour toutes les futures conversations."
    },
    {
      id: 2,
      question: "Quelle est la différence entre les Custom Instructions et la Mémoire Active ?",
      options: [
        "Il n'y en a pas",
        "Les Instructions sont statiques (Règles du jeu), la Mémoire est dynamique (Faits acquis au fil de l'eau)",
        "La Mémoire est payante"
      ],
      correctAnswer: 1,
      explanation: "Les Instructions sont votre 'Constitution' fixe. La Mémoire est votre 'Journal intime' qui évolue avec vos échanges."
    },
    {
      id: 3,
      question: "Si Gemini vous propose un restaurant à Paris alors que vous êtes à Lyon, que faut-il vérifier ?",
      options: [
        "La météo",
        "Le paramètre de Localisation en bas de page (Ancrage local)",
        "Si l'ordinateur est branché"
      ],
      correctAnswer: 1,
      explanation: "Gemini utilise la localisation de votre compte ou de votre IP. Si elle est fausse (VPN, etc.), ses réponses locales seront biaisées."
    },
    {
      id: 4,
      question: "Où peut-on gérer la confidentialité des conversations sur Gemini ?",
      options: [
        "Dans le menu 'Fichier'",
        "Dans le Hub 'Activité Gemini sur les applications' (Historique)",
        "On ne peut pas"
      ],
      correctAnswer: 1,
      explanation: "Le hub 'Activité' permet de désactiver l'enregistrement ou de supprimer des échanges spécifiques pour protéger la confidentialité."
    },
    {
      id: 5,
      question: "Que ne faut-il JAMAIS demander à l'IA de mémoriser (ChatGPT ou Gemini) ?",
      options: [
        "Ma couleur préférée",
        "Des mots de passe, données bancaires ou de santé",
        "Mon style d'écriture"
      ],
      correctAnswer: 1,
      explanation: "Par sécurité, aucune donnée confidentielle ou critique ne doit être confiée à la mémoire d'une IA en ligne."
    }
  ],
  gems_gpts: [
    {
      id: 1,
      question: "Quelle est la meilleure analogie pour distinguer un GPT (ChatGPT) d'un Gem (Gemini) ?",
      options: [
        "Un Chat vs Un Chien",
        "Une Boîte à Outils (GPT) vs Un Expert Humain (Gem)",
        "Il n'y a aucune différence"
      ],
      correctAnswer: 1,
      explanation: "Les GPTs sont souvent perçus comme des applications ou des boîtes à outils spécialisées, tandis que les Gems sont conçus comme des personnalités ou des collègues experts."
    },
    {
      id: 2,
      question: "Dans le GPT Builder (ChatGPT), à quoi sert la section 'Knowledge' ?",
      options: [
        "À payer l'abonnement",
        "À uploader vos propres fichiers (PDF, Excel) pour que l'IA s'en serve comme référence",
        "À changer la couleur du chat"
      ],
      correctAnswer: 1,
      explanation: "C'est la fonctionnalité de RAG (Retrieval-Augmented Generation). L'IA lit vos fichiers avant de répondre pour éviter les hallucinations."
    },
    {
      id: 3,
      question: "Quel est l'avantage principal d'utiliser le GPT 'Consensus' disponible sur le Store ?",
      options: [
        "Il génère des images de chats",
        "Il répond uniquement en se basant sur des études scientifiques validées",
        "Il est plus drôle"
      ],
      correctAnswer: 1,
      explanation: "Consensus interroge une base de 200 millions d'articles scientifiques pour fournir des réponses sourcées, contrairement au chat standard."
    },
    {
      id: 4,
      question: "Qu'est-ce qu'une 'Directive Systémique' dans la création d'un Gem (Gemini) ?",
      options: [
        "Un bug système",
        "L'instruction permanente qui définit le rôle, le ton et les règles de comportement du Gem",
        "Le nom du fichier"
      ],
      correctAnswer: 1,
      explanation: "C'est la 'Fiche de Poste' de votre IA. Elle ne lui dit pas quoi faire à l'instant T, mais qui elle doit être tout le temps."
    },
    {
      id: 5,
      question: "Si vous recevez 50 mails par jour sur des procédures internes, quelle est la meilleure solution ?",
      options: [
        "Embaucher un assistant",
        "Créer un GPT/Gem 'Assistant RH' nourri avec les PDF de procédures pour répondre instantanément",
        "Ne plus répondre aux mails"
      ],
      correctAnswer: 1,
      explanation: "Automatiser les réponses basées sur des documents existants est le cas d'usage parfait pour un assistant personnalisé (GPT ou Gem)."
    }
  ],
  ecosystem_files: [
    {
      id: 1,
      question: "Sur ChatGPT, que fait réellement l'IA quand elle analyse un fichier Excel (Advanced Data Analysis) ?",
      options: [
        "Elle le lit comme un texte simple",
        "Elle exécute du code Python dans un environnement sécurisé pour traiter les données",
        "Elle l'envoie à un humain"
      ],
      correctAnswer: 1,
      explanation: "ChatGPT utilise une 'Sandbox' Python pour exécuter du code réel, ce qui lui permet de faire des calculs complexes et des graphiques sans halluciner."
    },
    {
      id: 2,
      question: "Quelle est la méthode pour invoquer les extensions (Drive, Gmail) dans Gemini ?",
      options: [
        "Il faut payer un supplément",
        "Utiliser le symbole @ (ex: @Google Drive)",
        "C'est automatique, on ne peut pas choisir"
      ],
      correctAnswer: 1,
      explanation: "Le symbole @ permet d'appeler explicitement une extension spécifique pour connecter l'IA à vos données personnelles."
    },
    {
      id: 3,
      question: "Les données de votre Google Workspace (Drive, Docs) utilisées par Gemini sont-elles utilisées pour l'entraînement public ?",
      options: [
        "Oui, tout est public",
        "Non, l'environnement Workspace est cloisonné et ne sert pas à l'entraînement du modèle public",
        "Seulement les PDF"
      ],
      correctAnswer: 1,
      explanation: "Google garantit que les données utilisées via les extensions Workspace ne servent pas à entraîner les modèles génératifs publics."
    },
    {
      id: 4,
      question: "Quel est le meilleur usage de la 'Vision' (Photo) pour un compte-rendu de réunion ?",
      options: [
        "Prendre une photo des participants",
        "Prendre une photo du tableau blanc rempli de notes et demander une transcription structurée",
        "Filmer la réunion"
      ],
      correctAnswer: 1,
      explanation: "L'IA peut déchiffrer des notes manuscrites et des schémas complexes sur une photo pour en faire un résumé numérique propre."
    },
    {
      id: 5,
      question: "Sur Gemini, quel est l'avantage de la fonction 'Exporter vers Docs' ?",
      options: [
        "Ça imprime le document",
        "Cela crée un Google Doc formaté (Titres, Gras, Tableaux) directement dans votre Drive",
        "Cela envoie le texte par la poste"
      ],
      correctAnswer: 1,
      explanation: "Cette fonction permet de passer de la conversation au document de travail final en conservant toute la mise en forme, prêt à être partagé."
    }
  ],
  features: [
    {
      id: 1,
      question: "Qu'est-ce que le 'Mode Vocal Avancé' de ChatGPT ?",
      options: [
        "Il permet de dicter des emails seulement",
        "Une conversation fluide et naturelle en temps réel, capable de capter les émotions",
        "Un système pour écouter de la musique"
      ],
      correctAnswer: 1,
      explanation: "Le mode vocal avancé permet une interaction quasi-humaine, avec interruptions possibles et détection d'intonations."
    },
    {
      id: 2,
      question: "ChatGPT peut-il analyser des fichiers Excel ou CSV ?",
      options: [
        "Non, il ne lit que du texte",
        "Oui, via la fonctionnalité d'Analyse de Données (Data Analysis) qui permet aussi de créer des graphiques",
        "Seulement s'ils sont très petits"
      ],
      correctAnswer: 1,
      explanation: "L'analyse de données avancée permet d'uploader des fichiers, de nettoyer les données, de faire des calculs et de générer des visualisations."
    },
    {
      id: 3,
      question: "Quel est le nom du générateur d'images intégré à ChatGPT ?",
      options: [
        "Midjourney",
        "DALL-E 3",
        "Picasso"
      ],
      correctAnswer: 1,
      explanation: "DALL-E 3 est le modèle d'OpenAI intégré directement dans le chat pour créer des visuels à partir de vos descriptions textuelles."
    },
    {
      id: 4,
      question: "Qu'est-ce que la 'Vision' pour une IA comme ChatGPT ou Gemini ?",
      options: [
        "La capacité de prédire l'avenir",
        "La capacité de 'voir' et d'analyser le contenu d'une image ou d'une photo que vous envoyez",
        "Un filtre de couleur pour l'écran"
      ],
      correctAnswer: 1,
      explanation: "La vision par ordinateur permet à l'IA de décrire, analyser et comprendre les éléments présents dans une image (schémas, objets, textes manuscrits)."
    },
    {
      id: 5,
      question: "Quelle est la particularité principale de Gemini par rapport à l'écosystème Google ?",
      options: [
        "Il n'est pas compatible avec Google",
        "Il est nativement intégré et peut interagir avec Drive, Docs, Gmail et Maps",
        "Il ne fonctionne que sur iPhone"
      ],
      correctAnswer: 1,
      explanation: "Gemini se distingue par son intégration profonde avec les outils Google Workspace, permettant de travailler directement sur vos documents personnels."
    }
  ]
};
