import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bgLight};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 2rem;
`;

const ToggleWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1.2rem;
  background: ${({ active }) => (active ? '#7f5af0' : '#e0e0e0')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? '#6843d7' : '#ccc')};
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  width: 280px;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  text-align: left;
  transition: 0.3s ease;
  border: ${({ featured }) => (featured ? '2px solid #7f5af0' : 'none')};
`;

const Price = styled.h3`
  font-size: 1.6rem;
  margin: 1rem 0;
`;

const PlanTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  background: #7f5af0;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;

  &:hover {
    background: #6843d7;
    transform: scale(1.03);
  }
`;

// Pricing in INR and USD
const plans = [
  {
    title: 'Web Starter',
    priceINR: 7500,
    priceUSD: 90,
    features: ['1–3 Pages', 'Responsive Design', 'Contact Form', 'Delivery in 4 Days'],
    link: '#contact',
  },
  {
    title: 'AI Chatbot',
    priceINR: 6500,
    priceUSD: 78,
    features: ['GPT-Based Bot', 'FAQ Trained', 'Website Integration', '1 Language'],
    link: '#contact',
  },
  {
    title: 'Branding Kit',
    priceINR: 6500,
    priceUSD: 78,
    features: ['Logo + Socials', 'Fonts + Colors', 'Editable Files', '3 Revisions'],
    featured: true,
    link: '#contact',
  },
  {
    title: 'Business Website',
    priceINR: 13500,
    priceUSD: 162,
    features: ['4–6 Pages', 'Custom UI', 'Chatbot Included', 'AI Tools Integrated'],
    link: '#contact',
  },
  {
    title: 'Promo Video',
    priceINR: 6500,
    priceUSD: 78,
    features: ['Up to 2 mins', 'Transitions & Music', 'Captions Included', 'MP4 Export'],
    link: '#contact',
  },
  {
    title: 'VFX Scene',
    priceINR: 12000,
    priceUSD: 145,
    features: ['SFX + Tracking', 'Compositing', 'Up to 15 sec', 'Color Graded'],
    link: '#contact',
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState('INR');

  return (
    <Section id="pricing">
      <ScrollAnimation>
        <Title>💰 Pricing Plans</Title>
        <SubTitle>
          Transparent, scalable pricing across all services. Start small or go full-scale.
        </SubTitle>
      </ScrollAnimation>

      <ToggleWrapper>
        <ToggleButton active={currency === 'INR'} onClick={() => setCurrency('INR')}>
          INR ₹
        </ToggleButton>
        <ToggleButton active={currency === 'USD'} onClick={() => setCurrency('USD')}>
          USD $
        </ToggleButton>
      </ToggleWrapper>

      <Cards>
        {plans.map((plan, i) => (
          <ScrollAnimation key={plan.title} delay={0.2 + i * 0.2}>
            <Card
              featured={plan.featured}
              whileHover={{
                scale: 1.04,
                transition: { type: 'spring', stiffness: 140 },
              }}
            >
              <PlanTitle>{plan.title}</PlanTitle>
              <Price>
                {currency === 'INR' ? `₹${plan.priceINR}` : `$${plan.priceUSD}`}
              </Price>
              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </FeatureList>
              <CTAButton href={plan.link}>Get Started</CTAButton>
            </Card>
          </ScrollAnimation>
        ))}
      </Cards>
    </Section>
  );
};

export default Pricing;
