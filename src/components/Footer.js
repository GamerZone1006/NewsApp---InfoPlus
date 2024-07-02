import React from 'react'

const Footer = ({mode}) => {
    return (
        <>
            <footer className={`bd-footer py-4 py-md-5 mt-5 bg-body-${mode}`}>
                <div className={`container py-4 py-md-5 px-4 px-md-3 text-body-${mode}`}>
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <a className={`d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none ${mode}-mode`} href="/" aria-label="Bootstrap">
                                <title>InfoPlus</title>
                                <span className={`fs-5 text-${mode}-mode`}>InfoPlus</span>
                            </a>
                            <ul className={`list-unstyled small`}>
                                <li className={`mb-2 text-${mode}-mode`}>Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">InfoPlus team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                                <li className={`mb-2 text-${mode}-mode`}>Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                                <li className={`mb-2 text-${mode}-mode`}>Currently v5.3.2.</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5 className={`text-${mode}-mode`}>Links</h5>
                            <ul className="list-unstyled small">
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Home</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Docs</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">About us</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Sources</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Articles</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Blogs</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Reports</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className={`text-${mode}-mode`}>Guides</h5>
                            <ul className="list-unstyled">
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Getting started</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">News</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Info</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Reporters</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">More</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className={`text-${mode}-mode`}>Info</h5>
                            <ul className="list-unstyled">
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Updates</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Authors</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Publishers</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">References</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">More</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5 className={`text-${mode}-mode`}>Community</h5>
                            <ul className="list-unstyled">
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Issues</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Discussions</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Corporate sponsors</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Open Collective</a></li>
                                <li className={`mb-2 text-${mode}-mode`}><a href="/">Stocks</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer