import React from 'react';
import styled from 'styled-components';

const Toggle = styled.button`
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : '#fff'};
  color: ${({ theme }) => theme.mode === 'dark' ? '#ffd700' : '#111'};
  padding: 0.6rem 1rem;
  border: 1px solid ${({ theme }) => theme.mode === 'dark' ? '#ffd700' : '#ddd'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: auto;
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 0 10px rgba(255, 215, 0, 0.3)' : '0 0 10px rgba(0,0,0,0.1)'};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.mode === 'dark' ? '#ffd700' : '#7f5af0'};
    color: ${({ theme }) => theme.mode === 'dark' ? '#111' : '#fff'};
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 0 20px rgba(255, 215, 0, 0.6)' : '0 0 20px rgba(127, 90, 240, 0.5)'};
    transform: scale(1.05);
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
