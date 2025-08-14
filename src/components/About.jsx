// src/components/About.jsx
import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  color: #fff;

  /* Solid dark background matching hero/service */
  background-color: #0f2027;
`;

const Title = styled.h2`
  font-size: 3rem;  /* premium size */
  margin-bottom: 1.5rem;
  font-weight: 900;
  color: #ffd700;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;  /* premium size */
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
`;

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  font-size: 1.2rem;  /* slightly larger for premium feel */
  line-height: 1.8;
  color: #f0f0f0;
`;

const About3DPremium = () => {
  return (
    <Section id="about">
      <ScrollAnimation>
        <Title>👋 About HFP Innovations</Title>
        <SubTitle>Driven by passion, powered by innovation.</SubTitle>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Content>
          <p>
            HFP Innovations is a creative digital agency helping startups, professionals, and businesses grow with technology.
            We blend design, development, and AI to create personalized and future-proof digital experiences.
          </p>
          <br />
          <p>
            Our mission is to make premium digital services accessible to all. We believe in clarity, creativity, and measurable impact.
            From websites to AI assistants, we handle everything under one roof — always tailored to your needs.
          </p>
        </Content>
      </ScrollAnimation>
    </Section>
  );
};

export default About3DPremium;
