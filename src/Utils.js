import React from "react";
import namor from "namor";
import DateGenerator from "random-date-generator";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  let randomDate =  String(DateGenerator.getRandomDate())
  return {
    id: (new Date()).valueOf().toString(),
    name: namor.generate({ words: 1, numbers: 0 }),
    price: Math.floor(Math.random() * 100),
    firstName: namor.generate({ words: 1, numbers: 0 }) + ' ' +namor.generate({ words: 1, numbers: 0 }) + ' ' +namor.generate({ words: 1, numbers: 0 }) + ' ' +namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    date:randomDate,
    date_alt: randomDate,
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

