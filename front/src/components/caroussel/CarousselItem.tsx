import React from "react";
import { Paper, Button } from "@mui/material";

type itemType = {
  path: string;
};
export type CarousselItemPropsType = {
  item: itemType;
};
export default function CarousselItem(props: CarousselItemPropsType) {
  return <img src={require(props.item.path)} alt="logo" />;
}
