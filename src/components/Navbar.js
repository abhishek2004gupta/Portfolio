import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  ThemeToggle
} from '../styles/components/Navbar.styles';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <Nav>
      <Logo>Portfolio</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#timeline">Timeline</NavLink>
        <NavLink href="#certificates">Certificates</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 