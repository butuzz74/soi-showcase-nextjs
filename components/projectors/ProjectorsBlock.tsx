import { ProjectorType } from '../../type/types';
import ProjectorCard from '../ProjectorCard';
function ProjectorsBlock({ projectors, layout }: { projectors: ProjectorType[], layout:string }) {
  return (
    <div className={layout === "grid" ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" : "grid grid-cols-1 gap-6"}>
      {projectors.map((projector) => (
        <ProjectorCard
          key={projector._id}
          id={projector._id}
          image={projector.image}
          price={projector.price}
          model={projector.model}
          type={projector.type}
          brand={projector.brand}
          access={projector.access}
          description={projector.description}
        />
      ))}
    </div>
  );
}

export default ProjectorsBlock;
