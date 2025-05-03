import { PaletteMode } from "@mui/material/styles";
import { create } from "zustand/react";

export type LayoutStore = {
  themeMode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  navPanelOpened: boolean;
  setNavPanelOpened: (navPanelOpened?: boolean) => void;
};

const INITIAL_VALUES = {
  themeMode: "light" as PaletteMode,
  navPanelOpened: false,
};

export const useLayoutStore = create<LayoutStore>((set, get) => ({
  ...INITIAL_VALUES,
  setMode: (themeMode) => set({ themeMode }),
  setNavPanelOpened: (navPanelOpened) => {
    set({
      navPanelOpened:
        navPanelOpened === undefined ? !get().navPanelOpened : navPanelOpened,
    });
  },
}));
