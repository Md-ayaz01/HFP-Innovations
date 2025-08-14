// src/components/Testimonials.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #0f2027; /* premium dark 3D background */
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
  color: #ffd700;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled.div`
  background: #ffffff; /* white card for premium feel */
  width: 320px;
  border-radius: 16px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  }

  p {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #111;
    line-height: 1.7;
  }

  h4 {
    font-weight: 700;
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const testimonials = [
  {
    quote: "HFP Innovations transformed our digital presence completely. The website they built is elegant, fast, and perfectly aligned with our brand.",
    name: "Ananya Singh",
    role: "Founder, TechNova Solutions",
  },
  {
    quote: "Their AI automation solutions have saved us hundreds of hours monthly. Their team is professional, innovative, and always ahead of trends.",
    name: "Raghav Mehta",
    role: "CTO, FinEdge Analytics",
  },
  {
    quote: "From branding to web development, HFP delivered a seamless experience. Their attention to detail and design aesthetics are unmatched.",
    name: "Priya Nair",
    role: "Marketing Director, LuxeCraft",
  },
  {
    quote: "Working with HFP was a game-changer. Our SaaS platform now feels premium, intuitive, and has significantly increased user engagement.",
    name: "Karan Verma",
    role: "CEO, CloudReach",
  },
  {
    quote: "Every project with HFP feels bespoke. Their expertise in design, AI, and web development brings real value to our business.",
    name: "Simran Kapoor",
    role: "Product Manager, InnovateX",
  },
];

const TestimonialsPremium = () => (
  <Section id="testimonials">
    <ScrollAnimation>
      <Title>🌟 Client Stories</Title>
      <SubTitle>Hear from our partners who trust HFP Innovations</SubTitle>
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

export default TestimonialsPremium;
