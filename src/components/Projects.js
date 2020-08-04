// import React, { useState } from 'react';
// import Modal from '../Modal'

// const PhotoList = ({ category }) => {
//     const [photos] = useState([
//         {
//             name: 'Food Festival',
//             category: 'commercial',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Grocery booth',
//             category: 'commercial',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Building exterior',
//             category: 'commercial',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Restaurant table',
//             category: 'commercial',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Cafe interior',
//             category: 'commercial',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Food Festival',
//             category: 'portraits',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Green parrot',
//             category: 'portraits',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Yellow macaw',
//             category: 'portraits',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Pug smile',
//             category: 'portraits',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Pancakes',
//             category: 'food',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Burrito',
//             category: 'food',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Scallop pasta',
//             category: 'food',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Burger',
//             category: 'food',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Fruit bowl',
//             category: 'food',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Green river',
//             category: 'landscape',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Docks',
//             category: 'landscape',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Panoramic village by sea',
//             category: 'landscape',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Domestic landscape',
//             category: 'landscape',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//             name: 'Park bench',
//             category: 'landscape',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//     ]);

//     const currentPhotos = photos.filter((photo) => photo.category === category);
//     //togglemoda invoke
//     const [currentPhoto, setCurrentPhoto] = useState();
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = (image, i) => {
//         setCurrentPhoto({ ...image, index: i });
//         setIsModalOpen(!isModalOpen);
//     }

//     return (
//         <div>
//             {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
//             <div className="flex-row">
//                 {currentPhotos.map((image, i) => (
//                     <img
//                         src={require(`../../assets/small/${category}/${i}.jpg`)}
//                         alt={image.name}
//                         className="img-thumbnail mx-1"
//                         onClick={() => toggleModal(image, i)}
//                         key={image.name}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }


// export default PhotoList;


import React, { useState } from "react";
import projects from './lists.json';
// import '../Navigation/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';






function ProjectCard(props) {
    return (
        <div className="card-container col-12">
            <div className="card">
                <img alt={props.name} src={props.image} className="card-img" />
                <h3>{props.name}</h3>
                <a href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
                <div>
                    <a href={props.deployedapp} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                </div>
            </div>
        </div>
    );
}


function Wrapper(props) {
    return <div className="">{props.children}</div>;
}


function Projects() {
    // Using useState, declare a new state variable 'projectsList' and set it to the 'projects' array from 'projects.json'

    const [projectList, setProjectsList] = useState(projects);


    const renderProject = (project) => {
        return (
            <ProjectCard
                name={project.name}
                image={project.image}
                id={project.id}
                github={project.github}
                deployedapp={project.deployedapp}
                key={project.id}
            />
        )
    }
    //

    return (
        <Wrapper>
            <h1 className="project-list">Project List</h1>

            {projectList.map((project) => (
                renderProject(project)
            ))}
        </Wrapper>
    );
}

export default Projects;

