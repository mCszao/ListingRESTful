import { IFilteredPost } from '../interface/IFilteredPostList';
import { IUser } from '../interface/IUser';
import { IPost } from '../interface/IPost';
export const filteredPost = (firstList: IUser[], sndList: IPost[]) => {
    const filteredPostlList: IFilteredPost[] = [];
    for (const user in firstList) {
        for (const post in sndList) {
            if (firstList[user].id === sndList[post].userId)
                filteredPostlList.push({
                    name: firstList[user].name,
                    postId: sndList[post].id,
                    title: sndList[post].title,
                    body: sndList[post].body,
                    userId: sndList[post].userId,
                });
        }
    }
    console.log(filteredPostlList);

    return filteredPostlList;
};
