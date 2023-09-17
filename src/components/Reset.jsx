function Reset(props) {
  return (
    <button onClick={props.handleReset} className="btn btn-sm btn-gray-600 text-white">
      Reset
    </button>
  );
}

export default Reset;
