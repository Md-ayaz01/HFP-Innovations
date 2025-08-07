import React from 'react';
import styled from 'styled-components';

const Toggle = styled.button`
  background: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text};
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: auto;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <Toggle onClick={toggleTheme}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </Toggle>
  );
};

export default ThemeToggle;
