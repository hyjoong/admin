import { useCallback, useEffect, useRef } from "react";

const useOutsideClick = (onClose: () => void) => {
  const ref = useRef(null);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (ref.current === null) return;
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("click", clickListener);
    };
  });
  return ref;
};

export default useOutsideClick;
