

import image1 from '../images/musicAlbum.jpg'

const WebPlayer = () => {
    return (
        <>
            <div className="col playlist-card">
                <div className="playlist-image">
                    <img src={image1} alt="" />
                    {/* <div className="play-button">
                        <i className="ri-play-fill"></i>
                    </div> */}
                </div>
                <h4 className="playlist-card-title">RapCaviar</h4>
                <p className="playlist-card-paragraph mb-0">New music from Roddy Ricch, Don Toliver and...</p>
            </div>
        </>
    )
};

export default WebPlayer;