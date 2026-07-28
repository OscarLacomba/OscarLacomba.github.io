import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';
import Hero from '../../components/Hero';
import { useLang } from '../../utils/i18n';

export default function Home() {
  const [lang] = useLang();
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;
  const titles = homeConfig.titles_i18n?.[lang] || homeConfig.titles || ['Data Scientist'];
  const about = homeConfig.about_i18n?.[lang] || homeConfig.about || { start: '', exit: '' };
  const timelineItems = (homeConfig.workTimeline || []).map((it) => ({
    ...it,
    title: it.title_i18n?.[lang] || it.title,
    description: it.description_i18n?.[lang] || it.description,
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Oscar Martinez Gracia',
    url: canonical,
    jobTitle: titles?.[0] || 'Data Scientist',
  };
  const greetingNode = homeConfig.greeting_i18n?.[lang] || homeConfig.greeting;
  const ExperienceLabel = lang === 'es' ? 'Experiencia' : 'Experience';
  return (
    <section>
      <Seo
        title={lang === 'es' ? 'Oscar Martinez Gracia — Científico de Datos & Consultor' : 'Oscar Martinez Gracia — Data Scientist & Consultant'}
        title={lang === 'es' ? 'Oscar Martinez Gracia — Científico de Datos & Tecnólogo Médico' : 'Oscar Martinez Gracia — Data Scientist & Medical Technologist'}
        description={
          lang === 'es'
            ? 'Tecnólogo Médico con más de 20 años de experiencia y certificado en Ciencia de Datos por Terminal34.'
            : 'Medical Technologist with 20+ years of experience and Data Science Certificate from Terminal34.'
        }
        canonical={canonical}
        jsonLd={jsonLd}
      />
      <Hero />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 xs={12} md={6}>
            {React.isValidElement(greetingNode) ? (
              <Box sx={{ mb: 1 }}>{greetingNode}</Box>
            ) : (
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                {greetingNode}
              </Typography>
            )}
            <Box sx={{ color: 'text.secondary', fontSize: 18 }}>
              <DynamicTyping titles={titles} />
            </Box>
          </Grid2>
          <Grid2 xs={12} md={6}>
            <About about={about} />
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
          {ExperienceLabel}
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '960px' }}>
          <Timeline items={timelineItems} />
        </Box>
      </Container>
    </section>
  );
}

