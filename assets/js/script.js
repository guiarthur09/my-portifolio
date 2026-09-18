const header = document.querySelector("[data-header]");
const navLinks = document.querySelector("[data-nav-links]");
const navIndicator = document.querySelector(".nav-indicator");
const links = [...document.querySelectorAll(".nav-item")];
const sections = [...document.querySelectorAll("main section[id]")];
const shimmerButtons = [...document.querySelectorAll(".shimmer-button")];
const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageTrigger = document.querySelector("[data-language-trigger]");
const languageCurrent = document.querySelector("[data-language-current]");
const languageFlag = document.querySelector("[data-language-flag]");
const languageOptions = [...document.querySelectorAll("[data-lang]")];
const techItems = [...document.querySelectorAll(".tech-item")];
const projectShowcase = document.querySelector("[data-project-showcase]");
const projectRows = [...document.querySelectorAll("[data-project-row]")];
const projectPreview = document.querySelector("[data-project-preview]");
const projectPreviewImage = document.querySelector("[data-project-preview-img]");
const copyEmailLinks = [...document.querySelectorAll("[data-copy-email]")];
const copyToast = document.querySelector("[data-copy-toast]");
const emailAddress = "guilhermearthursilveira13@gmail.com";
let copyToastTimer;

const languageMeta = {
  en: { label: "English", flag: "assets/img/estados-unidos.png", htmlLang: "en" },
  es: { label: "Español", flag: "assets/img/espanha.png", htmlLang: "es" },
  "pt-BR": { label: "Português (BR)", flag: "assets/img/brasilia.png", htmlLang: "pt-BR" },
};

