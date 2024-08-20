import { Button, Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "60vh", width: "100%" }}
    >
      <Button variant="primary" style={{ width: "60%" }} disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};
export default LoaderComponent;
