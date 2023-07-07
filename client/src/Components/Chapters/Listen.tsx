import React, { useState } from "react";
import listen from "../../assets/icons8-sound-50.png";
import { ListenIcon } from "../../Styles/globalStyles";
const Listen = () => {
  const [isActive, setISActive] = useState(false);

  const handleListen = () => {
    setISActive(true);
    setTimeout(() => {
      setISActive(false);
    }, 3000);
  };

  return (
    <ListenIcon isActive={isActive}>
      <img src={listen} alt="listen" onClick={handleListen} />
    </ListenIcon>
  );
};
export default Listen;
