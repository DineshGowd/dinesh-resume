import React from 'react'
import useCurrentUser from './useCurrentUser'
import useResource from './userResource';
import useUser from './useUser'
import axios from 'axios';
import useDataSource from './useDataSource';

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

const localResource = key => () => {
    const response = localStorage.getItem(key)
    return response;
}

const ShowHooks = () => {
    const firstUser = useCurrentUser();
    const anyUser = useUser(5);
    const anyResource = useResource('https://jsonplaceholder.typicode.com/users/1');
    const anyDS = useDataSource(serverResource('https://jsonplaceholder.typicode.com/users/1'));

    return (
        <>
            <div>i am {firstUser?.name}</div>
            <div>i am const anyUser  {anyUser?.name}</div>
            <div>i am const resource  {anyResource?.name}</div>
            <div>i am const anyDS  {anyDS?.name}</div>
        </>
    )
}

export default ShowHooks