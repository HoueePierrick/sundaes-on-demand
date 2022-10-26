import * as React from "react";
import Col from "react-bootstrap/Col";

interface Props {
  name: string;
  imagePath: string;
}

export default function ScoopOption({ name, imagePath }: Props) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
}
