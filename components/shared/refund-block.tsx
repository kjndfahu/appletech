import React from "react";

export const RefundBlock:React.FC = () => {
    return (
        <div className="flex flex-col gap-6 py-10 text-black w-[800px]">
            <h2 className="text-[40px]">Политика возврата компании</h2>
            <h3 className="text-[24px] text-[#0071E4]">Обмен и возврат любого устройства возможен в течение 14 дней</h3>
            <div className="flex flex-col gap-4 text-[24px] leading-6">
                Возврат товара ненадлежащего качества
                <p className="text-[16px] leading-5 text-[#585656]">Если покупатель приобрел товар ненадлежащего
                    качества, он имеет право потребовать от продавца:
                    бесплатное устранение всех дефектов или оплату ремонта, совершенного другим сервисным центром;
                    снижение стоимости, соразмерное дефекту;
                    замены на аналогичное устройство, или товар другой модели, торговой марки с учетом разницы в цене.
                    Стоит учитывать, что подобные требования покупателя в отношении дорогих и сложных товаров могут быть
                    удовлетворены, если недостатки являются существенными.
                    Покупатель может отказаться от ремонта, снижения стоимости и замены, вернув дефектный товар и
                    получив обратно всю уплаченную за него сумму.
                    Если дефекты товара стали причиной каких-либо убытков, покупатель имеет право требовать их
                    возмещения. В этом случае для удовлетворения всех требований покупателя необходимо руководствоваться
                    Законом РФ «О защите прав потребителей» и осуществлять возмещение в указанные законодательством
                    сроки.
                    Если продавец отказывается передавать товар, покупатель может потребовать возмещения убытков. Всю
                    сумму стоимости товара продавец должен вернуть в течение 10 дней с момента получения письменных
                    требований.
                    Если у покупателя нет документов, подтверждающих факт покупки, это не лишает его права доказать
                    совершение сделки купли-продажи любым законным способом.
                    Если дефекты были обнаружены у технически сложного дорогостоящего товара, покупатель вправе
                    отказаться от приобретения или потребовать замену на аналогичное устройство. При замене на
                    устройство другой марки или модели, необходимо пересчитать стоимость. Подобную сделку можно
                    осуществить в течение пятнадцати дней, но продавец обязан сначала получить товар для осуществления
                    проверки и подтверждения наличия дефектов.
                    Полный перечень технически сложных товаров можно найти в соответствующем Постановлении Правительства
                    РФ №924.
                    Если в комплекте с товаром был подарок, при осуществлении возврата дефектного товара, покупатель
                    должен вернуть и его, сохранив в товарном виде.
                    Все проверки проводятся в соответствии с законодательством, в указанные в Законе сроки, с оглядкой
                    на требования покупателя и гарантийные обязательства продавца или производителя. Проводить проверку
                    могут только специализированные аккредитованные сервисные центры. Без осуществления подобной
                    проверки продавец не может подтвердить наличие дефекта, причины его возникновения, и обосновать
                    требования клиента, поэтому не может отвечать за просрочку выполнения замены или возврата до того,
                    как товар был ему передан.
                    Если в результате проверки будет установлено, что причиной недостатков стало небрежное отношение к
                    устройству со стороны покупателя, то он обязуется возместить расходы на транспортировку и проведение
                    экспертизы.</p>
            </div>
            <div className="flex flex-col gap-4 text-[24px] leading-6">
                Возврат товара надлежащего качества
                <p className="text-[16px] leading-5 text-[#585656]">Вернуть товар надлежащего качества возможно при соблюдении некоторых условий: наличие документов, подтверждающих покупку. Если соответствующий документ отсутствует, покупатель может совершить возврат, доказав факт покупки любым другим способом.
                    Если устройство имеет индивидуальные свойства, и предназначено для использования исключительно конкретным потребителем, покупатель не может осуществить возврат.
                    Если покупатель отказывается от приобретения устройства, продавец обязан возместить всю сумму, которая была оплачена, за исключением транспортных расходов. Сроки рассмотрения в соответствии со статьей 22 - 10 дней
                    Если к товару прилагался подарок, клиент обязуется вернуть его, при этом товарный вид и свойства должны быть сохранены.
                    При оформлении возврата покупатель (или его представитель) и продавец подписывают документ, фиксирующий данную сделку и содержащий следующую информацию:
                    наименование продавца;
                    ФИО покупателя;
                    наименование товара;
                    дата совершения сделки;
                    сумма, которую продавец обязуется вернуть.</p>
            </div>
        </div>
    )
}