interface Props{
    className?:string;
}

export const Main:React.FC<Props> = ({className}) => {
    return (
        <div className="flex bg-white items-center justify-center">
            <h2 className="text-black text-[48px] font-medium py-[24px]">купить iPhone в Москве</h2>
        </div>
    )
}