import axios from 'axios';
import { useState } from 'react';
import { IComments } from '../interface/IComments';
import { IPost } from '../interface/IPost';
import { IUser } from '../interface/IUser';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const api = {
        loading,
        getAllPosts: async (): Promise<IPost[]> => {
            setLoading(true);
            const response = await instance.get('/posts');
            setLoading(false);
            return response.data;
        },
        getAllUsers: async (): Promise<IUser[]> => {
            setLoading(true);
            const response = await instance.get('/users');
            setLoading(false);
            return response.data;
        },
        getUserById: async (id: string): Promise<IUser> => {
            setLoading(true);
            const response = await instance.get(`/users/${id}`);
            setLoading(false);
            return response.data;
        },
        getPostById: async (id: string): Promise<IPost> => {
            setLoading(true);
            const response = await instance.get(`/posts/${id}`);
            setLoading(false);
            return response.data;
        },
        getCommentsByPostId: async (id: string): Promise<IComments[]> => {
            setLoading(true);
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`
            );
            setLoading(false);
            return response.data;
        },
    };
    return api;
};
