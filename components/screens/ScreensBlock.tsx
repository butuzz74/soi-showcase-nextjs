import { ProjectorType } from '../../type/types';
import ScreenCard from '../ScreenCard';
function ScreensBlock({
  projectors,
  layout,
}: {
  projectors: ProjectorType[];
  layout: string;
}) {
  return (
    <div
      className={
        layout === 'grid'
          ? 'mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
          : 'mt-4 grid grid-cols-1 gap-6'
      }
    >
      {projectors.map((projector) => (
        <ScreenCard
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

export default ScreensBlock;
