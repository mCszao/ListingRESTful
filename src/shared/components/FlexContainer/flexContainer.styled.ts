import styled from 'styled-components';
import { FlexContainerProps } from './types/FlexContainerProps';
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 65vw;
    max-width: 75vw;
    background-color: ${(props) => (props.bgColor ? props.bgColor : 'none')};
    border-right: ${(props) =>
        props.withoutBorder ? 'none' : '1px solid gray'};

    @media (max-width: 720px) {
        width: 100%;
        max-width: 100vw;
        border-right: none;
    }
`;
