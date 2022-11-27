const ProductInfo = ({ product }) => {
    console.log('per :' , product)
    const { id,title, description,images } = product;
    return (
      <>
        <h1>Id : {id}</h1>
        <p> title : {title} years</p>
        <p> Description : {description} years</p>
        <ul>
          {images?.map((image)=> <li key={image}><img alt={image} src={image} /></li>)}
        </ul>
      </>
    );
  };
  
  export default ProductInfo;
  