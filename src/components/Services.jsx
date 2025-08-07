import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import { FaLaptopCode, FaRobot, FaPalette, FaChartLine } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.bg};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.textLight};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  padding: 2rem;
  width: 260px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.07);
  text-align: left;
  transition: all 0.3s ease;
  cursor: default;

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #7f5af0;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description:
      'We craft responsive, modern websites with clear messaging and smooth user experience.',
  },
  {
    icon: <FaRobot />,
    title: 'AI Chatbots',
    description:
      'We integrate AI tools like GPT, customer support bots, and voice assistants into your site.',
  },
  {
    icon: <FaPalette />,
    title: 'Creative Design',
    description:
      'From visual branding to UI/UX, we design systems that match your business identity.',
  },
  {
    icon: <FaChartLine />,
    title: 'Growth Strategy',
    description:
      'We help you launch, measure, and scale your digital presence with analytics-driven solutions.',
  },
];

const Services = () => {
  return (
    <Section id="services">
      <ScrollAnimation>
        <Title>🚀 What We Offer</Title>
        <SubTitle>
          End-to-end digital solutions built with creativity, AI, and business impact in mind.
        </SubTitle>
      </ScrollAnimation>

      <Grid>
        {services.map((s, i) => (
          <ScrollAnimation key={s.title} delay={0.2 + i * 0.2}>
            <Card
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 150 },
              }}
            >
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Card>
          </ScrollAnimation>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
