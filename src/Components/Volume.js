import React, {useState} from 'react';
import "../Styles/volume.css"

const Volume = ({onPress}) => {
    const [press, setPress] = useState(false);
    const play = _ => {
        if (press) {
            setInterval(() => {
                console.log('Interval triggered');
            }, 300);
        }
        else clearInterval(()=>{});
    };

    return (
        <div className={'volumeContainer'}>
            <div className={'Vol'} id={"plus"} onClick={e => onPress(e)}
                 onMouseDown={_ => {
                     setPress(true);
                 }} onMouseUp={_ => setPress(false)}>
                +
            </div>
            <div className={'textVol'}>Vol</div>
            <div className={'Vol'} id={"minus"} onClick={e => onPress(e)} onTouchStart={_=> {
                play();
                setPress(true);
            }} onTouchEnd={_ => {setPress(false);console.log("end")}}>
                -
            </div>
        </div>
    );
};

export default Volume;