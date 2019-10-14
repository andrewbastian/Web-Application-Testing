import React, { useState } from 'react';
import Display from './Display';
import { userInfo } from 'os';

export default function Dashboard () {

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    const ballsCount = () => {
        if(balls < 4){
            setBalls(balls + 1);
        } else {
            setBalls(0)
        }
    }
    const strikesCount = () => {
        if(strikes < 3){
            setStrikes(strikes + 1);
        } else {
            setStrikes(0)
        }
    }

    const foulsCount = () => {
        if(strikes === 0){
            setStrikes(1);
        } else if (strikes === 1) {
            setStrikes(2);
        } else {
            setStrikes(strikes);
        }
    }
    const hitsCount = () => {
            setStrikes(0);
            setBalls(0);
    }

    return(

        <div>
            <h2>Dashboard</h2>

            <button onClick={() => ballsCount()}>Ball</button>

            <button onClick={() => foulsCount()}>Foul</button>

            <button onClick={() => strikesCount()}>Strike</button>

            <button onClick={() => hitsCount()}>Hits</button>


                 <Display balls={balls}
                          setBalls={setBalls}
                          strikes={strikes}
                          setStrikes={setStrikes}
                          fouls={fouls}
                          setFouls={setFouls}
                          hits={hits}
                          setHits={setHits}/>
        </div>
    )
}
