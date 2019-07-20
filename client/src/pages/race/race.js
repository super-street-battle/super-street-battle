import React, {useEffect} from 'react'
import Nav2 from '../../components/nav2'

const Race = _ => {
    const pEngine = 3
    const pTires = 2
    const pKit = 1
    const itemused = 'nitro boost'
    let logarr = []
    let cpuE
    let cpuT 
    let cpuK 

    // useEffect(_ => {

        function cpuEngine(pEngine) {
            let max = pEngine + 1
            let min = pEngine - 1
            return (Math.random() * (max - min) + min).toFixed(1)
        }

        function cpuTires(pTires) {
            let max = pTires + 1
            let min = pTires - 1
            return (Math.random() * (max - min) + min).toFixed(1)
        }

        function cpuKit(pKit) {
            let max = pKit + 1
            let min = pKit - 1
            return (Math.random() * (max - min) + min).toFixed(1)
        }

        console.log("Your Engine:" + " " + pEngine + " " + "|" + " " + "CPU Engine:" + " " + parseFloat(cpuEngine(pEngine)))
        console.log("Your Tires:" + " " + pTires + "  " + "|" + " " + "CPU Tires:" + " " + parseFloat(cpuTires(pTires)))
        console.log("Your Kit:" + " " + pKit + "    " + "|" + " " + "CPU Kit:" + " " + parseFloat(cpuKit(pKit)))

         cpuE = parseFloat(cpuEngine(pEngine))
         cpuT = parseFloat(cpuTires(pTires))
         cpuK = parseFloat(cpuKit(pKit))

        console.log("Your score" + " " + (pEngine+pTires+pKit))
        console.log("CPU score" + " " + (cpuE+cpuT+cpuK))
        
        if ((pEngine+pTires+pKit) > (cpuE+cpuT+cpuK)) {
            console.log(`You win!`)
        } else if ((pEngine+pTires+pKit) < (cpuE+cpuT+cpuK)) {
            console.log(`You lose!`)
        } else {
            console.log(`Tie!`)
        }
    // },[])

        const somefunc = _ => {
            console.log(pEngine, cpuE, pTires, cpuT)
            if (pEngine > cpuE) {
                logarr.push('playername has better engine, playername pull ahead')
            } else {
                logarr.push('npcname start off strong, npcname pull ahead')
            }
    
            if (pTires > cpuT) {
                logarr.push('playername speed up thanks to superior tires')
            } else {
                logarr.push('npcname speed increased, watch out!')
            }
    
            if (itemused !== null) {
                switch(itemused) {
                    case 'oil spill':
                        logarr.push(`playername used ${itemused}, npcname got slowed!`)
                        break;
                    case 'nitro boost':
                        logarr.push(`playername used ${itemused} and increase speed by 5%`)
                        break;
                    case 'grippy tires':
                        logarr.push(`playername used ${itemused}, and increase speed by 2%`)
                        break;
                    default:
                        break;
                }
            }
            console.log(logarr)
        }

        
        return (
            <div>
                <Nav2 />
                <h1>Race page</h1>
                <button onClick={somefunc}>click</button>
            </div>
    )
}

export default Race