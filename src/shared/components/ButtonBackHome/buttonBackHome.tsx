import { AiOutlineRollback } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { StyledButtonBackHome } from './styledButtonBackHome.styled';
export const ButtonBackHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <StyledButtonBackHome type='button' onClick={handleClick}>
            <AiOutlineRollback size={'2rem'} strokeWidth={'1.5rem'} />
        </StyledButtonBackHome>
    );
};
