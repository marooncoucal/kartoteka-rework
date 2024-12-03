export function SelectionCards(){
return(
    <div>
        <div className='Collection px-[40px] flex flex-col gap-[8px]'>
            <div className='Text font-semibold text-[24px]'>Подборка</div>
            <div className='Cards flex gap-4'>
              <div className='Card h-[300px] w-[400px] bg-gray-400'></div>
              <div className='Card h-[300px] w-[400px] bg-gray-400'></div>
              <div className='Card h-[300px] w-[400px] bg-gray-400'></div>
              <div className='Card h-[300px] w-[400px] bg-gray-400'></div>
            </div>
        </div>
    </div>
)
}