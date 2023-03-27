import { BoxCommentaryProps } from './types/BoxCommentaryProps';

export const BoxCommentary = ({
    name,
    body,
    className,
}: BoxCommentaryProps) => {
    return (
        <li className={className}>
            <a href='#'>@{name}</a>
            <p>{body}</p>
        </li>
    );
};
