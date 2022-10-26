import * as React from "react";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import axios from "axios";
import Row from "react-bootstrap/Row";

interface OptionProps {
  optionType: string;
}

// Type OptionProps
export default function Options({ optionType }: OptionProps) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      // TO DO: handle error response
      .catch((error) => {});
  }, [optionType]);

  // TO DO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    ></ItemComponent>
  ));

  return <Row>{optionItems}</Row>;
}
