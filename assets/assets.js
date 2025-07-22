// Import all your images
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

// Project Images
import attendance_main from './attendance.png';
import attendance_0 from './attendance-0.png';
import attendance_1 from './attendance-1.png';
import attendance_2 from './attendance-2.png';

import classifier_main from './classifier.png';

import fam_money_main from './fam-money.png';
import fam_money_0 from './fam-money-0.png';
import fam_money_1 from './fam-money-1.png';

import imai_main from './imai.png';
import imai_0 from './imai-0.png';
import imai_1 from './imai-1.png';

import ims_main from './ims.png';
import ims_0 from './ims-0.png';
import ims_1 from './ims-1.png';
import ims_2 from './ims-2.png';

import iplm_main from './iplm.png';
import iplm_0 from './iplm-0.png';
import iplm_1 from './iplm-1.png';
import iplm_2 from './iplm-2.png';

import mediqs_main from './mediqs.png';
import mediqs_0 from './mediqs-0.png';

import recom_main from './recom.jpg';
import recom_0 from './recom-0.jpg';
import recom_1 from './recom-1.jpg';
import recom_2 from './recom-2.jpg';
import recom_3 from './recom-3.jpg';
import recom_4 from './recom-4.jpg';

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

// Project Images Object for easy access
export const projectImages = {
    attendance: {
        main: attendance_main,
        gallery: [attendance_0, attendance_1, attendance_2]
    },
    classifier: {
        main: classifier_main,
        gallery: []
    },
    famMoney: {
        main: fam_money_main,
        gallery: [fam_money_0, fam_money_1]
    },
    imai: {
        main: imai_main,
        gallery: [imai_0, imai_1]
    },
    ims: {
        main: ims_main,
        gallery: [ims_0, ims_1, ims_2]
    },
    iplm: {
        main: iplm_main,
        gallery: [iplm_0, iplm_1, iplm_2]
    },
    mediqs: {
        main: mediqs_main,
        gallery: [mediqs_0]
    },
    recom: {
        main: recom_main,
        gallery: [recom_0, recom_1, recom_2, recom_3, recom_4]
    }
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

// Portfolio data with corrected image references
export const projects = [
  {
    id: 1,
    title: "Mediqs - Healthcare Management System",
    description: "Revolutionizing healthcare management in primary healthcare facilities through a web-based electronic medical record portal system with predictive analytics for disease outbreaks. Built to improve accessibility, efficiency, and accuracy of patient information while streamlining healthcare workflows.",
    image: projectImages.mediqs.main,
    gallery: projectImages.mediqs.gallery,
    skills: ["Django", "JavaScript", "Bootstrap", "Jupyter Notebook", "PostgreSQL", "Predictive Analytics"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "https://mediqs-demo.up.railway.app",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/cob-byte/Mediqs-Public",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 2,
    title: "Family Money Tracker",
    description: "A comprehensive financial management system designed to help track and manage family finances. Features include expense tracking, budget management, financial reports, and multi-member support to ensure no transaction is forgotten and every penny is accounted for.",
    image: projectImages.famMoney.main,
    gallery: projectImages.famMoney.gallery,
    skills: ["React", "Node.js", "MongoDB", "Chart.js", "Railway"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "https://my-family-tracker.up.railway.app",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/cob-byte/FamMoneyTracker",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 3,
    title: "iPLM - Integrated PLM System",
    description: "A comprehensive educational management system designed for administrators, faculty, students, and applicants. Built with passion to provide a flexible, beginner-friendly, and convenient platform that digitizes decades of physical processes, encouraging technology adoption in education.",
    image: projectImages.iplm.main,
    gallery: projectImages.iplm.gallery,
    skills: ["Full Stack", "Educational Technology", "User Experience", "System Integration"],
    links: [
      {
        id: 1,
        title: "Project Demo",
        link: "https://github.com/yourusername/iplm",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/cob-byte/iPLM-Public",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 4,
    title: "ReCom - Community Communication App",
    description: "A sector-based mobile application for barangay communities featuring user accounts, community consensus, voting systems, virtual transactions for barangay facilities, 'pasuyo' services for physically absent members, and emergency institution access for community safety.",
    image: projectImages.recom.main,
    gallery: projectImages.recom.gallery,
    skills: ["React Native", "Mobile Development", "Community Tech", "Real-time Communication"],
    links: [
      {
        id: 1,
        title: "Mobile App",
        link: "https://github.com/yourusername/recom",
        icon: "FaMobile"
      },
      {
        id: 2,
        title: "GitHub",
        link: "https://github.com/cob-byte/Recom",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 5,
    title: "IMS Payroll Mobile",
    description: "Mobile payroll application for IMS Philippines Maritime Corp seafarers. Features include viewing deductions, payroll details, notifications, contributions, remittances, and comprehensive allottee management with percentage or fixed amount allocation options.",
    image: projectImages.ims.main,
    gallery: projectImages.ims.gallery,
    skills: ["React Native", "Mobile Development", "Payroll Systems", "Maritime Industry"],
    links: [
      {
        id: 1,
        title: "Mobile App",
        link: "",
        icon: "FaMobile"
      },
      {
        id: 2,
        title: "GitHub",
        link: "",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 6,
    title: "School Attendance Management System",
    description: "Web-based attendance tracking system with role-based access for administrators and students. Features face detection for photo validation, comprehensive dashboards, JWT authentication, email notifications, and data backup/recovery capabilities.",
    image: projectImages.attendance.main,
    gallery: projectImages.attendance.gallery,
    skills: ["Django", "React", "PostgreSQL", "Face Detection", "JWT", "Tailwind CSS"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "",
        icon: "FaExternalLinkAlt"
      },
      {
        id: 2,
        title: "Details",
        link: "",
        icon: "FaInfoCircle"
      }
    ]
  },
  {
    id: 7,
    title: "IMAI Cart Mobile Application",
    description: "Connected mobile companion app for the IM.AI Cart Tablet Application. Built with React Native and Expo for seamless integration, featuring Node.js backend for real-time data syncing across tablet and mobile platforms.",
    image: projectImages.imai.main,
    gallery: projectImages.imai.gallery,
    skills: ["React Native", "Expo", "Node.js", "Real-time Sync", "Cross-platform"],
    links: [
      {
        id: 1,
        title: "Mobile App",
        link: "",
        icon: "FaMobile"
      },
      {
        id: 2,
        title: "Details",
        link: "",
        icon: "FaInfoCircle"
      }
    ]
  },
  {
    id: 8,
    title: "IMAI Cart Classifier System",
    description: "Robust product identification system using OCR, color, texture, and feature matching. FastAPI-based interface for image upload, dataset management, and real-time classification via barcode detection. Includes GUI for dataset collection and model training.",
    image: projectImages.classifier.main,
    gallery: projectImages.classifier.gallery,
    skills: ["Python", "FastAPI", "Computer Vision", "Machine Learning", "LightGlue", "OCR"],
    links: [
      {
        id: 1,
        title: "API Demo",
        link: "",
        icon: "FaServer"
      },
      {
        id: 2,
        title: "Details",
        link: "",
        icon: "FaInfoCircle"
      }
    ]
  },
  {
    id: 9,
    title: "IM.AI Cart Tablet Application",
    description: "My first project lead at Linoflap Technology Philippines Inc. Designed and developed a tablet application using PyQt Designer and PyCharm, built with Python and Flask in an Anaconda environment. This foundational project combines intuitive design with robust backend functionality.",
    image: projectImages.imai.main, // Using same image as mobile version
    gallery: projectImages.imai.gallery,
    skills: ["Python", "Flask", "PyQt", "Anaconda", "Tablet Development"],
    links: [
      {
        id: 1,
        title: "Tablet App",
        link: "",
        icon: "FaTablet"
      },
      {
        id: 2,
        title: "Details",
        link: "",
        icon: "FaInfoCircle"
      }
    ]
  }
];