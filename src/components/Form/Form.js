import React from 'react'
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import './Form.css'

export const Form = (props) => {
    const { register, handleSubmit } = useForm();

    function replacer(key, value) {
      if (key === "amount") {
        return parseFloat(value);
      }
      return value
    }

    const onSubmit = data =>{
      const recv = JSON.stringify(data,replacer);
      fetch('https://expense-v779.onrender.com/api/expense',
        {
          method: 'POST', // other options: POST, PUT, DELETE, etc.
          body: recv,
        })
    };
   
    return (
      <form className="expcreateform" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="DateTime" type="datetime-local" {...register("datetime")} />
        <input placeholder="Description" {...register("description", {   pattern: /^[A-Za-z]+$/i })} />
        <input placeholder="Category" {...register("category", {   pattern: /^[A-Za-z]+$/i })} />
        <input placeholder="Host Transfer" {...register("hosttransfer", {   pattern: /^[A-Za-z]+$/i })} />
        <input placeholder="Mode Transfer" {...register("modetransfer", {   pattern: /^[A-Za-z]+$/i })} />
        <input placeholder="Amount" type="number" {...register("amount")} />
        <input placeholder="Comments" {...register("comments", {   pattern: /^[A-Za-z]+$/i })} />
       
       <input type="submit" value="Create Expense"/>
      </form>
    );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Form)