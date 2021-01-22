import React from 'react';
import sheet from './JobItem.module.css';
import thumb from '../media/notfound.png';

const JobItem = (props) => {
    return (
        <div className={sheet.container}>
            <div className={sheet.imgAndJobTitle}>
                <img src={thumb} className={sheet.img} alt='thumbnail' />
                <div className={sheet.jobTitle}>
                    <span>Kasisto</span>
                    <span className={sheet.title}>Front-End Software Engineer</span>
                    <span className={sheet.fulltimeAndExtra}>
                        <span className={sheet.fulltime}>Full time</span>
                        <div className={sheet.extrainfoGroup}>
                            <span className={sheet.extrainfo}>
                                <span className={'material-icons ' + sheet.icons}>public</span>
                                <span className={sheet.location}>New York</span>
                            </span>

                            <span className={sheet.extrainfo}>
                                <span className={'material-icons ' + sheet.icons}>access_time</span>
                                <span className={sheet.location}>5 days ago</span>
                            </span>
                        </div>
                    </span>

                </div>
            </div>

        </div>
    );
}

export default JobItem;