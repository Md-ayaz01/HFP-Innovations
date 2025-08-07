import React from 'react';
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
  margin-bottom: 3rem;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background: ${({ theme }) => theme.bg};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    padding: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: ${({ theme }) => theme.bgLight};
    color: ${({ theme }) => theme.text};
    resize: none;
  }

  button {
    background: #7f5af0;
    color: white;
    padding: 0.9rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: #6843d7;
      transform: scale(1.03);
    }
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <ScrollAnimation>
        <Title>📩 Contact Us</Title>
        <SubTitle>
          Let’s talk about your project or just say hello.<br />
          📧 Email: pathanayaz1215@gmail.com<br />
          📍 Location: India<br />
          💬 WhatsApp: +91 78983 22364
        </SubTitle>

      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Form action="https://formspree.io/f/mdkdwbwd" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </Form>
      </ScrollAnimation>
    </Section>
  );
};

export default Contact;
