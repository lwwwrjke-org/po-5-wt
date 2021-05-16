
import { useState } from 'react';
import Repo from './repo';
import './rep.css';

export default function Repos({ rep, displayModes }) 
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
        <div>
            <div>
                <div style={{ fontSize: 22, lineHeight: '2', fontWeight: 'bold' }}>
                    Repositories
                </div>
                <div>
                    <button className='butt' onClick={changeDisplayMode}>
                        Change display mode
                    </button>
                </div>
            </div>
            <div className='grid mt-3' style={{ gridTemplateColumns: displayMode.style }}>
                {rep ? rep.map((repos => (
                    <Repo repos={repos} key={repos.id} />
                ))) : ''}
            </div>
        </div>
    );
}