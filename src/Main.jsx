import React from 'react'

const Main = () => {
    return (
        <div id='main'>
            <input type="text" className='input_box' />
            <div>
                <div className="first">
                    <button className="button_blue">C</button>
                    <button className="button_blue">+</button>
                    <button className="button_blue">-</button>
                    <button className="button_blue">X</button>
                </div>
                <div className="second">
                    <button className="button_white">7</button>
                    <button className="button_white">8</button>
                    <button className="button_white">9</button>
                    <button className="button_blue">/</button>
                </div>
                <div className="third">
                    <button className="button_white">4</button>
                    <button className="button_white">5</button>
                    <button className="button_white">6</button>
                    <button className="button_blue">=</button>
                </div>
                <div className="forth">
                    <button className="button_white">1</button>
                    <button className="button_white">2</button>
                    <button className="button_white">3</button>
                    <button className="button_white">0</button>
                </div>
            </div>
        </div>
    )
}

export default Main