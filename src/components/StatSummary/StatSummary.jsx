import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { playerClasses } from '../../data/utilities'
import './StatSummary.css';

const StatSummary = () => {
    const { statsOne, statsTwo, playerClass } = useContext(AppContext);

    const [totalOne, setTotalOne] = useState(0);
    const [totalTwo, setTotalTwo] = useState(0);
    const [classInfo, setClassInfo] = useState([{
        className: "shaman",
        classStats: {
            agility: "Agility",
            attackPower: "Attack Power",
            strength: "Strength",
            crit: "Crit Rating",
            hit: "Hit Rating",
            haste: "Haste",
            expertise: "Expertise",
            arPen: "Armor Penetration",
        },
        statWeights: {
            agility: 1.74,
            attackPower: 1,
            strength: 2,
            crit: 1.97,
            hit: 1.34,
            haste: 1.28,
            arPen: 0.22,
        },
    }])
    const [classStats, setClassStats] = useState({
        agility: "Agility",
        attackPower: "Attack Power",
        strength: "Strength",
        crit: "Crit Rating",
        hit: "Hit Rating",
        haste: "Haste",
        expertise: "Expertise",
        arPen: "Armor Penetration",
    })
    const [statWeights, setStatWeights] = useState({
        agility: 1.74,
        attackPower: 1,
        strength: 2,
        crit: 1.97,
        hit: 1.34,
        haste: 1.28,
        arPen: 0.22,
    })

    useEffect(() => {
        setTotalOne(calcTotalStats(statsOne, statWeights));
        setTotalTwo(calcTotalStats(statsTwo, statWeights));
    }, [playerClass])

    useEffect(() => {
        setClassInfo(playerClasses.filter(cls => {
            return (cls.className === playerClass);
        }))
    }, [playerClass])

    useEffect(() => {
        setStatWeights(classInfo[0].statWeights)
        setClassStats(classInfo[0].classStats)
    }, [classInfo])

    const calcTotalStats = (itemObj, statWeights) => {
        let total = 0;

        for (const stat of Object.keys(statWeights)) {
            total += (statWeights[stat] * itemObj[stat])
        }

        return total
    }

    const largerValue = totalOne > totalTwo ? statsOne : statsTwo;
    const smallerValue = totalOne < totalTwo ? statsOne : statsTwo;

    const percentBetter = totalOne > totalTwo ? (((totalOne / totalTwo) * 100 - 100).toFixed(1)) : (((totalTwo / totalOne) * 100 - 100).toFixed(1));


    return (
        <div className='summary'>
            {
                totalOne > 0 && totalTwo > 0 && (
                    `${largerValue.itemName} is ${percentBetter}% better than ${smallerValue.itemName}`
                )
                
            }
        
        </div>
    )
}

export default StatSummary