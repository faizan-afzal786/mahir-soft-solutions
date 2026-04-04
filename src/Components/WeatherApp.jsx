import React, { useState, useEffect } from 'react'

const WEATHER_APP = () => {

    const [city, setCity] = useState("");
    const [weatherList, setWeatherList] = useState(() => {
        // ✅ Initial load from localStorage
        const saved = localStorage.getItem("weatherList");
        return saved ? JSON.parse(saved) : [];
    });

    // ✅ Save weatherList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("weatherList", JSON.stringify(weatherList));
    }, [weatherList]);

    const getData = (event) => {
        event.preventDefault();
        if (!city.trim()) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=310bc05b1ea4a73db49b9a3edaebe179&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                if (data.cod !== 200) return;

                // prevent duplicate cities
                const exists = weatherList.find(item => item.name === data.name);
                if (!exists) {
                    setWeatherList([...weatherList, data]);
                }
            });

        setCity("");
    }

    const removeCity = (name) => {
        const updated = weatherList.filter(item => item.name !== name);
        setWeatherList(updated);
    }

    return (
        <div className='app-container'>
            <style>{`
        body { margin: 0; font-family: Arial; }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
        }

        .app-name {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .search {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .search-input {
          padding: 12px;
          border-radius: 10px;
          border: none;
          outline: none;
          width: 200px;
        }

        .search-button {
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          background: #00c6ff;
          color: white;
          cursor: pointer;
        }

        .weather-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
          width: 90%;
          max-width: 800px;
        }

        .weather-box {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          text-align: center;
          position: relative;
          animation: fadeUp 0.4s ease;
        }

        .remove-btn {
          position: absolute;
          top: 8px;
          right: 10px;
          cursor: pointer;
          background: red;
          border: none;
          color: white;
          border-radius: 50%;
          width: 25px;
          height: 25px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <h1 className='app-name'>🌤 Mahir WEATHER APP</h1>

            <form className='search' onSubmit={getData}>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Enter City...'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className='search-button'>Search</button>
            </form>

            <div className='weather-list'>
                {weatherList.map((item, index) => (
                    <div className='weather-box' key={index}>
                        <button className='remove-btn' onClick={() => removeCity(item.name)}>x</button>
                        <h2>{item.name}</h2>
                        <p>{item.weather[0].main}</p>
                        <h3>{item.main.temp}°C</h3>
                        <p>Humidity: {item.main.humidity}%</p>
                        <p>Wind: {item.wind.speed} m/s</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WEATHER_APP;