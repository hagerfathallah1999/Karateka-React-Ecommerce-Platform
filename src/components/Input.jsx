const Input = ({ label, value, onChange, name }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default Input;
