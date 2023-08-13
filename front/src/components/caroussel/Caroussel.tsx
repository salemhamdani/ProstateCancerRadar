import React from "react";
import Carousel from "react-material-ui-carousel";
import CarousselItem from "./CarousselItem";

export type CarousselPropsType = {};
export default function Caroussel(props: CarousselPropsType) {
  var items = [
    {
      path: "./carousselImages/2.png",
    },
    {
      path: "./carousselImages/3.png",
    },
  ];

  return (
    <Carousel sx={{ width: "100%" }}>
      {items.map((item, i) => (
        <CarousselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
