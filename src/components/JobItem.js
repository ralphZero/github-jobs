import React from 'react';
import sheet from './JobItem.module.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import thumb from '../media/notfound.png';

const JobItem = ({ id, company, logo, title, type, location, date }) => {

    TimeAgo.addLocale(en);

    const timeAgo = new TimeAgo('en-US');

    const fulltime = type.toLowerCase() === 'full time' ? (
        <span className={sheet.fulltime}>Full time</span>
    ) : null;

    const thumbnail = logo !== null ? logo : thumb;

    return (
        <div className={sheet.container}>
            <div className={sheet.imgAndJobTitle}>
                <img src={thumbnail} className={sheet.img} alt='thumbnail' />
                <div className={sheet.jobTitle}>
                    <span>{company}</span>
                    <span className={sheet.title}>{title}</span>
                    <span className={sheet.fulltimeAndExtra}>
                        { fulltime }
                        <div className={sheet.extrainfoGroup}>
                            <span className={sheet.extrainfo}>
                                <span className={'material-icons ' + sheet.icons}>public</span>
                                <span className={sheet.location}>{location}</span>
                            </span>

                            <span className={sheet.extrainfo}>
                                <span className={'material-icons ' + sheet.icons}>access_time</span>
                                <span className={sheet.location}>{timeAgo.format(Date.parse(date))}</span>
                            </span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default JobItem;