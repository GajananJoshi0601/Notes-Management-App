import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
 });

 function handleSelectProject(id){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: id,
    };
  });
 }

 function handleStartAddProject(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: null,
    };
  });
 }

 function handleCancelAddProject(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
    };
  });
 }

 function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }; 
    });
 }

 function handelDeleteProject(){
    setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId),
    };
  });
 }

 const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
 let content = <SelectedProject project={selectedProject} onDelete={handelDeleteProject } />;

 if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} /> 
 } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}  /> 
 }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject = {handleStartAddProject} 
      projects = {projectsState.projects}
      onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
