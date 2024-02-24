'use client'

import { useState } from "react"

export const Counter = () => {
    // Define state variables for count and minimum/maximum values
    const [count, setCount] = useState(0)
    const minCount = 0
    const maxCount = 10
    
    // Function to handle click on the "Increase" button
    function onIncreaseButtonClick(): void {
        // Check if count is less than maximum allowed count
        if (count < maxCount) {
            // Increment count by 1
            setCount(count + 1)
        }
    }

    // Function to handle click on the "Decrease" button
    function onDecreaseButtonClick(): void {
        // Check if count is greater than minimum allowed count
        if (count > minCount) {
            // Decrement count by 1
            setCount(count - 1)
        }
    }

    // Define button styles for normal, hover, and disabled states
    const buttonStyle = "bg-blue-500 text-white font-bold py-2 px-4 rounded"
    const hoverStyle = "hover:bg-blue-700"
    const disabledButtonStyle = "bg-gray-400 cursor-not-allowed"

    return (
        <>
          {/* Display the current count */}
          <div className="flex space-x-2">
            <div>Count:</div>
            <div
                data-testid="count">
                {count}
            </div>
          </div>
          {/* Render buttons for incrementing and decrementing the count */}
          <div className="flex space-x-4">
            {/* Increase button */}
            <button 
                className={`${buttonStyle} ${count >= maxCount ? disabledButtonStyle : hoverStyle}`}
                onClick={onIncreaseButtonClick}
                disabled={count === maxCount}
                data-testid="button-increase">
                Increase
            </button>
            {/* Decrease button */}
            <button 
                className={`${buttonStyle} ${count === minCount ? disabledButtonStyle : hoverStyle}`}
                onClick={onDecreaseButtonClick}
                disabled={count === minCount }
                data-testid="button-decrease">
                Decrease
            </button>
           </div>
        </>
    )
}
