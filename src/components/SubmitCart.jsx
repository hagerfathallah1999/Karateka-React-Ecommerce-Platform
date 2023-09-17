import { toast } from "react-toastify";

export default function SubmitCart() {
  const handleSubmit = () => {
    // toast.success("Your order has been successfully submitted!");
  };

  return (
    <>
      <span
        onClick={handleSubmit}
        className="btn btn-sm btn-success rounded-lg"
      >
        Submit
      </span>
    </>
  );
}
