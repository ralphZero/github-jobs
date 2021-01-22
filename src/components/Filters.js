import React from 'react';
import sheet from './Filters.module.css';

const Filters = () => {
    return (
        <div>
            <span className={sheet.containerFullTime}>
                <input className={sheet.fulltimeInput} type="checkbox" name="" id=""/>
                <span className={sheet.fulltimeText}>Full time</span>
            </span>
            <h3 className={sheet.h3}>Location</h3>
            <div className={sheet.locationGroup}>
                <span className={`material-icons ${sheet.locationIcon}`}>public</span>
                <input className={sheet.locationInput} placeholder='City, state, zip code or country' type="text"/>
            </div>
            <div className={sheet.locationList}>
                <div className={sheet.locationListItem}>
                    <input className={sheet.locationListItemInput} type="radio" name="place"/>
                    <span className={sheet.locationListItemSpan}>London</span>
                </div>
                <div className={sheet.locationListItem}>
                    <input className={sheet.locationListItemInput} type="radio" name="place"/>
                    <span className={sheet.locationListItemSpan}>Amsterdam</span>
                </div>
                <div className={sheet.locationListItem}>
                    <input className={sheet.locationListItemInput} type="radio" name="place"/>
                    <span className={sheet.locationListItemSpan}>New York</span>
                </div>
                <div className={sheet.locationListItem}>
                    <input className={sheet.locationListItemInput} type="radio" name="place"/>
                    <span className={sheet.locationListItemSpan}>Berlin</span>
                </div>
            </div>
        </div>
    );
}

export default Filters;
