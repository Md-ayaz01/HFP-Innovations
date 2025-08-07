// src/components/Testimonials.jsx
import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bgLight};
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
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 300px;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  text-align: left;
  transition: 0.3s;

  p {
    font-style: italic;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 600;
    font-size: 1rem;
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.textLight};
  }
`;

const testimonials = [
  {
    quote: "The team at HFP was outstanding! They understood my vision and delivered exactly what I needed — fast and affordable.",
    name: "Rohit Agarwal",
    role: "Startup Founder",
  },
  {
    quote: "I loved the smooth UI and AI chatbot integration. Our customer queries dropped by 60%.",
    name: "Sneha Kulkarni",
    role: "Marketing Head, SaaS Co.",
  },
  {
    quote: "My website looks amazing, runs fast, and the pricing was extremely reasonable. Highly recommend!",
    name: "Aditya Mehta",
    role: "Freelancer",
  },
];

const Testimonials = () => (
  <Section id="testimonials">
    <ScrollAnimation>
      <Title>🌟 Testimonials</Title>
      <SubTitle>What our clients are saying</SubTitle>
    </ScrollAnimation>

    <Grid>
      {testimonials.map((t, i) => (
        <ScrollAnimation key={i} delay={0.2 + i * 0.2}>
          <Card>
            <p>“{t.quote}”</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </Card>
        </ScrollAnimation>
      ))}
    </Grid>
  </Section>
);

export default Testimonials;
