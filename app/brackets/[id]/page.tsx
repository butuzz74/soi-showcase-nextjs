import NavigationButton from '../../../components/Button';
import ProjectorCardOne from '../../../components/ProjectorCardOne';
import { ProjectorType } from '../../../type/types';
import { Metadata } from 'next';
import { auth } from '../../../config/auth';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/bracket/${id}`,
    { cache: 'no-store' }
  );
  const display: ProjectorType = await data.json();
  if (!display) {
    return {
      title: 'Bracket Not Found',
      description: 'Details about this bracket are not available.',
    };
  }

  return {
    title: display.model,
    description: display.description,
  };
}

async function BracketPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/bracket/${id}`,
    { cache: 'no-store' }
  );
  const display: ProjectorType = await data.json();

  return (
    <div className="mx-auto flex h-full w-full flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg items-center my-8">
      <ProjectorCardOne
        id={display?._id!}
        image={display?.image!}
        price={display?.price!}
        model={display?.model!}
        type={display?.type!}
        brand={display?.brand!}
        access={display?.access!}
        description={display?.description!}
      />
      <div className="flex justify-center mb-8">
        {session ? <NavigationButton text="Редактировать" back={true} /> : null}
        <NavigationButton text="Назад" back={true} />
      </div>
    </div>
  );
}

export default BracketPage;
