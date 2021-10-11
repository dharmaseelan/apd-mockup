import React from 'react'

function Contact_Us() {
    return (
        <div className="Contact_Us">
            <div className="container">
                <h2>Register Your Interest</h2>
                <form>
                    <div className="row">
                        <div className="col-lg-6"><input type="text" placeholder="Name" /></div>
                        <div className="col-lg-6">
                            <select>
                                <option disabled selected value="front-end">Occupation</option>
                                <option value="front-end">React Js Developer</option>
                                <option value="vue-js">Vue Js Developer</option>
                                <option value="flutter">Flutter Developer</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-lg-6">
                            <input type="number" placeholder="Contact No" />
                        </div>
                        <div className="col-lg-6">
                            <textarea>Message</textarea>
                            <button>Submit Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact_Us
