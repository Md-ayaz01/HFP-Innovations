import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

// Floating animation for the logo
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Glow pulse for the button
const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 35px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
`;

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 900px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 1.8rem;
  border-radius: 10px;
  animation: ${float} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 1.2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, #ffd700, #fff8dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubTitle = styled(motion.p)`
  font-size: 1.15rem;
  color: #f0f0f0;
  margin-bottom: 2rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(90deg, #ffd700, #ffcc33);
  color: black;
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  animation: ${glowPulse} 2s infinite;

  &:hover {
    transform: scale(1.07);
    background: linear-gradient(90deg, #ffcc33, #ffd700);
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
  top: -100px;
  right: -150px;
  z-index: 0;

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
    top: -80px;
    right: -100px;
  }
`;

const Hero3D = () => {
  return (
    <Section id="hero">
      <BackgroundGlow />
      <GlassContainer>
        <Logo src="/assets/logo/hfp-logo.jpg" alt="HFP Innovations Logo" />

        <ScrollAnimation>
          <Title
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovative Tech & Creative Solutions for Businesses
          </Title>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <SubTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We help startups, creators, and professionals grow with modern websites,
            AI-powered tools, and bold creative ideas. Personalized. Affordable. Future-ready.
          </SubTitle>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <CTAButton
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Build Your Vision
          </CTAButton>
        </ScrollAnimation>
      </GlassContainer>
    </Section>
  );
};

export default Hero3D;
