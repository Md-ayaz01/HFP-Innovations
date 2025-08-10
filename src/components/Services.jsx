import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import {
  FaLaptopCode,
  FaRobot,
  FaPalette,
  FaChartLine,
  FaShoppingCart,
  FaVideo,
  FaBrain,
  FaShieldAlt,
  FaCloud
} from 'react-icons/fa';

// Gold shine animation
const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.bg};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 1rem;
  font-weight: 700;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(90deg, #FFD700, #FFF5C3)' // Gold for dark mode
      : 'linear-gradient(90deg, #5b3ec8, #a78bfa)'}; // Royal purple for light mode
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 4rem;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? '#f8f5e9' : '#444'}; /* warm white or dark gray */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(14px);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: left;
  border: 2px solid ${({ theme }) => (theme.mode === 'dark' ? 'gold' : '#a78bfa')};
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 0 15px gold, 0 0 30px rgba(255, 215, 0, 0.5)'
        : '0 0 15px #a78bfa, 0 0 30px rgba(167, 139, 250, 0.5)'};
    background-image: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(90deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0.15) 50%, rgba(255, 215, 0, 0.05) 100%)'
        : 'linear-gradient(90deg, rgba(167, 139, 250, 0.05) 0%, rgba(167, 139, 250, 0.15) 50%, rgba(167, 139, 250, 0.05) 100%)'};
    background-size: 200px 100%;
    animation: ${shine} 1.5s linear infinite;
    transform: translateY(-8px) scale(1.03);
  }

  svg {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => (theme.mode === 'dark' ? 'gold' : '#a78bfa')};
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: white;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => (theme.mode === 'dark' ? 'gold' : '#5b3ec8')};
    transition: color 0.3s ease;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) =>
      theme.mode === 'dark' ? '#f8f5e9' : '#555'};
    transition: color 0.3s ease;
  }

  &:hover h3,
  &:hover p {
    color: white;
  }
`;

const services = [
  { icon: <FaLaptopCode />, title: 'Web & App Development', description: 'Custom websites, mobile apps, and enterprise software built for performance, scalability, and modern user experience.' },
  { icon: <FaRobot />, title: 'AI & Automation', description: 'From GPT-powered chatbots to workflow automation — we integrate AI to boost efficiency and reduce costs.' },
  { icon: <FaPalette />, title: 'Creative & Branding', description: 'Complete brand identity, UI/UX design, and creative assets to make your business unforgettable.' },
  { icon: <FaChartLine />, title: 'Marketing & Growth', description: 'Data-driven SEO, paid ads, and social media strategies to scale your business and attract customers.' },
  { icon: <FaShoppingCart />, title: 'E-commerce Solutions', description: 'Fully-featured online stores with payment gateways, inventory management, and high conversion design.' },
  { icon: <FaVideo />, title: 'Media & Content', description: 'High-quality videos, AI-generated content, explainer animations, and social media visuals tailored for engagement.' },
  { icon: <FaBrain />, title: 'Advanced AI Solutions', description: 'Custom AI models, predictive analytics, and machine learning applications for cutting-edge innovation.' },
  { icon: <FaShieldAlt />, title: 'Cybersecurity & IT Solutions', description: 'Comprehensive security, IT audits, and protection strategies to keep your systems safe.' },
  { icon: <FaCloud />, title: 'Cloud & Infrastructure', description: 'Cloud migration, server management, and scalable infrastructure solutions to power your business.' },
];

const Services = () => {
  return (
    <Section id="services">
      <ScrollAnimation>
        <Title>🚀 What We Offer</Title>
        <SubTitle>
          Enterprise-level digital solutions to innovate, secure, and grow your business.
        </SubTitle>
      </ScrollAnimation>

      <Grid>
        {services.map((s, i) => (
          <ScrollAnimation key={s.title} delay={0.15 + i * 0.15}>
            <Card
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                transition: { type: 'spring', stiffness: 200 },
              }}
            >
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Card>
          </ScrollAnimation>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
