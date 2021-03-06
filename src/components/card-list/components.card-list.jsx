import React from "react";
import { Card } from "../card/components.card";
import "./components.card_list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);
