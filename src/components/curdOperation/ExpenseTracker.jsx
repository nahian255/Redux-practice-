import React from 'react'
import getPost from '../../redux/features/dataFacth/PostApi';
import { useSelector } from 'react-redux';

export const ExpenseTracker = () => {

   const data = useSelector((state)=>state.expense)
   console.log(data,'jamela')
   return (
    <div>ExpenseTracker Home Page</div>
  )
};
