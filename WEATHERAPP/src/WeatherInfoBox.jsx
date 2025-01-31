import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './style.css'; // Import the CSS file

const WeatherInfoBox = ({ info }) => {
    // Determine the image based on the current temperature
    const imageSrc = info.currentTemp < 15 
        ? 'src/assets/hot.png' 
        : info.currentTemp > 30 
        ? 'src/assets/cold.png' 
        : 'src/assets/mod.png';

    return (
        <Card className="card" sx={{ width: '300px' }}> {/* Set a specific width for the card */}
            <CardActionArea>
                <div style={{ height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Flexbox for centering */}
                    <CardMedia
                        component="img"
                        image={imageSrc}
                        alt="Weather Image"
                        sx={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} // Ensure the image fits within the container
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather in {info.location} 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Temperature:</strong> {info.currentTemp}°C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Humidity:</strong> {info.humidity}%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Pressure:</strong> {info.pressure} hPa
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Weather:</strong> {info.weather}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Wind Speed:</strong> {info.wind_speed} m/s
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

WeatherInfoBox.propTypes = {
    info: PropTypes.shape({
        location: PropTypes.string.isRequired,
        currentTemp: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
        wind_speed: PropTypes.number.isRequired,
    }).isRequired,
};

export default WeatherInfoBox;
