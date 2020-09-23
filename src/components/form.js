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
                    <label htmlFor='id'>תעודת זהות:</label>
                    <input onChange={props.change} type='text' name='id' required></input>
                </div>
                <div className='input'>
                    <label htmlFor='phone'>מספר טלפון:</label>
                    <input onChange={props.change} type='text' name='phone' required></input>
                </div>
                <div className='input'>
                    <label htmlFor='email'>כתובת דוא״ל:</label>
                    <input onChange={props.change} type='text' name='email' required></input>
                </div>
            </div>
            <div className='checkbox-container'>
                <input onChange={props.change} type='checkbox' name='checkbox' required></input>
                <label htmlFor='checkbox' class='checkbox'>אני מסכים ומאשר את ה<a href="https://static.spokesperson.gincher.net/idf.il/2019/04/caveret/assets/terms.pdf">תקנון</a>
                </label>
            </div>
            <input className='start-button' type='submit' name='start' value='התחל' onClick={props.start}></input>
            <h3 className='form-disclaimer'>*ניתן להשתתף במשחק עד 5 פעמים בלבד</h3>
        </div>
    )
}

export default form;