import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.cardBackground};
  padding: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.text};
  opacity: 0.8;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/abhishek2004gupta" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/abhishek-gupta2004" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://leetcode.com/u/abhishek_gupta04/" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Abhishek Gupta. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 