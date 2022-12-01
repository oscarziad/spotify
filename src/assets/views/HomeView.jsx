import Header from "../containers/Header";
import Navbar from "../containers/Navbar";
import SignUpBar from "../containers/SignUpBar";
import WebPlayer from "../containers/WebPlayer";

const HomeView = () => {
  return (
    <>
      <div className="root row">
        <div className="col-2 p-0">
          <Navbar />
        </div>
        <div className="col p-0">
          <Header />
          <WebPlayer />
        </div>
        <div className="w-100"></div>
        <div className="col p-0">
          <SignUpBar />
        </div>
      </div>
    </>
  )
};

export default HomeView;