import React, {useState} from 'react';
import "../Styles/remoteNew.css"
import Volume from "./Volume";
import MiddleRemote from "./MiddleRemote";
import CommandButton from "./CommandButton";
import {command} from "../Textblocks";
const url = "http://192.168.86.27:3030";
// const url = "http://localhost:3030";
let downTimer = null;

const RemoteNew = _ => {
    const [text, setText] = useState(" ");
    const changeDir = (e) => {
        fetch(url + "/command?dir=" + e.currentTarget.id, {mode: "no-cors"}).then(data => console.log(data));
    };
    const setSearch = () => {
        fetch(url + "/search?text=" + text, {mode: "no-cors"}).then(data => console.log(data));
    };
    const setApp = (e) => {
        fetch(url + "/app?name=" + e.target.id, {mode: "no-cors"}).then(data => console.log(data));
    };

    const onLongPress = {
        down: e => {
            clearTimeout(downTimer);
            const id = e.currentTarget.id;
            downTimer = setTimeout(() => {
                fetch(url + "/long?dir=" + id, {mode: "no-cors"})
            }, 1000);

        }, up: _ => {
            clearTimeout(downTimer);
            fetch(url + "/stop", {mode: "no-cors"}).then();
        }
    };

    return (
        <div className={'remoteSub'}>
            <div className={'headerRow'}>
                <div className={'headerRowSub'}>
                    <img alt={''} src={"../photos2/power.png"} id={'power'} className={'powerImage'}
                         onClick={e => changeDir(e)}/>
                    <input type={"text"} className={'search'} value={text}
                           placeholder={"Enter tv show"} onChange={e => setText(e.target.value)}/>
                    <img alt={''} src={"../photos2/search.png"} className={'searchImage'}
                         onClick={_ => setSearch()}/>
                </div>
            </div>
            <CommandButton img1={command.back} img2={command.menu} onPress={changeDir}/>

            <div className={'middleRow'}>
                <MiddleRemote onPress={changeDir} onLongPress={onLongPress}/>
                <Volume onPress={changeDir}/>
            </div>
            <div style={{flex: 1}}>
                <CommandButton img1={command.netflix} onPress={setApp}/>
                <CommandButton img1={command.sting} onPress={setApp}/>
            </div>
        </div>
    );
};

export default RemoteNew;