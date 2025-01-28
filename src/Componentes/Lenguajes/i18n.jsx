import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      //titulo//

      t1: "Hola Soy Alejandro",
      t2: "Desarrollador Frontend",

      //About Me//

      aboutMe1: " ¡Hola! Soy Alejandro 👋",

      aboutMe2:
        "🛠️ Desarrollador frontend con experiencia en el diseño y desarrollo de páginas y aplicaciones web, creando interfaces intuitivas, funcionales y modernas. Trabajo con tecnologias como:",

      aboutMe3:
        "🌟 Mi objetivo es mejorar la experiencia del usuario mediante soluciones creativas y efectivas. Me comprometo con el aprendizaje continuo, explorando nuevas herramientas y tecnologías para crecer profesionalmente y aportar mayor valor a mis proyectos.",

      aboutMe4:
        "💻 Estoy entusiasmado por la oportunidad de aplicar mis conocimientos y habilidades en proyectos desafiantes, contribuyendo al éxito de los equipos de trabajo mientras sigo aprendiendo y creciendo profesionalmente.",

      aboutMe5:
        " 👉 Si buscas apoyo para tu proyecto o deseas crear una página web, no dudes en contactarme",

      aboutMe6: "¡Hablemos!",

      //Proyects//

      proyects1: "Portafolio",

      //Educacion//

      edu1: "Autodidacta",
      edu2: "Mis conocimientos como programador los he adquirido de manera autodidacta, a través de la práctica constante, el estudio independiente y la realización de proyectos personales, lo que me ha permitido dominar diversas tecnologías y herramientas.",

      //Cards//

      text1: "< Sobre mi />",
      text2: "< Formacion />",
      text3: "< Herramientas />",
      text4: "< Tecnologias />",
      text5: "< Proyectos />",

      //Navegador//

      navHome: "Inicio",
      navProyects: "Proyectos",
      navTheme: "Tema",
      navLenguage: "Idioma",
      navDowloadCv: "Descarga CV",
    },
  },
  en: {
    translation: {
      //titulo//

      t1: "Hello, I'm Alejandro",
      t2: "Frontend Developer",

      //About Me//

      aboutMe1: " ¡Hello! I’m Alejandro 👋",

      aboutMe2:
        "🛠️ Frontend developer with experience in designing and developing websites and web applications, creating intuitive, functional, and modern interfaces. I work with technologies such as:",

      aboutMe3:
        "🌟 My goal is to improve the user experience through creative and effective solutions for every challenge. I’m committed to continuous learning, exploring new tools and technologies to grow professionally and add more value to my projects.",

      aboutMe4:
        "💻 I am excited about the opportunity to apply my knowledge and skills to challenging projects, contributing to the success of teams while continuing to learn and grow professionally.",

      aboutMe5:
        "👉 ¡If you're looking for support with your project or want to create a website, feel free to contact me.",

      aboutMe6: "Let’s talk!",

      //Proyects//

      proyects1: "Portfolio",

      //Educacion//

      edu1: "Self-taught.",
      edu2: "My programming knowledge has been acquired in a self-taught manner through constant practice, independent study, and personal project development, which has allowed me to master various technologies and tools.",

      //Cards//

      text1: "< Abou Me />",
      text2: "< Training />",
      text3: "< Tools />",
      text4: "< Technologies />",
      text5: "< Proyects />",

      //Navegador//

      navHome: "Home",
      navProyects: "Proyects",
      navTheme: "Theme",
      navLenguage: "Language",
      navDowloadCv: "Download CV",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
