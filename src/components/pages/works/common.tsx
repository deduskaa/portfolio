import styled from 'styled-components';
import { theme } from '../../theme';
import { fadeIn } from '../../animations';

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

export const Section = styled.section`
  max-width: 650px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0 30px;
  border-bottom: 1px solid ${theme.colors.light_gray};
`;

export const Heading = styled.div`
  animation: ${fadeIn} 0.9s;
  max-width: 650px;
  margin: 50px auto;
`;

export const Link = styled.a`
  color: ${theme.colors.main};
  &:hover {
    text-decoration: underline;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  margin: 0 20px 0 0;

  ul {
    padding: 0 20px;
    list-style-type: circle;
  }

  li {
    margin: 10px 0;
    font-family: ${theme.fonts.light_text};
  }
`;

export const Img = styled.img`
  height: 100%;
  max-width: 900px;
  width: 100%;
`;

export const WorkTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 30px;
  margin: 20px 0;
`;

export const SubTitle = styled.h3`
  font-family: ${theme.fonts.heading};
`;

export const SubTitleLink = styled(SubTitle)`
  color: ${theme.colors.main};
`;

export const Text = styled.p`
  font-family: ${theme.fonts.light_text};
  color: ${theme.colors.text};
  line-height: 1.8;
`;

export const Description = styled.p`
  color: ${theme.colors.gray};
  font-size: 18px;
  margin: 15px 0;
`;
