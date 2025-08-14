import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const shine = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f2027 0%, #1c1f34 100%); /* hero matching */
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: #ffd700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const ToggleWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  position: relative;
  z-index: 2;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1.2rem;
  background: ${({ $active }) => ($active ? "#ffd700" : "rgba(255,255,255,0.2)")};
  color: black;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ $active }) => ($active ? "#e6c200" : "rgba(255,255,255,0.35)")};
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: #fff; /* white card for premium look */
  color: #111;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 215, 0, 0.15);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(255, 215, 0, 0.35);
    border-color: gold;
    background-image: linear-gradient(
      90deg,
      rgba(255, 215, 0, 0.05) 0%,
      rgba(255, 215, 0, 0.15) 50%,
      rgba(255, 215, 0, 0.05) 100%
    );
    background-size: 200px 100%;
    animation: ${shine} 1.5s linear infinite;
  }
`;

const Price = styled.h3`
  font-size: 1.6rem;
  margin: 1rem 0;
  color: #ffd700;
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
  flex-grow: 1;
  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: #111;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  background: gold;
  color: black;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  &:hover {
    background: #ffcc00;
    transform: scale(1.05);
  }
`;

const plans = [
  { title: "Web & App Development", priceINR: 25000, priceUSD: 300, features: ["Custom UI/UX", "Responsive Design", "Basic SEO", "Deployment Included"], link: "#contact" },
  { title: "AI & Automation", priceINR: 35000, priceUSD: 420, features: ["GPT-powered Chatbot", "Workflow Automation", "Multi-language Support", "Website Integration"], link: "#contact" },
  { title: "Creative & Branding", priceINR: 15000, priceUSD: 180, features: ["Logo + Brand Kit", "Social Media Designs", "UI/UX Assets", "Editable Files"], link: "#contact" },
  { title: "Marketing & Growth", priceINR: 20000, priceUSD: 240, features: ["SEO Optimization", "Social Media Campaigns", "Ads Management", "Analytics Reports"], link: "#contact" },
  { title: "E-Commerce Solutions", priceINR: 40000, priceUSD: 480, features: ["Store Setup", "Payment Gateway", "Inventory Management", "Conversion-Optimized Design"], link: "#contact" },
  { title: "Media & Content", priceINR: 12000, priceUSD: 145, features: ["Video Editing", "AI-Generated Content", "Animations", "Social Media Posts"], link: "#contact" },
  { title: "Advanced AI Solutions", priceINR: 50000, priceUSD: 600, features: ["Custom AI Models", "Predictive Analytics", "ML Applications", "API Development"], link: "#contact" },
  { title: "Cybersecurity & IT Solutions", priceINR: 30000, priceUSD: 360, features: ["Security Audits", "Threat Protection", "Backup Solutions", "IT Support"], link: "#contact" },
  { title: "Cloud & Infrastructure", priceINR: 25000, priceUSD: 300, features: ["Cloud Migration", "Server Management", "Scalable Infrastructure", "Monitoring & Support"], link: "#contact" },
];

const PricingPremium = () => {
  const [currency, setCurrency] = useState("INR");

  return (
    <Section id="pricing">
      <ScrollAnimation>
        <Title>💰 Pricing Plans</Title>
        <SubTitle>Transparent pricing for enterprise-level services — scale with confidence.</SubTitle>
      </ScrollAnimation>

      <ToggleWrapper>
        <ToggleButton $active={currency === "INR"} onClick={() => setCurrency("INR")}>INR ₹</ToggleButton>
        <ToggleButton $active={currency === "USD"} onClick={() => setCurrency("USD")}>USD $</ToggleButton>
      </ToggleWrapper>

      <Cards>
        {plans.map((plan, i) => (
          <ScrollAnimation key={plan.title} delay={0.2 + i * 0.2}>
            <Card whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 140 } }}>
              <PlanTitle>{plan.title}</PlanTitle>
              <Price>{currency === "INR" ? `₹${plan.priceINR.toLocaleString()}` : `$${plan.priceUSD.toLocaleString()}`}</Price>
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

export default PricingPremium;