const translations = {
  "pt-BR": {
    "language.select": "Selecionar idioma",
    "nav.main": "Navegação principal",
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.tech": "Tecnologias",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.eyebrow": "Desenvolvedor Back-End",
    "hero.title.hello": "Olá,",
    "hero.title.i": "eu",
    "hero.title.am": "sou",
    "hero.title.aria": "Olá, eu sou Guilherme Arthur Silveira.",
    "hero.text": "Estudante de Desenvolvimento de Sistemas no SENAI, buscando estágio para transformar estudo, prática e projetos em soluções úteis para pessoas e empresas.",
    "hero.cta": "Ver projetos",
    "hero.actions": "Ações principais",
    "hero.meta.aria": "Informações rápidas",
    "hero.meta.software": "Desenvolvimento de Software",
    "hero.meta.backend": "Back-end",
    "hero.meta.database": "Banco de Dados",
    "hero.meta.data": "Dados",
    "profile.kicker": "Disponível para estágio",
    "profile.summary": "Resumo de perfil",
    "profile.avatar": "Espaço reservado para foto de Guilherme Arthur",
    "profile.socials": "Links sociais",
    "profile.location": "Brasil",
    "profile.title": "Desenvolvimento de Sistemas",
    "profile.text": "Foco em aprender com projetos reais, colaborar com equipes e evoluir em back-end, APIs e bancos de dados.",
    "profile.cta": "Entrar em contato",
    "about.eyebrow": "Sobre mim",
    "about.title": "Em busca da primeira oportunidade para crescer como desenvolvedor.",
    "about.p1": "Meu nome é Guilherme, sou estudante de Desenvolvimento de Sistemas e estou em busca de um estágio para colocar em prática tudo o que venho aprendendo em programação, banco de dados e construção de aplicações.",
    "about.p2": "Tenho interesse especial por back-end, dados e banco de dados. Gosto de entender problemas, organizar soluções e construir projetos que conectem aprendizado técnico com uso real.",
    "tech.eyebrow": "Tecnologias",
    "tech.title": "Ferramentas que estou usando e estudando.",
    "tech.card1": "Linguagens e back-end",
    "tech.card2": "Dados e banco de dados",
    "tech.card3": "Web e ferramentas",
    "projects.eyebrow": "Projeto em destaque",
    "projects.title": "Projetos onde transformo estudo em prática.",
    "project.status": "Em desenvolvimento",
    "project.tagline": "A linguagem a qual você entende.",
    "project.text": "Plataforma voltada para tradução de documentos jurídicos, com chatbot de IA, agendamento e integração com APIs REST.",
    "project.github": "Ver no GitHub",
    "project.problem.title": "Problema resolvido",
    "project.problem.text": "Tradução de documentos jurídicos para uma linguagem mais acessível.",
    "project.role.title": "Minha participação",
    "project.role.text": "Integração com APIs de pagamento e organização do banco de dados.",
    "project.learning.title": "Maior aprendizado",
    "project.learning.text": "Trabalho em equipe, organização e colaboração durante o desenvolvimento.",
    "project.tech.title": "Tecnologias",
    "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript e APIs REST.",
    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar sobre oportunidades, estágio ou projetos.",
    "contact.text": "Estou aberto a aprender, contribuir com equipes e participar de desafios na área de desenvolvimento.",
    "contact.email": "Enviar e-mail",
    "contact.copyEmail": "Copiar e-mail",
    "footer.description": "Desenvolvedor Back-End em formação, construindo soluções com código, dados e bancos de dados.",
    "footer.contact": "Vamos conversar?",
    "footer.home": "Voltar ao início",
    "footer.rights": "© 2026 Guilherme Arthur Silveira. Todos os direitos reservados.",
    "toast.emailCopied": "E-mail copiado com sucesso",
  },
  en: {
    "language.select": "Select language",
    "nav.main": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.tech": "Tech",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Back-End Developer",
    "hero.title.hello": "Hi,",
    "hero.title.i": "I",
    "hero.title.am": "am",
    "hero.title.aria": "Hi, I am Guilherme Arthur Silveira.",
    "hero.text": "Systems Development student at SENAI, looking for an internship to turn study, practice, and projects into useful solutions for people and businesses.",
    "hero.cta": "View projects",
    "hero.actions": "Primary actions",
    "hero.meta.aria": "Quick information",
    "hero.meta.software": "Software Development",
    "hero.meta.backend": "Back-end",
    "hero.meta.database": "Databases",
    "hero.meta.data": "Data",
    "profile.kicker": "Available for internship",
    "profile.summary": "Profile summary",
    "profile.avatar": "Reserved space for Guilherme Arthur's photo",
    "profile.socials": "Social links",
    "profile.location": "Brazil",
    "profile.title": "Systems Development",
    "profile.text": "Focused on learning through real projects, collaborating with teams, and growing in back-end, APIs, and databases.",
    "profile.cta": "Contact me",
    "about.eyebrow": "About me",
    "about.title": "Looking for my first opportunity to grow as a developer.",
    "about.p1": "My name is Guilherme, I study Systems Development and I am looking for an internship to put into practice what I have been learning in programming, databases, and application development.",
    "about.p2": "I am especially interested in back-end, data, and databases. I like understanding problems, organizing solutions, and building projects that connect technical learning with real use.",
    "tech.eyebrow": "Technologies",
    "tech.title": "Tools I use and study.",
    "tech.card1": "Languages and back-end",
    "tech.card2": "Data and databases",
    "tech.card3": "Web and tools",
    "projects.eyebrow": "Featured project",
    "projects.title": "Projects where I turn study into practice.",
    "project.status": "In development",
    "project.tagline": "The language you understand.",
    "project.text": "Platform focused on translating legal documents, with an AI chatbot, scheduling, and REST API integrations.",
    "project.github": "View on GitHub",
    "project.problem.title": "Problem solved",
    "project.problem.text": "Translating legal documents into more accessible language.",
    "project.role.title": "My role",
    "project.role.text": "Integration with payment APIs and database organization.",
    "project.learning.title": "Biggest learning",
    "project.learning.text": "Teamwork, organization, and collaboration during development.",
    "project.tech.title": "Technologies",
    "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript, and REST APIs.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about opportunities, internships, or projects.",
    "contact.text": "I am open to learning, contributing to teams, and taking on challenges in development.",
    "contact.email": "Send email",
    "contact.copyEmail": "Copy email",
    "footer.description": "Back-End Developer in training, building solutions with code, data, and databases.",
    "footer.contact": "Let's talk?",
    "footer.home": "Back to top",
    "footer.rights": "© 2026 Guilherme Arthur Silveira. All rights reserved.",
    "toast.emailCopied": "Email copied successfully",
  },
  es: {
    "language.select": "Seleccionar idioma",
    "nav.main": "Navegación principal",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.tech": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Desarrollador Back-End",
    "hero.title.hello": "Hola,",
    "hero.title.i": "yo",
    "hero.title.am": "soy",
    "hero.title.aria": "Hola, soy Guilherme Arthur Silveira.",
    "hero.text": "Estudiante de Desarrollo de Sistemas en SENAI, buscando una pasantía para transformar estudio, práctica y proyectos en soluciones útiles para personas y empresas.",
    "hero.cta": "Ver proyectos",
    "hero.actions": "Acciones principales",
    "hero.meta.aria": "Información rápida",
    "hero.meta.software": "Desarrollo de Software",
    "hero.meta.backend": "Back-end",
    "hero.meta.database": "Bases de datos",
    "hero.meta.data": "Datos",
    "profile.kicker": "Disponible para pasantía",
    "profile.summary": "Resumen de perfil",
    "profile.avatar": "Espacio reservado para la foto de Guilherme Arthur",
    "profile.socials": "Links sociales",
    "profile.location": "Brasil",
    "profile.title": "Desarrollo de Sistemas",
    "profile.text": "Enfocado en aprender con proyectos reales, colaborar con equipos y evolucionar en back-end, APIs y bases de datos.",
    "profile.cta": "Contactarme",
    "about.eyebrow": "Sobre mí",
    "about.title": "Busco mi primera oportunidad para crecer como desarrollador.",
    "about.p1": "Mi nombre es Guilherme, estudio Desarrollo de Sistemas y busco una pasantía para poner en práctica lo que he aprendido en programación, bases de datos y creación de aplicaciones.",
    "about.p2": "Tengo especial interés en back-end, datos y bases de datos. Me gusta entender problemas, organizar soluciones y crear proyectos que conecten el aprendizaje técnico con el uso real.",
    "tech.eyebrow": "Tecnologías",
    "tech.title": "Herramientas que uso y estudio.",
    "tech.card1": "Lenguajes y back-end",
    "tech.card2": "Datos y bases de datos",
    "tech.card3": "Web y herramientas",
    "projects.eyebrow": "Proyecto destacado",
    "projects.title": "Proyectos donde convierto el estudio en práctica.",
    "project.status": "En desarrollo",
    "project.tagline": "El lenguaje que entiendes.",
    "project.text": "Plataforma orientada a la traducción de documentos jurídicos, con chatbot de IA, agendamiento e integración con APIs REST.",
    "project.github": "Ver en GitHub",
    "project.problem.title": "Problema resuelto",
    "project.problem.text": "Traducción de documentos jurídicos a un lenguaje más accesible.",
    "project.role.title": "Mi participación",
    "project.role.text": "Integración con APIs de pago y organización de la base de datos.",
    "project.learning.title": "Mayor aprendizaje",
    "project.learning.text": "Trabajo en equipo, organización y colaboración durante el desarrollo.",
    "project.tech.title": "Tecnologías",
    "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript y APIs REST.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos sobre oportunidades, pasantías o proyectos.",
    "contact.text": "Estoy abierto a aprender, contribuir con equipos y participar en desafíos de desarrollo.",
    "contact.email": "Enviar email",
    "contact.copyEmail": "Copiar email",
    "footer.description": "Desarrollador Back-End en formación, creando soluciones con código, datos y bases de datos.",
    "footer.contact": "¿Hablamos?",
    "footer.home": "Volver al inicio",
    "footer.rights": "© 2026 Guilherme Arthur Silveira. Todos los derechos reservados.",
    "toast.emailCopied": "Correo copiado correctamente",
  },
  fr: {
    "language.select": "Choisir la langue",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.tech": "Technos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.eyebrow": "Développeur Back-End",
    "hero.title.hello": "Bonjour,",
    "hero.title.i": "je",
    "hero.title.am": "suis",
    "hero.text": "Étudiant en développement de systèmes au SENAI, à la recherche d'un stage pour transformer l'étude, la pratique et les projets en solutions utiles.",
    "hero.cta": "Voir les projets",
    "hero.meta.software": "Développement logiciel",
    "hero.meta.backend": "Back-end",
    "hero.meta.database": "Bases de données",
    "hero.meta.data": "Données",
    "profile.kicker": "Disponible pour un stage",
    "profile.title": "Développement de systèmes",
    "profile.text": "Axé sur l'apprentissage avec des projets réels, la collaboration en équipe et l'évolution en back-end, APIs et bases de données.",
    "about.eyebrow": "À propos",
    "about.title": "À la recherche de ma première opportunité pour grandir comme développeur.",
    "about.p1": "Je m'appelle Guilherme, j'étudie le développement de systèmes et je cherche un stage pour mettre en pratique ce que j'apprends en programmation, bases de données et applications.",
    "about.p2": "Je m'intéresse particulièrement au back-end, aux données et aux bases de données. J'aime comprendre les problèmes, organiser des solutions et créer des projets utiles.",
    "tech.eyebrow": "Technologies",
    "tech.title": "Outils que j'utilise et que j'étudie.",
    "tech.card1": "Langages et back-end",
    "tech.card2": "Données et bases de données",
    "tech.card3": "Web et outils",
    "projects.eyebrow": "Projet en vedette",
    "projects.title": "Des projets où je transforme l'étude en pratique.",
    "project.status": "En développement",
    "project.tagline": "Le langage que vous comprenez.",
    "project.text": "Plateforme de traduction de documents juridiques, avec chatbot IA, planification et intégration d'APIs REST.",
    "project.github": "Voir sur GitHub",
    "project.problem.title": "Problème résolu",
    "project.problem.text": "Traduction de documents juridiques dans un langage plus accessible.",
    "project.role.title": "Ma participation",
    "project.role.text": "Intégration avec des APIs de paiement et organisation de la base de données.",
    "project.learning.title": "Principal apprentissage",
    "project.learning.text": "Travail d'équipe, organisation et collaboration pendant le développement.",
    "project.tech.title": "Technologies",
    "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript et APIs REST.",
    "contact.eyebrow": "Contact",
    "contact.title": "Parlons d'opportunités, de stages ou de projets.",
    "contact.text": "Je suis ouvert à apprendre, contribuer à des équipes et relever des défis en développement.",
    "contact.email": "Envoyer un e-mail",
  },
  de: {
    "language.select": "Sprache auswählen",
    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.tech": "Technologien",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Back-End-Entwickler",
    "hero.title.hello": "Hallo,",
    "hero.title.i": "ich",
    "hero.title.am": "bin",
    "hero.text": "Student der Systementwicklung bei SENAI, auf der Suche nach einem Praktikum, um Lernen, Praxis und Projekte in nützliche Lösungen zu verwandeln.",
    "hero.cta": "Projekte ansehen",
    "hero.meta.software": "Softwareentwicklung",
    "hero.meta.backend": "Back-end",
    "hero.meta.database": "Datenbanken",
    "hero.meta.data": "Daten",
    "profile.kicker": "Verfügbar für Praktikum",
    "profile.title": "Systementwicklung",
    "profile.text": "Fokus auf Lernen durch reale Projekte, Teamarbeit und Weiterentwicklung in Back-end, APIs und Datenbanken.",
    "about.eyebrow": "Über mich",
    "about.title": "Auf der Suche nach meiner ersten Chance, als Entwickler zu wachsen.",
    "about.p1": "Mein Name ist Guilherme, ich studiere Systementwicklung und suche ein Praktikum, um das Gelernte in Programmierung, Datenbanken und Anwendungen praktisch anzuwenden.",
    "about.p2": "Ich interessiere mich besonders für Back-end, Daten und Datenbanken. Ich verstehe gern Probleme, organisiere Lösungen und baue praxisnahe Projekte.",
    "tech.eyebrow": "Technologien",
    "tech.title": "Tools, die ich nutze und lerne.",
    "tech.card1": "Sprachen und Back-end",
    "tech.card2": "Daten und Datenbanken",
    "tech.card3": "Web und Tools",
    "projects.eyebrow": "Ausgewähltes Projekt",
    "projects.title": "Projekte, in denen ich Lernen in Praxis verwandle.",
    "project.status": "In Entwicklung",
    "project.tagline": "Die Sprache, die du verstehst.",
    "project.text": "Plattform zur Übersetzung juristischer Dokumente mit KI-Chatbot, Terminplanung und REST-API-Integrationen.",
    "project.github": "Auf GitHub ansehen",
    "project.problem.title": "Gelöstes Problem",
    "project.problem.text": "Übersetzung juristischer Dokumente in verständlichere Sprache.",
    "project.role.title": "Meine Rolle",
    "project.role.text": "Integration von Zahlungs-APIs und Organisation der Datenbank.",
    "project.learning.title": "Größter Lerneffekt",
    "project.learning.text": "Teamarbeit, Organisation und Zusammenarbeit während der Entwicklung.",
    "project.tech.title": "Technologien",
    "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript und REST-APIs.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Lass uns über Chancen, Praktika oder Projekte sprechen.",
    "contact.text": "Ich bin offen dafür, zu lernen, Teams zu unterstützen und Herausforderungen in der Entwicklung anzunehmen.",
    "contact.email": "E-Mail senden",
  },
};

