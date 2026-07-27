import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from 'react';

const projectConfig = [
  {
    id: "project-1",
    title: "AI Career Assistant",
    category: { en: "Web App", es: "Aplicación Web" },
    description_i18n: {
      en: "AI-powered career advisor that analyzes resumes and job descriptions using an embedding-based similarity pipeline and a web-based interface.",
      es: "Asesor de carrera impulsado por IA que analiza currículums y descripciones de trabajo usando un pipeline de similitud basado en embeddings."
    },
    links: [
      { name: "repo", url: "https://github.com/OscarLacomba/ai-career-assistant", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/OscarLacomba/ai-career-assistant/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/OscarLacomba/ai-career-assistant/subscription", icon: <AiFillEye/> }
    ],
    image: "https://oscarlacomba.github.io/ai-career-assistant/",
    target: "_blank"
  }
];

export default projectConfig;
