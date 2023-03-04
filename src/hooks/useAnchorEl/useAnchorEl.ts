import { useCallback, useState } from "react";


const useAnchorEl = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return {
    anchorEl,
    open: Boolean(anchorEl),
    show: useCallback(
      (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget),
      []
    ),
    hide: useCallback(() => setAnchorEl(null), []),
  };
};

export default useAnchorEl;
