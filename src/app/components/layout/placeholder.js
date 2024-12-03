export default function Placeholder() {
    return (

        <div className='PlH-cont w-full
        flex flex-col justify-center items-start
        pb-[2rem] md:pb-[3rem] lg:pb-[4rem]'>
            <div className='PromoText w-full
            flex flex-col gap-[0.5rem] 
            '>
                <div className='w-full text-[40px] font-custom uppercase leading-[2.5rem]'>
                    Добро пожаловать
                    <span> в<span className='font-extrabold'> kartoteka.</span></span>

                </div>
                <div className='TxtItalic w-full font-custom italic text-[20px] leading-[1.5rem]'>
                    веб агрегатор полезных ссылок для дизайна
                </div>
            </div>

        </div>

    )
}