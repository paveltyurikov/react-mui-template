import React from "react";
import { MenuItem, Typography } from "@mui/material";
import { isString } from "lodash";
import { ListChildComponentProps } from "react-window";


const RenderRow: React.FC<ListChildComponentProps> = ({
  data,
  index,
  style,
}) => {
  const [optionProps, option] = data[index];
  return (
    <MenuItem
      {...optionProps}
      component="li"
      title={isString(option) ? option : undefined}
      style={style}
    >
      <Typography component="span" noWrap>
        {option}
      </Typography>
    </MenuItem>
  );
};

export default RenderRow;
