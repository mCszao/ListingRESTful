import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBackHome } from '../../shared/components/ButtonBackHome/buttonBackHome';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';
import { ImgLoading } from '../../shared/components/ImgLoading/imgLoading';
import { useApi } from '../../shared/hooks/useApi';
import { IUser } from '../../shared/interface/IUser';
import ReactLogo from '../../assets/images/react.svg';

import {
    ProfileInfos,
    StyledGeneralInfos,
    StyledLocalizationInfos,
    StyledContactInfos,
    StyledWorkInfos,
} from './styles/Profile.styled';

export const Profile = () => {
    const params = useParams();
    const api = useApi();
    const [user, setUser] = useState<IUser>();

    const loadInfo = async () => {
        const actualUser = await api.getUserById(params.slug!);
        setUser(actualUser);
    };
    useEffect(() => {
        loadInfo();
    }, []);

    return (
        <FlexContainer>
            <ButtonBackHome />
            <ProfileInfos>
                {api.loading && <ImgLoading src={ReactLogo} />}
                {user && (
                    <StyledGeneralInfos
                        name={user?.name}
                        username={user?.username}
                        email={user?.email}
                    />
                )}
                <FlexContainer withoutBorder={true}>
                    {user?.address && (
                        <StyledLocalizationInfos
                            city={user?.address?.city}
                            street={user?.address?.street}
                            suite={user?.address?.suite}
                            zipcode={user?.address?.zipcode}
                        />
                    )}
                    {user?.phone && (
                        <StyledContactInfos
                            phone={user?.phone}
                            website={user.website}
                        />
                    )}
                    {user?.company && (
                        <StyledWorkInfos
                            name={user?.company?.name}
                            catchPhrase={user?.company?.catchPhrase}
                            bs={user.company.bs}
                        />
                    )}
                </FlexContainer>
            </ProfileInfos>
        </FlexContainer>
    );
};
