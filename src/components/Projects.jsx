import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

// Floating animation for subtle 3D feel
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Particle movement animation
const particleMove = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.7; }
  50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.7; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f2027 0%, #1c1f34 100%);
  color: #111;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 50%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${particleMove} ${(props) => props.duration}s ease-in-out infinite;
  z-index: 0;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #ffd700;
  position: relative;
  z-index: 2;
`;
const SubTitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: #fff; /* White card for premium look */
  border-radius: 16px;
  padding: 1.5rem;
  text-align: left;
  width: 300px;
  min-height: 320px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid rgba(255, 215, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(255, 215, 0, 0.35);
    border-color: gold;
  }

  h3 {
    margin-top: 0.5rem;
    color: #ffd700;
  }

  p {
    color: #111;
    margin: 0.3rem 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  animation: ${float} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    animation: none;
  }
`;

const projects = [
  {
    title: "Modern SaaS Website",
    service: "Web Development",
    description: "Responsive business website with CTA, hero animations, services, pricing, and contact.",
    image: "https://unsplash.it/400/260?image=1041",
  },
  {
    title: "AI Restaurant Chatbot",
    service: "AI Chatbot",
    description: "Conversational chatbot for ordering, FAQs, table booking using LLMs.",
    image: "https://unsplash.it/400/260?image=1081",
  },
  {
    title: "Full Branding Kit",
    service: "Branding & Design",
    description: "Logo, brand guide, typography & assets delivered for a full rebranding.",
    image: "https://unsplash.it/400/260?image=998",
  },
  {
    title: "Promo Video Reel",
    service: "Video Editing",
    description: "Product demo video with effects, transitions, subtitles and voiceover sync.",
    image: "https://unsplash.it/400/260?image=984",
  },
  {
    title: "Short Film VFX",
    service: "VFX & Motion",
    description: "Compositing, particle FX, explosions, color grading for indie short film.",
    image: "https://unsplash.it/400/260?image=823",
  },
  {
    title: "Instagram Kit",
    service: "Graphic Design",
    description: "Editable carousel templates, reels covers, banners and post creatives.",
    image: "https://unsplash.it/400/260?image=867",
  },
];

const ProjectsPremium = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    size: Math.random() * 4 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    key: i,
  }));

  return (
    <Section id="projects">
      {particles.map(p => (
        <Particle key={p.key} size={p.size} top={p.top} left={p.left} duration={p.duration} />
      ))}

      {showContent && (
        <>
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
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 140 },
                  }}
                >
                  <ProjectImage src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p><strong>{project.service}</strong></p>
                  <p>{project.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </Grid>
        </>
      )}
    </Section>
  );
};

export default ProjectsPremium;
