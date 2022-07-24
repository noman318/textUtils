import React from 'react'

export default function About(props) {

  return (
    <div className='container my-3' style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <h2>About us</h2>
            <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0px solid white':'black'}}>
    <div className="accordion-item"style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <h2 className="accordion-header" id="headingOne" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            Accordion Item 1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <h2 className="accordion-header" id="headingTwo" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            Accordion Item 2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <h2 className="accordion-header" id="headingThree" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            Accordion Item 3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}}>
        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black', border: props.mode === 'dark'?'0.5px solid white':'black'}}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
