import { useState } from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';
import "../index.css";

const Repos = ({ repos, displayModes }) => 
{
    const [displayMode, setDisplayMode] = useState({ index: 0, style: displayModes[0] });

    const changeDisplayMode = () => 
    {
        let index = displayMode.index;

        if (index < displayModes.length - 1)
        {
            index++;
        }
        else
        {
            index = 0;
        }

        setDisplayMode({ index, style: displayModes[index] });
    }

    return (
        <div className='container-fluid p-0'>
            <div className='row m-0'>
                <div className='col-auto' style={{ fontSize: 22, lineHeight: '1' }}>
                    Repositories
                </div>
                <div className='col-auto ms-auto p-0'>
                    <button className='btn btn-sm btn-info' onClick={changeDisplayMode}>
                        Change display mode
                    </button>
                </div>
            </div>
            <div className='grid mt-3' style={{ gridTemplateColumns: displayMode.style }}>
                {repos ? repos.map((repo => (
                    <Repo repo={repo} key={repo.id} />
                ))) : ''}
            </div>
        </div>
    );
}

Repos.propTypes = 
{
    repos: PropTypes.arrayOf(PropTypes.object).isRequired,
    displayModes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Repos;