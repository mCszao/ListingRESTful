import { PostProps } from './types/PostProps';
import { useNavigate } from 'react-router-dom';
import { LinkCommentary } from './styles/feed.styled';
export const Post = ({
    userId,
    postId,
    username,
    title,
    body,
    className,
}: PostProps) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <a
                onClick={() => {
                    navigate(`profile/${userId}`);
                }}
            >
                {username}
            </a>
            <h3>{title}</h3>
            <p>{body}</p>
            <LinkCommentary
                onClick={() => {
                    navigate(`post/${postId}`);
                }}
            >
                comentários
            </LinkCommentary>
        </div>
    );
};
