import { useNavigate } from 'react-router-dom';
import { ItemResultProps } from './types/ItemResultProps';
export const ItemResult = ({
    className,
    name,
    username,
    id,
}: ItemResultProps) => {
    const navigate = useNavigate();
    return (
        <li className={className} onClick={() => navigate(`profile/${id}`)}>
            <h2>{name}</h2>
            <p>#{username}</p>
        </li>
    );
};
