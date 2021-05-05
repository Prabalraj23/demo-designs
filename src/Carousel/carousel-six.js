import { StyleRoot } from 'radium';
import React from 'react';
import Coverflow from 'react-coverflow';


function CarouselSix(){

return(
  <StyleRoot>
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
    //   media={{
    //     '@media (max-width: 400px)': {
    //       width: '900px',
    //       height: '600px'
    //     },
    //     '@media (min-width: 500px)': {
    //       width: '960px',
    //       height: '600px'
    //     }
    //   }}
    >
      <img src='https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='https://i.pinimg.com/originals/68/e9/b6/68e9b693e5c5e30ceac8d17794a513ed.jpg' alt='Album two' data-action="http://passer.cc"/>
      <img src='https://i.pinimg.com/originals/a5/ee/b3/a5eeb3f3061d81478eb7bbc43dc99669.jpg' alt='Album three' data-action="https://doce.cc/"/>
      <img src='https://www.australianlight.com.au/uploaded/public/5032a049c75dc3.41374619.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
    </Coverflow>
  </StyleRoot>
);
}

export default CarouselSix;