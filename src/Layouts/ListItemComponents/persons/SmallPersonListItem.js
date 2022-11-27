const SmallPersonListItem = ({ person }) => {
  console.log('per :' , person)
  const { name, age } = person;
  return (
    <div>
      Name : {name} , Age : {age} years
    </div>
  );
};

export default SmallPersonListItem;
