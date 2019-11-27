import React from "react";
import { withAuthSync } from "../utils/auth";

function Dashboard() {
  return <div>Authenticated Page</div>;
}

export default withAuthSync(Dashboard);
