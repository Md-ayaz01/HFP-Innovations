// src/components/Blog.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

// subtle floating particles animation
const particleMove = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.7; }
  50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.7; }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f2027, #203a43); /* 3D dark gradient for premium look */
  color: #fff;
  text-align: center;
`;

// floating particles behind cards
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

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
  color: #ffd700;
  position: relative;
  z-index: 2;
`;

const SubTitle = styled(motion.p)`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  width: 360px;
  height: 500px;
  border-radius: 18px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 14px 40px rgba(0,0,0,0.18);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.04);
    box-shadow: 0 18px 50px rgba(0,0,0,0.25);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 1.2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
    font-weight: 700;
    color: #222;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    font-weight: 500;
  }

  a {
    font-size: 1rem;
    color: #7f5af0;
    font-weight: 600;
    margin-top: auto;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const blogPosts = [
  {
    title: 'Why a Premium Website is Essential in 2025',
    image: 'https://digitizal.com/wp-content/uploads/2025/03/Why-Business-Needs-a-website-1024x576-1.png',
    description: 'A modern website builds credibility, drives engagement, and positions your business as a market leader.',
    link: 'https://www.example.com/why-a-premium-website-is-essential-in-2025',
  },
  {
    title: 'Top AI Tools to Transform Your Business',
    image: 'https://edure.in/wp-content/uploads/2025/02/ai-tools.webp',
    description: 'Explore cutting-edge AI tools that automate processes, optimize marketing, and boost ROI.',
    link: 'https://www.example.com/top-ai-tools-to-transform-your-business',
  },
  {
    title: 'Smart Branding Strategies for Startups',
    image: 'https://clairebahn.com/wp-content/uploads/2020/04/10-Creative-Branding-Tips-for-Entrepreneurs.jpg',
    description: 'Create a standout brand identity with professional design, messaging, and creative assets.',
    link: 'https://www.example.com/smart-branding-strategies-for-startups',
  },
];

const BlogPremium = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    size: Math.random() * 6 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    key: i,
  }));

  return (
    <Section id="blog">
      {particles.map((p) => (
        <Particle key={p.key} size={p.size} top={p.top} left={p.left} duration={p.duration} />
      ))}

      <ScrollAnimation>
        <Title>📰 Insights & Updates</Title>
        <SubTitle>Expert tips, stories, and tools for premium digital growth</SubTitle>
      </ScrollAnimation>

      <Grid>
        {blogPosts.map((post, i) => (
          <ScrollAnimation key={i} delay={0.2 + i * 0.2}>
            <Card>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more →
              </a>
            </Card>
          </ScrollAnimation>
        ))}
      </Grid>
    </Section>
  );
};

export default BlogPremium;
