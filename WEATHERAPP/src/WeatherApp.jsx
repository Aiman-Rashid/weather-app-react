import React, { useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Snackbar } from '@mui/material';
import SearchBox from './SearchBox';
import WeatherInfoBox from './WeatherInfoBox';
import MuiAlert from '@mui/material/Alert';
import './style.css'; // Import the CSS file

const WeatherApp = () => {
    const API_key = "204ca8379acbd09c693f46d7520168d5";
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const WeatherInfo = async (City) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}&units=metric`);
            if (!response.ok) throw new Error('City not found');
            const jsonResponse = await response.json();
            const data = {
                location: jsonResponse.name,
                currentTemp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
                wind_speed: jsonResponse.wind.speed,
            };
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container className="container">
            <Typography variant="h2" align="center" gutterBottom>
                Weather App
            </Typography>
            <SearchBox updateInfo={WeatherInfo} />
            {loading && <CircularProgress />}
            {error && <Typography className="error-message">{error}</Typography>}
            {weatherData && (
                <Grid container justifyContent="center" mt={2}>
                    <Grid item>
                        <WeatherInfoBox info={weatherData} />
                    </Grid>
                </Grid>
            )}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    City not found! Please try again.
                </MuiAlert>
            </Snackbar>
        </Container>
    );
};

export default WeatherApp;
