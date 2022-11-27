const LargePersonListItem = ({ person }) => {
  console.log('per :' , person)
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h1>Name : {name}</h1>
      <p> Age : {age} years</p>
      <p> Hair Color : {hairColor} years</p>
      <ul>
        {hobbies.map((hobby)=> <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  );
};

export default LargePersonListItem;
