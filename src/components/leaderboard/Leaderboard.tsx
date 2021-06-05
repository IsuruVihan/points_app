import React, {FC} from 'react';
import {Col} from "react-bootstrap";

const Leaderboard: FC = () => {
  return (
    <Col style={{border: "2px solid green"}} className="px-0 leaderboard" md={4} sm={12} xs={12}>
      Leaderboard
    </Col>
  );
}

export default Leaderboard;