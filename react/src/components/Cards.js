import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
      <h1>Check Out Our Gallary!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/waterjar1.png'
              text='Mineral Normal water jar 30 to 60 ltrs'
              label='waterjar'
              path='/CustomerLogin'
            />
            <CardItem
              src='images/waterjar2.png'
              text='Mineral Cold water jar 30 to 60 ltrs'
              label='waterjar'
              path='/CustomerLogin'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/waterjar3.png'
              text='Purified Normal water jar 30 to 60 ltrs'
              label='waterjar'
              path='/CustomerLogin'
            />
            <CardItem
              src='images/waterjar4.png'
              text='Purified Cold water jar 30 to 60 ltrs'
              label='waterjar'
              path='/CustomerLogin'
            />
            <CardItem className='sing-up'
              src='images/waterjar5.png'
              text='Normal and Cold water jar with added minerals'
              label='waterjar'
              path='/CustomerLogin'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
