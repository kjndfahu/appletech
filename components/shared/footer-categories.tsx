interface Props{
    className?:string;
}

export const FooterCategories:React.FC<Props> = ({className}) => {
    const data = [
        {
            id: 1,
            title: 'iPhone',
        },
        {
            id: 2,
            title: 'iPad',
        },
        {
            id: 3,
            title: 'Macbook и iMac',
        },
        {
            id: 4,
            title: 'Watch',
        },
        {
            id: 5,
            title: 'Аксессуары',
        },
        {
            id: 6,
            title: 'Акции',
        },
    ]

    return (
        <div className="flex flex-col gap-4 text-[16px] text-black">
            {data.map((item) => (
                <h2 key={item.id}>{item.title}</h2>
            ))}
        </div>
    )
}