import React, {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'
import Delayed from 'react-delayed'
import race from '../../pages/race/race'
import Player from '../../utils/player'

const Result = props => {
    const [resultState, setresultState] = useState({
        result: ''
    })
    useEffect(_ => {
        console.log(props)
        let result = resultState.result
        if(props.state.ptotal > props.state.cputotal){
            result ='Congratulations, You Won!'
            Player.updatewin(props.state.id, {win: props.state.win + 1})
            Player.updateexperience(props.state.id, {experience: props.state.experience + 5})
            Player.updatebank(props.state.id, {bankAccount: props.state.money + (props.state.bet*2)})
        } else if (props.state.ptotal < props.state.cputotal) {
            result ='You Lost!'
            Player.updateloss(props.state.id, {loss: props.state.loss + 1})
            Player.updatebank(props.state.id, {bankAccount: props.state.money - props.state.bet})
        } else if (props.state.ptotal === props.state.cputotal) {
            result = "It's a tie!"
            Player.updateexperience(props.state.id, {experience: props.state.experience + 2})
            Player.updatetie(props.state.id, {tie: props.state.tie + 1})
        }
        setresultState({...resultState, result})
    }, [])

    // showComments = () => {
    //     return race.data.map (race=> {
    //         <input>{race}</input>
    //     })
    // }
      
    // showAnimation() {
    //     ImageURL= "../"
    // }
    
    // outcome = () => {
    //     player(),
    //     item(),
    //     engine(),
    //     tire(),
    //     kit()
    // }

    // player = () => {

    //     switch (commentary) {
    //         case (playerXP > aiXP):
    //             this.setState({
    //                 playerComment: "You are the better driver! Off to a good start, you're ahead!",
    //             });
    //             break;
    //         case (playerXP < aiXP):
    //             this.setState({
    //                 playerComment: "Oh no! Opponent's a better driver! You fell behind!"
    //             });
    //             break;
    //         case (playerXP = aiXP):
    //             this.setState({
    //                 playerComment: "Your driving abilities are the same! No effect!"
    //             });
    //             break;
    //     }
    // }
    
    // tire = () => {

    //     switch (commentary) {
    //         case (playerTire > aiTire):
    //             this.setState({
    //                 tireComment: "Your tires are better! That gives you an edge!",
    //             });
    //             break;
    //         case (playerTire < aiTire):
    //             this.setState({
    //                 tireComment: "Oh no! Opponent's tires are better!"
    //             });
    //             break;
    //         case (playerTire = aiTire):
    //             this.setState({
    //                 tireComment: "Your tires are the same! No effect!"
    //             });
    //             break;
    //     }
    // }
    
    // engine = () => {

    //     switch (commentary) {
    //         case (playerEngine > aiEngine):
    //             this.setState({
    //                 engineComment: "Your engine is superior! You pulled ahead!",
    //             });
    //             break;
    //         case (playerEngine < aiEngine):
    //             this.setState({
    //                 engineComment: "Oh no! Opponent's engine is better! You fell behind!"
    //             });
    //             break;
    //         case (playerEngine = aiEngine):
    //             this.setState({
    //                 engineComment: "Engines are equal! No effect!"
    //             });
    //             break;
    //     }
    // }
    
    // kit = () => {

    //     switch (commentary) {
    //         case (playerKit > aiKit):
    //             this.setState({
    //                 kitComment: "Your car's bodykit is more upgraded! You Look at you GO!",
    //             });
    //             break;
    //         case (playerKit < aiKit):
    //             this.setState({
    //                 kitComment: "Oh no! Opponent's bodykit is more upgraded!"
    //             });
    //             break;
    //         case (playerKit = aiKit):
    //             this.setState({
    //                 kitComment: "Bodykits are equal! No effect!"
    //             });
    //             break;
    //     }
    // }
    
    // item = () => {

    //       switch (commentary) {
    //           case ((playerItem = "nitro") && (aiItem= "oilSlick" )):
    //               this.setState({
    //                   itemComment: "You used nitro.. but oh no! Oil slick! Your car slid off course!",
    //               });
    //               break;
    //           case ((playerItem = "grippyTires") && (aiItem = "oilSlick" )):
    //               this.setState({
    //                   itemComment: "Opponent used an oil spill! Good thing you have tires with grip!"
    //               });
    //               break;
    //           case ((playerItem = "oilSlick") && (aiItem= "grippyTires")):
    //               this.setState({
    //                   itemComment: "You used an oil spill! Sadly the opponent has tires with grip!"
    //               });
    //               break;
    //           case ((playerItem = "nitro") && (aiItem= "grippyTires")):
    //               this.setState({
    //                   itemComment: "You used nitro! You've shot forward!"
    //               });
    //               break;
    //           case ((playerItem = "grippyTires") && (aiItem= "nitro")):
    //               this.setState({
    //                   itemComment: "the opponent used nitro! They shot forward!"
    //               });
    //               break;
    //           case ((playerItem = "oilSlick" ) && (aiItem= "nitro" )):
    //               this.setState({
    //                   itemComment: "Opponent used nitro, but hit you oil spill!"
    //               });
    //               break;
    //           case (playerKit === aiKit):
    //               this.setState({
    //                   itemComment: "You and your opponent used the same special item! No effect!"
    //               });
    //               break;
    //         }
    //     }
        return (
            <>
            <div className="Result">
            <Delayed mounted={true} mountAfter={500} unmountAfter={500} id="commentary">
                <p>{this.showComments()}</p>
            </Delayed>
            <Delayed mounted={true} mountAfter={1000} id="postCommentary">
                <Card border="warning" text="white">
                    <Card.Img src= "../"/>
                    <Card.Body>{race}</Card.Body>
                </Card>
            </Delayed>
            <div>
                <input id="inp" type="button" value="return to garage" onclick="location.href='/Garage';" />
            </div>
            </div>
            </>
        )
    }

export default Result