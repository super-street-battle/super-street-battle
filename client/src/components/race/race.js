
import React from 'react'
import { PromiseProvider } from 'mongoose';

const RaceBet = _ => {
    return (
<form>
    <p>
        <label htmlFor='bet'>Bet $</label>
        <input id='bet' type='text' onChange={PromiseProvider.handleBet} value={PromiseProvider.bet}/>
        <button onClick={PromiseProvider.handleRace}>Race</button>
    </p>
</form>
    )
}

export default RaceBet