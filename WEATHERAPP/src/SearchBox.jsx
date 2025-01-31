import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Import the CSS file

const SearchBox = ({ updateInfo }) => {
    const [City, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateInfo(City);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="outlined-basic"
                label="Enter city name"
                variant="outlined"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                required
                className="input-field" // Apply input field class
                InputProps={{
                    endAdornment: <SearchIcon />, // Add search icon inside the input
                }}
            />
            <Button variant="contained" type='submit' className="button"> {/* Apply button class */}
                Search
            </Button>
        </form>
    );
};

SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};

export default SearchBox;
