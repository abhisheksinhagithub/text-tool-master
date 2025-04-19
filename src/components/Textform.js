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
        <div className=" container my-3">

            <label htmlFor="myBox" className="form-label fs-2 mx-1">{props.heading}</label>

            <textarea className="form-control" id="myBox" rows="9" placeholder='Enter text here'
                style={{
                    outline: 'none',
                    boxShadow: 'none',
                    border: '1.5px solid black',
                    transition: 'border-color 0.15s ease-in-out'
                }}
            >

            </textarea>

            <Basic_Op />
            <Case_Conversion />
            <Text_Reversal />
            <Find_and_Replace />
            <Remove_Content />
            <Character_Limit_Controls />
            <Encrypt_Decrypt />
            <Text_to_Speech/>
            <Export />
            <Password />
            <Voice_Command/>

        </div>

    )
}