import React, { useContext, useEffect, useState } from 'react';
import Backbutton from '../Backbutton';
import Title from '../Title';
import FullTime from '../FullTime';
import sheet from '../JobItem.module.css';
import thumb from '../../media/notfound.png';
import { JobContext } from '../../contexts/JobContext';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Link } from 'react-router-dom';

const JobPage = (props) => {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');

    const { state } = useContext(JobContext);

    const [dataList, setDataList] = useState(undefined);

    let id = props.match.params.id;


    let data;

    if (dataList !== undefined) {
        data = state.data.filter((job) => job.id === id)[0];
    }

    useEffect(() => {
        if (state.data.length !== 0) {
            setDataList(state.data);
        }
    }, [state]);

    return dataList !== undefined ? (
        data === undefined ? (
            <div className='page-not-found'>
                <h1>Page not found</h1>
                <h4>We can't seem to find the page you're looking for</h4>
                <Link to='/'>Go back to homepage</Link>
            </div>
        ) : (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <div>
                            <Title />
                            <div className='global'>
                                <div>
                                    <Backbutton onClick={() => {props.history.goBack()}} />
                                    <h3>how to apply</h3>
                                    <p className='apply' dangerouslySetInnerHTML={{__html: data.how_to_apply}}></p>
                                </div>
                                <div>
                                    <div className='titleContainer'>
                                        <div>
                                            <span className='title'>{data.title}</span>
                                            {data.type.toLowerCase() === 'full time' ? <FullTime /> : null}
                                        </div>
                                        <span className={sheet.extrainfo}>
                                            <span className={'material-icons ' + sheet.icons}>access_time</span>
                                            <span className={sheet.location}>{timeAgo.format(Date.parse(data.created_at))}</span>
                                        </span>
                                        <div style={{ marginTop: '24px' }} className={sheet.imgAndJobTitle}>
                                            <img style={{ width: '46px', height: '46px' }} src={data.company_logo ?? thumb} className={sheet.img} alt='thumbnail' />
                                            <div className={sheet.jobTitle}>
                                                <span className={sheet.title}>{data.company}</span>
                                                <span className={sheet.fulltimeAndExtra}>
                                                    <span className={sheet.extrainfo}>
                                                        <span className={'material-icons ' + sheet.icons}>public</span>
                                                        <span className={sheet.location}>{data.location}</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='description' id='desc' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                </div>
                            </div>
                        </div>
                        <footer>Ralph Placide @DevChallenges.io</footer>
                    </div>
                </div>
            )
    ) : null;
}

export default JobPage;
