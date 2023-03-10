import React from 'react';
import { Container, Row, Col, SvgIcon } from '../../components/common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"
import './index.scss';

import BannerImg from '../../assets/images/itt-slide.jpg';

const ImpactThroughTraccy = () => {
    const history = useHistory();
    const slider = React.useRef(null);
    const settings2 = {
        dots: true,
        infinite: false,
        speed: 900,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='thumb-col-main'>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='thumb-col-main'
            >
                {i === 0 && <div className='thumb-col'><span>01</span> Summer revival</div>}
                {i === 1 && <div className='thumb-col'><span>02</span> Winer edition</div>}
                {i === 2 && <div className='thumb-col'><span>03</span> Winer edition</div>}
            </div>
        )
    };
    return (
        <div className='itt-wrapper'>
            <section className='banner-section'>
                <div className='social-media'>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='twitter' viewbox='0 0 36 29.239' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='facebook' viewbox='0 0 34.875 34.664' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='instagram' viewbox='0 0 32.999 32.999' /></Button>
                    <Button onClick={() => window.open('https://twitter.com/')}><SvgIcon name='linkedin' viewbox='0 0 32.001 32.001' /></Button>
                </div>
                <Slider {...settings2} ref={slider}>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <Row>
                                <Col lg='6' className="banner-left">
                                    <p>
                                        NEXT EVENT
                                    </p>
                                    <h1>Epicurrence Summer Revival</h1>
                                    <p>
                                        Yosemite national park -- 4 day trip
                                    </p>
                                    <Button type='primary' onClick={() => history.push('/impact-through-traccy-details')}>Get now <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                                </Col>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <Row>
                                <Col lg='6' className="banner-left">
                                    <p>
                                        NEXT EVENT
                                    </p>
                                    <h1>Epicurrence Summer Revival</h1>
                                    <p>
                                        Yosemite national park -- 4 day trip
                                    </p>
                                    <Button type='primary' onClick={() => history.push('/impact-through-traccy-details')}>Get now <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                                </Col>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <div className='about-banner' style={{ backgroundImage: `url(${BannerImg})` }}></div>
                        <Container>
                            <Row>
                                <Col lg='6' className="banner-left">
                                    <p>
                                        NEXT EVENT
                                    </p>
                                    <h1>Epicurrence Summer Revival</h1>
                                    <p>
                                        Yosemite national park -- 4 day trip
                                    </p>
                                    <Button type='primary' onClick={() => history.push('/impact-through-traccy-details')}>Get now <SvgIcon name='send-icon' viewbox='0 0 19.612 18.074' /></Button>
                                </Col>
                                <Col sm='12' className='arrow-action'>
                                    <button onClick={() => slider?.current?.slickPrev()}><SvgIcon name='arrow-left' viewbox='0 0 9.071 16.492' /></button>
                                    <button onClick={() => slider?.current?.slickNext()}><SvgIcon name='arrow-right' viewbox='0 0 9.073 16.494' /></button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Slider>
            </section>
        </div>
    )
};

export default ImpactThroughTraccy