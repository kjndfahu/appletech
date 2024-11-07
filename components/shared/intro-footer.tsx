import {Apple} from "@/components/shared/logos";

interface Props{
    className?:string;
}

export const IntroFooter:React.FC<Props> =({className}) => {
    return (
        <div className="flex flex-col gap-6">
            <Apple/>
            <div className="flex flex-col gap-2 text-[16px] text-[#878787]">
                <p>© 2013-2022</p>
                <p>Продажа iPhone в МСК</p>
            </div>
            <p className="text-[14px] text-[#B7B7B7]">*Сайт не является публичной оффертой.<br/> Вся информация,
                указанная на сайте носит<br/> информационный характер.</p>
        </div>
    )
}