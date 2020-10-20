import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import blobIllustration from 'assets/illustrations/blob-bg.svg';

export const IntroWrapper = styled.div`
  height: 100vh;
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: 50%;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

export const DetailsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 2.5;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 1400px) {
       mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 1400px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  & {
  flex: 1;

  @media (max-width: 960px) {
    width: 70%;
  }

  img {
    width: 100%;
  }
} 
`;
