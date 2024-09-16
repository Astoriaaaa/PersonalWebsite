import React  from 'react';
import {useState, useEffect} from 'react';

export default function Typewriter({text}) {
    const len = text.length; // use ref
    const [curText, setCurtext] = useState("")
    const [write, setWrite] = useState(true)
    useEffect(() => {
        if(write) {
            setTimeout(() => {
                setCurtext((prevText) => {
                    let lengthCur = prevText.length;
                    console.log(lengthCur); 
                    if (lengthCur === len) {
                        setWrite(false);
                    }
                    if (lengthCur < len) {
                        return prevText + text[lengthCur];
                    }
                    return prevText;
                })
            }, 150)
        } else {
            console.log("here")
            setTimeout(() => {
                setCurtext(prevText => {
                    if(prevText.length > 0) {
                        return prevText.substring(0, prevText.length - 1)
                    }
                    return prevText
                })
            }, 30)

        }
        

    }, [curText, len, text, write])
    return (
        <div className='typewriter'>
            {curText}
        </div>
    )
}