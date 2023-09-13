import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullscreen = () => {
    const element = document.documentElement; // Use document.documentElement for fullscreen on the entire document
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element).mozRequestFullScreen) {
        (element).mozRequestFullScreen(); // Type assertion
      } else if ((element).webkitRequestFullscreen) {
        (element).webkitRequestFullscreen(); // Type assertion
      } else if ((element).msRequestFullscreen) {
        (element).msRequestFullscreen(); // Type assertion
      }
      setIsFullScreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document).mozCancelFullScreen) {
        (document).mozCancelFullScreen(); // Type assertion
      } else if ((document).webkitExitFullscreen) {
        (document).webkitExitFullscreen(); // Type assertion
      } else if ((document).msExitFullscreen) {
        (document).msExitFullscreen(); // Type assertion
      }
      setIsFullScreen(false);
    }
  };

  const toggleClass = () => {
    toggleSidebar();
  };
  return (
    <div className="main-content-top">        
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>        
        <div className="content-top-btns">
            <button style={{marginRight:"1rem"}} type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button style={{marginRight:"2rem"}} className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
            {isFullScreen ? (
                <BsFullscreenExit
                  style={{
                    color: "white",
                    height: "24px",
                    width: "24px",
                    fontWeight: "bold",
                  }}
                  onClick={handleFullscreen}
                />
              ) : (
                <BsFullscreen
                  style={{
                    color: "white",
                    height: "25px",
                    width: "25px",
                    fontWeight: "bold",
                  }}
                  onClick={handleFullscreen}
                />
              )}
        </div>
    </div>
  )
}

export default ContentTop
