const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="row h-100 flex-nowrap m-auto">
                    <div className="col m-auto">
                        <div className="redirect-container d-inline-flex">
                            <button className="redirect-button">
                                <i className="ri-arrow-left-s-line"></i>
                            </button>
                            <button className="redirect-button">
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-11 m-auto">
                        <div className="link-container">
                            <div className="links d-inline-flex">
                                <p className="links-menu">Premium</p>
                                <p className="links-menu">Support</p>
                                <p className="links-menu">Download</p>
                            </div>

                            <div className="links-seperator d-inline-flex">|</div>

                            <div className="login-container d-inline-flex">
                                <p className="links-menu">Sign Up</p>
                                <button className="signup-button">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;