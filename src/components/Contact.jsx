// src/components/Contact.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

// Floating particles animation
const floatParticles = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.8; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.4; }
  100% { transform: translateY(0) translateX(0); opacity: 0.8; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: #0f2027;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;

  /* Golden particles */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    animation: ${floatParticles} 20s linear infinite;
    z-index: 0;
  }
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
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const Form = styled(motion.form)`
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  color: #111;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 215, 0, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    box-shadow: 0 12px 35px rgba(255, 215, 0, 0.35);
    border-color: #ffd700;
    background-image: linear-gradient(
      90deg,
      rgba(255, 215, 0, 0.05) 0%,
      rgba(255, 215, 0, 0.15) 50%,
      rgba(255, 215, 0, 0.05) 100%
    );
    background-size: 200px 100%;
    animation: ${floatParticles} 1.5s linear infinite;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid rgba(255, 215, 0, 0.15);
    border-radius: 10px;
    font-size: 1rem;
    background: #f9f9f9;
    color: #111;
    outline: none;
    resize: none;

    &::placeholder {
      color: #888;
    }

    &:focus {
      border-color: #ffd700;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    }
  }

  button {
    background: #ffd700;
    color: black;
    padding: 0.9rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);

    &:hover {
      background: #e6c200;
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`;

const ActionButton = styled.a`
  display: inline-block;
  background: ${({ bg }) => bg || "#ffd700"};
  color: ${({ color }) => color || "black"};
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    background: ${({ hoverBg }) => hoverBg || "#e6c200"};
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <ScrollAnimation>
        <Title>📩 Contact Us</Title>
        <SubTitle>
          Let’s discuss your project or just say hello.<br />
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

      <ButtonGroup>
        <ActionButton
          href="https://wa.me/917898322364"
          target="_blank"
          bg="#25D366"
          color="#fff"
          hoverBg="#1DA851"
        >
          💬 WhatsApp Us
        </ActionButton>

        <ActionButton
          href="#book" // Replace with your booking link
          bg="#ffd700"
          color="#000"
          hoverBg="#e6c200"
        >
          📅 Book a Consultancy
        </ActionButton>
      </ButtonGroup>
    </Section>
  );
};

export default Contact;
