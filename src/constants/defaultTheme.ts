import { createTheme, Theme } from "@mui/material/styles";
import { get } from "lodash";
import VirtualListBox from "~/components/Form/VirtualListBox";


export const THEME_COMMON_ROOT = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

const DEFAULT_THEME: Theme = createTheme({
  ...THEME_COMMON_ROOT,
  components: {
    MuiAutocomplete: {
      defaultProps: {
        ListboxComponent: VirtualListBox,
        loadingText: "loading...",
        noOptionsText: "noOptionsText",
        openOnFocus: true,
        isOptionEqualToValue: (option: unknown, value: unknown) =>
          value === get(option, "id"),
        filterOptions: (x: any) => x,
        getOptionLabel: (option: unknown) => get(option, "name", ""),
        renderOption: (props: any, option: any) => [props, option.name],
      },
    },
  },
});

export default DEFAULT_THEME;
