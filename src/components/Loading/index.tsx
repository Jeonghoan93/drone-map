import React from "react";
import { GlobalFonts } from "src/BaseStyles";
import { Dot, Logo, Overlay, Subtitle } from "./styles";

const Loading: React.FC = () => {
  return (
    <Overlay>
      <GlobalFonts />
      <Logo>Aerit</Logo>
      <Subtitle>need it? want it? aerit</Subtitle>
      <div>
        <Dot delay={-0.32} />
        <Dot delay={-0.16} />
        <Dot />
      </div>
    </Overlay>
  );
};

export default Loading;