translations["zh-CN"] = {
  ...translations.en,
  "language.select": "选择语言",
  "nav.home": "首页",
  "nav.about": "关于",
  "nav.tech": "技术",
  "nav.projects": "项目",
  "nav.contact": "联系",
  "hero.eyebrow": "后端开发者",
  "hero.title.hello": "你好，",
  "hero.title.i": "我",
  "hero.title.am": "是",
  "hero.cta": "查看项目",
  "hero.meta.software": "软件开发",
  "hero.meta.database": "数据库",
  "hero.meta.data": "数据",
  "profile.kicker": "可实习",
  "profile.title": "系统开发",
  "about.eyebrow": "关于我",
  "tech.eyebrow": "技术",
  "projects.eyebrow": "精选项目",
  "project.status": "开发中",
  "project.github": "在 GitHub 查看",
  "contact.eyebrow": "联系",
  "contact.email": "发送邮件",
};

translations["zh-TW"] = {
  ...translations["zh-CN"],
  "language.select": "選擇語言",
  "nav.home": "首頁",
  "nav.tech": "技術",
  "nav.projects": "專案",
  "hero.eyebrow": "後端開發者",
  "hero.title.hello": "你好，",
  "hero.meta.software": "軟體開發",
  "hero.meta.database": "資料庫",
  "hero.meta.data": "資料",
  "profile.kicker": "可實習",
  "profile.title": "系統開發",
  "about.eyebrow": "關於我",
  "projects.eyebrow": "精選專案",
  "project.status": "開發中",
};

