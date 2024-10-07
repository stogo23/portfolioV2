import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

export const HERO_CONTENT = 
"Je suis un jeune développeur junior passionné par le monde de la technologie et du développement. Je suis actuellement à l'école Epitech. J'ai acquis des compétences solides et variées en explorant plusieurs technologies au cours de ma formation. Cette expérience m'a permis de développer une compréhension approfondie des outils et des langages de programmation actuels. Déterminé à apprendre et à évoluer constamment, je me distingue par ma patience, mon écoute attentive et mon excellent esprit d'équipe. Ces qualités me permettent de collaborer efficacement avec mes collègues et de contribuer positivement à tout projet sur lequel je travaille. Je suis prêt à relever de nouveaux défis et à continuer à développer mes compétences pour devenir un développeur accompli.";


export const ABOUT_TEXT = "Actuellement, je suis à la recherche d'une alternance afin de pouvoir intégrer la deuxième année de mon cursus et ainsi valider mon titre RNCP de niveau 5. Cette opportunité me permettrait de continuer à développer mes compétences tout en acquérant une expérience professionnelle concrète et enrichissante, indispensable à l'obtention de ce diplôme reconnu. "



export const EXPERIENCE = [
    {
        annee : "2023 ",
        role: "Stagiaire",
        compagnie:"Inetum",
        description: "Accompagnement des développeurs web dans leurs tâches quotidiennes, et réalisation d'un mini site en HTML, CSS et Bootstrap, présentant l'entreprise et ses collaborateurs.",
        techno:["HTML", "CSS", "Bootstrap"]
    },
    {
        annee : "2022 / 2023 ",
        role: "Animateur",
        compagnie:"Mairie Marseille",
        description: "Encadrer des groupes d'enfant (entre 3 et 12 ans) Réaliser/ encadrer des animations, activités ludiques et sportives. Superviser les sorties.",
    },
    {
      annee : "2022 / 2023 ",
      role: "Agent technique",
      compagnie:"Chronopost",
      description: "Réceptionner les colis, assurer le déchargement. Réaliser les scans de sécurtité, trier les colis.",
  },
]


export const PROJECTS = [
    {
      titre: "My Cinema",
      image: project1,
      description: "Création d'une interface de recherche de films via une API externe, avec les fonctionnalités suivantes : possibilité d'ajouter, modifier ou supprimer des films d'une liste.",
      techno:["SYMFONY", "REACT", "TAILWIND"]
    },
    {
      titre: "My Previously ON",
      image: project2,
      description: "Ce projet présente quelques similitudes avec le précédent. Il inclut un point d'accès à notre site via une connexion à une API externe. Il est nécessaire, au préalable, de créer un compte sur Betaseries, puis d'utiliser ses identifiants pour se connecter. Le site offre également une liste de films, une barre de recherche et un système de pagination.",
      techno:["REACT", "TAILWIND", ]
    },
    {
      titre: "e-commerce",
      image: project3,
      description: "Création d'un site e-commerce pour une grande enseigne, spécialisé dans la vente de cuisines sur mesure , et de petit électroménager. Le site propose des fonctionnalités de personnalisation de cuisine, un parcours d'achat optimisé.",
      techno:["SYMFONY", "REACT", "TAILWIND"]
    },
 ];


 export const CONTACTS = {

    email :"abdounouroudine2304@gmail.com",
    telephone : " 07 69 10 26 19",
 };