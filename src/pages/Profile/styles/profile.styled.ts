import styled from 'styled-components';
import { ContactInfos } from '../contactInfos';
import { GeneralInfos } from '../generalInfos';
import { LocalizationInfos } from '../localizationInfos';
import { WorkInfos } from '../workInfos';
export const ProfileInfos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    width: 70%;
    height: 100vh;
`;

export const StyledGeneralInfos = styled(GeneralInfos)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    img {
        width: 30%;
        height: 30vh;
    }
`;

export const StyledLocalizationInfos = styled(LocalizationInfos)`
    list-style: none;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #99bddd;
    border-radius: 1rem;
    width: 30vw;

    @media (max-width: 720px) {
        width: 50vw;
    }
    li {
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const StyledContactInfos = styled(ContactInfos)`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    div {
        display: flex;
        align-items: center;
    }
`;

export const StyledWorkInfos = styled(WorkInfos)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #99bddd;
`;
