import styled from 'styled-components';
import { Post } from '../post';
import { ResponsiveIconProps } from '../types/ResponsiveIconProps';

export const StyledPost = styled(Post)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    border-bottom: 1px solid gray;
    width: 60vw;
    height: 30vh;
    max-height: 40vh;
    background-color: #fff;
    border: 1px solid gray;

    padding: 1rem;

    @media (max-width: 720px) {
        width: 90vw;
        display: table;

        border-top: 1px solid gray;

        margin-top: 0;
    }

    &&:nth-child(1) {
        border-radius: 1rem 1rem 0 0;
        margin-top: 2rem;
    }

    &&:hover {
        background-color: #cce9f4;
    }

    h3 {
        border-top: 1px solid #99bddd;
    }

    p {
        margin-bottom: 0.5rem;
    }
    a {
        margin-top: 1rem;
        text-decoration: none;
        color: #2a86ed;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 400;
        transition: all 0.5s ease;
        margin-bottom: 1rem;

        height: 2vh;
    }
    a:hover {
        transform: translateY(15%);
    }
`;

export const LinkCommentary = styled.a`
    align-self: flex-end;
    margin-bottom: 2rem;

    &&:hover {
        color: #80a7d1;
    }
`;

export const StyledResponsiveIcon = styled.div<ResponsiveIconProps>`
    display: none;
    padding: 0.5rem;
    border-radius: 50%;
    position: fixed;
    top: 1%;
    right: 1%;
    background-color: #80a7d1;
    transition: all 0.5s ease;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (max-width: 720px) {
        display: flex;
    }
`;