translations.ja = {
  ...translations.en,
  "language.select": "言語を選択",
  "nav.home": "ホーム",
  "nav.about": "自己紹介",
  "nav.tech": "技術",
  "nav.projects": "プロジェクト",
  "nav.contact": "連絡先",
  "hero.eyebrow": "バックエンド開発者",
  "hero.title.hello": "こんにちは、",
  "hero.title.i": "私",
  "hero.title.am": "は",
  "hero.cta": "プロジェクトを見る",
  "hero.meta.software": "ソフトウェア開発",
  "hero.meta.database": "データベース",
  "hero.meta.data": "データ",
  "profile.kicker": "インターン可能",
  "profile.title": "システム開発",
  "about.eyebrow": "自己紹介",
  "tech.eyebrow": "技術",
  "projects.eyebrow": "注目プロジェクト",
  "project.status": "開発中",
  "project.github": "GitHub で見る",
  "contact.eyebrow": "連絡先",
  "contact.email": "メールを送る",
};

translations.ko = {
  ...translations.en,
  "language.select": "언어 선택",
  "nav.home": "홈",
  "nav.about": "소개",
  "nav.tech": "기술",
  "nav.projects": "프로젝트",
  "nav.contact": "연락처",
  "hero.eyebrow": "백엔드 개발자",
  "hero.title.hello": "안녕하세요,",
  "hero.title.i": "저는",
  "hero.title.am": "",
  "hero.cta": "프로젝트 보기",
  "hero.meta.software": "소프트웨어 개발",
  "hero.meta.database": "데이터베이스",
  "hero.meta.data": "데이터",
  "profile.kicker": "인턴십 가능",
  "profile.title": "시스템 개발",
  "about.eyebrow": "소개",
  "tech.eyebrow": "기술",
  "projects.eyebrow": "대표 프로젝트",
  "project.status": "개발 중",
  "project.github": "GitHub에서 보기",
  "contact.eyebrow": "연락처",
  "contact.email": "이메일 보내기",
};

translations.ru = {
  ...translations.en,
  "language.select": "Выбрать язык",
  "nav.home": "Главная",
  "nav.about": "Обо мне",
  "nav.tech": "Технологии",
  "nav.projects": "Проекты",
  "nav.contact": "Контакт",
  "hero.eyebrow": "Back-End разработчик",
  "hero.title.hello": "Привет,",
  "hero.title.i": "я",
  "hero.title.am": "",
  "hero.cta": "Смотреть проекты",
  "hero.meta.software": "Разработка ПО",
  "hero.meta.database": "Базы данных",
  "hero.meta.data": "Данные",
  "profile.kicker": "Открыт к стажировке",
  "profile.title": "Разработка систем",
  "about.eyebrow": "Обо мне",
  "tech.eyebrow": "Технологии",
  "projects.eyebrow": "Избранный проект",
  "project.status": "В разработке",
  "project.github": "Смотреть на GitHub",
  "contact.eyebrow": "Контакт",
  "contact.email": "Отправить email",
};

translations.tr = {
  ...translations.en,
  "language.select": "Dil seç",
  "nav.home": "Ana sayfa",
  "nav.about": "Hakkımda",
  "nav.tech": "Teknolojiler",
  "nav.projects": "Projeler",
  "nav.contact": "İletişim",
  "hero.eyebrow": "Back-End Geliştirici",
  "hero.title.hello": "Merhaba,",
  "hero.title.i": "ben",
  "hero.title.am": "",
  "hero.cta": "Projeleri gör",
  "hero.meta.software": "Yazılım Geliştirme",
  "hero.meta.database": "Veritabanları",
  "hero.meta.data": "Veri",
  "profile.kicker": "Staj için uygun",
  "profile.title": "Sistem Geliştirme",
  "about.eyebrow": "Hakkımda",
  "tech.eyebrow": "Teknolojiler",
  "projects.eyebrow": "Öne çıkan proje",
  "project.status": "Geliştirme aşamasında",
  "project.github": "GitHub'da gör",
  "contact.eyebrow": "İletişim",
  "contact.email": "E-posta gönder",
};

translations.id = {
  ...translations.en,
  "language.select": "Pilih bahasa",
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.tech": "Teknologi",
  "nav.projects": "Proyek",
  "nav.contact": "Kontak",
  "hero.eyebrow": "Pengembang Back-End",
  "hero.title.hello": "Halo,",
  "hero.title.i": "saya",
  "hero.title.am": "",
  "hero.cta": "Lihat proyek",
  "hero.meta.software": "Pengembangan Perangkat Lunak",
  "hero.meta.database": "Basis Data",
  "hero.meta.data": "Data",
  "profile.kicker": "Tersedia untuk magang",
  "profile.title": "Pengembangan Sistem",
  "about.eyebrow": "Tentang saya",
  "tech.eyebrow": "Teknologi",
  "projects.eyebrow": "Proyek unggulan",
  "project.status": "Dalam pengembangan",
  "project.github": "Lihat di GitHub",
  "contact.eyebrow": "Kontak",
  "contact.email": "Kirim email",
};

