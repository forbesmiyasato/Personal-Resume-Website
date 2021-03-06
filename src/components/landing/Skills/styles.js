import styled from "styled-components";
import detailsIllustration from "assets/illustrations/details.svg";

export const Wrapper = styled.div`
    background-image: url(${detailsIllustration});
    background-size: contain;
    background-position: left top;
    background-repeat: no-repeat;

    animation: animatedBackgroundAbout 4s ease-in-out infinite alternate;

    @keyframes animatedBackgroundAbout {
        0% { background-position-y: -20px; }
        50% { background-position-y: 0px; }
        100% { background-position-y: -20px; }
    }
`;

export const SkillsWrapper = styled.div`
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Details = styled.div`
    flex: 1;
    padding-left: 2rem;
    min-height: 400px;
    @media (max-width: 960px) {
        padding-left: unset;
        width: 100%;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 26pt;
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};

        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) =>
                theme === "light" ? "unset" : "difference"};
        }
    }

    p {
        margin-bottom: 2.5rem;
        font-size: 1.2rem;
        font-weight: normal;
        line-height: 1.3;
        color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};

        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) =>
                theme === "light" ? "unset" : "difference"};
        }
    }

    a {
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};
    }

    ol li {
        color: ${({ theme }) => (theme === "dark" ? "#fff" : "#212121")};
        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) =>
                theme === "light" ? "unset" : "difference"};
        }
    }
`;

export const Thumbnail = styled.div`
    flex: 1;

    @media (max-width: 960px) {
        width: 100%;
        max-width: 400px;
        height: 400px;
        margin-bottom: 2rem;
    }

    img {
        width: 100%;
    }
`;
