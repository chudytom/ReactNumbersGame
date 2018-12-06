import React from 'react'

const Numbers = (props) => {
    const classNameFromNumber = (number) => {
        if (isNumberUsed(number)) {
            return 'used';
        }
        if (isNumberSelected(number)) {
            return 'selected';
        }
    }

    const selectNumberIfEnabled = (number) => {
        if (!isNumberSelected(number) && !isNumberUsed(number)) {
            props.selectNumber(number);
        }
    }

    const isNumberSelected = (number) => {
        return props.selectedNumbers.includes(number);
    }

    const isNumberUsed = (number) => {
        return props.usedNumbers.includes(number);
    }

    return (
        <div className='card text-center'>
            <div className='numbers'>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={classNameFromNumber(number)}
                        onClick={() => selectNumberIfEnabled(number)}>{number}</span>
                )}
            </div>
        </div>
    )
}

export default Numbers