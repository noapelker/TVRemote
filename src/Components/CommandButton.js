import React from 'react';

const CommandButton = ({img1, img2, circle, onPress, onLongPress}) => {

    return (
        <div className={img1.parentClass}>
            <img alt={''} src={"../photos2/" + img1.src} id={img1.id}
                 onClick={e => onPress(e)}
                 className={img1.imgClass}
                 onPointerDown={onLongPress?.down}
                 onPointerUp={onLongPress?.up}
            />
            {circle &&
            <div className={'middleCircleSub'} id={"center"} onClick={e => onPress(e)}>Select</div>
            }
            {img2 &&
            <img alt={''} src={"../photos2/" + img2.src} id={img2.id} onClick={e => onPress(e)}
                 className={img2.imgClass}
                 onPointerDown={onLongPress?.down}
                 onPointerUp={onLongPress?.up}
            />
            }
        </div>
    );
};

export default CommandButton;