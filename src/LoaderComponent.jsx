import { Button, Spinner } from "react-bootstrap";

const LoaderComponent = () => {
  return (
    <div className="d-flex w-100 justify-content-center " style={{}}>
      <Button variant="primary" disabled>
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
