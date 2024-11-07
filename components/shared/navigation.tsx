import Link from 'next/link';
import React from 'react'

interface Props{
    className?:string;
}

export const Navigation:React.FC<Props> = ({className}) => {
    return (
        <div className="flex gap-7 text-[18px]">
            <Link href="/warranty">
                <h2>Гарантия</h2>
            </Link>
            <Link href="/refund">
                <h2>Политика и возврат</h2>
            </Link>
            <Link href="/credit">
                <h2>Кредит</h2>
            </Link>
            <h2>Доставка и оплата</h2>
            <h2>Отзывы</h2>
            <h2>Контакты</h2>
        </div>
    )
}