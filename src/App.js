import './App.css';
import IncrementDecrement from './IncrementDecrement';
// import Form from './Form';
// import DigitalClock from './DigitalClock';
// import Math from './Math';
// import Time from './Time';

function App() {
  // let arr = ['reverdale', 'titans', 'dark desire', 'tommoow', 'lucifer']
  // let sort = arr.sort()

  // let date = new Date().toLocaleDateString();
  // let time = new Date().getHours();
  // console.log(time);
  // let text = "";
  // let style = {}
  // if (time > 5 && time < 12) {
  //   text = "Good Morning";
  //   style = { 
  //     color: "green",
  //   }
  // } else if (time >= 12 && time <= 17) {
  //   text = "Good Afternoon";
  //   style = { 
  //     color: "orange",
  //   }
  // } else if (time > 17 && time <= 19 ) {
  //   text = "Good Evening";
  //   style = { 
  //     color: "blue",
  //   }
  // } else {
  //   text =" Good Night";
  //   style = { 
  //     color: "black",
  //   }
  // }

  return (
    <div className="App">
      <IncrementDecrement />
      {/* <Form /> */}
      {/* <DigitalClock /> */}
      {/* <Time /> */}
      {/* <Math /> */}
      {/* <h1>...Netflix...</h1>
      <p><b>top 5 web series...</b></p>
      <li>1. {sort[0]}</li>
      <li>2. {sort[1]}</li>
      <li>3. {sort[2]}</li>
      <li>4. {sort[3]}</li>
      <li>5. {sort[4]}</li> */}

      {/* <h1>My name is Ashish Malaviya</h1>
      <h1>Date : {date}</h1>

      <h2>Time : {time}</h2> */}
      {/* <h1 style={{color:'red'}}>Hello Sir ! <span style={style}>{text}</span></h1> */}




    </div>
  );
}

export default App;
