import React from 'react'
import UserLoader from './UserLoader'
import UserInfo from './UserInfo'
import ResourceLoader from './ResourceLoader'
import ProductInfo from './ProductInfo'
import CurrentUserLoader from './CurrentUserLoader'
import DataSourceLoader from './DataSourceLoader'
import axios from 'axios';

const getServerData = (url) => async () => {
  const res = await axios.get(url);
  console.log('res.data', res.data)
  return res?.data;
}

const getLocalStorage = (key) => {
  console.log('localStorage.getItem(key)', localStorage.getItem(key))
  return localStorage.getItem(key);
}

const Text = ({ messages }) => (
  <h1>{messages}</h1>
);

const ShowCurrentUser = () => {
  return (
    <div>
      <p>-----CurrentUserLoader-------</p>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <p>-----UserLoader-------</p>
      <UserLoader userid={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userid={5}>
        <UserInfo />
      </UserLoader>
      <p>-----ResourceLoader-------</p>
      <ResourceLoader resourceUrl={'https://jsonplaceholder.typicode.com/users/1'} resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={'https://dummyjson.com/products/3'} resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      <p>------DataSourceLoader------</p>
      <DataSourceLoader getDataFunc={getServerData(`https://dummyjson.com/products/3`)} resourceName="product"
      >
        <ProductInfo />
      </DataSourceLoader>
      <DataSourceLoader getDataFunc={getLocalStorage('message')} resourceName="messages"
      >
        <Text />
      </DataSourceLoader>
    </div>
  )
}

export default ShowCurrentUser