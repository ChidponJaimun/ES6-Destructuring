// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import carData from "./practice";

// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();
// console.log(cat.name);
// console.log(cat.sound);
// console.log(dog.name);
// console.log(dog.sound);

const [tesla, honda] = carData;
const teslaTopSpeed = tesla.speedStats.topSpeed;
const teslaTopColour = tesla.coloursByPopularity;

const hondaTopSpeed = honda.speedStats.topSpeed;
const hondaTopColour = honda.coloursByPopularity;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
