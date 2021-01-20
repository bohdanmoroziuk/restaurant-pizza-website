import { FC } from 'react';
import {
  Container,
  Content,
  SocialMedia,
  SocialMediaContent,
  Logo,
  SocialIcons,
  SocialIconLink
} from 'components/Footer/elements';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitterSquare, 
  FaYoutube 
} from 'react-icons/fa';

const Footer: FC = () => (
  <Container>
    <Content>
      <SocialMedia>
        <SocialMediaContent>
          <Logo to="/">Pizza</Logo>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitterSquare />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaContent>
      </SocialMedia>
    </Content>
  </Container>
);

export default Footer;
