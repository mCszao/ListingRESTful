import { ContactInfosProps } from './styles/ContactInfosProps';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
export const ContactInfos = ({
    className,
    phone,
    website,
}: ContactInfosProps) => {
    return (
        <div className={className}>
            <div>
                <BsPhoneVibrateFill size={'2rem'} />
                <i>{phone}</i>
            </div>
            <div>
                <MdOutlineMarkEmailUnread size={'2rem'} />
                <i>{website}</i>
            </div>
        </div>
    );
};
