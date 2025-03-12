import { Metadata } from 'next';
import ProjectorCard from '../../components/ProjectorCard';
import { ProjectorType } from '../../type/types';

export const metadata: Metadata = {
  title: 'SOI-Projectors',
};

async function ProjectorsAll() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projector`,
    { cache: 'no-store' }
  );
  const projectors: ProjectorType[] = await data.json();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

export default ProjectorsAll;
