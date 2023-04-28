import { createTheme } from "@mui/material/styles";
import defaultTheme from "~/constants/defaultTheme";


export const IconBtnMenuToggleTheme = createTheme(defaultTheme, {
  components: {
    MuiMenu: {
      defaultProps: {
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      },
    },
  },
});

export default IconBtnMenuToggleTheme;
