import { SVGNoPhoto } from '../../assets/icons/svgNoPhoto';
import { GeneralInfosProps } from './types/GeneralInfosProp';

export const GeneralInfos = ({
    name,
    username,
    email,
    imageLink,
    className,
}: GeneralInfosProps) => {
    return (
        <div className={className}>
            <div>
                <h2>{name}</h2>
                <i>@{username}</i>
                <p>{email}</p>
            </div>

            {imageLink ? (
                <img src={imageLink} alt={name} />
            ) : (
                <SVGNoPhoto width={200} height={200} />
            )}
        </div>
    );
};
