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
      github: "https://github.com/SaimonPranta",
      twitter: "",
      instagram: "", 
    };

    this.links = {
      github: this.socialLinks.github,
      cv: "https://drive.google.com/file/d/1CZpAcOEbFDsxf_1X_VEdKAlg6gTo59Qr/view?usp=sharing",
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
        img: "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
        name: "Givest - Non Profit PSD Template",
        link: "https://micple.com",
      },
      {
        img: "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
        name: "Givest - Non Profit PSD Template",
        link: "https://micple.com",
      },
      {
        img: "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
        name: "Givest - Non Profit PSD Template",
        link: "https://micple.com",
      },
      {
        img: "https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-1.jpg",
        name: "Givest - Non Profit PSD Template",
        link: "https://micple.com",
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
  }
}

const SiteData = new siteData();
 

export default SiteData;
