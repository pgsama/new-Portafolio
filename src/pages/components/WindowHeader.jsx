import React from 'react'

export const WindowHeader = () => {
    return (
        <div className="w-full border-b-2 border-slate-900 rounded-t-lg border-opacity-60 bg-slate-800">
            <div className="w-20  flex justify-around p-1 ">
                <span className="bg-red-400 rounded-full w-3.5 h-3.5 "> </span>
                <span className="bg-yellow-400 rounded-full w-3.5  h-3.5 "> </span>
                <span className="bg-green-400 rounded-full w-3.5  h-3.5 "> </span>
            </div>
        </div>
    )
}
