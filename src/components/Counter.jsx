import { memo } from "react";
import Trash from "../assets/icons/Trash";

function Counter({ counter, handleIncrement, handleDecrement, handleDelete }) {
  const { id, name, count } = counter;

  console.log("rerender id:", id);

  return (
    <>
      <div className="w-10/12 grid grid-cols-7 border-b-2 my-2">
        <span className="col-span-4 mr-2">
          {name}
          {/* {count >= 0 && (
            <div>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-error btn-sm"
              >
                <Trash classes="w-4 h-4" />
              </button>
            </div>
          )} */}
        </span>
        <div>
          <button
            onClick={() => handleIncrement(id)}
            className="btn btn-primary btn-xs"
          >
            +
          </button>
        </div>

        <div>
          <span
            className={`text-lg mr-4 ${
              count === 0 ? "bg-gray-400 rounded-md text-white" : "bg-gray-600 rounded-md text-white"
            }`}
          >
            {count}
          </span>
        </div>

        {count > 1 ? (
          <div>
            <button
              onClick={() => handleDecrement(id)}
              className="btn btn-primary btn-xs"
            >
              -
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-error btn-xs"
            >
              <Trash classes="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default memo(Counter);
