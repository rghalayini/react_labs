import React from 'reactDom';

let singleImage = (props) => {
    return (
        <div className = 'image-character'>
            <img onClick={() =>{
                observerMenu.exercuteObserver('changeFocus', {focusedChar: Number(props.params.id)});
            }}
            className="char-img" 
            src={props.params.url} alt="char" />
        </ div>
    )
}

export default singleImage;