translations.fa = {
  ...translations.en,
  "language.select": "انتخاب زبان",
  "nav.home": "خانه",
  "nav.about": "درباره",
  "nav.tech": "فناوری‌ها",
  "nav.projects": "پروژه‌ها",
  "nav.contact": "تماس",
  "hero.eyebrow": "توسعه‌دهنده بک‌اند",
  "hero.title.hello": "سلام،",
  "hero.title.i": "من",
  "hero.title.am": "هستم",
  "hero.cta": "دیدن پروژه‌ها",
  "hero.meta.software": "توسعه نرم‌افزار",
  "hero.meta.database": "پایگاه داده",
  "hero.meta.data": "داده",
  "profile.kicker": "آماده برای کارآموزی",
  "profile.title": "توسعه سیستم‌ها",
  "about.eyebrow": "درباره من",
  "tech.eyebrow": "فناوری‌ها",
  "projects.eyebrow": "پروژه منتخب",
  "project.status": "در حال توسعه",
  "project.github": "مشاهده در GitHub",
  "contact.eyebrow": "تماس",
  "contact.email": "ارسال ایمیل",
};

Object.assign(translations["zh-CN"], {
  "hero.text": "SENAI 系统开发学生，正在寻找实习机会，希望把学习、实践和项目转化为对个人和企业有用的解决方案。",
  "profile.text": "专注于通过真实项目学习，与团队合作，并在后端、API 和数据库方面成长。",
  "about.title": "寻找第一个成长为开发者的机会。",
  "about.p1": "我叫 Guilherme，是系统开发学生，正在寻找实习机会，把在编程、数据库和应用开发中学到的知识用于实践。",
  "about.p2": "我特别关注后端、数据和数据库。喜欢理解问题、组织解决方案，并构建把技术学习与真实使用连接起来的项目。",
  "tech.title": "我正在使用和学习的工具。",
  "tech.card1": "语言和后端",
  "tech.card2": "数据和数据库",
  "tech.card3": "Web 和工具",
  "projects.title": "把学习转化为实践的项目。",
  "project.tagline": "你能理解的语言。",
  "project.text": "面向法律文件翻译的平台，包含 AI 聊天机器人、预约功能和 REST API 集成。",
  "project.problem.title": "解决的问题",
  "project.problem.text": "将法律文件翻译成更易理解的语言。",
  "project.role.title": "我的参与",
  "project.role.text": "集成支付 API 并组织数据库。",
  "project.learning.title": "最大的收获",
  "project.learning.text": "开发过程中的团队合作、组织能力和协作。",
  "project.tech.title": "技术",
  "project.tech.text": "PHP、MySQL、HTML5、CSS3、JavaScript 和 REST API。",
  "contact.title": "欢迎聊聊机会、实习或项目。",
  "contact.text": "我愿意学习、为团队贡献，并参与开发领域的挑战。",
});

Object.assign(translations["zh-TW"], {
  "hero.text": "SENAI 系統開發學生，正在尋找實習機會，希望把學習、實作和專案轉化為有用的解決方案。",
  "profile.text": "專注於透過真實專案學習，與團隊合作，並在後端、API 和資料庫方面成長。",
  "about.title": "尋找第一個成長為開發者的機會。",
  "about.p1": "我叫 Guilherme，是系統開發學生，正在尋找實習機會，把在程式設計、資料庫和應用開發中學到的知識用於實作。",
  "about.p2": "我特別關注後端、資料和資料庫。喜歡理解問題、整理解決方案，並建立連結技術學習與實際使用的專案。",
  "tech.title": "我正在使用和學習的工具。",
  "tech.card1": "語言和後端",
  "tech.card2": "資料和資料庫",
  "tech.card3": "Web 和工具",
  "projects.title": "把學習轉化為實作的專案。",
  "project.tagline": "你能理解的語言。",
  "project.text": "面向法律文件翻譯的平台，包含 AI 聊天機器人、預約功能和 REST API 整合。",
  "contact.title": "歡迎聊聊機會、實習或專案。",
  "contact.text": "我願意學習、為團隊貢獻，並參與開發領域的挑戰。",
});

Object.assign(translations.ja, {
  "hero.text": "SENAIでシステム開発を学び、学習・実践・プロジェクトを人や企業に役立つ解決策へつなげるためのインターンを探しています。",
  "profile.text": "実際のプロジェクトで学び、チームと協力しながら、バックエンド、API、データベースの分野で成長することに注力しています。",
  "about.title": "開発者として成長するための最初の機会を探しています。",
  "about.p1": "私はGuilhermeです。システム開発を学んでおり、プログラミング、データベース、アプリ開発で学んだことを実践するためのインターンを探しています。",
  "about.p2": "バックエンド、データ、データベースに特に関心があります。問題を理解し、解決策を整理し、技術学習を実際の利用につなげるプロジェクトを作ることが好きです。",
  "tech.title": "使用・学習しているツール。",
  "tech.card1": "言語とバックエンド",
  "tech.card2": "データとデータベース",
  "tech.card3": "Webとツール",
  "projects.title": "学びを実践に変えるプロジェクト。",
  "project.tagline": "あなたが理解できる言葉。",
  "project.text": "法律文書の翻訳を目的としたプラットフォームで、AIチャットボット、予約機能、REST API連携を備えています。",
  "project.problem.title": "解決した課題",
  "project.problem.text": "法律文書をより分かりやすい言葉に翻訳します。",
  "project.role.title": "担当した部分",
  "project.role.text": "決済APIの連携とデータベース整理。",
  "project.learning.title": "主な学び",
  "project.learning.text": "開発中のチームワーク、整理力、協力。",
  "project.tech.title": "技術",
  "project.tech.text": "PHP、MySQL、HTML5、CSS3、JavaScript、REST API。",
  "contact.title": "機会、インターン、プロジェクトについて話しましょう。",
  "contact.text": "学び、チームに貢献し、開発分野の課題に取り組むことに前向きです。",
});

