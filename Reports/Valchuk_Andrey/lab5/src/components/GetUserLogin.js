import { useState } from 'react';
import PropTypes from 'prop-types';

const GetUserLogin = ({ errorMsg, onGet }) =>
{
    const [userLogin, setUserLogin] = useState('');

    const onSubmit = (e) => 
    {
        e.preventDefault();

        onGet(userLogin);
    }

    return (
        <form className='row m-0 p-0' onSubmit={onSubmit}>
            <div className='col-auto p-0'>
                <label className='col-form-label'>User Login</label>
            </div>
            <div style={{ width: 300 }} className='position-relative p-0 mx-2'>
                <input 
                    className={`form-control ${(errorMsg === '') ? '' : 'is-invalid'}`} 
                    type='text' 
                    onChange={(e) => setUserLogin(e.target.value)}>
                </input>
                <div className='invalid-tooltip'>{errorMsg}</div>
            </div>
            <div className='col-auto p-0'>
                <input className='btn btn-primary' type='submit' value='Get User' />
            </div>
        </form>
    );
}

GetUserLogin.defaultProps = 
{
    errorMsg: '',
}

GetUserLogin.propTypes = 
{
    errorMsg: PropTypes.string,
    onGet: PropTypes.func.isRequired,
};

export default GetUserLogin;