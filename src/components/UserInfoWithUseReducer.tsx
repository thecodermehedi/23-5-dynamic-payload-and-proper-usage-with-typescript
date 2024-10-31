import { ChangeEvent, useReducer } from "react";

const initialState = {
 name: "",
 age: "",
 hobbies: [] as Array<string> //or string[]
}

type TAction = {
 type: string
 payload: string
}

const reducer = (currentState: typeof initialState, action: TAction) => {
 switch (action.type) {
  case "addName":
   return { ...currentState, name: action.payload };
  case "addAge":
   return { ...currentState, age: action.payload };
  case "addHobby":
   return { ...currentState, hobbies: [...currentState.hobbies, action.payload] }
  default:
   return currentState;
 }
}

const UserInfoWithUseReducer = () => {

 const [state, dispatch] = useReducer(reducer, initialState);

 const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
  e.preventDefault()

  console.log(state);
 }


 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <form className="flex justify-between items-center gap-x-8" onSubmit={handleSubmit}>
    <input
     className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
     type="text"
     name="name"
     id="name"
     placeholder="Name"
     onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
     required
    />
    <span className="text-red-500 text-sm hidden invalid:block">Please fill out this field</span>
    <input
     className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
     type="number"
     name="age"
     id="age"
     placeholder="Age"
     min="0"
     onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
     required
    />
    <input
     className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
     type="text"
     name="hobbies"
     id="hobbies"
     placeholder="Hobbies"
     onBlur={(e) => dispatch({ type: "addHobby", payload: e.target.value })}
     required
    />
    <button
     type="submit"
     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700"
    >
     Submit
    </button>
   </form>
  </div>
 )
};

export default UserInfoWithUseReducer;
