import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) =>
    theme.mode === "light" ? "#f9f9f9" : theme.bgLight};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) =>
    theme.mode === "light" ? "#222" : theme.text};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) =>
    theme.mode === "light" ? "#555" : theme.textLight};
  margin-bottom: 3rem;
`;

const Form = styled(motion.form)`
  max-width: 500px;
  margin: 0 auto;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "white"
      : "rgba(255, 255, 255, 0.05)"};
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: 16px;
  border: ${({ theme }) =>
    theme.mode === "light"
      ? "1px solid #ddd"
      : "1px solid rgba(255, 215, 0, 0.4)"};
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? "0 12px 24px rgba(0, 0, 0, 0.08)"
      : "0 0 15px rgba(255, 215, 0, 0.3)"};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    padding: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: ${({ theme }) =>
      theme.mode === "light"
        ? "#f5f5f5"
        : "rgba(255, 255, 255, 0.1)"};
    color: ${({ theme }) =>
      theme.mode === "light" ? "#000" : "#fff"};
    resize: none;
    border: 1px solid
      ${({ theme }) =>
        theme.mode === "light"
          ? "#ddd"
          : "rgba(255, 215, 0, 0.3)"};
    outline: none;

    &::placeholder {
      color: ${({ theme }) =>
        theme.mode === "light" ? "#666" : "#ccc"};
    }
  }

  button {
    background: ${({ theme }) =>
      theme.mode === "light" ? "#7f5af0" : "gold"};
    color: ${({ theme }) =>
      theme.mode === "light" ? "white" : "black"};
    padding: 0.9rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: ${({ theme }) =>
      theme.mode === "light"
        ? "0 0 10px rgba(127, 90, 240, 0.3)"
        : "0 0 15px rgba(255, 215, 0, 0.4)"};

    &:hover {
      background: ${({ theme }) =>
        theme.mode === "light" ? "#6843d7" : "#ffcc00"};
      transform: scale(1.05);
      box-shadow: ${({ theme }) =>
        theme.mode === "light"
          ? "0 0 20px rgba(127, 90, 240, 0.5)"
          : "0 0 25px rgba(255, 215, 0, 0.6)"};
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
        <Form
          action="https://formspree.io/f/mdkdwbwd"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
