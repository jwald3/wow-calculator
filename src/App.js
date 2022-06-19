import React, { useState, createContext } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import ClassPicker from "./components/ClassPicker/ClassPicker";
import StatSummary from "./components/StatSummary/StatSummary";
import "./App.css";

export const AppContext = createContext();

const App = () => {
    const [playerClass, setPlayerClass] = useState("rogue");
    const [statsOne, setStatsOne] = useState({
        itemName: "Item One",
        strength: 0,
        agility: 0,
        attackPower: 0,
        crit: 0,
        hit: 0,
        haste: 0,
        expertise: 0,
        arPen: 0,
    });
    const [statsTwo, setStatsTwo] = useState({
        itemName: "Item Two",
        strength: 0,
        agility: 0,
        attackPower: 0,
        crit: 0,
        hit: 0,
        haste: 0,
        expertise: 0,
        arPen: 0,
    });

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    playerClass,
                    setPlayerClass,
                    statsOne,
                    setStatsOne,
                    statsTwo,
                    setStatsTwo,
                }}
            >
                <ClassPicker />
                <CardContainer />
                <StatSummary />
            </AppContext.Provider>
        </div>
    );
};

export default App;
