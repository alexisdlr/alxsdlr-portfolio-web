export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCv: "Descargar CV",
      ariaOpenMenu: "Abrir menú de navegación",
      ariaCloseMenu: "Cerrar menú de navegación",
      ariaMainNav: "Navegación principal",
      switchToEnglish: "Cambiar a inglés",
      switchToSpanish: "Cambiar a español",
    },
    profile: {
      greeting: "¡Hola!, soy",
      role: "Ingeniero de Software",
      education:
        "Ingeniero en Desarrollo de Software - Universidad Tecnológica del Norte de Coahuila",
    },
    hero: {
      bio: "Soy **ingeniero de software** con **más de 3 años** construyendo apps web, integraciones y productos digitales con impacto real. Trabajo **full-stack** con **TypeScript**, **Next.js** y **Node.js**, desde interfaces modernas hasta la lógica de negocio y las integraciones que las sostienen. También conecto plataformas con APIs, webhooks y automatizaciones (incluyendo el ecosistema **Zoho**). Me importa la arquitectura, el rendimiento y la UX. Fuera del código: música, gym y seguir aprendiendo.",
    },
    about: {
      title: "Sobre mí",
      email: "Correo",
      bio: "Soy **desarrollador Full Stack** con interés en transformar ideas en aplicaciones web escalables. En el **frontend** trabajo con **React**, **Next.js** y **TypeScript**, centrándome en interfaces limpias y reutilizables. En el **backend** he desarrollado APIs REST con **Node.js**, **Express**, **PostgreSQL** y **MongoDB**, y manejo **Git**, **GitHub** y **Docker** para versionar, colaborar y desplegar proyectos. Me gusta escribir código mantenible, aprender tecnologías nuevas y aportar en equipos donde se valore la calidad técnica.",
      stats: {
        projects: "Proyectos realizados",
        experience: "Años de Experiencia",
      },
      education: {
        title: "Educación",
        subtitle: "Base académica + aprendizaje constante por cuenta propia",
        grade: "Calificación",
        skills: "Aptitudes",
        items: {
          utncEngineering: {
            school: "Universidad Tecnológica del Norte de Coahuila",
            degree: "Ingeniería en Desarrollo y Gestión de Software",
            period: "sep. 2023 – jul. 2025",
          },
          utncTsu: {
            school: "Universidad Tecnológica del Norte de Coahuila",
            degree: "Técnico Superior Universitario en Desarrollo de Software",
            period: "sep. 2021 – abr. 2024",
          },
          cetis239: {
            school:
              "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 239",
            degree: "Bachillerato, Soporte y mantenimiento de equipo de cómputo",
            period: "sep. 2018 – jul. 2021",
          },
        },
      },
      technologies: {
        title: "Tecnologías",
        subtitle: "Lo que domino hoy y sigo expandiendo mañana",
      },
    },
    actions: {
      cv: "Currículum",
      cvTooltip: "Descarga mi CV",
      linkedinTooltip: "Visita mi LinkedIn",
      githubTooltip: "Visita mi GitHub",
      emailTooltip: "Copia mi correo",
      mail: "Mail",
      emailCopied: "Email copiado al portapapeles",
      emailCopyFailed: "No se pudo copiar el email",
    },
    skills: {
      title: "Habilidades",
      description:
        "Me apasiona la tecnología; en mi día a día intento aprender cosas nuevas. Además, me gusta construir mis proyectos con distintos lenguajes y herramientas:",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Empresas y roles donde he construido soluciones reales",
      areasTitle: "Áreas de experiencia:",
      items: {
        hold: {
          role: "Desarrollador de Sistemas",
          company: "HOLD Marketing",
          employmentType: "Jornada completa",
          period: "feb. 2025 - actualidad · 1 año 5 meses",
          location: "Remoto",
          tagline: "Desarrollador de Soluciones Digitales | Integraciones con Zoho",
          intro:
            "En Hold Marketing, me especializo en el desarrollo de soluciones digitales e integraciones con Zoho, optimizando la gestión y automatización de procesos empresariales.",
          areas: [
            {
              label: "Programación Back-End",
              value: "Zoho Deluge, PHP, Python, Java",
            },
            {
              label: "Frameworks MVC",
              value: "Laravel, CakePHP, Django",
            },
            {
              label: "Zoho Platform",
              value: "Zoho CRM, Zoho Reports, Zoho Creator",
            },
            {
              label: "Programación Front-End",
              value: "JavaScript, HTML, CSS",
            },
          ],
          outro:
            "Mi enfoque es la creación de soluciones eficientes y escalables que potencien la productividad y la toma de decisiones estratégicas a través de la tecnología.",
          skills: "PHP, Zoho y +6 aptitudes",
        },
        mantox: {
          role: "Desarrollador de software",
          company: "Mantox",
          employmentType: "Medio tiempo",
          period: "mar. 2024 - feb. 2025 · 1 año",
          location: "México · Remoto",
          skills: "React.js y SQL",
        },
        kobu: {
          role: "Full-stack Developer",
          company: "Köbu",
          employmentType: "Medio tiempo",
          period: "jun. 2023 - feb. 2024 · 9 meses",
          location: "México · Remoto",
          paragraphs: [
            "Como desarrollador full stack, me encargué de mantener y crear soluciones web para distintas aplicaciones, manteniendo comunicación constante con mi equipo e intentando aplicar las soluciones más óptimas posibles.",
            "En mi puesto contribuí al desarrollo y mantenimiento de la plataforma web, usando tecnologías como JavaScript, Node.js, Firebase y el motor de plantillas EJS.",
          ],
          skills: "Node.js, Firebase y +3 aptitudes",
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Soluciones que construí de principio a fin",
      viewAll: "Ver todos los proyectos →",
      viewProject: "Ver proyecto",
      status: {
        finished: "Finalizado",
        published: "Publicado",
      },
      items: {
        unibetas: {
          description:
            "Plataforma web para universidades que permite crear, administrar y aplicar exámenes en línea, con herramientas para gestionar preguntas, resultados y el flujo completo del estudiante.",
          introRest:
            " es una plataforma web para universidades que permite crear, administrar y aplicar exámenes en línea, con herramientas para gestionar preguntas, resultados y el flujo completo del estudiante.",
          technicalDescription:
            "Construido con **Next.js**, **TypeScript** y **Tailwind CSS**, con paneles separados para administradores y estudiantes. Incluye gestión de bancos de preguntas, asignación de exámenes, temporizadores, calificación automática y visualización de resultados en tiempo real.",
        },
        finance: {
          description:
            "Aplicación de finanzas personales para registrar ingresos y gastos, visualizar el presupuesto y mantener el control de tu dinero en un solo lugar.",
          introRest:
            " es una aplicación de finanzas personales para registrar ingresos y gastos, visualizar el presupuesto y mantener el control de tu dinero en un solo lugar.",
          technicalDescription:
            "Desarrollado con **Next.js 15**, **Zustand** y **TanStack Query** en el frontend, y **Express.js** con **PostgreSQL** en el backend. Incluye autenticación, categorías personalizables, gráficas de resumen y sincronización de datos en tiempo real.",
        },
        frontpage: {
          description:
            "Agregador de contenido personalizable que reúne feeds RSS y Atom en un panel de lectura limpio y sin distracciones.",
          introRest:
            " es un agregador de contenido personalizable que reúne feeds RSS y Atom en un panel de lectura limpio y sin distracciones.",
          technicalDescription:
            "Implementado con **React**, **Node.js** y almacenamiento local para guardar fuentes y preferencias. Permite organizar feeds por categorías, marcar artículos como leídos y disfrutar de una experiencia de lectura enfocada.",
        },
      },
    },
    projectDetail: {
      backToProjects: "Volver a proyectos",
      viewLive: "Ver proyecto en vivo",
      viewGithub: "Ver código en GitHub",
      keepExploring: "Sigue explorando",
      keepExploringSubtitle:
        "Otros proyectos que también muestran cómo pienso, diseño y construyo.",
      previous: "Proyecto anterior",
      next: "Siguiente proyecto",
    },
    contact: {
      title: "¡Contáctame!",
      subtitle: "Contrátame",
      description:
        "Si te interesa colaborar en algún proyecto, contratarme o simplemente saludar, escríbeme a alexisdlr3009@hotmail.com y responderé lo antes posible.",
      name: "Nombre",
      message: "Mensaje",
      messagePlaceholder: "Escribe aquí tu mensaje",
      email: "Email",
      submit: "Enviar",
      success: "Mensaje enviado",
    },
    footer: {
      role: "Ingeniero de software · Full-stack.",
      madeWith: "Hecho con ❤ por Alexis De Leon © 2022",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      downloadCv: "Download CV",
      ariaOpenMenu: "Open navigation menu",
      ariaCloseMenu: "Close navigation menu",
      ariaMainNav: "Main navigation",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Switch to Spanish",
    },
    profile: {
      greeting: "Hi, I'm",
      role: "Software Engineer",
      education: "Software Development Engineer",
    },
    hero: {
      bio: "I'm a **software engineer** with **3+ years** building web apps, integrations, and digital products with real impact. I work **full-stack** with **TypeScript**, **Next.js**, and **Node.js**, from modern interfaces to the business logic and integrations behind them. I also connect platforms through APIs, webhooks, and automations (including the **Zoho** ecosystem). I care about architecture, performance, and UX. Off the clock: music, the gym, and continuous learning.",
    },
    about: {
      title: "About me",
      email: "Email",
      bio: "I'm a **Full Stack developer** focused on turning ideas into scalable web applications. On the **frontend**, I work with **React**, **Next.js**, and **TypeScript**, building clean and reusable interfaces. On the **backend**, I've built REST APIs with **Node.js**, **Express**, **PostgreSQL**, and **MongoDB**, and I use **Git**, **GitHub**, and **Docker** to version, collaborate, and deploy projects. I enjoy writing maintainable code, learning new technologies, and contributing to teams that value technical quality.",
      stats: {
        projects: "Projects completed",
        experience: "Years of experience",
      },
      education: {
        title: "Education",
        subtitle: "Academic foundation + continuous self-directed learning",
        grade: "Grade",
        skills: "Skills",
        items: {
          utncEngineering: {
            school: "Universidad Tecnológica del Norte de Coahuila",
            degree: "Engineering, Software Development and Management",
            period: "Sep 2023 – Jul 2025",
          },
          utncTsu: {
            school: "Universidad Tecnológica del Norte de Coahuila",
            degree: "Higher University Technician, Software Development",
            period: "Sep 2021 – Apr 2024",
          },
          cetis239: {
            school:
              "Industrial and Services Technological Baccalaureate Center No. 239",
            degree:
              "Bachelor's degree, Support and maintenance of computer equipment",
            period: "Sep 2018 – Jul 2021",
          },
        },
      },
      technologies: {
        title: "Technologies",
        subtitle: "What I master today and keep expanding tomorrow",
      },
    },
    actions: {
      cv: "Resume",
      cvTooltip: "Download my CV",
      linkedinTooltip: "Visit my LinkedIn",
      githubTooltip: "Visit my GitHub",
      emailTooltip: "Copy my email",
      mail: "Mail",
      emailCopied: "Email copied to clipboard",
      emailCopyFailed: "Failed to copy email",
    },
    skills: {
      title: "Skills",
      description:
        "I'm passionate about technology; in my day-to-day I try to learn new things. I also like to build my projects with different languages and tools:",
    },
    experience: {
      title: "Experience",
      subtitle: "Companies and roles where I've built real-world solutions",
      areasTitle: "Areas of expertise:",
      items: {
        hold: {
          role: "Systems Developer",
          company: "HOLD Marketing",
          employmentType: "Full-time",
          period: "Feb 2025 - Present · 1 yr 5 mos",
          location: "Remote",
          tagline: "Digital Solutions Developer | Zoho Integrations",
          intro:
            "At Hold Marketing, I specialize in developing digital solutions and Zoho integrations, optimizing business process management and automation.",
          areas: [
            {
              label: "Back-End Development",
              value: "Zoho Deluge, PHP, Python, Java",
            },
            {
              label: "MVC Frameworks",
              value: "Laravel, CakePHP, Django",
            },
            {
              label: "Zoho Platform",
              value: "Zoho CRM, Zoho Reports, Zoho Creator",
            },
            {
              label: "Front-End Development",
              value: "JavaScript, HTML, CSS",
            },
          ],
          outro:
            "My focus is building efficient, scalable solutions that boost productivity and strategic decision-making through technology.",
          skills: "PHP, Zoho and +6 skills",
        },
        mantox: {
          role: "Software Developer",
          company: "Mantox",
          employmentType: "Part-time",
          period: "Mar 2024 - Feb 2025 · 1 yr",
          location: "Mexico · Remote",
          skills: "React.js and SQL",
        },
        kobu: {
          role: "Full-stack Developer",
          company: "Köbu",
          employmentType: "Part-time",
          period: "Jun 2023 - Feb 2024 · 9 mos",
          location: "Mexico · Remote",
          paragraphs: [
            "As a full-stack developer, I was in charge of maintaining and creating web solutions for different applications, always maintaining constant communication with my team and trying to apply the most optimal solutions possible.",
            "In my position I contributed to the development and maintenance of the web platform, using technologies such as JavaScript, Node.js, Firebase and the EJS templating engine.",
          ],
          skills: "Node.js, Firebase and +3 skills",
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Solutions I built from start to finish",
      viewAll: "View all projects →",
      viewProject: "View project",
      status: {
        finished: "Completed",
        published: "Published",
      },
      items: {
        unibetas: {
          description:
            "A web platform for universities to create, manage, and deliver exams, with admin tools for managing questions and results, and a student flow for taking exams and reviewing scores.",
          introRest:
            " is a web platform for universities to create, manage, and deliver online exams, with tools to manage questions, results, and the full student workflow.",
          technicalDescription:
            "Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, with separate panels for admins and students. Includes question bank management, exam assignment, timers, automatic grading, and real-time results.",
        },
        finance: {
          description:
            "Personal finance app to track income and expenses, visualize your budget, and keep control of your money in one place.",
          introRest:
            " is a personal finance app to track income and expenses, visualize your budget, and keep control of your money in one place.",
          technicalDescription:
            "Developed with **Next.js 15**, **Zustand**, and **TanStack Query** on the frontend, and **Express.js** with **PostgreSQL** on the backend. Includes authentication, customizable categories, summary charts, and real-time data sync.",
        },
        frontpage: {
          description:
            "Customizable content aggregator that pulls RSS and Atom feeds into one calm reading dashboard.",
          introRest:
            " is a customizable content aggregator that pulls RSS and Atom feeds into one calm, distraction-free reading dashboard.",
          technicalDescription:
            "Implemented with **React**, **Node.js**, and local storage for feeds and preferences. Lets you organize feeds by category, mark articles as read, and enjoy a focused reading experience.",
        },
      },
    },
    projectDetail: {
      backToProjects: "Back to projects",
      viewLive: "View live project",
      viewGithub: "View code on GitHub",
      keepExploring: "Keep exploring",
      keepExploringSubtitle:
        "Other projects that also show how I think, design, and build.",
      previous: "Previous project",
      next: "Next project",
    },
    contact: {
      title: "Contact me!",
      subtitle: "Hire me",
      description:
        "If you're interested in collaborating on a project, hiring me, or just saying hello, email me at alexisdlr3009@hotmail.com and I'll respond as soon as possible.",
      name: "Name",
      message: "Message",
      messagePlaceholder: "Write your message here",
      email: "Email",
      submit: "Submit",
      success: "Message sent",
    },
    footer: {
      role: "Software engineer · Full-stack.",
      madeWith: "Made with ❤ by Alexis De Leon © 2022",
    },
  },
};
