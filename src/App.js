import './App.css';
import logo from './images/thecoder7.jpg';
const div = {
  width: "500px",
  height: "650px"
}
const cyan = {
  background: "#99CEFF"
}
const white = {
  background: 'white'
}
const cyandiv = {...div, ...cyan}
const whitediv = {...div, ...white}
function App() {
  return (
    <body className='flex justify-center items-center' style={{background: `url(${logo})`}}>
      <div className='shadow-xl' style={cyandiv}>theocer</div>
      <div className='shadow-xl' style={whitediv}></div>
    </body>
  );
}

export default App;
