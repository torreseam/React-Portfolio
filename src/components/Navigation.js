// import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Nav(props) {
//     const {
//         categories = [],
//         setCurrentCategory,
//         currentCategory,
//         contactSelected,
//         setContactSelected
//     } = props;

//     useEffect(() => {
//         document.title = capitalizeFirstLetter(currentCategory.name);
//     }, [currentCategory]);

//     return (
//         <header className="flex-row px-1">
//             <h2>
//                 <a data-testid="link" href="/">
//                     <span role="img" aria-label="camera"> </span> My Page
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className="mx-2">
//                         <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}> About me</a>
//                     </li>
//                     <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//                         <span onClick={() => setContactSelected(true)}>Contact</span>
//                     </li>
//                     {categories.map((category) => (
//                         <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
//                             key={category.name}>
//                             <span onClick={() => {
//                                 setCurrentCategory(category);
//                                 setContactSelected(false);
//                             }}
//                             >
//                                 {capitalizeFirstLetter(category.name)}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Nav;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navigation(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <ul className="nav ">
            {tabs.map(tab => (
                <li className="" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;