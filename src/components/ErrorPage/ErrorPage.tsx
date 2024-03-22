import { Typography, Container } from "@mui/material";
import { get } from "lodash";
import { useRouteError } from "react-router-dom";
import Link from "../Link";


export const ErrorPage = ({ error }: { error: unknown }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        {get(error, "statusText", "Opps :( unknown error has occurred")}
      </Typography>
      <Typography variant="h6">
        {get(error, "message", "No message")}
      </Typography>
      <Typography variant="h6">
        <Link to="/">back to home page</Link>
      </Typography>
    </Container>
  );
};

const ErrorPageContainer = () => {
  const error: unknown = useRouteError();
  return <ErrorPage error={error} />;
};

export default ErrorPageContainer;