Object.assign(translations.ko, {
  "hero.text": "SENAI에서 시스템 개발을 공부하며, 학습과 실습, 프로젝트를 사람과 기업에 유용한 솔루션으로 연결할 인턴십을 찾고 있습니다.",
  "profile.text": "실제 프로젝트를 통해 배우고, 팀과 협업하며, 백엔드, API, 데이터베이스 역량을 키우는 데 집중하고 있습니다.",
  "about.title": "개발자로 성장할 첫 기회를 찾고 있습니다.",
  "about.p1": "저는 Guilherme입니다. 시스템 개발을 공부하고 있으며, 프로그래밍, 데이터베이스, 애플리케이션 개발에서 배운 것을 실무에 적용할 인턴십을 찾고 있습니다.",
  "about.p2": "백엔드, 데이터, 데이터베이스에 특히 관심이 있습니다. 문제를 이해하고 해결책을 정리하며, 기술 학습을 실제 사용과 연결하는 프로젝트를 만드는 것을 좋아합니다.",
  "tech.title": "사용하고 공부하는 도구들.",
  "tech.card1": "언어와 백엔드",
  "tech.card2": "데이터와 데이터베이스",
  "tech.card3": "웹과 도구",
  "projects.title": "학습을 실습으로 바꾸는 프로젝트.",
  "project.tagline": "당신이 이해하는 언어.",
  "project.text": "법률 문서 번역을 위한 플랫폼으로, AI 챗봇, 일정 예약, REST API 연동을 포함합니다.",
  "project.problem.title": "해결한 문제",
  "project.problem.text": "법률 문서를 더 이해하기 쉬운 언어로 번역합니다.",
  "project.role.title": "내 역할",
  "project.role.text": "결제 API 연동과 데이터베이스 구성.",
  "project.learning.title": "가장 큰 배움",
  "project.learning.text": "개발 과정에서의 팀워크, 정리, 협업.",
  "project.tech.title": "기술",
  "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript, REST API.",
  "contact.title": "기회, 인턴십 또는 프로젝트에 대해 이야기해요.",
  "contact.text": "배우고, 팀에 기여하며, 개발 분야의 도전에 참여할 준비가 되어 있습니다.",
});

Object.assign(translations.ru, {
  "hero.text": "Я изучаю разработку систем в SENAI и ищу стажировку, чтобы превращать учебу, практику и проекты в полезные решения для людей и компаний.",
  "profile.text": "Фокусируюсь на обучении через реальные проекты, командной работе и развитии в back-end, API и базах данных.",
  "about.title": "Ищу первую возможность вырасти как разработчик.",
  "about.p1": "Меня зовут Guilherme, я изучаю разработку систем и ищу стажировку, чтобы применить знания в программировании, базах данных и создании приложений.",
  "about.p2": "Особенно интересуюсь back-end, данными и базами данных. Мне нравится разбираться в проблемах, организовывать решения и создавать практичные проекты.",
  "tech.title": "Инструменты, которые я использую и изучаю.",
  "tech.card1": "Языки и back-end",
  "tech.card2": "Данные и базы данных",
  "tech.card3": "Web и инструменты",
  "projects.title": "Проекты, где я превращаю учебу в практику.",
  "project.tagline": "Язык, который вы понимаете.",
  "project.text": "Платформа для перевода юридических документов с AI-чатботом, расписанием и интеграцией REST API.",
  "project.problem.title": "Решенная проблема",
  "project.problem.text": "Перевод юридических документов на более доступный язык.",
  "project.role.title": "Моя роль",
  "project.role.text": "Интеграция платежных API и организация базы данных.",
  "project.learning.title": "Главный опыт",
  "project.learning.text": "Командная работа, организация и сотрудничество во время разработки.",
  "project.tech.title": "Технологии",
  "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript и REST API.",
  "contact.title": "Давайте поговорим о возможностях, стажировках или проектах.",
  "contact.text": "Я открыт к обучению, участию в командах и задачам в сфере разработки.",
});

Object.assign(translations.tr, {
  "hero.text": "SENAI'de Sistem Geliştirme öğrencisiyim; öğrenme, pratik ve projeleri insanlar ve şirketler için faydalı çözümlere dönüştürmek için staj arıyorum.",
  "profile.text": "Gerçek projelerle öğrenmeye, ekiplerle iş birliği yapmaya ve back-end, API ve veritabanları alanında gelişmeye odaklanıyorum.",
  "about.title": "Geliştirici olarak büyümek için ilk fırsatımı arıyorum.",
  "about.p1": "Adım Guilherme. Sistem Geliştirme okuyorum ve programlama, veritabanı ve uygulama geliştirme alanında öğrendiklerimi uygulamak için staj arıyorum.",
  "about.p2": "Back-end, veri ve veritabanlarıyla özellikle ilgileniyorum. Problemleri anlamayı, çözümleri düzenlemeyi ve teknik öğrenimi gerçek kullanımla birleştiren projeler geliştirmeyi seviyorum.",
  "tech.title": "Kullandığım ve öğrendiğim araçlar.",
  "tech.card1": "Diller ve back-end",
  "tech.card2": "Veri ve veritabanları",
  "tech.card3": "Web ve araçlar",
  "projects.title": "Öğrenmeyi pratiğe dönüştürdüğüm projeler.",
  "project.tagline": "Anladığınız dil.",
  "project.text": "Hukuki belgelerin çevirisine odaklanan, AI sohbet botu, randevu ve REST API entegrasyonları içeren platform.",
  "project.problem.title": "Çözülen problem",
  "project.problem.text": "Hukuki belgeleri daha anlaşılır bir dile çevirmek.",
  "project.role.title": "Benim katkım",
  "project.role.text": "Ödeme API'leriyle entegrasyon ve veritabanı düzenleme.",
  "project.learning.title": "En büyük öğrenim",
  "project.learning.text": "Geliştirme sürecinde ekip çalışması, organizasyon ve iş birliği.",
  "project.tech.title": "Teknolojiler",
  "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript ve REST API'ler.",
  "contact.title": "Fırsatlar, stajlar veya projeler hakkında konuşalım.",
  "contact.text": "Öğrenmeye, ekiplere katkı sağlamaya ve geliştirme alanındaki zorluklara katılmaya açığım.",
});

