import React, { useContext } from 'react';
import { AppContext } from '../../App';
import StatCard from '../StatCard/StatCard';
import './CardContainer.css';

const CardContainer = () => {
    const { statsOne, setStatsOne, statsTwo, setStatsTwo } = useContext(AppContext)

    return (
        <div className='card-container'>
            <div className="left">
                <StatCard itemObj={statsOne} setItemObj={setStatsOne}/>
            </div>
            <div className="right">
                <StatCard itemObj={statsTwo} setItemObj={setStatsTwo}/>
            </div>
        </div>
    )
}

export default CardContainer