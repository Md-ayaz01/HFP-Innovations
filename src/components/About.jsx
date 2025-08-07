// src/components/About.jsx
import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 900px;
  margin: auto;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};
`;

const About = () => {
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

export default About;
