interface Props {
    className?: string;
    logo: JSX.Element;
    title: string;
    description: string;
}

export const Card:React.FC<Props> = ({logo, title, description, className}) => {
    return (
        <div className="flex flex-col w-[389px] h-[120px] p-[24px] rounded-[16px] bg-[#F3F8FF]">
            <div className="flex items-center gap-2 flex-row">
                {logo}
                <h2 className="font-bold text-[24px] leading-[28px] text-[#282626]">{title}</h2>
            </div>
            <h3 className="text-[16px] leading-[19px] text-[#585656]">{description}</h3>
        </div>
    )
}