import React from 'react'

import Basic_Op from './Basic_Op'
import Case_Conversion from './Case_Conversion'
import Text_Reversal from './Text_Reversal'
import Find_and_Replace from './Find_and_Replace'
import Remove_Content from './Remove_Content'
import Character_Limit_Controls from './Character_Limit_Controls'
import Encrypt_Decrypt from './Encrypt_Decrypt'
import Export from './Export'
import Password from './Password'
import Voice_Command from './Voice_Command'
import Text_to_Speech from './Text_to_Speech'

export default function Textform(props) {
    return (
        <div className="container my-3">
            <label htmlFor="myBox" className="form-label fs-2 mx-1">{props.heading}</label>

            <textarea
                className="form-control"
                id="myBox"
                rows="9"
                placeholder="Enter text here"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
                style={{
                    outline: 'none',
                    boxShadow: 'none',
                    border: '1.5px solid black',
                    transition: 'border-color 0.15s ease-in-out'
                }}
            />

            <Basic_Op text={props.text} setText={props.setText} />
            <Case_Conversion text={props.text} setText={props.setText} />
            <Text_Reversal text={props.text} setText={props.setText} />

            <Find_and_Replace text={props.text} setText={props.setText} />
            <Remove_Content text={props.text} setText={props.setText} />

            <Character_Limit_Controls text={props.text} setText={props.setText} />
            <Encrypt_Decrypt text={props.text} setText={props.setText} />

            <Text_to_Speech text={props.text} />
            <Export text={props.text} />

            <Password setText={props.setText} />
            <Voice_Command text={props.text} setText={props.setText} />
            
        </div>
    );
}
