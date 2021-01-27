import React from 'react';
import Backbutton from '../Backbutton';
import Title from '../Title';
import FullTime from '../FullTime';
import sheet from '../JobItem.module.css';
import thumb from '../../media/notfound.png';

const jobPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
                <Title />
                <div className='global'>
                    <div>
                        <Backbutton />
                        <h3>how to apply</h3>
                        <p className='apply'>Please email a copy of your resume and online portfolio to <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span></p>
                    </div>
                    <div>
                        <div className='titleContainer'>
                            <div>
                                <span className='title'>Front-End Software Engineer</span>
                                <FullTime />
                            </div>
                            <span className={sheet.extrainfo}>
                                <span className={'material-icons ' + sheet.icons}>access_time</span>
                                <span className={sheet.location}>5 days ago</span>
                            </span>
                            <div style={{ marginTop: '24px' }} className={sheet.imgAndJobTitle}>
                                <img style={{ width: '46px', height: '46px' }} src={thumb} className={sheet.img} alt='thumbnail' />
                                <div className={sheet.jobTitle}>
                                    <span className={sheet.title}>Kasisto</span>
                                    <span className={sheet.fulltimeAndExtra}>
                                        <span className={sheet.extrainfo}>
                                            <span className={'material-icons ' + sheet.icons}>public</span>
                                            <span className={sheet.location}>New York</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            Hello world
                        </div>
                    </div>
                </div>
            </div>
            <footer>Ralph Placide @DevChallenges.io</footer>
        </div>
    );
}

export default jobPage;
