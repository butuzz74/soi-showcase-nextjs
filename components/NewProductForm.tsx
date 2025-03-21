import { FieldConfigForFormProduct, ServerAction } from '../type/types';
const NewProductForm = ({ action, data }: ServerAction) => {
  return (
    <form
      action={action}
      className="mx-auto max-w-lg space-y-4 rounded-2xl bg-gray-800 p-6 shadow-md"
    >
      {data ? (
        <>
          {data.map((elem) => (
            <div className="flex flex-col">
              <label
                htmlFor={elem.name}
                className="font-medium text-white capitalize"
              >
                {elem.label}
              </label>
              <input
                type={elem.type}
                name={elem.name}
                id={elem.name}
                className="rounded-md border border-gray-300 p-2 text-white"
              />
            </div>
          ))}
        </>
      ) : null}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-400 p-2 text-white hover:bg-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default NewProductForm;
