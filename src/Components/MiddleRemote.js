import React from 'react';
import "../Styles/middleRemote.css"
import CommandButton from "./CommandButton";
import {command} from "../Textblocks";

const MiddleRemote = ({onPress, onLongPress}) => {
    return (
        <div style={{flex: 1, display: "flex", justifyContent: "center", paddingLeft: 40}}>
            <div className={'middleCircleMain'}>
                <div className={'arrowContainerMiddle'}>
                    <CommandButton img1={command.up} onPress={onPress} onLongPress={onLongPress}/>
                    <CommandButton img1={command.left} img2={command.right} onPress={onPress}
                                   onLongPress={onLongPress}
                                   circle/>
                    <CommandButton img1={command.down}
                                   onLongPress={onLongPress}
                                   onPress={onPress}/></div>
            </div>
        </div>
    );
};

export default MiddleRemote;