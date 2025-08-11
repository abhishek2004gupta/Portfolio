import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaFilePdf } from 'react-icons/fa';
import CertificateModal from './CertificateModal';
import {
  CertificatesSection,
  Container,
  Title,
  CertificatesGrid,
  CertificateCard,
  CertificateIcon,
  CertificateContent,
  CertificateTitle,
  CertificateIssuer,
  CertificateDate,
  ViewButton
} from '../styles/components/Certificates.styles';

const certificates = [
  {
    id: 1,
    title: 'Java DSA',
    issuer: 'Udemy',
    date: '2024',
    icon: <FaCertificate />,
    pdf: '/certificates/java-dsa.pdf'
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2025',
    icon: <FaCertificate />,
    pdf: '/certificates/full-stack.pdf'
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <CertificatesSection id="certificates">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </Title>
        <CertificatesGrid>
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificateIcon>{certificate.icon}</CertificateIcon>
              <CertificateContent>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
                <CertificateDate>{certificate.date}</CertificateDate>
                <ViewButton
                  onClick={() => handleViewCertificate(certificate)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFilePdf /> View Certificate
                </ViewButton>
              </CertificateContent>
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Container>
      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={handleCloseModal}
        pdfUrl={selectedCertificate?.pdf}
      />
    </CertificatesSection>
  );
};

export default Certificates; 