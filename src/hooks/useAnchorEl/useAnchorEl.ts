import { useCallback, useRef, useState } from "react";

const useAnchorEl = () => {
  const ref = useRef<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return {
    anchorEl,
    ref,
    open: Boolean(anchorEl),
    show: useCallback(() => {
      setAnchorEl(ref.current);
    }, []),
    hide: useCallback(() => setAnchorEl(null), []),
    toggle: useCallback((e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setAnchorEl((current) => (current === null ? ref.current : null));
    }, []),
  };
};

export default useAnchorEl;
