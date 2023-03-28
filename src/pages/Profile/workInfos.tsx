import { WorkInfosProps } from './styles/workInfosProps';
import { MdOutlineWork } from 'react-icons/md';
export const WorkInfos = ({ name, catchPhrase, className }: WorkInfosProps) => {
    return (
        <div className={className}>
            <MdOutlineWork size={'5rem'} />
            <div>
                <h2>{name}</h2>
                <p>{catchPhrase}</p>
            </div>
        </div>
    );
};
