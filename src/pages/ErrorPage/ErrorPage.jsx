import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700">{error?.message}</p>
        <div className="mt-6">
          <Link to="/" className="secondary-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
