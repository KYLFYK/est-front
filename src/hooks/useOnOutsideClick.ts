import {useEffect, useRef} from "react";

export const useOnOutsideClick = (handleOutsideClick: Function) => {
    const innerBorderRef: any = useRef();

    const onClick = (event: any) => {
        if (
            innerBorderRef.current &&
            !innerBorderRef.current.contains(event.target)
        ) {
            handleOutsideClick();
        }
    };

    useMountEffect(() => {
        document.addEventListener("click", onClick, true);
        return () => {
            document.removeEventListener("click", onClick, true);
        };
    });

    return {innerBorderRef};
};

const useMountEffect = (fun: any) => useEffect(fun, [fun]);