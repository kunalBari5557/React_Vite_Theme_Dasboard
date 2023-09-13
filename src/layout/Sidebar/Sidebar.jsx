// import { useEffect, useState } from 'react';
// import { personsImgs } from '../../utils/images';
// import { navigationLinks } from '../../data/data';
// import "./Sidebar.css";
// import { useContext } from 'react';
// import { SidebarContext } from '../../context/sidebarContext';

// const Sidebar = () => {
//   const [activeLinkIdx] = useState(1);
//   const [sidebarClass, setSidebarClass] = useState("");
//   const { isSidebarOpen } = useContext(SidebarContext);

//   useEffect(() => {
//     if(isSidebarOpen){
//       setSidebarClass('sidebar-change');
//     } else {
//       setSidebarClass('');
//     }
//   }, [isSidebarOpen]);

//   return (
//     <div className={ `sidebar ${sidebarClass}` }>
//       <div className="user-info">
//           <div className="info-img img-fit-cover">
//               <img src={ personsImgs.person_two } alt="profile image" />
//           </div>
//           <span className="info-name">alice-doe</span>
//       </div>

//       <nav className="navigation">
//           <ul className="nav-list">
//             {
//               navigationLinks.map((navigationLink) => (
//                 <li className="nav-item" key = { navigationLink.id }>
//                   <a href="#" className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
//                       <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
//                       <span className="nav-link-text">{ navigationLink.title }</span>
//                   </a>
//                 </li>
//               ))
//             }
//           </ul>
//       </nav>
//     </div>
//   )
// }

// export default Sidebar

import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeLinkIdx, setActiveLinkIdx] = useState(1); // Initially set to 1
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  // Function to handle navigation item click
  const handleNavItemClick = (index) => {
    setActiveLinkIdx(index); // Update the active link index when clicked
  };
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">admin panel</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {/* {navigationLinks.map((navigationLink, index) => (
            <li className="nav-item" key={navigationLink.state}>
              <a
                href="#"
                className={`nav-link ${index === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleNavItemClick(index)} // Handle click event
              >
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.state}</span>
              </a>
            </li>
          ))} */}
          {navigationLinks.map((navigationLink, index) => (
            <li className="nav-item" key={navigationLink.state}>
              <Link
                to={navigationLink.path}
                className={`nav-link ${location.pathname === navigationLink.path ? 'active' : ''}`}
                onClick={() => handleNavItemClick(index, navigationLink.path)}
              >
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.state} />
                <span className="nav-link-text">{navigationLink.state}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
