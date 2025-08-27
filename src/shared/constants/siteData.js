import slugify from "slugify";

class siteData {
  constructor() {
    this.domain = "https://symulkabir.vercel.app";
    this.name = "Symul Kabir";
    this.profession = "Full-Stack Developer & DevOps Enthusiast";
    this.description =
      "A passionate full stack developer exploring the world of DevOps. Enthusiastically learning to bridge development and operations while building scalable applications and contributing to open-source projects.";

    this.socialLinks = {
      linkedin: "https://www.linkedin.com/in/symulkabir",
      facebook: "https://facebook.com/SymulKabirPranta",
      github: "https://github.com/SymulKabir",
      twitter: "",
      instagram: "",
    };

    this.links = {
      github: this.socialLinks.github,
      cv: "https://drive.google.com/file/d/1-l1om-BPWHI4T7YMHgIXi4zq-tAkRty5/view?usp=sharing",
    };

    this.contacts = {
      mail: "saimonpranta@gmail.com",
      facebook: this.socialLinks.facebook,
      facebookUsername: "SymulKabirPranta",
      phone: "+8801881476432",
      whatsapp: "+8801881476432",
      address: "Maloncho Building, Bottola, Khilkhet, Dhaka",
      googleMapIframe:
        "https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d228.10223484662876!2d90.42621600123638!3d23.831548067057703!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d23.831522!2d90.4263582!4m3!3m2!1d23.831484!2d90.426338!5e0!3m2!1sen!2sbd!4v1751085643082!5m2!1sen!2sbd",
    };

    this.experience = [
      {
        companyName: "Micple Company Ltd",
        website: "https://micple.com",
        position: "Full Stack Developer & Technology Department Head",
        location: "161/Kh Moddopara, Khilkhet, Dhaka",
        period: {
          from: "07/2023",
          to: "Present",
        },
        works: [
          {
            description:
              "Lead the development of web applications, managing both frontend and backend aspects using modern frameworks and technologies (React.js, Micro Frontend, Express.js, Socket.io, MongoDB)",
          },
          {
            description:
              "Built and maintain the in-house production server, overseeing server configuration, deployment pipelines, and server health monitoring to ensure high availability and security",
          },
          {
            description:
              "Set up and manage production servers, handling performance optimizations, monitoring, and troubleshooting",
          },
          {
            description:
              "Oversee deployment pipelines, ensuring smooth transitions of applications from development to production environments using cloud infrastructure and shell script",
          },
          {
            description:
              "Mentor and guide junior developers, fostering a collaborative team environment and enhancing the skills of team members",
          },
        ],
      },
      {
        companyName: "Ameliasoft Ltd.",
        website: "https://www.ameliasoft.com",
        logo: "https://avatars.githubusercontent.com/u/120111412",
        position: "MERN Stack Developer (Junior Developer)",
        location: "Sector 12, Uttara, Dhaka",
        period: {
          from: "09/2022",
          to: "05/2023",
        },
        works: [
          {
            description:
              "Developed web applications using MERN stack, focusing on both frontend and backend development.",
          },
          {
            description:
              "Assisted in API development with Express.js and MongoDB, ensuring seamless data flow.",
          },
          {
            description:
              "Worked on UI improvements using React.js, optimizing performance and user experience.",
          },
          {
            description:
              "Collaborated with the development team to troubleshoot and resolve bugs in the application.",
          },
          {
            description:
              "Gained experience in version control and code collaboration using Git.",
          },
        ],
      },
      {
        companyName: "Softlab IT",
        website: "https://www.softlabit.com",
        favicon: "favicon.png",
        position: "MEAN Stack Intern",
        location: "61/A, Road-11, Avenue-6, Mirpur, Dhaka",
        period: {
          from: "04/2022",
          to: "08/2022",
        },
        works: [
          {
            description:
              "Followed team leader instructions to develop web applications using Angular, Express.js, NestJS, and MongoDB.",
          },
          {
            description:
              "Worked on both frontend and backend development, ensuring seamless integration of components.",
          },
          {
            description:
              "Collaborated with the development team to enhance application performance and scalability.",
          },
          {
            description:
              "Gained hands-on experience in building RESTful APIs and integrating third-party services.",
          },
        ],
      },
    ];

    this.skills = [
      {
        name: "DevOps & Cloud Tools",
        skills: [
          "Kubernetes",
          "Docker",
          "Jenkins",
          "Ansible",
          "CertBot",
          "GitHub",
          "AWS",
          "Nginx",
          "Docker Hub",
          "Shell Script",
          "Custom Git Server",
        ],
      },
      {
        name: "Backend",
        skills: [
          "Micro Service",
          "Express.js",
          "Socket.io",
          "Nest.js",
          "Flask",
          "GraphQL",
          "Mongoose",
          "MongoDB",
          "Radius",
          "RabbitMQ",
          "Nodemailer",
          "SMTP Server",
        ],
      },
      {
        name: "Frontend",
        skills: [
          "Micro Frontend",
          "React.js",
          "Next.js",
          "Angular.js",
          "Redux",
          "Bootstrap",
          "Tailwind",
        ],
      },
      {
        name: "Programming Languages & Other",
        skills: [
          "JavaScript",
          "TypeScript",
          "Python",
          "Dart",
          "PHP",
          "OpenCV",
          "NumPy",
          "Matplotlib",
          "Pandas",
        ],
      },
    ];

    this.projects = [
      {
        name: "Somachar News – SEO-Optimized National Daily Newspaper Platform",
        description: `<p>Somachar News – Full-Stack SEO-Optimized Newspaper Platform</p><h3><strong>Description:</strong></h3><p>I built and deployed <strong>Somachar News (</strong><a target="_blank" rel="noopener noreferrer nofollow" href="http://somacharnews.com"><strong>somacharnews.com</strong></a><strong>)</strong>, a national daily newspaper platform using <strong>Next.js (frontend)</strong>, <strong>Express.js (backend)</strong>, and <strong>MongoDB (database)</strong>. The project includes:</p><ul><li><p><strong>SEO Optimization</strong> with dynamic meta tags, auto Google indexing notifications, and <strong>nested sitemaps with sitemap index</strong>.</p></li><li><p><strong>Responsive Next.js frontend</strong> for fast rendering and improved search engine visibility.</p></li><li><p><strong>Backend API with Express.js</strong> connected to MongoDB for scalable content management.</p></li><li><p><strong>Deployment on Ubuntu 24.04 server</strong> with <strong>Nginx reverse proxy</strong>, fully configured and optimized by me.</p></li></ul><p>This project highlights my expertise in <strong>full-stack development, SEO-focused design, and Linux server deployment with Nginx</strong>.</p>`,
        link: "https://somacharnews.com",
        img: "somachar news.png",
      },
      {
        name: "GcomWorlds – Multi-Vendor E-Commerce Platform with Referral System",
        description: `<p>I developed <strong>GcomWorlds (</strong><a target="_blank" rel="noopener noreferrer nofollow" href="http://gcomworlds.com"><strong>gcomworlds.com</strong></a><strong>)</strong>, a <strong>multi-vendor e-commerce website</strong> where multiple users can create their own online stores, manage products, and sell directly through the platform. The system is built with <strong>React (frontend)</strong>, <strong>Express.js (backend)</strong>, and <strong>MongoDB (database)</strong>, and was fully deployed by me on <strong>cPanel hosting</strong>.</p><p>Key features include:</p><ul><li><p><strong>Multi-Vendor Store Management:</strong> Each vendor gets a panel to manage their store and products.</p></li><li><p><strong>Product Sales &amp; Order Handling:</strong> Seamless product listing and purchase workflow.</p></li><li><p><strong>Referral Bonus System:</strong> Users earn rewards when their referral link leads to a purchase.</p></li><li><p><strong>Scalable Architecture:</strong> Designed for handling multiple vendors and buyers efficiently.</p></li></ul><p>This project highlights my ability to build <strong>large-scale e-commerce systems, vendor management dashboards, and referral-based earning models</strong>.</p>`,
        link: "http://gcomworlds.com",
        img: "gcom worlds.png",
      },

      {
        name: "Custom Git Server – Self-Hosted Version Control Platform",
        description: `<p>I designed and deployed a <strong>custom Git server</strong> for my company <strong>Micple</strong>, functioning like GitHub for internal project management. Built and maintained entirely by me on a <strong>Linux Ubuntu server</strong>, the system supports <strong>commit, push, and pull operations</strong>, enabling teams to manage and collaborate on code securely within the organization.</p><p>Key highlights:</p><ul><li><p><strong>Self-hosted Git version control system</strong> for private company projects.</p></li><li><p><strong>Secure SSH-based authentication</strong> for repository access.</p></li><li><p><strong>Fully managed deployment and maintenance</strong> on Ubuntu Linux server.</p></li><li><p>Eliminates dependency on third-party Git hosting services.</p></li></ul><p>This project demonstrates my expertise in <strong>Linux server administration, DevOps, and version control systems</strong>.</p>`,
        link: "",
        img: "git server.png",
      },
      {
        name: "Micple Mail Server – Custom Email Solution for Micple.com",
        description: `<p>I built a <strong>custom mail server</strong> for <a target="_blank" rel="noopener noreferrer nofollow" href="http://Micple.com"><strong>Micple.com</strong></a>, enabling the organization to send and receive emails like Gmail but hosted on its own infrastructure. This solution was fully developed, configured, and deployed by me, providing a secure and reliable internal and external communication system.</p><p>Key highlights:</p><ul><li><p><strong>Full-featured mail server</strong> with the ability to send and receive emails.</p></li><li><p><strong>Domain-based email integration</strong> with <strong>@</strong><a target="_blank" rel="noopener noreferrer nofollow" href="http://micple.com"><strong>micple.com</strong></a> accounts.</p></li><li><p><strong>Configured on a Linux server</strong> for secure and scalable performance.</p></li><li><p>Reduces reliance on third-party email providers by maintaining <strong>self-hosted infrastructure</strong>.</p></li></ul><p>This project demonstrates my skills in <strong>server configuration, networking, mail protocols (SMTP, IMAP, POP3), and secure system administration</strong>.</p>`,
        link: "",
        img: "mail server.png",
      },
      {
        name: "Automated Backup System – Shell Script & Node.js",
        description: `<p>I developed an <strong>automated backup system</strong> using both <strong>Linux shell scripting with rsync</strong> and a <strong>Node.js implementation</strong> for cross-platform use. The system performs hourly backups of required folders while intelligently handling existing and deleted files.</p><p>Key highlights:</p><ul><li><p><strong>Linux Shell Script Version:</strong></p><ul><li><p>Uses <code>rsync</code> with cron jobs to schedule hourly backups.</p></li><li><p>Skips already existing files for efficiency.</p></li><li><p>Deletes files from the destination if they are removed from the source.</p></li></ul></li><li><p><strong>Node.js Version:</strong></p><ul><li><p>Provides the same functionality in a cross-platform environment.</p></li><li><p>Can run on any system that supports Node.js.</p></li><li><p>Offers flexibility for cloud or local backup automation.</p></li></ul></li></ul><p>This project demonstrates my skills in <strong>Linux automation, shell scripting, rsync, cron scheduling, Node.js development, and system reliability engineering</strong>.</p>`,
        link: "",
        img: "backup system.png",
      },
      {
        name: "ChatGPT Automation Chrome Extension – Topic-Based Data Collection",
        description: `<p>I built a <strong>custom Chrome extension</strong> that automates interaction with <strong>ChatGPT</strong> for data collection. The extension takes a predefined list of <strong>questions and topics</strong>, automatically submits them to ChatGPT, retrieves the responses, and saves them to a connected database for structured use.</p><p>Key highlights:</p><ul><li><p><strong>Automated ChatGPT queries</strong> based on topic/question lists.</p></li><li><p><strong>Database integration</strong> to store collected responses for later use.</p></li><li><p><strong>Chrome extension UI</strong> for managing topic collections and automation tasks.</p></li><li><p>Eliminates the need for manual copy-paste, saving time and effort.</p></li></ul><p>This project highlights my expertise in <strong>browser extension development, automation systems, API integration, and database management</strong>.</p>`,
        img: "chatGPT automation chrome extension.png",
      },
      {
        name: "NextCoin – Investment & Referral Bonus Platform",
        description: `<p>I built and deployed <strong>NexttCoin</strong>, an online <strong>investment and earning platform</strong> where users can invest money and receive returns according to the platform’s terms and policies. The system also includes a <strong>referral bonus structure</strong>, allowing users to earn commissions when they invite new members. Developed with <strong>React (frontend)</strong>, <strong>Express.js (backend)</strong>, and <strong>MongoDB (database)</strong>, the platform was fully <strong>hosted on cPanel</strong> by me. Additionally, I implemented a <strong>real-time chat feature</strong> using <strong>Socket.io</strong> for both frontend and backend, enabling users to communicate instantly.</p><p>Key highlights:</p><ul><li><p><strong>Investment Management System</strong> with automated return calculations.</p></li><li><p><strong>Referral Program</strong> with commission-based bonus distribution.</p></li><li><p><strong>Secure user account and transaction handling.</strong></p></li><li><p><strong>Real-time chat functionality</strong> implemented with Socket.io on frontend and backend.</p></li><li><p><strong>End-to-end deployment on cPanel</strong>, managed entirely by me.</p></li></ul><p>This project demonstrates my expertise in <strong>React, Express.js, MongoDB, financial application development, real-time communication with Socket.io, and cPanel deployment</strong>.</p>`,
        link: "http://nexttcoin.com",
        img: "nexttcoin.png",
      },
      {
        name: "Dainik Patrapatrika – Scalable Online News Platform",
        description: `<p>I developed and deployed <strong>Dainik Patrapatrika (</strong><a target="_blank" rel="noopener noreferrer nofollow" href="http://dainikpatrapatrika.com"><strong>dainikpatrapatrika.com</strong></a><strong>)</strong>, a digital newspaper website built with <strong>Next.js (frontend)</strong>, <strong>Express.js (backend)</strong>, and <strong>MongoDB (database)</strong>. The platform is designed for <strong>scalability and SEO performance</strong>, featuring:</p><ul><li><p><strong>SEO-friendly Next.js frontend</strong> with optimized rendering for faster load times.</p></li><li><p><strong>Express.js backend with MongoDB</strong> for efficient news content management.</p></li><li><p><strong>Deployment on Ubuntu 22.04 server</strong> with <strong>Nginx reverse proxy</strong>, configured and managed by me.</p></li><li><p>Structured for <strong>content scalability</strong> with good SEO implementation, though less advanced than my later project <strong>Somachar News</strong>.</p></li></ul><p>This project demonstrates my ability to <strong>design, build, and deploy scalable news platforms with strong SEO and server management skills</strong>.</p>`,
        link: "https://dainikpatrapatrika.com",
        img: "dainik patrapatrika.png",
      },
      {
        name: "Easy Shop50 (Shopsearn.com) – MLM & Task-Based Earning Platform",
        description: `<p>I developed and hosted <strong>Easy Shop50 (</strong><a target="_blank" rel="noopener noreferrer nofollow" href="http://shopsearn.com"><strong>shopsearn.com</strong></a><strong>)</strong>, an <strong>MLM-based business and earning platform</strong> that allows users to generate income through referrals and daily tasks. The system is built with <strong>React (frontend)</strong>, <strong>Express.js (backend)</strong>, and <strong>MongoDB Atlas (database)</strong>. Key features include:</p><ul><li><p><strong>Referral System (MLM model):</strong> Users earn commissions when their referred members deposit or perform activities.</p></li><li><p><strong>Daily Task &amp; Reward System:</strong> Users can complete daily tasks to earn rewards and bonuses.</p></li><li><p><strong>Secure Wallet &amp; Earnings Tracking:</strong> Automated calculation and distribution of referral percentages and task earnings.</p></li><li><p><strong>Hosting &amp; Deployment:</strong> Deployed by me on <strong>cPanel</strong> (both frontend and backend) with <strong>MongoDB Atlas</strong> integration.</p></li></ul><p>This project highlights my skills in <strong>React, Express.js, MongoDB Atlas, business logic implementation, and scalable deployment on cPanel hosting</strong>.</p>`,
        link: "https://shopsearn.com",
        img: "easy shop 50.png",
      },
    ];

    this.testimonials = [
      {
        name: "Ariful Islam",
        position: "CEO",
        company: "Micple Company Ltd",
        comment:
          "As the head of our technology department, Symul transformed our development workflow and server infrastructure. His deep understanding of DevOps, backend, and modern frontend technologies helped us scale with confidence.",
        start: 5,
      },
      {
        name: "Mr. Mehadi Hasan",
        position: "Founder & CEO",
        company: "Easy Shop 50",
        comment:
          "Symul is a driven and talented professional with deep expertise in full-stack development and server infrastructure. His leadership at Micple helped streamline production deployments and ensure uptime for critical services.",
        start: 5,
      },
      {
        name: "Ashik Ahammed",
        position: "Team Lead",
        company: "Ameliasoft Ltd.",
        comment:
          "Symul consistently delivered quality MERN stack features and quickly adapted to complex challenges. He’s a reliable developer and a valuable asset to any team.",
        start: 4,
      },
      {
        name: "Jahirul Islam",
        position: "Senior Developer",
        company: "Softlab IT",
        comment:
          "During his internship, Symul demonstrated quick learning, dedication, and solid MEAN stack capabilities. His backend understanding and teamwork made him stand out from the start.",
        start: 4,
      },
      {
        name: "Sabbir Rahman",
        position: "Freelance Client",
        company: "Local Startup Dhaka",
        comment:
          "Symul delivered a custom microservice backend with Docker and Express.js that exceeded expectations. His communication and DevOps knowledge made the deployment seamless.",
        start: 5,
      },
    ];

    this.educations = [
      {
        title: "Postgraduate Diploma in Information Technology (PGDIT)",
        subTitle: "University of Dhaka",
        des: "Currently enrolled in the Postgraduate Diploma in Information Technology (PGDIT) program at Dhaka University. Building expertise in software engineering, databases, networking, and advanced IT systems.",
        period: {
          from: "2025",
          to: "Present",
        },
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        subTitle: "Nizampur Government College",
        des: "Pursuing a Bachelor's degree in Business Administration with a focus on Management. Developed strong understanding of business principles, organizational operations, and strategic planning.",
        period: {
          from: "2018",
          to: "2024",
        },
      },
      {
        title: "Higher Secondary Certificate (HSC)",
        subTitle: "Professor Kamal Uddin Chowdhury College",
        des: "Completed Higher Secondary education in the Commerce stream. Gained foundational knowledge in accounting, finance, and business studies.",
        period: {
          from: "2016",
          to: "2018",
        },
      },
      {
        title: "Secondary School Certificate (SSC)",
        subTitle: "Mosjidia Bazlus Sobhan Chowdhury High School",
        des: "Completed secondary education with a concentration in business and general education subjects including mathematics and ICT.",
        period: {
          from: "2014",
          to: "2016",
        },
      },
    ];
    this.referenceWebsiteLink =
      "https://preview.themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/full_screen_preview/31542002?_ga=2.129973452.1570094698.1737996810-1187294755.1736097818&_gac=1.125403896.1737996828.CjwKCAiA-ty8BhA_EiwAkyoa33-dlhunfNpuxFPm9qieZox0NJ90lpo9Qm0_-E7EppCrt5Vx1g3WGBoCEnwQAvD_BwE&fbclid=IwY2xjawMRqyRleHRuA2FlbQIxMABicmlkETEwRk5oNGRPM2Q4S29tY2ZLAR54nlkDjQl91rt1rlVecF3UtRNszdaF-0AfotA_nmpzDl8HBlcHj72MS0IFQw_aem_lW-IjVdYx51zouh4u_rUHQ";
  }

  findProject = (projectName = "") => {
    const project = this.projects?.find((project) => {
      const slug = slugify(project.name, { lower: true });
      return slug === projectName;
    });
    return project || { message: "Project not found" };
  };
}

const SiteData = new siteData();

export default SiteData;
