import React from 'react';

const question = (props) => {
    return(
        <div className='quiz'>
            <div className='question-title-container'>
                <h3 className='question-title'>{props.questionTitle}</h3>
            </div>
            <div className='button-container'>
                <button className='1' onClick={props.click}>{props.answer1}</button>
                <button className='2' onClick={props.click}>{props.answer2}</button>
                <button className='3' onClick={props.click}>{props.answer3}</button>
                <button className='4' onClick={props.click}>{props.answer4}</button>
            </div>
            <div className='timer'>
                <div className='clock-container'>
                    <img alt='' className='clock' src='images/clock.png'></img>
                    <img alt='' onClick={props.clickHandle} className='clock-hand' src='images/clock-hand.png'></img>
                </div>
                <h3 className='timer-title'>נותרו {props.seconds} שניות</h3>
            </div>
        </div>
    )
}

export default question;