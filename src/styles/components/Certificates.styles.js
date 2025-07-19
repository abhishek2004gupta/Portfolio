import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CertificatesSection = styled.section`
  min-height: 50vh;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

export const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const CertificateCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CertificateIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;

export const CertificateContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CertificateTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

export const CertificateIssuer = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  margin-bottom: 0.25rem;
`;

export const CertificateDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.6;
  margin-bottom: 1rem;
`;

export const ViewButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: ${props => props.theme.primary}dd;
  }
`; 