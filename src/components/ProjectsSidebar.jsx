import { list } from "postcss";
import Button from "./Button.jsx";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-slate-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-7">
                {projects.map((project) =>{ 
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-slate-200 hover:bg-stone-800 ";

                    if(project.id === selectedProjectId){
                        cssClasses += 'bg-stone-800 text-slate-200'
                    }
                    else{
                        cssClasses += 'text-slate-400'
                    }

                    return(
                    <li key={project.id}>
                    <button className={cssClasses} onClick={() => onSelectProject(project.id)} >{project.title}</button>
                </li>
                    );
                })}
            </ul>
        </aside>
    );
}