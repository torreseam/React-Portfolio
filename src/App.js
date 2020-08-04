// import React, { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Nav from './components/Nav';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

// function App() {
//   const [categories] = useState([
//     {
//       name: 'commercial',
//       description: 'Photos of grocery stores, food trucks, and other commercial projects',
//     },
//     // { name: 'About Me', description: 'My name is Edgar ' },
//     { name: 'Portfolio', description: 'Portraits of people in my life' },
//     { name: 'Resume', description: 'Delicious delicacies' },
//     { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);
//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Gallery currentCategory={currentCategory}></Gallery>
//             <About></About>
//           </>
//         ) : (
//             <ContactForm></ContactForm>
//           )}
//       </main>
//     </div>
//   );
// }

// const App = () => {

//   return (
//     <>
//       <div>
//         <Header></Header>
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//     </>
//   )

// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )

}


export default App;
