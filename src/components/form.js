import React from 'react';

const form = (props) => {
    return(
        <div className='form'>
            <h2 className='form-title'>כמה פרטים ונתחיל</h2>
            <div className='form-grid'>
                <div className='input'>
                    <label htmlFor='name'>שם מלא:</label>
                    <input onChange={props.change} type='text' name='name' required></input>
                </div>
                <div className='input'>
                    <label htmlFor='phone'>מספר טלפון:</label>
                    <input onChange={props.change} type='text' name='phone' required></input>
                </div>
            </div>
            <div className='checkbox-container'>
                <input onChange={props.change} type='checkbox' name='checkbox' required></input>
                <label htmlFor='checkbox' class='checkbox'>אני מסכים ומאשר את ה<a href="https://idfsite.azurewebsites.net/miniprojects/sukotquiz/terms.html" target='_blank'>תקנון</a>
                </label>
            </div>
            <input className='start-button' type='submit' name='start' value='התחל' onClick={props.start}></input>
            <h3 className='form-disclaimer'>*ניתן להשתתף במשחק עד 5 פעמים בלבד</h3>
        </div>
    )
}

export default form;