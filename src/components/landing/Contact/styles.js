import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-direction: column;
        padding: 0rem 0;
    }
`;

export const Details = styled.div`
    flex: 1;
    padding-right: 2rem;
    ${({ open }) => ( open ? null : "transform: translateY(200px)")};
    @media (max-width: 960px) {
        padding-right: unset;
        width: 100%;
        order: 1;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 26pt;
    }

    p {
        margin-bottom: 2.5rem;
        font-size: 20pt;
        font-weight: normal;
        line-height: 1.3;
        color: #707070;
    }
`;

export const Thumbnail = styled.div`
    flex: 1;

    @media (max-width: 960px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    img {
        width: 100%;
    }

    animation: animatedBackgroundContact 4s ease-in-out infinite alternate;

    @keyframes animatedBackgroundContact {
        0% {
            transform: translateY(-10px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(-10px);
        }
    }
`;
