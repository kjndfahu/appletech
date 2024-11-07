import {Phone} from "lucide-react";

export const ContactsBlock:React.FC = () => {
    return (
        <div className="flex flex-col justify-end">
            <div className="flex items-center flex-row gap-2">
                <Phone width={19} color="#B7B7B7"/>
                <h4 className="text-[20px]">+7 812 561 96 62</h4>
            </div>
            {/*<div className="flex flex-col gap-1">*/}
            {/*    <h4 className="text-[16px] text-[#0071E4]">Вам перезвонить?</h4>*/}
            {/*</div>*/}
        </div>
    )
}