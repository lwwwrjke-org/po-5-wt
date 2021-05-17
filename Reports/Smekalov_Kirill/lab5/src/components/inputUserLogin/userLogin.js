import { useState } from 'react';
import './userLogin.css';
import React from 'react';

export default function GetUserLogin({ msgError, onGet })
{
    const [login, userLogin] = useState('');

    const onSubmit = (e) => 
    {
        e.preventDefault();

        onGet(login);
    }
    return (
        <form onSubmit={onSubmit}>
                <label className='text'>User Login:</label>
                <input 
                    className={`input ${(msgError === '') ? '' : 'is-invalid'}`} 
                    type='text' 
                    onChange={(e) => userLogin(e.target.value)}>
                </input>
                <input className='button' type='submit' value='Поиск' />
                <div className = 'error'>{msgError}</div>
        </form>
    );
}