import React, { useState } from 'react';
import sheet from './Filters.module.css';

const Filters = () => {
    const cities = ['London', 'Amsterdam', 'New York', 'Berlin', ''];

    const [fullTime, setFullTime] = useState(false);
    
    const [location, setLocation] = useState(cities[0]);


    const locationList = cities.map((city, index) => {
        let val = city === '' ? {display: 'none'} : null;
        return (
            <div key={index} className={sheet.locationListItem} style={val}>
                <input className={sheet.locationListItemInput} type="radio" value={city} checked={location === city ? true : false} onChange={() => setLocation(city)} name="place"/>
                <span className={sheet.locationListItemSpan}>{city}</span>
            </div>
        );
    });

    const handleTextLocation = (e) => {
        if(e.keyCode === 13) {
            const value = e.currentTarget.value;
            if(value === '') {
                
            }else{
                setLocation('');
            }
        }
    }

    return (
        <div>
            <span className={sheet.containerFullTime}>
                <input className={sheet.fulltimeInput} type="checkbox" checked={fullTime} onChange={() => setFullTime(!fullTime)}/>
                <span className={sheet.fulltimeText}>Full time</span>
            </span>
            <h3 className={sheet.h3}>Location</h3>
            <div className={sheet.locationGroup}>
                <span className={`material-icons ${sheet.locationIcon}`}>public</span>
                <input className={sheet.locationInput} placeholder='City, state, zip code or country' type="text" onKeyUp={(e) => handleTextLocation(e)}/>
            </div>
            <div className={sheet.locationList}>
                { locationList }
            </div>
        </div>
    );
}

export default Filters;
