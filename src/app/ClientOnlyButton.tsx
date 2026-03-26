// ClientOnlyButton.tsx

import React from "react";

const ClientOnlyButton = ({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick}>Toggle RTL</button>;
};

export default ClientOnlyButton;
