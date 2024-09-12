import React, {useState} from 'react';

interface SwitchProps {
    onClick: () => void
}

const Switch = (props: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        props.onClick()
        setIsChecked(!isChecked)
    }

    return (
        <>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only'
                    />
                    <div
                        className={`box block h-8 w-14 rounded-full ${
                            isChecked ? 'bg-amber-300' : 'bg-gray-700'
                        }`}
                    ></div>
                    <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                            isChecked ? 'translate-x-full' : ''
                        }`}
                    ></div>
                </div>
            </label>
        </>
    );
};

export default Switch;