Object.assign(translations.id, {
  "hero.text": "Mahasiswa Pengembangan Sistem di SENAI, sedang mencari magang untuk mengubah pembelajaran, praktik, dan proyek menjadi solusi yang berguna bagi orang dan perusahaan.",
  "profile.text": "Fokus belajar melalui proyek nyata, berkolaborasi dengan tim, dan berkembang di back-end, API, serta basis data.",
  "about.title": "Mencari kesempatan pertama untuk tumbuh sebagai pengembang.",
  "about.p1": "Nama saya Guilherme, saya mahasiswa Pengembangan Sistem dan sedang mencari magang untuk menerapkan apa yang saya pelajari dalam pemrograman, basis data, dan pembuatan aplikasi.",
  "about.p2": "Saya sangat tertarik pada back-end, data, dan basis data. Saya suka memahami masalah, menyusun solusi, dan membangun proyek yang menghubungkan pembelajaran teknis dengan penggunaan nyata.",
  "tech.title": "Alat yang saya gunakan dan pelajari.",
  "tech.card1": "Bahasa dan back-end",
  "tech.card2": "Data dan basis data",
  "tech.card3": "Web dan alat",
  "projects.title": "Proyek tempat saya mengubah pembelajaran menjadi praktik.",
  "project.tagline": "Bahasa yang Anda pahami.",
  "project.text": "Platform untuk terjemahan dokumen hukum, dengan chatbot AI, penjadwalan, dan integrasi REST API.",
  "project.problem.title": "Masalah yang diselesaikan",
  "project.problem.text": "Menerjemahkan dokumen hukum ke bahasa yang lebih mudah dipahami.",
  "project.role.title": "Peran saya",
  "project.role.text": "Integrasi dengan API pembayaran dan pengaturan basis data.",
  "project.learning.title": "Pembelajaran terbesar",
  "project.learning.text": "Kerja tim, organisasi, dan kolaborasi selama pengembangan.",
  "project.tech.title": "Teknologi",
  "project.tech.text": "PHP, MySQL, HTML5, CSS3, JavaScript, dan REST API.",
  "contact.title": "Mari bicara tentang peluang, magang, atau proyek.",
  "contact.text": "Saya terbuka untuk belajar, berkontribusi dalam tim, dan mengikuti tantangan di bidang pengembangan.",
});

Object.assign(translations.fa, {
  "hero.text": "دانشجوی توسعه سیستم‌ها در SENAI هستم و به دنبال کارآموزی‌ام تا یادگیری، تمرین و پروژه‌ها را به راه‌حل‌های مفید تبدیل کنم.",
  "profile.text": "تمرکز من یادگیری از پروژه‌های واقعی، همکاری با تیم‌ها و رشد در بک‌اند، API و پایگاه داده است.",
  "about.title": "به دنبال اولین فرصت برای رشد به عنوان توسعه‌دهنده هستم.",
  "about.p1": "نام من Guilherme است. دانشجوی توسعه سیستم‌ها هستم و به دنبال کارآموزی‌ام تا آموخته‌هایم در برنامه‌نویسی، پایگاه داده و ساخت برنامه‌ها را عملی کنم.",
  "about.p2": "به بک‌اند، داده و پایگاه داده علاقه ویژه دارم. دوست دارم مسئله‌ها را بفهمم، راه‌حل‌ها را سازمان‌دهی کنم و پروژه‌های کاربردی بسازم.",
  "tech.title": "ابزارهایی که استفاده و مطالعه می‌کنم.",
  "tech.card1": "زبان‌ها و بک‌اند",
  "tech.card2": "داده و پایگاه داده",
  "tech.card3": "وب و ابزارها",
  "projects.title": "پروژه‌هایی که یادگیری را به تمرین تبدیل می‌کنند.",
  "project.tagline": "زبانی که شما می‌فهمید.",
  "project.text": "پلتفرمی برای ترجمه اسناد حقوقی، همراه با چت‌بات هوش مصنوعی، زمان‌بندی و اتصال به REST API.",
  "project.problem.title": "مسئله حل‌شده",
  "project.problem.text": "ترجمه اسناد حقوقی به زبانی قابل‌فهم‌تر.",
  "project.role.title": "نقش من",
  "project.role.text": "اتصال به APIهای پرداخت و سازمان‌دهی پایگاه داده.",
  "project.learning.title": "مهم‌ترین یادگیری",
  "project.learning.text": "کار تیمی، سازمان‌دهی و همکاری در روند توسعه.",
  "project.tech.title": "فناوری‌ها",
  "project.tech.text": "PHP، MySQL، HTML5، CSS3، JavaScript و REST API.",
  "contact.title": "بیایید درباره فرصت‌ها، کارآموزی یا پروژه‌ها صحبت کنیم.",
  "contact.text": "آماده یادگیری، همکاری با تیم‌ها و شرکت در چالش‌های توسعه هستم.",
});

const closeLanguageMenu = () => {
  languageSwitcher?.classList.remove("is-open");
  languageTrigger?.setAttribute("aria-expanded", "false");
};

const openLanguageMenu = () => {
  languageSwitcher?.classList.add("is-open");
  languageTrigger?.setAttribute("aria-expanded", "true");
};

