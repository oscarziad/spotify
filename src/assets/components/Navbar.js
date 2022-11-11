import SpotifyLogo from "./SpotifyLogo";

const Navbar = () => {
  return (
    <>
      <div className='navbar-container'>
        <SpotifyLogo />
        <div className='navbar-links-container'>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <i class="ri-home-line me-3"></i>
              <p className='navbar-links-title'>Home</p>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <i class="ri-search-line me-3"></i>
              <p className='navbar-links-title'>Search</p>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <i class="ri-stack-line me-3"></i>
              <p className='navbar-links-title'>Your Libary</p>
            </div>
          </div>
        </div>

        <div className='navbar-links-container mt-4'>
          <div className='row'>
            <div className='col d-flex navbar-links mb-3'>
              <span className='create-playlist me-3'><i class="ri-add-line small-icon"></i></span>
              <p className='navbar-links-title active'>Create Playlist</p>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <span className='liked-songs me-3'><i class="ri-heart-fill small-icon heart"></i></span>
              <p className='navbar-links-title'>Liked Songs</p>
            </div>
          </div>
        </div>

        <div className='navbar-links-container'>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <p className='navbar-links-paragraph'>Cookies</p>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex navbar-links'>
              <p className='navbar-links-paragraph'>Privacy</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default Navbar;