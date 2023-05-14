import React, { Component } from 'react'

export default class Player extends Component {
  render() {
    return (
      <div className='container'>
         <div className='column'>
            <div className='card'>
                <img src='assets/images/cr.jpg' alt=''/>
                <h3>Cristiano Ronaldo</h3>
                <p className='title'>Manschester United</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/neymar.jpg' alt=''/>
                <h3>Neymar</h3>
                <p className='title'>PSG</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/kante.jpg' alt=''/>
                <h3>Kante</h3>
                <p className='title'>Chelsea</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/kane.jpg' alt=''/>
                <h3>Kane</h3>
                <p className='title'>Tottemham</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/messi.jpg' alt=''/>
                <h3>Messi</h3>
                <p className='title'>PSG</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
      
     
        
        
        <div className='column'>
            <div className='card'>
                <img src='assets/images/haaland.jpg' alt=''/>
                <h3>Haaland</h3>
                <p className='title'>Manschester City</p>
                <p className='a'><button className='b'>Detail</button></p>
            </div>
        </div>
       
      </div>
    )
  }
}
