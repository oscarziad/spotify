import PlaylistCard from "../component/PlaylistCard";

const WebPlayer = () => {
    return (
        <>
            <div className="webplayer-container">
                <div className="row webplayer-playlist pt-3">
                    <div className="col playlist-title">Spotify Playlists</div>
                    <div className="col playlist-option">Show all</div>
                </div>
                <div className="row playlist-row">
                    {[...Array(7)].map((x, i) =>
                        <PlaylistCard key={i} />
                    )}
                </div>
                <div className="row webplayer-playlist pt-4">
                    <div className="col playlist-title">Focus</div>
                    <div className="col playlist-option">Show all</div>
                </div>
                <div className="row playlist-row">
                    {[...Array(7)].map((x, i) =>
                        <PlaylistCard key={i} />
                    )}
                </div>
                <div className="row webplayer-playlist pt-4">
                    <div className="col playlist-title">Sleep</div>
                    <div className="col playlist-option">Show all</div>
                </div>
                <div className="row playlist-row">
                    {[...Array(7)].map((x, i) =>
                        <PlaylistCard key={i} />
                    )}
                </div>
            </div>
        </>
    )
};

export default WebPlayer;