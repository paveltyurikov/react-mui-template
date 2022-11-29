import React from "react";
import { Box } from "@mui/material";
import { VariableSizeList } from "react-window";
import { DEFAULT_OPTION_HEIGHT, DEFAULT_OVER_SCAN } from "./config";
import { OuterElementContext } from "./context";
import OuterElementType from "./OuterElementType";
import RenderRow from "./RenderRow";
import useGetVirtualListBoxProps from "./useGetVirtualListBoxProps";


const getItemSize = () => DEFAULT_OPTION_HEIGHT;

const WRAP_STYLES = {
  padding: "0.25em",
  "& ul": {
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
};

const VirtualListBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(({ children, ...other }, ref) => {
  const { listRef, itemData, getHeight } = useGetVirtualListBoxProps(children);

  return (
    <Box ref={ref} sx={WRAP_STYLES}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight()}
          width="100%"
          ref={listRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={getItemSize}
          overscanCount={DEFAULT_OVER_SCAN}
          itemCount={itemData.length}
        >
          {RenderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </Box>
  );
});

export default VirtualListBox;
