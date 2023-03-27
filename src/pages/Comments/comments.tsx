import { useParams } from 'react-router-dom';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';
import { useApi } from '../../shared/hooks/useApi';
import { IPost } from '../../shared/interface/IPost';
import { useState, useEffect } from 'react';
import { IComments } from '../../shared/interface/IComments';
import { ButtonBackHome } from '../../shared/components/ButtonBackHome/buttonBackHome';
import {
    BoxComments,
    MainPost,
    StyledBoxCommentary,
} from './styles/commentary.styled';
import ReactLogo from '../../assets/images/react.svg';
import { ImgLoading } from '../../shared/components/ImgLoading/imgLoading';

export const Comments = () => {
    const params = useParams();
    const api = useApi();
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<IComments[]>([]);

    const loadInfo = async () => {
        const uniquePost = await api.getPostById(params.slug!);
        const postComments = await api.getCommentsByPostId(params.slug!);
        setPost(uniquePost);
        setComments(postComments);
    };
    useEffect(() => {
        loadInfo();
    }, []);
    return (
        <FlexContainer>
            {api.loading && <ImgLoading src={ReactLogo} />}
            <ButtonBackHome />
            <MainPost>
                <h1>{post?.title}</h1>
                <p>{post?.body}</p>
            </MainPost>
            <BoxComments>
                {comments.map((comment, index) => (
                    <StyledBoxCommentary
                        key={index}
                        name={comment.name}
                        body={comment.body}
                    />
                ))}
            </BoxComments>
        </FlexContainer>
    );
};
