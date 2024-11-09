import {Card} from "@/components/shared/card";

interface Props{
    className?:string;
}

export const Popular:React.FC<Props> = ({className}) => {
    return (
        <div className="px-[120px]">
            <h2 className="text-[#0071E4] font-medium text-[24px]">Самое популярное</h2>

            <div className="flex gap-[75px] flex-row flex-wrap items-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}