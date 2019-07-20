import React from 'react'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const FireBaseLogin = props => {
    return (
        <>
          <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={props.FirebaseAuth}/>
        </>
    )
}

export default FireBaseLogin