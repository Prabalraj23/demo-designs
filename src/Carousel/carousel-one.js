import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const App = () => (
  <div
    className="App"
    style={{ width: "200vh", padding: "20px" }}
  >
    <Carousel arrows={true} infinite >
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="slider" />
      </div>
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://i.pinimg.com/originals/68/e9/b6/68e9b693e5c5e30ceac8d17794a513ed.jpg" alt="slider" />
      </div>
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://i.pinimg.com/originals/a5/ee/b3/a5eeb3f3061d81478eb7bbc43dc99669.jpg" alt="slider" />
      </div>
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://www.australianlight.com.au/uploaded/public/5032a049c75dc3.41374619.jpg" alt="slider" />
      </div>
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="slider" />
      </div>
      <div>
        <img style={{ width: "200vh", height: "20rem" }} src="https://i.pinimg.com/originals/68/e9/b6/68e9b693e5c5e30ceac8d17794a513ed.jpg" alt="slider" />
      </div>
    </Carousel>
  </div>
);

export default App;