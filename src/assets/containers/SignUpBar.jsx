const SignUpBar = () => {
    return (
        <>
            <div className="signupbar-container">
                <div className="row">
                    <div className="col">
                        <p className="singupbar-text signup-text-upper m-0">Preview of Spotify</p>
                        <p className="singupbar-text signup-text-down m-0">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <div className="col">
                        <button className="signup-button">Sign up free</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SignUpBar;