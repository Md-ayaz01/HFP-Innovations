import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Floating animation for 3D icons
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// Glow for cards
const glowPulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.2); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.6); }
  100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.2); }
`;

// Particle animation
const particleMove = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.7; }
  50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.7; }
`;

// Section with gradient matching hero colors
const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(135deg, #0f2027 0%, #1c1f34 100%);
`;

// Particle dots
const Particle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 215, 0, 0.15);
  border-radius: 50%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${particleMove} ${(props) => props.duration}s ease-in-out infinite;
  z-index: 0;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 900;
  background: linear-gradient(90deg, #ffd700, #fff8dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  position: relative;
  z-index: 2;
`;

const SubTitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 4rem;
  color: #f0f0f0;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  border: 2px solid rgba(255, 215, 0, 0.2);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 25px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-10px) scale(1.03);
    border-color: gold;
    box-shadow: 0 10px 35px rgba(255, 215, 0, 0.4);
  }

  img {
    width: 80px;
    margin-bottom: 1rem;
    animation: ${float} 4s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: rotate(15deg) scale(1.1);
    animation: none;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
    font-weight: 700;
    color: #ffd700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #111;
  }
`;

// Replace these with your 3D icon PNG URLs
const services = [
  { icon: 'https://img.icons8.com/?size=100&id=9QHudN9uBhDv&format=png&color=000000', title: 'Web & App Development', description: 'Custom websites, mobile apps, and enterprise software built for performance, scalability, and modern user experience.' },
  { icon: 'https://img.icons8.com/?size=100&id=uZrQP6cYos2I&format=png&color=000000', title: 'AI & Automation', description: 'From GPT-powered chatbots to workflow automation — we integrate AI to boost efficiency and reduce costs.' },
  { icon: 'https://img.icons8.com/?size=100&id=pL35aZJlKvyz&format=png&color=000000', title: 'Creative & Branding', description: 'Complete brand identity, UI/UX design, and creative assets to make your business unforgettable.' },
  { icon: 'https://img.icons8.com/?size=100&id=16Ne6ZK7nvPI&format=png&color=000000', title: 'Marketing & Growth', description: 'Data-driven SEO, paid ads, and social media strategies to scale your business and attract customers.' },
  { icon: 'https://img.icons8.com/?size=100&id=lMhEFosNBRbT&format=png&color=000000', title: 'E-commerce Solutions', description: 'Fully-featured online stores with payment gateways, inventory management, and high conversion design.' },
  { icon: 'https://img.icons8.com/?size=100&id=MSyqQ3LgGhFt&format=png&color=000000', title: 'Media & Content', description: 'High-quality videos, AI-generated content, explainer animations, and social media visuals tailored for engagement.' },
  { icon: 'https://img.icons8.com/?size=100&id=pcD8bVCCf7dC&format=png&color=000000', title: 'Advanced AI Solutions', description: 'Custom AI models, predictive analytics, and machine learning applications for cutting-edge innovation.' },
  { icon: 'https://img.icons8.com/?size=100&id=FbRY9JkBrjiX&format=png&color=000000', title: 'Cybersecurity & IT Solutions', description: 'Comprehensive security, IT audits, and protection strategies to keep your systems safe.' },
  { icon: 'https://img.icons8.com/?size=100&id=RcBBZX2XlWJV&format=png&color=000000', title: 'Cloud & Infrastructure', description: 'Cloud migration, server management, and scalable infrastructure solutions to power your business.' },
];

const ServicesPremium = () => {
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
    <Section id="services">
      {particles.map(p => (
        <Particle key={p.key} size={p.size} top={p.top} left={p.left} duration={p.duration} />
      ))}

      {showContent && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Title>🚀 What We Offer</Title>
            <SubTitle>
              Enterprise-level digital solutions to innovate, secure, and grow your business.
            </SubTitle>
          </motion.div>

          <Grid>
            {services.map((s, i) => (
              <Card
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                whileHover={{ rotateX: 3, rotateY: -3, transition: { type: 'spring', stiffness: 200 } }}
              >
                <motion.img src={s.icon} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Card>
            ))}
          </Grid>
        </>
      )}
    </Section>
  );
};

export default ServicesPremium;
