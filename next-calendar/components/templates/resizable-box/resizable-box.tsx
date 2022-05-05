import { ReactNode, useCallback, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import styles from "./resizable-box.module.css";
import debounce from "lodash/debounce";

interface IResizableBox {
  onSizeChange: (x: number, y: number) => void;
  children: ReactNode;
  gridX: number[];
  gridY: number[];
}

const snapTo = (dimen: number, grid: number[]) => {
  let size = 0;

  for (let i = 0; i < grid.length; i++) {
    let currSize = size;
    size += grid[i];
    let nextSize = size;

    if (currSize <= dimen && nextSize > dimen) {
      let midSize = (currSize + nextSize) / 2;
      if (dimen < midSize) {
        return Math.max(currSize, grid[0]);
      } else {
        return nextSize;
      }
    }
  }

  return size;
};

export const ResizableBox = ({
  onSizeChange,
  children,
  gridX,
  gridY,
}: IResizableBox) => {
  const [width, setWidth] = useState(gridX[0]);
  const [height, setHeight] = useState(gridY[0]);
  const [width2, setWidth2] = useState(width);
  const [height2, setHeight2] = useState(height);

  const snapToGridX = useCallback(
    (dimen: number) => {
      return snapTo(dimen, gridX);
    },
    [gridX]
  );

  const snapToGridY = useCallback(
    (dimen: number) => {
      return snapTo(dimen, gridY);
    },
    [gridX]
  );

  useEffect(() => {
    onSizeChange(width2, height2);
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={styles.block}
        style={{ width: snapToGridX(width2), height: snapToGridY(height2) }}
      >
        {children}
      </div>
      <Resizable
        size={{ width, height }}
        minWidth={gridX[0]}
        minHeight={gridY[0]}
        maxWidth={gridX[0] + gridX[1]}
        maxHeight={gridY[0] + gridY[1]}
        onResizeStop={debounce((e, direction, ref, d) => {
          setWidth(snapToGridX(width + d.width));
          setHeight(snapToGridY(height + d.height));
        }, 25)}
        onResize={debounce((e, direction, ref, d) => {
          let x = width + d.width;
          let y = height + d.height;

          setWidth2(x);
          setHeight2(y);
          onSizeChange(snapToGridX(x), snapToGridY(y));
        }, 25)}
      ></Resizable>
    </div>
  );
};
