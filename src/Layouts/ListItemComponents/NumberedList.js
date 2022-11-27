const NumberedList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  { console.log(`item : ${items} , resourceName : ${resourceName}`) }
  return (
    <>
      {items.map((item, i) =>
      (
        <>
          <h2>Item : {i+1} </h2>
          <ItemComponent
            key={i}
            {...{ [resourceName]: item }}
          />
        </>
      ))
      }
    </>
  );
};

export default NumberedList;
