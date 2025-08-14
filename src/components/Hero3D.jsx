import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Glow pulse for CTA
const glowPulse = keyframes`
  0% { box-shadow: 0 0 15px rgba(255, 200, 0, 0.3); }
  50% { box-shadow: 0 0 35px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 15px rgba(255, 200, 0, 0.3); }
`;

// Particle float animation
const float = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.3; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
  100% { transform: translateY(0) translateX(0); opacity: 0.3; }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const VideoBg = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 0;
  filter: contrast(1.05) saturate(1.1); /* optional sharpen */
  image-rendering: auto;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.25) 100%);
  z-index: 1;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 215, 0, 0.3);
  border-radius: 50%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${float} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  backdrop-filter: blur(3px); /* subtle depth behind text */
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.2;
  background: linear-gradient(90deg, #ffd700, #ffb800, #ffe066);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  text-shadow: 0 2px 15px rgba(0,0,0,0.35);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled(motion.p)`
  font-size: 1.4rem;
  max-width: 850px;
  color: #fff;
  margin-top: 1.2rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  margin-top: 2.5rem;
  display: inline-block;
  background: linear-gradient(90deg, #ffd700, #ffcc33);
  color: black;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 14px;
  animation: ${glowPulse} 2s infinite;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1) translateY(-2px);
    background: linear-gradient(90deg, #ffcc33, #ffd700);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.9);
  }
`;

const HeroFinalUltraSharp = () => {
  const [showText, setShowText] = useState(false);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setShowText(true), 1200);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Parallax transforms
  const titleY = useTransform(scrollY, [0, 400], [0, -70]);
  const subTitleY = useTransform(scrollY, [0, 400], [0, -40]);
  const buttonY = useTransform(scrollY, [0, 400], [0, -25]);
  const particleShift = useTransform(scrollY, [0, 400], [0, 20]);

  // Generate particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
  }));

  return (
    <HeroSection>
      <VideoBg autoPlay muted loop playsInline>
        <source
          src="assets/video/video.mp4" // replace with your local video path
          type="video/mp4"
        />
      </VideoBg>

      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {particles.map((p, idx) => (
        <Particle
          key={idx}
          top={p.top}
          left={p.left}
          size={p.size}
          duration={p.duration}
          delay={p.delay}
          style={{ y: particleShift }}
        />
      ))}

      {showText && (
        <Content>
          <Title style={{ y: titleY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Innovative Tech & Creative Solutions
          </Title>

          <SubTitle style={{ y: subTitleY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            Empowering businesses with world-class websites, AI tools, and cutting-edge design—crafted for the future.
          </SubTitle>

          <CTAButton style={{ y: buttonY }}
            href="#contact"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            Build My Vision
          </CTAButton>
        </Content>
      )}
    </HeroSection>
  );
};

export default HeroFinalUltraSharp;
