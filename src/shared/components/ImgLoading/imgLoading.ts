import styled from 'styled-components';

export const ImgLoading = styled.img`
    display: block;
    width: 30vw;
    height: 30%;
    margin: 10rem auto;
    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        && {
            animation: logo-spin infinite 1.5s linear;
        }
    }
`;
