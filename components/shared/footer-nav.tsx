interface Props{
    className?:string;
}

export const FooterNav:React.FC<Props> = ({className}) => {
    const data = ['Гарантия', 'Политика и возврат', 'Кредит', 'Доставка и оплата', 'Отзывы', 'Контакты', 'Политика конфиденциальности']

    return (
        <div className="flex flex-col gap-4 text-[16px] text-black">
            {data.map((item) => (
                <h2 key={item}>{item}</h2>
            ))}
        </div>
    )
}