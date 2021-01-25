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
                            Humanizing Digital Experiences® Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand. Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance. This position We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools. What you’ll be doing Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position 3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus What we offer: Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks Location - NYC, Flatiron District We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.
                        </div>
                    </div>
                </div>
            </div>
            <footer>Ralph Placide @DevChallenges.io</footer>
        </div>
    );
}

export default jobPage;
