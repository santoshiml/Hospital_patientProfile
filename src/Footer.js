import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

export default function Footer() {
  return (
    <div>
        <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#visionmission">Vision</FooterLink>
            <FooterLink href="#visionmission">Mission</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#Orthopaedicservices">Orthopaedics</FooterLink>
            <FooterLink href="#eyeBariatricsurgeon">Bariatric Surgeon</FooterLink>
            <FooterLink href="#eyeBariatricsurgeon">Eye's Surgeon</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <p className="footerCopy">&copy; 2017  Healthcare Website PVT. LTD. |  All Rights Reserved   |   Privacy Policy</p>
    </Box>
   
   
    </div>
  )
}
