import {
  SiPython,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-clinicallab", className: "skill-icon", icon: <ScienceIcon sx={{ fontSize: ICON_SIZE }} />, text: "Clinical Lab" },
    { id: "skills-main-dataanalysis", className: "skill-icon", icon: <AnalyticsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Data Analysis" },
    { id: "skills-main-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "PostgreSQL" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" },
    { id: "skills-main-biotech", className: "skill-icon", icon: <BiotechIcon sx={{ fontSize: ICON_SIZE }} />, text: "Microbiology" },
  ],
  complementarySkills: [
    { id: "skills-comp-sql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SQL" },
    { id: "skills-comp-stats", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Statistics" },
    { id: "skills-comp-js", className: "skill-icon", icon: <SiJavascript size={ICON_SIZE} />, text: "JavaScript" },
    { id: "skills-comp-react", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React" },
    { id: "skills-comp-html", className: "skill-icon", icon: <SiHtml5 size={ICON_SIZE} />, text: "HTML 5" },
    { id: "skills-comp-css", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "CSS 3" },
  ],
};

export default skillsConfig;





