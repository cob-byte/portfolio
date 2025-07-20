import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import python_icon from './python-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import placeholder from './placeholder.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    python_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    placeholder
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web Development', 
        description: 'Creating responsive and dynamic web applications using React, Next.js, TailwindCSS, Django, and PostgreSQL. From concept to deployment, I build scalable solutions that deliver exceptional user experiences with modern styling.',
        link: '#contact' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile Development', 
        description: 'Developing cross-platform mobile applications using React Native, Expo, and NativeWind CSS. I specialize in creating intuitive mobile experiences that work seamlessly across iOS and Android platforms with native performance.',
        link: '#contact' 
    },
    { 
        icon: assets.python_icon, 
        title: 'Python Applications', 
        description: 'Building intelligent Python applications including computer vision systems, object detection, multiclass classification, and facial recognition solutions. I leverage machine learning and AI to create innovative software solutions.',
        link: '#contact' 
    },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Science in Information Technology' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Experience', description: '2+ Years in Development' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const skillsData = [
    {
      name: "Wordpress",
      icon: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
    },
    {
      name: "SQLite",
      icon: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17"
    },
    {
      name: "Firebase",
      icon: "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    },
    {
      name: "OpenCV",
      icon: "https://raw.githubusercontent.com/wiki/opencv/opencv/logo/OpenCV_logo_no_text.svg?sanitize=true"
    },
    {
      name: "Scikit-learn",
      icon: "https://raw.githubusercontent.com/scikit-learn/scikit-learn/75ae2c56111e3aac2768ba0a4f0a77d30d4e2605/doc/logos/scikit-learn-logo-without-subtitle.svg"
    },
    {
      name: "PyTorch",
      icon: "https://raw.githubusercontent.com/valohai/ml-logos/d8dfb916e50a93a41f3b1ed2ca7bd3dbc77030a2/pytorch.svg"
    },
    {
      name: "TensorFlow",
      icon: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
    },
    {
      name: "VSCode",
      icon: "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
    },
];

// Portfolio data
export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js",
    image: assets.placeholder.src || assets.placeholder,
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "https://example.com",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/username/project",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: assets.placeholder.src || assets.placeholder,
    skills: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "https://example.com",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/username/project",
        icon: "FaGithub"
      }
    ]
  }
];

export const components = [
  {
    id: 1,
    title: "Weather Widget",
    description: "A beautiful weather component with animations",
    image: assets.placeholder.src || assets.placeholder,
    codeLink: "https://github.com/username/weather-widget",
    viewLink: "https://weather-widget-demo.com"
  },
  {
    id: 2,
    title: "Custom Button Library",
    description: "A collection of reusable button components",
    image: assets.placeholder.src || assets.placeholder,
    codeLink: "https://github.com/username/button-library",
    viewLink: "https://button-library-demo.com"
  }
];