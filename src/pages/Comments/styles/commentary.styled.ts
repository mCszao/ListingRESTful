import styled from 'styled-components';
import { BoxCommentary } from '../boxCommentary';

export const MainPost = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 70%;
    border-bottom: 1px solid gray;

    p {
        font-size: 1.5rem;
    }
`;

export const BoxComments = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    width: 80%;
    height: 80vh;
`;

export const StyledBoxCommentary = styled(BoxCommentary)`
    width: 100%;
    display: table;
    background-color: white;
    padding: 1rem;

    &&:hover {
        border-bottom: 1px solid gray;
        background-color: #cce9f4;
    }
    a {
        text-decoration: none;
        color: #80a7d1;
    }
`;
