import { Route, Routes } from 'react-router-dom';
import { Feed } from '../pages/Feed/feed';
import { Comments } from '../pages/Comments/comments';
import { Profile } from '../pages/Profile/profile';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/profile/:slug' element={<Profile />} />
            <Route path='/post/:slug' element={<Comments />} />
        </Routes>
    );
};
