'use client'

// import chevronDown from '../../public/img/arrow_down.svg';
import { useEffect, useRef, useState } from 'react';

export function DropDownCustom({ items, defaultItem, label }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultItem ?? items[0]);
    const handleMainClick = () => setOpen((prev) => !prev); // open-close when click div SelectCustom
    const handleDropdownToggle = (item) => {
        setSelected(item); // change option to selected item
        // setOpen(false); // closes dropdown after item selected
    };

    // close when clicking outside
    const dropRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                open
                // click outside required only when options are open
                && dropRef.current
                // checks if ref is assigned - if not, function can't know what is !ref (which is the outside)
                && !dropRef.current.contains(event.target)
                // checks if the click is outside the dropdown - if inside it needs to stay open
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside); // clocks the click and sets off function
        return () => { document.removeEventListener("mousedown", handleClickOutside) }; // cleanup - removes listener - when component unmounts - (stops being rendered, dissapeares from page, is removed from DOM)
    }, [open]);

    return (
        <div>
            <label htmlFor="custom-dropdown" className="block text-[16px ] font-medium text-black mb-1 select-none cursor-pointer">{label}</label>
            <div
                className='DropDownContainer relative h-[40px] w-full select-none cursor-pointer'
                id='custom-dropdown'
                ref={dropRef} // close when clicking outside
            >
                <div
                    onClick={handleMainClick}
                    className={`SelectCustom w-auto
                    leading-none text-[16px] text-black
                    flex justify-between items-center gap-[8px] px-[16px] pb-[2px] h-[40px]
                    border-solid border-black border-[1px] bg-white
                    `}
                >
                    <div className="Text text-[16px] leading-none whitespace-nowrap">{selected}</div>
                    <div className="mt-[4px]">
                        <img src={chevronDown} width="14" height="14" alt="chevron down icon" />
                    </div>
                </div>
                {open && (
                    <div className="OptionsContainer absolute left-0 top-full z-10 min-w-full 690w:right-0 690w:left-auto text-[16px] text-black leading-none whitespace-nowrap">
                        {items?.map((item) => (
                            <div key={item}
                                onClick={() => handleDropdownToggle(item)}
                                className={
                                    `OptionCustom flex items-center px-[16px] pb-[2px] h-[40px]  border-solid border-black border-[1px] mt-[-1px] 
                                    ${item === selected ? `bg-black hover:bg-gray-800` : `bg-gray-200 hover:bg-gray-400`}`}
                            >
                                <span className={item === selected ? "Text font-bold text-white" : "Text"}>{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export function DropDownHTML() {
    return (
        <div className=''>
            <label htmlFor="test-dropdown" className="block text-[16px] font-medium text-black mb-1">Элективы</label>
            <div className="grid grid-cols-1">
                <select
                    id='test-dropdown'
                    name='test-dropdown'
                    className="DropDown appearance-none 
                        col-start-1 row-start-1 py-[8px] pl-[16px] pr-[32px]
                        text-[16px] text-black
                        bg-white *:bg-gray-300
                        outline-[1px] -outline-offset-[1px] outline-black 
                        focus:outline-[2px] focus:-outline-offset-[2px] focus:outline-black
                        select-none cursor-pointer">
                    <option value="">Выберите электив</option>
                    <optgroup label="Графика">
                        <option value="caligraphy">Калиграфия</option>
                        <option value="posters">Искусство плаката</option>
                    </optgroup>
                    <optgroup label="3D">
                        <option value="sculpting">Скульптинг</option>
                        <option value="sculpting">Риггинг персонажа</option>
                        <option value="cinema4D">Cinema 4D</option>
                        <option value="blender">Blender</option>
                    </optgroup>
                </select>
                <div className="col-start-1 row-start-1 self-center justify-self-end mr-[12px] mt-[2px] pointer-events-none">

                    <svg width="14" height="14" fill="none" className='fill-gray-600'><path d="m6 9.5 5-4.033V2.5L6 6.533 1 2.5v2.967L6 9.5Z" /></svg>
                    {/* am i stupid or how do you properly import svg from folder and then customize it? what's the pipeline? 
                        was i supposed to make a component with svg and path?
                        or does one just use libraries like Heroicons and Iconify?
                        in react native png got recolored with accent-color -- png, not even svg
                        i feel like i'm missing smth :( */}
                </div>
            </div>
        </div>
    )
}

// example
// <div className="TailwindDropDown sm:col-span-3">
//     <label htmlFor="country" className="block text-sm/6 font-medium text-white">Country</label>
//     <div className="grid grid-cols-1">
//         <select
//             id="country"
//             name="country"
//             className="col-start-1 row-start-1 w-full appearance-none py-1.5 pr-8 pl-3
//             text-base text-white
//             rounded-md bg-white/5 *:bg-gray-800
//             outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
//         >
//             <option>United States</option>
//             <option>Canada</option>
//             <option>Mexico</option>
//         </select>
//         <ChevronDownIcon
//             // aria-hidden="true"
//             className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
//         />
//     </div>
// </div>