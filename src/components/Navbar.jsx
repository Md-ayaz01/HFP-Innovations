import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(15px);
  background-color: rgba(15, 32, 39, 0.85); /* Dark hero-like background */
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
`;

const CompanyName = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd700; /* Golden premium text */
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    position: relative;
    cursor: pointer;
    font-weight: 500;
    color: rgba(255, 215, 0, 0.85); /* golden subtle */
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: #ffd700;
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &.active {
      color: #ffd700;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffd700;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 2rem;
  background: rgba(15, 32, 39, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  padding: 1rem;
  z-index: 1000;

  a {
    margin: 0.5rem 0;
    color: #ffd700;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Brand>
        <Logo
          src="/assets/logo/hfp-logo.jpg"
          alt="HFP Logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/logo/placeholder-logo.png';
          }}
        />
        <CompanyName>HFP Innovations</CompanyName>
      </Brand>

      <Menu>
        {['hero','services','projects','pricing','about','testimonials','blog','contact'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass="active"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </Menu>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>

      <MobileMenu open={menuOpen}>
        {['hero','services','projects','pricing','about','testimonials','blog','contact'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
