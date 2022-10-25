import * as React from "react";

interface OptionProps {
  optionType: any;
}

export default function Options({ optionType }: OptionProps) {
  return <div className={optionType}></div>;
}
