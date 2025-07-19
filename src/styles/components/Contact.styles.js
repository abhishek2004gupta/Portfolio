import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 3rem;
  grid-column: 1 / -1;
`;

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

export const InfoText = styled.div`
  color: ${props => props.theme.text};
`;

export const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

export const InfoDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${props => props.theme.text};
  font-size: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`; 