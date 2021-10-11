import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

function Counter() {

    return (
        <div className="Counter dark">
            <div className="container">
                <div className="heading center">
                    <h3>Our Powerful <span>Skills</span></h3>
                    <p>We're good and experienced at different things and areas and we promise about qulity of our works</p>
                </div>
                <ul className="skills-list d-flex flex-wrap">
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent percent_more" data-percent="75">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={75} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Web Design</label>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent percent_more" data-percent="92">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={92} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Web Development</label>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent percent_more" data-percent="68">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={68} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Speed Optimization</label>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent percent_more" data-percent="100">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={100} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Customer Support</label>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent percent_more" data-percent="83">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={83} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Marketing</label>
                        </div>
                    </li>
                    <li>
                        <div className="item">
                            <div className="count">
                                <div class="circle_percent" data-percent="50">
                                    <div class="circle_inner">
                                        <div class="round_per"></div>
                                    </div>
                                    <CountUp end={50} suffix='%' duration={3}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                            <label>Advertisement</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Counter
