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
import mediqs_1 from './mediqs-1.png';
import mediqs_2 from './mediqs-2.png';
import mediqs_3 from './mediqs-3.png';

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
        gallery: [mediqs_0, mediqs_1, mediqs_2, mediqs_3]
    },
    recom: {
        main: recom_main,
        gallery: [recom_0, recom_1, recom_2, recom_3, recom_4]
    }
};

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
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 13 projects' }
];

export const skillsData = [
    // Mobile
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg"
    },
    // Web
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
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
    },
    {
      name: "Firebase",
      icon: "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png"
    },
    {
      name: "PostgreSQL",
      icon: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
      name: "SQLite",
      icon: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/82df4543-236b-4e45-9604-5434e3faab17"
    },
    {
      name: "Wordpress",
      icon: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
    },
    // Python / ML
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "OpenCV",
      icon: "https://raw.githubusercontent.com/wiki/opencv/opencv/logo/OpenCV_logo_no_text.svg?sanitize=true"
    },
    {
      name: "TensorFlow",
      icon: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png"
    },
    {
      name: "PyTorch",
      icon: "https://raw.githubusercontent.com/valohai/ml-logos/d8dfb916e50a93a41f3b1ed2ca7bd3dbc77030a2/pytorch.svg"
    },
    {
      name: "Scikit-learn",
      icon: "https://raw.githubusercontent.com/scikit-learn/scikit-learn/75ae2c56111e3aac2768ba0a4f0a77d30d4e2605/doc/logos/scikit-learn-logo-without-subtitle.svg"
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    },
    // Tools
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

