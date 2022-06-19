import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import { playerClasses } from '../../data/utilities'
import './StatCard.css'

const StatCard = ({ itemObj, setItemObj }) => {
    const { playerClass } = useContext(AppContext)
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
        setClassInfo(playerClasses.filter(cls => {
            return (cls.className === playerClass);
        }))
    }, [playerClass])

    useEffect(() => {
        setStatWeights(classInfo[0].statWeights)
        setClassStats(classInfo[0].classStats)
    }, [classInfo])


    // change targeted stat 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setItemObj(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // playerClasses.filter(cls => {
    //     return cls.className === "rogue";
    // })

    // let classStats = classInfo[0].classStats
    // let statWeights = classInfo[0].statWeights


    let calcTotalStats = (itemObj, statWeights) => {
        let total = 0;

        for (const stat of Object.keys(statWeights)) {
            total += (statWeights[stat] * itemObj[stat])
        }

        return total.toFixed(2)
    }

    
    return (
        <div className='card'>
            <input 
                type="text"
                className='item-title' 
                id='itemName'
                name='itemName' 
                value={itemObj['itemName']}
                onChange={(e) => handleChange(e)}
            />   
            {
                Object.entries(classStats).map(([name, val]) => {return (
                    <div className="stat-row">
                        <label for={name}>{val}</label>
                        <input type="number" id={name} name={name} onChange={(e) => handleChange(e)}/>
                    </div>
                )})
            }
            <div className="total">
                Total Stats: {calcTotalStats(itemObj, statWeights)}
            </div>
        </div>
    )
}

export default StatCard