import React from 'react'

const ProgressBars = ({percentage,labelText,ColorClass}) => {
    return (
        <label className='mt-3'>
            {labelText}:
            <div className='w-full bg-slate-200 h-7 border rounded-full mb-5'>
                <div className={`h-full w-1/2 ${ColorClass} rounded-full progress px-2 text-white`} data-percentage={`${percentage}%`}>{percentage}%</div>
            </div>
        </label>
    )
}

export default ProgressBars