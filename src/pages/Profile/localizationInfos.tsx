import { IAddress } from '../../shared/interface/IAddress';

export const LocalizationInfos = ({
    city,
    street,
    suite,
    zipcode,
    className,
}: IAddress) => {
    return (
        <ul className={className}>
            <li>{city}</li>
            <li>{street}</li>
            <li>{suite}</li>
            <li>{zipcode}</li>
        </ul>
    );
};
