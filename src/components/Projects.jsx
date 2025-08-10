import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "#f9f9f9"
      : "linear-gradient(135deg, #0a0f1f, #14213d)"};
  color: ${({ theme }) => (theme.mode === "light" ? "#222" : "#ffffff")};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme.mode === "light" ? "#222" : "#ffd700")};
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) =>
    theme.mode === "light" ? "#555" : "rgba(255, 255, 255, 0.8)"};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "#ffffff"
      : "rgba(255, 255, 255, 0.05)"};
  backdrop-filter: blur(${({ theme }) => (theme.mode === "light" ? "0px" : "10px")});
  width: 300px;
  border-radius: 14px;
  padding: 1rem;
  text-align: left;
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? "0 8px 20px rgba(0,0,0,0.08)"
      : "0 12px 24px rgba(0, 0, 0, 0.15)"};
  transition: all 0.3s ease;
  border: ${({ theme }) =>
    theme.mode === "light"
      ? "1px solid #ddd"
      : "1px solid rgba(255, 215, 0, 0.3)"};
  color: ${({ theme }) => (theme.mode === "light" ? "#222" : "white")};

  &:hover {
    transform: scale(1.04);
    box-shadow: ${({ theme }) =>
      theme.mode === "light"
        ? "0 10px 25px rgba(0,0,0,0.12)"
        : "0 0 15px gold, 0 0 30px rgba(255, 215, 0, 0.4)"};
  }

  h3 {
    color: ${({ theme }) => (theme.mode === "light" ? "#111" : "#fff")};
  }

  p {
    color: ${({ theme }) =>
      theme.mode === "light"
        ? "#444"
        : "rgba(255, 255, 255, 0.85)"};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const projects = [
  {
    title: "Modern SaaS Website",
    service: "Web Development",
    description:
      "Responsive business website with CTA, hero animations, services, pricing, and contact.",
    image: "https://unsplash.it/400/260?image=1041",
  },
  {
    title: "AI Restaurant Chatbot",
    service: "AI Chatbot",
    description:
      "Conversational chatbot for ordering, FAQs, table booking using LLMs.",
    image: "https://unsplash.it/400/260?image=1081",
  },
  {
    title: "Full Branding Kit",
    service: "Branding & Design",
    description:
      "Logo, brand guide, typography & assets delivered for a full rebranding.",
    image: "https://unsplash.it/400/260?image=998",
  },
  {
    title: "Promo Video Reel",
    service: "Video Editing",
    description:
      "Product demo video with effects, transitions, subtitles and voiceover sync.",
    image: "https://unsplash.it/400/260?image=984",
  },
  {
    title: "Short Film VFX",
    service: "VFX & Motion",
    description:
      "Compositing, particle FX, explosions, color grading for indie short film.",
    image: "https://unsplash.it/400/260?image=823",
  },
  {
    title: "Instagram Kit",
    service: "Graphic Design",
    description:
      "Editable carousel templates, reels covers, banners and post creatives.",
    image: "https://unsplash.it/400/260?image=867",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <ScrollAnimation>
        <Title>📂 Recent Projects</Title>
        <SubTitle>
          Digital experiences we've delivered — across websites, AI, media, and branding.
        </SubTitle>
      </ScrollAnimation>

      <Grid>
        {projects.map((project, i) => (
          <ScrollAnimation key={i} delay={0.2 + i * 0.2}>
            <Card
              whileHover={{
                scale: 1.04,
                transition: { type: "spring", stiffness: 140 },
              }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>
                <strong>{project.service}</strong>
              </p>
              <p>{project.description}</p>
            </Card>
          </ScrollAnimation>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
