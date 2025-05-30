import { ServerActionEditForm } from '../type/types';
const EditProductForm = ({ action, data, product }: ServerActionEditForm) => {
  return (
    <form
      action={action}
      className="mx-auto mt-8 max-w-lg space-y-4 rounded-2xl bg-gray-800 p-6 shadow-md"
    >
      {data ? (
        <>
          {data.map((elem, index) => (
            <div key={index} className="flex flex-col">
              <label
                htmlFor={elem.name}
                className="font-medium text-white capitalize"
              >
                {elem.label}
              </label>
              {elem.type === 'text' ||
              elem.type === 'textarea' ||
              elem.type === 'checkbox' ? (
                <input
                  type={elem.type === 'checkbox' ? 'checkbox' : 'text'}
                  name={elem.name}
                  id={elem.name}
                  defaultValue={
                    typeof product[elem.name] === 'boolean'
                      ? undefined
                      : (product[elem.name] as string | number)
                  }
                  className="rounded-md border border-gray-300 p-2 text-white"
                  defaultChecked={
                    elem.type === 'checkbox'
                      ? (product[elem.name] as boolean)
                      : undefined
                  }
                />
              ) : (
                <select
                  className="rounded-md border border-gray-300 p-2 text-white"
                  id={elem.name}
                  name={elem.name}
                  defaultValue={
                    typeof product[elem.name] === 'boolean'
                      ? undefined
                      : (product[elem.name] as string | number)
                  }
                >
                  {elem.options?.length !== 0 &&
                    elem?.options?.map((option: string, index: number) => (
                      <option key={index} value={option} className="text-black">
                        {option}{' '}
                      </option>
                    ))}
                </select>
              )}
            </div>
          ))}
        </>
      ) : null}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-400 p-2 text-white hover:bg-blue-300"
      >
        Update
      </button>
    </form>
  );
};

export default EditProductForm;
