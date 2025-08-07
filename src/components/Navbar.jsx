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
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);

  ${({ theme }) =>
    theme.bg === '#121212' &&
    `background-color: rgba(30, 30, 30, 0.7);`}
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
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    position: relative;
    cursor: pointer;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;

    &:hover {
      color: #7f5af0;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: #7f5af0;
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &.active {
      color: #7f5af0;
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
  color: ${({ theme }) => theme.text};

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
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 1000;

  a {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #7f5af0;
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
        <Link to="hero" smooth duration={500} offset={-80} spy={true} activeClass="active">Home</Link>
        <Link to="services" smooth duration={500} offset={-80} spy={true} activeClass="active">Services</Link>
        <Link to="projects" smooth duration={500} offset={-80} spy={true} activeClass="active">Projects</Link>
        <Link to="pricing" smooth duration={500} offset={-80} spy={true} activeClass="active">Pricing</Link>
        <Link to="about" smooth duration={500} offset={-80} spy={true} activeClass="active">About</Link>
        <Link to="testimonials" smooth duration={500} offset={-80} spy={true} activeClass="active">Testimonials</Link>
        <Link to="blog" smooth duration={500} offset={-80} spy={true} activeClass="active">Blog</Link>
        <Link to="contact" smooth duration={500} offset={-80} spy={true} activeClass="active">Contact</Link>
      </Menu>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>

      <MobileMenu open={menuOpen}>
        <Link to="hero" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="services" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="projects" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="pricing" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link to="about" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="testimonials" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Testimonials</Link>
        <Link to="blog" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="contact" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Contact</Link>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
