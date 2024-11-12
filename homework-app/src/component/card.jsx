import { useEffect, useState } from 'react';
import axios from 'axios'  
  export default function PersonCard() {
    const [people,SetUser]=useState([])
  const FetchData = async () => {
    try {
      const response = await axios.get('https://homework-back.vercel.app');
      const data = response.data
      return data
    } catch (error) {
      console.error('データ取得エラー:', error);}}
  useEffect(() => {
        const FetchDataAndSet = async () => {
          const data = await FetchData()
          SetUser(data)}
          FetchDataAndSet()},[])



    return (
        <ul role="list" className=" divide-y divide-gray-100  ">
      {people.map((person) => (
        <li key={person.email} className="reletive  rounded-full space-y-10  bg-gray-700  flex justify-between gap-x-6 py-5 mt-10 md:w-2/3">
          <div className=" flex min-w-0 gap-x-4 ">
            <img alt="" src='https://icon-pit.com/wp-content/uploads/2020/02/person_6089.png' className="ml-10 mt-1 h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="mr-10 inline-block  shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            
          </div>
          
        </li>
      ))}
    </ul>

    )
  }
  
