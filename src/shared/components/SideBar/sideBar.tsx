import {
    BoxResult,
    InputContainer,
    StyledItemResult,
    SearchInput,
    StyledSideBar,
} from './styles/SideBar.styled';
import { FcSearch } from 'react-icons/fc';
import { ChangeEvent, useEffect, useState } from 'react';
import { IUser } from '../../interface/IUser';
import { useApi } from '../../hooks/useApi';
import { ImgLoading } from '../ImgLoading/imgLoading';
import ReactLogo from '../../../assets/images/react.svg';
export const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');

    const api = useApi();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const filteredNames =
        search.length != 0
            ? users.filter((user) => {
                  const regex = new RegExp(search, 'i');
                  return user.name.match(regex);
              })
            : [];

    const loadInfo = async () => {
        const json = await api.getAllUsers();
        setUsers(json);
    };
    useEffect(() => {
        loadInfo();
    }, []);
    return (
        <StyledSideBar>
            {api.loading && <ImgLoading src={ReactLogo} />}
            <InputContainer>
                <SearchInput
                    type='text'
                    name='search'
                    id='search'
                    placeholder='Pesquise um nome aqui'
                    value={search}
                    onChange={handleChange}
                />
                <label htmlFor='search'>
                    <FcSearch size={'2rem'} />
                </label>
            </InputContainer>
            {search.length === 0 ? (
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
            ) : (
                <BoxResult>
                    {filteredNames.map((user, index) => (
                        <StyledItemResult
                            key={index}
                            name={user.name}
                            username={user.username}
                            id={user.id}
                        />
                    ))}
                </BoxResult>
            )}
        </StyledSideBar>
    );
};
