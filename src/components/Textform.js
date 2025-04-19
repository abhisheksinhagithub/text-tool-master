import React, { useState } from 'react'

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

    const [text, setText] = useState('')

    return (
        <div className=" container my-3">

            <label htmlFor="myBox" className="form-label fs-2 mx-1">{props.heading}</label>

            <textarea className="form-control" id="myBox" rows="9" placeholder='Enter text here'
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    outline: 'none',
                    boxShadow: 'none',
                    border: '1.5px solid black',
                    transition: 'border-color 0.15s ease-in-out'
                }}
            >

            </textarea>

            <Basic_Op text={text} setText={setText}/>
            <Case_Conversion text={text} setText={setText}/>
            <Text_Reversal text={text} setText={setText}/>

            <Find_and_Replace text={text} setText={setText}/>
            <Remove_Content text={text} setText={setText}/>

            <Character_Limit_Controls text={text} setText={setText}/>
            <Encrypt_Decrypt text={text} setText={setText}/>
            
            <Text_to_Speech/>
            <Export />
            <Password />
            <Voice_Command/>

        </div>

    )
}