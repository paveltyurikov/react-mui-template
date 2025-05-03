import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box component="article">
      <h1 dir="auto">React MaterialUI application template</h1>
      <p dir="auto">
        The project scaffolding for production ready ReactJS application with
      </p>
      <ul dir="auto">
        <li>
          <a href="https://mui.com" rel="nofollow">
            Material UI
          </a>{" "}
          as components framework
        </li>
        <li>
          <a href="https://reactrouter.com" rel="nofollow">
            React-Router
          </a>{" "}
          for in app routing
        </li>
        <li>
          <a href="https://formik.org" rel="nofollow">
            Formik
          </a>{" "}
          and{" "}
          <a href="https://stackworx.github.io/formik-mui/" rel="nofollow">
            formik-mui
          </a>{" "}
          for forms
        </li>
        <li>
          <a href="https://react-query-v3.tanstack.com/" rel="nofollow">
            React-Query
          </a>{" "}
          with{" "}
          <a href="https://axios-http.com/" rel="nofollow">
            http
          </a>{" "}
          as HTTP client
        </li>
        <li>
          <a href="https://mswjs.io" rel="nofollow">
            MSW
          </a>{" "}
          for mocking requests
        </li>
        <li>
          <a href="https://day.js.org/en/" rel="nofollow">
            Day.js
          </a>{" "}
          for handling dates
        </li>
        <li>
          <a href="https://react-window.vercel.app/" rel="nofollow">
            react-window
          </a>{" "}
          grid virtualization lib for long lists mui.com{" "}
          <a
            href="https://mui.com/material-ui/react-autocomplete/#virtualization"
            rel="nofollow"
          >
            recommends it
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default HomePage;
