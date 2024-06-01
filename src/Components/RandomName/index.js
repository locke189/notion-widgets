import { useState } from "react";
import { randomNames } from "../../names";

export const RandomName = () => {
  // generates a random name from data.js
  const [randomName, setRandomName] = useState(null);

  const generateRandomName = () => {
    const randomRaceIndex = Math.floor(
      Math.random() * Object.keys(randomNames).length
    );

    const raceName = Object.keys(randomNames)[randomRaceIndex];

    const race = randomNames[raceName];

    // get a random first name male or female
    const randomSexIndex = Math.floor(Math.random() * 2);
    const sex = randomSexIndex === 0 ? "male" : "female";

    // get a random first name
    const randomFirstNameIndex = Math.floor(
      Math.random() * race.first_names[sex]?.length
    );

    const firstName = race.first_names[sex]?.[randomFirstNameIndex];

    // get a random last name
    const randomLastNameIndex = Math.floor(
      Math.random() * race.last_names.length
    );
    const lastName = race.last_names[randomLastNameIndex];

    // get description
    const randomDescriptionIndex = Math.floor(
      Math.random() * race.descriptions[sex].length
    );

    const description = race.descriptions[sex][randomDescriptionIndex];

    setRandomName({
      first_name: firstName,
      last_name: lastName,
      race: raceName,
      sex: sex,
      description: description,
    });
  };

  return (
    <div className="name-gen">
      {
        <button className="name-gen__btn" onClick={() => generateRandomName()}>
          Create NPC
        </button>
      }
      {randomName && (
        <div className="name-gen__result">
          <h2 className="name-gen__result-name">
            {randomName.first_name} {randomName.last_name}
          </h2>
          <p className="name-gen__result-race">
            {randomName.sex}/{randomName.race}
          </p>
          <p className="name-gen__result-desc">{randomName.description}</p>
        </div>
      )}
    </div>
  );
};
