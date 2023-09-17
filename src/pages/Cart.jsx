import Counter from "../components/Counter";
import Reset from "../components/Reset";
import SubmitCart from "../components/SubmitCart";

function Cart(props) {
  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-50 min-h-screen w-screen relative">
      <div className="flex flex-col items-center justify-center py-28 w-4/12 m-auto bg-gray-300 rounded-lg absolute left-1/3 top-1/4">
        {props.counters.length === 0 && <h1>Your cart is empty!</h1>}
        {props.counters.map((counter) => (
          <Counter
            className=""
            key={counter.id}
            counter={counter}
            handleIncrement={props.handleIncrement}
            handleDelete={props.handleDelete}
            handleDecrement={props.handleDecrement}
          />
        ))}

        <div className="flex gap-20">
          <div>
            {props.counters.length !== 0 && (
              <Reset handleReset={props.handleReset} />
            )}
          </div>

          <div>
            {props.counters.length !== 0 && (
              <SubmitCart handleSubmit={props.handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