export const projects = [
  // --- Mobile ---
  {
    id: 1,
    title: "Kolekta - Field Lending & Collection App",
    description: "Production React Native app for field lending agents in the Philippines. Handles the full agent workflow — loan creation, daily collection rounds, GPS route optimization, and allottee management. Distributed as an Android APK with EAS OTA updates and single-flight token refresh for seamless offline-to-online sync.",
    image: placeholder,
    gallery: [],
    category: "Mobile",
    skills: ["React Native", "Expo", "NativeWind", "TanStack Query", "Zustand", "Google Maps", "EAS"],
    links: []
  },
  {
    id: 2,
    title: "STL Betting & Lottery Mobile App",
    description: "Enterprise-grade React Native app for a betting and lottery operator. Features offline betting with Realm local storage, geofencing for location-restricted access, SMS integration, kiosk mode, technician tracking, and device security checks with discrepancy resolution workflows.",
    image: placeholder,
    gallery: [],
    category: "Mobile",
    skills: ["React Native", "Expo", "Realm", "Geofencing", "SMS Integration", "Offline Sync"],
    links: []
  },
  {
    id: 3,
    title: "ReCom - Community Communication App",
    description: "Sector-based mobile app for barangay communities. Includes user accounts, community voting, virtual transactions for barangay facilities, pasuyo services for physically absent members, and direct access to emergency institutions.",
    image: projectImages.recom.main,
    gallery: projectImages.recom.gallery,
    category: "Mobile",
    skills: ["React Native", "Expo", "Firebase", "Real-time Communication"],
    links: [
      {
        id: 1,
        title: "GitHub",
        link: "https://github.com/cob-byte/Recom",
        icon: "FaGithub"
      }
    ]
  },
  {
    id: 4,
    title: "IMS Payroll Mobile",
    description: "Mobile payroll app for IMS Philippines Maritime Corp seafarers. Lets crew view payslips, deductions, contributions, and remittances, and manage allottees with percentage or fixed allocation options.",
    image: projectImages.ims.main,
    gallery: projectImages.ims.gallery,
    category: "Mobile",
    skills: ["React Native", "Expo", "Payroll Systems", "Maritime Industry"],
    links: []
  },
  {
    id: 5,
    title: "IMAI Cart Mobile Application",
    description: "Mobile companion app for the IM.AI Cart smart shopping system at Linoflap Technology. Syncs in real time with the tablet application using a Node.js backend, providing a seamless cross-platform cart experience.",
    image: projectImages.imai.main,
    gallery: projectImages.imai.gallery,
    category: "Mobile",
    skills: ["React Native", "Expo", "Node.js", "Real-time Sync"],
    links: []
  },
  // --- Web / Full-Stack ---
  {
    id: 6,
    title: "LinoflapQR - Contactless Table Ordering System",
    description: "Full-stack QR ordering platform for Philippine restaurants — a self-hosted alternative to Qashier and RUSH. Customers scan a table QR to browse menus and place orders; staff manage them across Kitchen, Cashier, and Manager dashboards. Built with Supabase Realtime for live order updates and TanStack Start for SSR.",
    image: placeholder,
    gallery: [],
    category: "Web",
    skills: ["TanStack Start", "React 19", "TypeScript", "Supabase", "Hono", "Prisma", "Shadcn/ui", "Playwright"],
    links: []
  },
  {
    id: 7,
    title: "Mediqs - Healthcare Management System",
    description: "Web-based electronic medical record portal for primary healthcare facilities with predictive analytics for disease outbreak forecasting. Streamlines patient records, appointment workflows, and generates actionable health insights for clinic administrators.",
    image: projectImages.mediqs.main,
    gallery: projectImages.mediqs.gallery,
    category: "Web",
    skills: ["Django", "JavaScript", "Bootstrap", "PostgreSQL", "Jupyter Notebook", "Predictive Analytics"],
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
    id: 8,
    title: "iPLM - Integrated PLM System",
    description: "Educational management system for Pamantasan ng Lungsod ng Maynila serving administrators, faculty, students, and applicants. Digitizes enrollment, grading, scheduling, and records management — replacing decades of manual paperwork.",
    image: projectImages.iplm.main,
    gallery: projectImages.iplm.gallery,
    category: "Web",
    skills: ["Django", "React", "PostgreSQL", "JWT", "Tailwind CSS"],
    links: [
      {
        id: 1,
        title: "Live Demo",
        link: "https://iplm-demo.up.railway.app/",
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
    id: 9,
    title: "Family Money Tracker",
    description: "Financial management app for tracking family income and expenses across multiple members. Includes budget management, categorized expense reports, and a shared transaction ledger so the whole household stays on the same page.",
    image: projectImages.famMoney.main,
    gallery: projectImages.famMoney.gallery,
    category: "Web",
    skills: ["React", "Node.js", "Firebase Auth", "Firebase Realtime Database"],
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
    id: 10,
    title: "School Attendance Management System",
    description: "Role-based attendance tracking system for schools with face detection for photo validation. Administrators manage student records and generate reports; students log attendance via a self-service portal backed by JWT auth and email notifications.",
    image: projectImages.attendance.main,
    gallery: projectImages.attendance.gallery,
    category: "Web",
    skills: ["Django", "React", "PostgreSQL", "Face Detection", "JWT", "Tailwind CSS"],
    links: []
  },
  {
    id: 11,
    title: "Kolekta Admin Dashboard",
    description: "Admin control panel for the Kolekta lending platform. Provides system-wide oversight for managing lenders, user roles, and platform settings. Built with strict TypeScript, TanStack Query for server state, and Zod for validated forms throughout.",
    image: placeholder,
    gallery: [],
    category: "Web",
    skills: ["React", "TypeScript", "Vite", "TanStack Query", "Zod", "Tailwind CSS"],
    links: []
  },
  {
    id: 12,
    title: "WOS Hub - Guild Strategy & Calculator App",
    description: "Full-stack web app for a Whiteout Survival guild. Includes 11 game calculators (charms, troops, hero XP, etc.), JWT-authenticated user accounts with saved progress, role-based access, an SVS strategy editor for admins, and a member directory — all deployed as a monorepo on Render.",
    image: placeholder,
    gallery: [],
    category: "Web",
    skills: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Zustand", "Framer Motion"],
    links: [
      {
        id: 1,
        title: "GitHub",
        link: "https://github.com/cob-byte/wos-hub",
        icon: "FaGithub"
      }
    ]
  },
  // --- Python / ML ---
  {
    id: 13,
    title: "IMAI Cart Classifier System",
    description: "Product identification system for the IM.AI smart cart using OCR, color, texture, and feature matching with LightGlue. A FastAPI interface handles image upload, dataset management, and real-time barcode classification, while a separate GUI tool manages dataset collection and model training.",
    image: projectImages.classifier.main,
    gallery: projectImages.classifier.gallery,
    category: "ML",
    skills: ["Python", "FastAPI", "OpenCV", "LightGlue", "OCR", "Machine Learning"],
    links: []
  }
];