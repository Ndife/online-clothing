import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

export default function Homepage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
