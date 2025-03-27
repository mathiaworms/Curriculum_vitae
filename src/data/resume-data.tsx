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
  about: `Développeur/DevOps passionné, spécialisé dans le développement backend en C# et la conception d'architectures complexes. `,
  about1: `Permis de conduire - Véhiculé `,
  about2: `Permis de travail Suisse - Permis G `,
  about3: `Né le 16 juillet 1997`,
  about4: `Concubinage`,
  summary: (
    <>
Développeur Full Stack spécialisé en C#/.NET, j’ai conçu et déployé une infrastructure logicielle complète pour un serveur de jeu, incluant une orchestration réseau, une API Server et un système de gestion des connexions performant. J’ai également mis en place une infrastructure DevOps avec CI/CD, Docker et monitoring, assurant stabilité et scalabilité.
Passionné par l’automatisation, j’ai aussi développé des mini-projets Arduino (ex. ouverture de portail à distance, contrôle d’équipements), combinant hardware et software.
Je cherche un poste où je peux allier développement backend, gestion d’infrastructure et optimisation des performances.
    </>
  ),
  avatarUrl: "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-1/464978851_8892199634157628_1761927261968470099_n.jpg?stp=c0.171.480.480a_dst-jpg_s100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lGFAQJYw11UQ7kNvgGeuhde&_nc_oc=AdkhdAlZOsM3zV5HIsqH5uGO6nd9AYp3Ng-ulVZNeQOVTCxbevOSXKA0hqMg10H7l0k&_nc_zt=24&_nc_ht=scontent-fra3-2.xx&_nc_gid=7jOBoG9pOkscEVcFn86uFw&oh=00_AYHxWsC06UCPLCMuQDFSISWpabXdPUrOABb7Rp4yxngtiA&oe=67EB222C",
  personalWebsiteUrl: "https://mathiaworms.github.com/",
  contact: {
    email: "matws-communication@outlook.fr",
    tel: "(+33) 0619368791",
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
      degree: "Bac +4 / License : Administrateur système DevOps",
      start: "2024",
      end: "2025",
    },
    {
      school: "Institut Lemonnier",
      degree: "Bac ELEEC / Electrotechnique , Energie et equipement communiquant",
      start: "2012",
      end: "2015",
    }
  ],
  work: [
    {
      company: "Averdrian Project - Remote",
      link: "https://github.com/404",
      badges: ["C#", "Vue3", "Java", "Reverse Engineering", "DevOps", "Infrastructure", "Docker"],
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
           Conception et développement d’un serveur de jeu scalable en C#, avec optimisation des performances et gestion avancée des connexions réseau.
          </li>
          <li>
           Développement de processus DevOps : CI/CD, conteneurisation Docker, monitoring et orchestration.
          </li>
          <li>
          Création d’un système d’orchestration pour automatiser le déploiement de services (Docker, Kubernetes).
          </li>
          <li>
          Développement d’un launcher Electron/Vue 3 avec auto-update et système de gestion de versions.
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
      company: "2K Games / iGames",
      link: "https://heroesofnewerth.com/",
      badges: [
        "USA",
        "Remote",
        "C++",
        "Xml - Scripting ",
        "GitLab",
        " Infrastructure"
      ],
      title: "Développeur (Volontaire / Stage)",
      logo: null,
      start: "2024",
      end: null,
      description: (
        <>
        Participation en tant que volontaire sur certaines missions techniques, avec des interventions sur le gameplay et l'infrastructure du projet, afin d’aider à la renaissance de leurs principaux titres.
        <ul className="list-inside list-disc">
          <li>
          Correction de scripts de personnages et d’items pour améliorer l’équilibrage du jeu.
          </li>
          <li>
          Début de mise en place d’un serveur GitLab distant sur un bare-metal server pour la gestion du code source et des pipelines CI/CD.
          </li>
        </ul>
      </>
      ),
    },
    {
      company: "O'clock",
      link: "",
      badges: [
        "Remote", "France", "Kubernetes" , "Go" ,  "DevOps", "Infrastructure", "Docker"
      ],
      title: "Etudiant",
      logo: null,
      start: "2024",
      end: "2025",
      description: (
        <>
        Développement et gestion d’infrastructure
        <ul className="list-inside list-disc">
          <li>
          Création d’un système d’orchestration pour automatiser le déploiement de services (Docker, Kubernetes).
          </li>
          <li>
          Mise en place de monitoring avancé (Prometheus, Grafana, Loki).
          </li>
          <li>
          Sécurisation et optimisation des services backend (reverse proxy, load balancing).
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
          Responsabilité de la gestion des relations avec 120 infirmières en hospitalisation à domicile, avec suivi des prestations et des paiements, en optimisant les flux de communication entre les équipes médicales et administratives.
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
