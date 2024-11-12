import { useState } from "react"
import axios from "axios"
function PersonalForm(){

    const [user,setUser]= useState({
        name:'',
        email:'',
        role:'',
        imageUrl:'',
        
    })
    const SendData = async (data) => {
        try {
          await axios.post('https://homework-back.vercel.app/endpoint',data);
          } catch (error) {
          console.error('データ送信エラー:', error);}}
    const postdataset=(e)=>{setUser((prev)=>({ ...prev, [e.target.name]:e.target.value})) }


    const posthandle=()=>{
      window.location.reload()
      SendData(user)



    }

    return(
      <div className="bg-gray-700  rounded-md my-5 ml-2 grid p-5  grid-cols-1 gap-x-6 gap-y-8  sm:grid-cols-6 md:p-2 flex justify-between ">
      <div className="  sm:col-span-4 ">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <div className="flex  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            
            <input
              onChange={postdataset}
              id="name"
              name="name"
              type="text"
              placeholder="janesmith"
              autoComplete="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />

          </div>
        </div>
        
      </div>
      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          email
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
            
            <input
              onChange={postdataset}
              id="email"
              name="email"
              type="text"
              placeholder="xxx@xxx.com"
              autoComplete="email"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />

          </div>
        </div>
        
      </div>
      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          role
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            
            <input
              onChange={postdataset}
              id="role"
              name="role"
              type="text"
              placeholder="student"
              autoComplete="role"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />

          </div>
        </div>
        
      </div>
      <button type="button"  onClick={posthandle} className="rounded-full bg-gray-800  text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-1 ">送信</button>
  </div>
    )
}
export default PersonalForm