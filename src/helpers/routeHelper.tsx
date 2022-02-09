import {useEffect, useState} from "react";
import React from "react";

export const ScrollToTopOnMount: React.FC = ({children}) => {
  const [reload, setReload] = useState<boolean>(false);
  const handlerReload = () => {
    setReload(!reload);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [reload]);

  return <div onClick={handlerReload}>{children}</div>;
};
