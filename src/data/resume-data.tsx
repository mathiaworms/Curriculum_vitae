import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "GOSSELIN Mathias",
  initials: "GM",
  location: "Belfort, France, 90000",
  locationLink: "https://www.google.com/maps/place/Belfort",
  about: `Développeur Full Stack passionné, spécialisé dans le développement backend en C# et la conception d'architectures logicielles complexes. `,
  about1: `Permis de conduire - Véhiculé `,
  about2: `Permis de travail Suisse - Permis G `,
  about3: `Né le 16 juillet 1997`,
  about4: `Concubinage`,
  summary: (
    <>
      Développeur Full Stack avec une expertise en C# et Vue.js, 
      principalement sur des projets liés aux serveurs de jeu et aux systèmes distribués. 
      Expérience approfondie en développement backend, DevOps et gestion de projet technique à distance. 
      Ancien chef de cuisine reconverti, alliant rigueur, adaptabilité et esprit d'équipe au service du développement logiciel.

      
    </>
  ),
  avatarUrl: "https://media.discordapp.net/attachments/1307810156603772999/1335903062287450143/matete-cv.png?ex=67a1dc2d&is=67a08aad&hm=b337d8e38d3db1447d17e33afbfab1793b6608dde5e6f09b767fb1dec46f5e2a&=&format=webp&quality=lossless",
  personalWebsiteUrl: "https://github.com/mathiaworms",
  contact: {
    email: "matws-communication@outlook.fr",
    tel: "+3319368791",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mathiaworms",
        icon: GitHubIcon,
      }
    ],
  },
  education: [
    {
      school: "O'clock",
      degree: "Bac +3 / License : Administrateur système DevOps",
      start: "2024",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Averdrian Project - Remote",
      link: "https://github.com/LeagueSandbox/GameServer",
      badges: ["C#", "Vue3", "Java", "DevOps", "Reverse Engineering", "DevOps", "Infrastructure", "Docker"],
      title: "Lead Dev",
      logo: null,
      start: "2021",
      end: null,
      description: (
        <>
        Responsable de l'architecture technique et du développement d'un serveur de jeu en C#, inspiré d'un projet open-source. 
        <br />
        <br />
        Projet privé. Pour plus d'informations, veuillez consulter mon portfolio ou me contacter par e-mail.
        <ul className="list-inside list-disc">
          <li>
            Refonte et amélioration du <strong>serveur de jeu</strong> en C#, avec une optimisation des performances et une gestion efficace des connexions réseau.
          </li>
          <li>
            Mise en place du GameServer, Server API et infrastructure, en assurant leur interconnexion et leur stabilité.
          </li>
          <li>
            Reverse engineering des mécaniques de jeu pour une reproduction fidèle des fonctionnalités d'origine.
          </li>
          <li>
            Développement et maintenance de <strong>plusieurs outils internes</strong> facilitant le debug et l'ajout de contenu.
          </li>
          <li>
            Gestion d'une <strong>équipe internationale</strong> de développeurs travaillant en remote, en anglais.
          </li>
          <li>
            Implémentation d'une infrastructure <strong>DevOps</strong> (CI/CD, Docker, monitoring).
          </li>
        </ul>
      </>
      ),
    },
    {
      company: "Ange Bar",
      link: "https://www.facebook.com/AngeBarAlle/",
      badges: [
        "Alle",
        "Jura - Suisse",
      ],
      title: "Chef de Cuisine",
      logo: null,
      start: "2023",
      end: "2024",
      description: (
        <>
        Responsable de la gestion complète de la cuisine dans une brasserie, travaillant en autonomie totale dans un environnement à forte affluence.
        <ul className="list-inside list-disc">
          <li>
            Gestion de la cuisine de A à Z, en étant le seul chef à bord, ce qui incluait la préparation des plats, la gestion des stocks, et la supervision de la qualité en cuisine.
          </li>
          <li>
            Adaptation réussie à un nouveau pays (Suisse), où j'ai dû m'adapter à un environnement de travail différent, aux exigences locales et aux habitudes culinaires spécifiques à la région.
          </li>
          <li>
            Création et ajustement des menus pour répondre à la demande des clients, tout en optimisant les coûts et en garantissant une qualité constante malgré des ressources limitées.
          </li>
          <li>
            Mise en place de processus et d'une gestion du temps efficaces afin de garantir un service rapide et une cuisine de qualité dans un environnement dynamique.
          </li>
          <li>
            Prise en charge complète de la gestion des stocks, avec un souci constant de réduction du gaspillage alimentaire tout en maximisant l'utilisation des ressources disponibles.
          </li>
          <li>
            Développement d'une autonomie complète dans la gestion de la cuisine, avec la responsabilité exclusive de maintenir une cohésion entre les différentes étapes de la production et du service.
          </li>
        </ul>
      </>
      ),
    },
    {
      company: "Hopital Aunay-Bayeux",
      link: "https://www.ch-ab.fr/",
      badges: ["Bayeux",  "Normandie - France"],
      title: "Assistant Administratif/ Assistant Comptable",
      logo: null,
      start: "2021",
      end: "2023",
      description: (
        <>
      En charge de la gestion administrative et comptable pour un hôpital en Normandie, avec la responsabilité d'un rôle combiné où j'ai remplacé deux personnes sur un poste unique, tout en assurant la gestion des factures des officines et le suivi de 120 infirmières en hospitalisation à domicile.
      <ul className="list-inside list-disc">
        <li>
          Prise en charge de la gestion des factures et des paiements pour les officines, en assurant une gestion rigoureuse et conforme des processus administratifs et comptables.
        </li>
        <li>
          Responsabilité de la gestion des relations avec 120 infirmières en hospitalisation à domicile, avec suivi des prestations et des paiements, en optimisant les flux de communication entre les équipes médicales et administratives.
        </li>
        <li>
          Gestion de la comptabilité interne, avec une attention particulière à la précision des documents financiers et la gestion des budgets alloués aux soins à domicile.
        </li>
        <li>
          Collaboration étroite avec les départements médicaux et administratifs pour garantir une organisation fluide et une gestion efficace des ressources, tout en assurant la conformité légale.
        </li>
        <li>
          Adaptation à des processus administratifs complexes en utilisant des outils numériques pour améliorer la précision des données et optimiser le temps consacré à la gestion administrative.
        </li>
      </ul>
    </>
      ),
    },
    {
      company: "La Table de Courseulles",
      link: "https://www.tripadvisor.fr/Restaurant_Review-g670837-d10162249-Reviews-La_Table_de_Courseulles-Courseulles_sur_Mer_Calvados_Basse_Normandie_Normandy.html",
      badges: ["Courseulles sur Mer", "Normandie - France"],
      title: "Chef de Cuisine",
      logo: null,
      start: "2018",
      end: "2021",
      description: (
        <>
        Responsable de l'ensemble de l'opération culinaire dans un restaurant à haute fréquentation, en dirigeant une équipe de cuisiniers et en gérant des horaires intensifs tout en garantissant la qualité et la fluidité du service. 
        <ul className="list-inside list-disc">
          <li>
            Gestion et supervision d'une équipe de 10+ personnes dans une cuisine à forte pression, en organisant les plannings et en assurant la formation continue pour maintenir un haut niveau de performance.
          </li>
          <li>
            Adaptation rapide à des horaires de travail exigeants (soirées, week-ends, jours fériés) avec un engagement constant pour maintenir la productivité tout en préservant la cohésion d'équipe.
          </li>
          <li>
            Gestion du stress au quotidien en coordonnant le service pendant les périodes de forte affluence, en prenant des décisions rapides tout en préservant la qualité des plats servis.
          </li>
          <li>
            Mise en place de processus d'amélioration continue pour la gestion des stocks, la réduction des coûts et l'optimisation des méthodes de travail en cuisine, avec une évolution constante dans les pratiques culinaires et la gestion d'équipe.
          </li>
          <li>
            Développement d'une culture d'équipe axée sur la rigueur, la collaboration et l'excellence, avec un soutien constant aux membres pour améliorer leurs compétences et leur épanouissement professionnel.
          </li>
          <li>
            Introduction de nouvelles techniques et recettes, favorisant l'innovation en cuisine et l'évolution de l'offre du restaurant, en restant à l'écoute des tendances gastronomiques.
          </li>
        </ul>
      </>
      ),
    }
  ],
  skills: [
    "C#",
    "Vue 3",
    "Node.js",
    "Java",
    "System Architecture",
    "DevOps",
    "Docker",
    "CI/CD",
    "WebSockets",
    "Reverse Engineering",
    "Team Leadership",
    "Remote Work",
    "API Design",
    "Performance Optimization",
    "Game Server Architecture",
    "Infrastructure Management"
  ]
} as const;
