const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  {console.log(`item : ${items} , resourceName : ${resourceName}`)}
  return (
    <>
      {items.map((item,i) => 
       (<ItemComponent 
           key={i} 
          {...{[resourceName]:item }}
        />))
      }
    </>
  );
};

export default RegularList;
