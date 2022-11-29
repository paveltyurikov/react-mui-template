import React, { useCallback } from "react";
import { VariableSizeList } from "react-window";
import { DEFAULT_OPTION_HEIGHT } from "./config";


const useGetVirtualListBoxProps = (
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
    | null
    | undefined
) => {
  const listRef = React.useRef<VariableSizeList>(null);

  React.useEffect(() => {
    if (listRef.current != null) {
      listRef.current.resetAfterIndex(0, true);
    }
  }, [children]);

  const itemData: React.ReactChild[] = [];

  (children as React.ReactChild[]).forEach(
    (option: React.ReactChild & { children?: React.ReactChild[] }) => {
      itemData.push(option);
      itemData.push(...(option.children || []));
    }
  );

  const itemCount = itemData.length;

  const getHeight = useCallback(() => {
    if (itemCount > 8) {
      return 8 * DEFAULT_OPTION_HEIGHT;
    }
    if (itemCount > 0) {
      return itemCount * DEFAULT_OPTION_HEIGHT;
    }
    return 3 * DEFAULT_OPTION_HEIGHT;
  }, [itemCount]);

  return {
    listRef,
    getHeight,
    itemData,
  };
};

export default useGetVirtualListBoxProps;
