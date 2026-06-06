import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaHospital } from "react-icons/fa";
import { GiMicroscope } from "react-icons/gi";
import { BiRocket } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Oscar Martinez Gracia</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Oscar Martinez Gracia</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Medical Technologist",
      "ASCP Certified",
      "Data Science Student",
      "Clinical Lab Specialist",
      "Puerto Rican",
    ],
    es: [
      "Tecnólogo Médico",
      "Certificado ASCP",
      "Estudiante de Ciencia de Datos",
      "Especialista en Laboratorio Clínico",
      "Puertorriqueño",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I'm a Medical Technologist with over 20 years of experience in clinical laboratories across Puerto Rico. I'm ASCP certified and passionate about delivering accurate results that improve patient outcomes.",
      exit:
        "Currently expanding my skills into Data Science, combining my clinical background with modern analytics to find new opportunities in healthcare data.",
    },
    es: {
      start:
        "Soy Tecnólogo Médico con más de 20 años de experiencia en laboratorios clínicos en Puerto Rico. Certificado por ASCP y apasionado por brindar resultados precisos que mejoren la atención al paciente.",
      exit:
        "Actualmente ampliando mis habilidades en Ciencia de Datos, combinando mi experiencia clínica con analítica moderna para encontrar nuevas oportunidades en datos de salud.",
    },
  },

  workTimeline: [
    {
      id: "work-6",
      title: "Medical Technologist",
      title_i18n: { en: "Medical Technologist", es: "Tecnólogo Médico" },
      company: "Hospital Metropolitano de la Montaña",
      description_i18n: {
        en: "Performing clinical laboratory analysis supporting diagnosis and patient care.",
        es: "Realizando análisis de laboratorio clínico para apoyar el diagnóstico y la atención al paciente.",
      },
      date: "2021-Present",
      icon: <FaHospital />,
      tags: ["clinical-lab", "hematology", "microbiology", "chemistry"],
    },
    {
      id: "work-5",
      title: "Medical Technologist",
      title_i18n: { en: "Medical Technologist", es: "Tecnólogo Médico" },
      company: "Laboratorio Clínico Bayaney",
      description_i18n: {
        en: "Clinical laboratory testing and diagnostics support in Hatillo, PR.",
        es: "Pruebas de laboratorio clínico y apoyo diagnóstico en Hatillo, PR.",
      },
      date: "2022-Present",
      icon: <GiMicroscope />,
      tags: ["clinical-lab", "diagnostics", "quality-control"],
    },
    {
      id: "work-4",
      title: "Medical Technologist",
      title_i18n: { en: "Medical Technologist", es: "Tecnólogo Médico" },
      company: "Laboratorio Domus",
      description_i18n: {
        en: "Clinical laboratory analysis and patient sample processing in Camuy, PR.",
        es: "Análisis de laboratorio clínico y procesamiento de muestras en Camuy, PR.",
      },
      date: "2023-2025",
      icon: <GiMicroscope />,
      tags: ["clinical-lab", "sample-processing", "diagnostics"],
    },
    {
      id: "work-3",
      title: "Medical Technologist Supervisor",
      title_i18n: { en: "Medical Technologist Supervisor", es: "Supervisor de Tecnología Médica" },
      company: "Laboratorio Clínico Landron IV",
      description_i18n: {
        en: "Led laboratory operations, supervised staff, and ensured quality control standards in Arecibo, PR.",
        es: "Lideré operaciones de laboratorio, supervisé personal y aseguré estándares de control de calidad en Arecibo, PR.",
      },
      date: "2012-2021",
      icon: <BiRocket />,
      tags: ["supervision", "quality-control", "clinical-lab", "leadership"],
    },
    {
      id: "work-2",
      title: "Medical Technologist",
      title_i18n: { en: "Medical Technologist", es: "Tecnólogo Médico" },
      company: "CDT Manatí",
      description_i18n: {
        en: "Clinical laboratory services at the Diagnostic and Treatment Center in Manatí, PR.",
        es: "Servicios de laboratorio clínico en el Centro de Diagnóstico y Tratamiento de Manatí, PR.",
      },
      date: "2009-2012",
      icon: <BsGraphUp />,
      tags: ["clinical-lab", "diagnostics"],
    },
    {
      id: "work-1",
      title: "Medical Technologist",
      title_i18n: { en: "Medical Technologist", es: "Tecnólogo Médico" },
      company: "Camuy Health Services, Inc.",
      description_i18n: {
        en: "Provided clinical laboratory services at a community health center in Camuy, PR.",
        es: "Brindé servicios de laboratorio clínico en un centro de salud comunitario en Camuy, PR.",
      },
      date: "2005-2008",
      icon: <BsClipboardData />,
      tags: ["clinical-lab", "community-health"],
    },
  ],
};

export default homeConfig;
