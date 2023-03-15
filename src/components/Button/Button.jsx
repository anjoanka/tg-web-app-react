import React from 'react';


const tg = window.Telegram.WebApp;

const Button = (props) => {
    return (
        <div>
            <Button {...props} className={'button' + props.className}/>
        </div>
    );
}

export default Button;
