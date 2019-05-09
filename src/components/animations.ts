import { keyframes } from 'styled-components';

export const appearUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(45%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
