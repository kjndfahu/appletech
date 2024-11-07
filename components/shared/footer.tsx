import {IntroFooter} from "@/components/shared/intro-footer";
import {FooterNav} from "@/components/shared/footer-nav";
import {FooterCategories} from "@/components/shared/footer-categories";
import {FooterContacts} from "@/components/shared/footer-contacts";

interface Props{
    className?:string;
}

export const Footer:React.FC<Props> =({className}) => {
    return (
        <div className="flex flex-row justify-between px-[120px] py-10">
            <div className='flex flex-row gap-24'>
                <IntroFooter/>
                <FooterNav/>
                <FooterCategories/>
            </div>
            <FooterContacts/>
        </div>
    )
}