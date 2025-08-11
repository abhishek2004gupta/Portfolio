import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background-color: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 3rem;
  grid-column: 1 / -1;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
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

const ContactText = styled.div`
  color: ${props => props.theme.text};
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
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

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.text};
  font-size: 1rem;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const SubmitButton = styled(motion.button)`
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

const SuccessMessage = styled.div`
  color: ${props => props.theme.success};
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.error};
  text-align: center;
  margin-top: 1rem;
`;

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </Title>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <InfoTitle>Email</InfoTitle>
              <InfoDescription>abhishekg272004@gmail.com</InfoDescription>
            </ContactText>
          </ContactCard>
          <ContactCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>
              <InfoTitle>Phone</InfoTitle>
              <InfoDescription>+91-6396796950</InfoDescription>
            </ContactText>
          </ContactCard>
          <ContactCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              <InfoTitle>Location</InfoTitle>
              <InfoDescription>Bangalore, India</InfoDescription>
            </ContactText>
          </ContactCard>
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
        </ContactInfo>
        <ContactForm
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          {submitStatus === 'success' && (
            <SuccessMessage>
              Message sent successfully! I'll get back to you soon.
            </SuccessMessage>
          )}
          {submitStatus === 'error' && (
            <ErrorMessage>
              Failed to send message. Please try again later.
            </ErrorMessage>
          )}
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default Contact; 