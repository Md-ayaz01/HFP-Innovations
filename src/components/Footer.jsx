import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textLight};
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255,255,255,0.05);
`;

const Footer = () => {
  return (
   <Wrapper>
  © {new Date().getFullYear()} HFP Innovations. All rights reserved.<br />
  📧 pathanayaz1215@gmail.com | 📍 India | 💬 +91 78983 22364
</Wrapper>
 
  );
};

export default Footer;
