import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Steps } from 'antd';
import { SvgIcon } from '../../components/common';
import FormInformationStep from './FormInformationStep';
import ReviewConfirmStep from './ReviewConfirmStep';
import SentStep from './SentStep';
import './index.scss';

import Traccyicon from '../../assets/images/icon.png';
import LogoLight from '../../assets/images/logo-light.png';
import { Navbar } from '../../components/layout';

const steps = [
    {
        title: 'Form Information',
        content: <FormInformationStep />,
    },
    {
        title: 'Review & Confirm',
        content: <ReviewConfirmStep />,
    },
    {
        title: 'Sent',
        content: <SentStep />,
    },
];

const BecomePart = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <div className='becomepart-wrapper'>
            <div className='leftbar'>
                <div className='traccy-icon'>
                    <img src={Traccyicon} alt='Logo' />
                </div>
                <div className='social-icon-list'>
                    <SvgIcon name='twitter' viewbox='0 0 36 29.239' />
                    <SvgIcon name='facebook' viewbox='0 0 34.875 34.664' />
                    <SvgIcon name='instagram' viewbox='0 0 32.999 32.999' />
                    <SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' />
                </div>
            </div>
            <div className='right-section'>
                <div className='header-bar'>
                    <Navbar />
                </div>
                <div className='rightbar-inner'>
                    <div className='address-bar'>
                        <div className='logo-section'>
                            <img src={LogoLight} alt='Logo' />
                        </div>
                        <div className='address-col'>
                            <h3>Location Switzerland</h3>
                            <p>
                                TRACCY AG <br />
                                Grabenstrasse 15b, <br />
                                6340 Baar <br />
                                info@traccy.ch <br />
                                +41 44 045 45 45
                            </p>
                        </div>
                        <div className='address-col'>
                            <h3>Location Switzerland</h3>
                            <p>
                                TRACCY AG <br />
                                Grabenstrasse 15b, <br />
                                6340 Baar <br />
                                info@traccy.ch <br />
                                +41 44 045 45 45
                            </p>
                        </div>
                        <div className='bottom-link'>
                            <Link to='/'>Terms of Use</Link>  I  <Link to='/'> Privacy Policy </Link>
                        </div>
                    </div>
                    <div className='dtl-section'>
                        <Steps current={current} items={items} />
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action">
                            {current === 0 && (
                                <>
                                    <Link to='/'>FAQ</Link>
                                    <Button type="primary" onClick={() => next()}>
                                        Continue
                                    </Button>
                                </>
                            )}
                            {current === 1 && (
                                <>
                                    <Link to='/'>FAQ</Link>
                                    <div>
                                        <Button onClick={() => prev()}>
                                            Back
                                        </Button>
                                        <Button type="primary" onClick={() => next()}>
                                            Continue
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BecomePart