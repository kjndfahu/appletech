export const CreditSteps = () => {
    const data = [
        {
            "number": 1,
            "text": "Выберите товар и оформите заказ с оплатой в кредит"
        },
        {
            "number": 2,
            "text": "Согласуйте условия кредитования с нашим менеджером"
        },
        {
            "number": 3,
            "text": "Получите решение от банков и выберите лучшие условия"
        },
        {
            "number": 4,
            "text": "Ожидайте доставку вашего заказа (или самовывоз)"
        },
    ]
    return (
        <div className="flex items-center gap-8 font-semibold flex-col text-[#0071E4] text-[32px]">
            <h2>Получите кредит в 4 шага</h2>
            <div className="flex flex-row gap-8 justify-between">
                {data.map((item) => (
                    <div key={item.number} className="flex gap-4 items-center text-[20px] text-black font-medium text-center leading-[23px] flex-col">
                        <div className="bg-[#F3F8FF] px-[22px] py-2 leading-[47px] text-[#0071E4] text-[40px] font-semibold rounded-[16px]">
                            {item.number}
                        </div>
                        <h2>Выберите товар и оформите заказ с оплатой в кредит</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}