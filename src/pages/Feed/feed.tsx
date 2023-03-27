import { useEffect, useState } from 'react';
import { useApi } from '../../shared/hooks/useApi';
import { IPost } from '../../shared/interface/IPost';
import { IUser } from '../../shared/interface/IUser';
import { filteredPost } from '../../shared/services/FilteredPost';
import { StyledPost, StyledResponsiveIcon } from './styles/feed.styled';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';
import { BsPeopleFill } from 'react-icons/bs';
import {
    BoxResult,
    StyledItemResult,
} from '../../shared/components/SideBar/styles/SideBar.styled';
import { ImgLoading } from '../../shared/components/ImgLoading/imgLoading';
import ReactLogo from '../../assets/images/react.svg';

export const Feed = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isOpen, setOpen] = useState<boolean>(true);
    useEffect(() => {
        loadInformation();
    }, []);
    const api = useApi();

    const loadInformation = async () => {
        const allPosts = await api.getAllPosts();
        const allUsers = await api.getAllUsers();
        setPosts(allPosts);
        setUsers(allUsers);
    };

    const filteredPosts = filteredPost(users, posts);

    return (
        <FlexContainer>
            {api.loading && <ImgLoading src={ReactLogo} />}
            {isOpen ? (
                filteredPosts.map((post, index) => (
                    <StyledPost
                        key={index}
                        username={post.name}
                        title={post.title}
                        body={post.body}
                        userId={post.userId}
                        postId={post.postId}
                    />
                ))
            ) : (
                <FlexContainer>
                    {api.loading && <ImgLoading src={ReactLogo} />}
                    <BoxResult>
                        {users.map((user, index) => (
                            <StyledItemResult
                                key={index}
                                name={user.name}
                                username={user.username}
                                id={user.id}
                            />
                        ))}
                    </BoxResult>
                </FlexContainer>
            )}
            <StyledResponsiveIcon
                isOpen={isOpen}
                onClick={() => setOpen(!isOpen)}
            >
                <BsPeopleFill size={'1rem'} />
            </StyledResponsiveIcon>
        </FlexContainer>
    );
};
