const SmallProductListItem = ({ product }) => {
  console.log('per :' , product)
  const { id, description } = product;
  return (
    <div>
      id : {id} , description : {description} 
    </div>
  );
};

export default SmallProductListItem;
