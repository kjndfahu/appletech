export const AddressesBlock = () => {
    return (
        <div className="flex justify-between rounded-[16px] w-full p-6 bg-[#F3F8FF]">
            <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-semibold leading-[28px]">Можно приехать</h3>
                <div className="flex flex-col gap-2 text-black font-medium text-[16px] leading-[19px]">
                    <p>г. Санкт-Петербург, Лиговский проспект 10/118</p>
                    <p>г. Санкт-Петербург, Лиговский проспект 10/118</p>
                    <p>г. Санкт-Петербург, Лиговский проспект 10/118</p>
                    <p>г. Санкт-Петербург, Лиговский проспект 10/118</p>
                </div>
            </div>

            <iframe
                className="rounded-[5px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3998.605992865188!2d30.350543473964!3d59.92711429175594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631af12367ef1%3A0xe920315b67b80c1d!2sVladimirskaya!5e0!3m2!1sen!2sua!4v1731163212351!5m2!1sen!2sua"
                width="600" height="450" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}