const translatePage = (lang) => {
  const selectedLang = ["pt-BR", "en", "es"].includes(lang) ? lang : "pt-BR";
  const dictionary = translations[selectedLang] || translations["pt-BR"];
  const meta = languageMeta[selectedLang] || languageMeta["pt-BR"];

  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = "ltr";
  document.title = selectedLang === "pt-BR" ? "Guilherme Arthur Silveira | Portfólio" : "Guilherme Arthur Silveira | Portfolio";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] || translations.en[key] || translations["pt-BR"][key] || element.textContent;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", dictionary[key] || translations.en[key] || translations["pt-BR"][key] || "");
  });

  languageCurrent.textContent = meta.label;
  languageFlag.src = meta.flag;
  languageFlag.alt = meta.label;

  languageOptions.forEach((option) => {
    option.setAttribute("aria-checked", String(option.dataset.lang === selectedLang));
  });

  try {
    localStorage.setItem("portfolio-language", selectedLang);
  } catch {
    // The portfolio still works if storage is blocked by the browser.
  }
  requestAnimationFrame(() => moveNavIndicator());
};

const fallbackCopyEmail = () => {
  const textarea = document.createElement("textarea");
  textarea.value = emailAddress;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  return copied;
};

const showCopyToast = () => {
  if (!copyToast) return;

  copyToast.classList.remove("is-visible");
  void copyToast.offsetWidth;
  copyToast.classList.add("is-visible");

  clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 3000);
};

const copyEmailToClipboard = async (event) => {
  event.preventDefault();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(emailAddress);
    } else {
      const copied = fallbackCopyEmail();
      if (!copied) return;
    }
  } catch {
    const copied = fallbackCopyEmail();
    if (!copied) return;
  }

  showCopyToast();
};

copyEmailLinks.forEach((link) => {
  link.addEventListener("click", copyEmailToClipboard);
});

languageTrigger?.addEventListener("click", () => {
  if (languageSwitcher?.classList.contains("is-open")) {
    closeLanguageMenu();
  } else {
    openLanguageMenu();
  }
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    translatePage(option.dataset.lang);
    closeLanguageMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher?.contains(event.target)) closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenu();
});

const moveNavIndicator = (activeLink = document.querySelector(".nav-item.is-active")) => {
  if (!navLinks || !navIndicator || !activeLink) return;

  const navRect = navLinks.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();

  navLinks.style.setProperty("--indicator-x", `${linkRect.left - navRect.left}px`);
  navLinks.style.setProperty("--indicator-y", `${linkRect.top - navRect.top}px`);
  navLinks.style.setProperty("--indicator-width", `${linkRect.width}px`);
  navLinks.style.setProperty("--indicator-height", `${linkRect.height}px`);
};

const setActiveLink = (activeLink) => {
  links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
  moveNavIndicator(activeLink);
};

links.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link));
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const restartHeroIntro = () => {
  const animatedElements = [
    ...document.querySelectorAll(".hero-paths, .floating-paths, .path, .title-word"),
  ];

  animatedElements.forEach((element) => {
    element.style.animation = "none";
  });

  document.body.offsetHeight;

  animatedElements.forEach((element) => {
    element.style.animation = "";
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { rootMargin: "-8% 0px -8% 0px", threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

techItems.forEach((item, index) => {
  item.style.setProperty("--tech-delay", `${(index % 6) * 95}ms`);
});

const techObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { rootMargin: "-8% 0px -8% 0px", threshold: 0.28 }
);

techItems.forEach((item) => techObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeLink = links.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      setActiveLink(activeLink);
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));
shimmerButtons.forEach((button) => {
  button.addEventListener("pointerdown", () => {
    button.animate(
      [
        { transform: "translateY(1px) scale(0.99)" },
        { transform: "translateY(0) scale(1)" },
      ],
      { duration: 180, easing: "ease-out" }
    );
  });
});

let previewFrame = 0;
const previewPosition = {
  currentX: 0,
  currentY: 0,
  targetX: 0,
  targetY: 0,
};

const moveProjectPreview = () => {
  if (!projectPreview) return;

  previewPosition.currentX += (previewPosition.targetX - previewPosition.currentX) * 0.16;
  previewPosition.currentY += (previewPosition.targetY - previewPosition.currentY) * 0.16;

  projectPreview.style.setProperty("--preview-x", `${previewPosition.currentX}px`);
  projectPreview.style.setProperty("--preview-y", `${previewPosition.currentY}px`);

  previewFrame = requestAnimationFrame(moveProjectPreview);
};

const stopProjectPreview = () => {
  if (!projectPreview) return;

  projectPreview.classList.remove("is-visible");
  cancelAnimationFrame(previewFrame);
};

projectRows.forEach((row) => {
  row.addEventListener("pointerenter", (event) => {
    if (!projectShowcase || !projectPreview || window.matchMedia("(max-width: 860px)").matches) return;

    const image = row.dataset.projectImage;
    if (image && projectPreviewImage) projectPreviewImage.src = image;

    const rect = projectShowcase.getBoundingClientRect();
    previewPosition.currentX = event.clientX - rect.left + 28;
    previewPosition.currentY = event.clientY - rect.top - 80;
    previewPosition.targetX = previewPosition.currentX;
    previewPosition.targetY = previewPosition.currentY;

    projectPreview.classList.add("is-visible");
    cancelAnimationFrame(previewFrame);
    previewFrame = requestAnimationFrame(moveProjectPreview);
  });

  row.addEventListener("pointermove", (event) => {
    if (!projectShowcase || !projectPreview?.classList.contains("is-visible")) return;

    const rect = projectShowcase.getBoundingClientRect();
    previewPosition.targetX = event.clientX - rect.left + 28;
    previewPosition.targetY = event.clientY - rect.top - 80;
  });

  row.addEventListener("pointerleave", stopProjectPreview);
});

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    stopProjectPreview();
  },
  { passive: true }
);
window.addEventListener("resize", () => moveNavIndicator(), { passive: true });
window.addEventListener("pageshow", restartHeroIntro);
updateHeader();
let storedLanguage = "pt-BR";

try {
  storedLanguage = localStorage.getItem("portfolio-language") || "pt-BR";
} catch {
  storedLanguage = "pt-BR";
}

translatePage(storedLanguage);
moveNavIndicator();
