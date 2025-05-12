import './App.css';

function App() {
  return (
    <>
     <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-center mb-4">🌤️ Weather App</h2>

        <form className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>

        <div className="text-center">
          <h3>City Name, Country</h3>
          <h1>24°C</h1>
          <p className="text-capitalize">clear sky</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="Weather Icon"
          />
          <div className="mt-3">
            <p>Humidity: 60%</p>
            <p>Wind: 5 m/s</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
