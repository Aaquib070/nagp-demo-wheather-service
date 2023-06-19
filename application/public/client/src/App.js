import logo from './logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = () => {
    axios.get('/api/wheather').then(res=>{
      setData(res.data);
    }).catch(err=>{
      console.log('err',err)
    })
  }

  const checkWeather = () => {
    axios.get('/api/wheather/check-wheather').then(res=>{
      fetchWeather()
    }).catch(err=>{
      console.log('err',err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='tableDiv'>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Wind</th>
              <th>Cloud</th>
              <th>Date & Time</th>
              <th colSpan={2}>Condition</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => {
              const date = new Date(row.createdAt);
              const displaDate =date.toLocaleString('en-US', {
                //weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
              });

              return(
              <tr>
              <td>{row.location}</td>
              <td>{row.temp_c} °C</td>
              <td>{row.humidity} %</td>
              <td>{row.wind_kph} km/h</td>
              <td>{row.cloud} %</td>
              <td>{displaDate}</td>
              <td>< img src={row.condition.icon}/></td>
              <td className='desc'>{row.condition.text}</td>

            </tr>)
            })}
            <tr>
              <td colSpan={8}> <button className='button' onClick={checkWeather}>Check weather</button></td>  
            </tr>
          </tbody>
        </table>
        </div>
      </header>
    </div>
  );
}

export default App;
