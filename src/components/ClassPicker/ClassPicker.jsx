import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './ClassPicker.css'

const ClassPicker = () => {
    const { setPlayerClass } = useContext(AppContext);

    return (
        <div className='picker-container'>
            <label for="classes" >Choose a class:</label>
            <select name="classes" id="classes" onChange={(e) => setPlayerClass(e.target.value)}>
                <option value="rogue">Rogue</option>
                <option value="mage">Mage</option>
                <option value="warlock">Warlock</option>
                <option value="paladin">Paladin</option>
                <option value="warrior">Warrior</option>
                <option value="druid">Druid</option>
                <option value="priest">Priest</option>
                <option value="shaman">Shaman</option>
                <option value="hunter">Hunter</option>
            </select>
        </div>
    )
}

export default ClassPicker