import { Button, Spinner } from "react-bootstrap";
import "./LoaderComponent.css"; // Import the CSS file

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <Button className="loader-button" variant="primary" disabled>
        <Spinner
          as="span"
          animation="border" // Spinner style
          size="sm"
          role="status"
          aria-hidden="true"
          className="loader-spinner"
        />
        Loading...
      </Button>
    </div>
  );
};

export default LoaderComponent;
