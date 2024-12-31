import React, { useReducer } from "react";

interface State {
  userType: "gUser" | "rOwner";
  email: string;
  password: string;
  image: string;
  restaurantName: string;
  restaurantAddress: string;
  businessLicense: string;
  dropdown: boolean;
}
const initialState: State = {
  userType: "gUser",
  email: "",
  password: "",
  image: "",
  restaurantName: "",
  restaurantAddress: "",
  businessLicense: "",
  dropdown: false,
};

type Action =
  | { type: "SET_USER_TYPE"; payload: "gUser" | "rOwner" }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_IMAGE"; payload: string }
  | { type: "SET_RESTAURANT_NAME"; payload: string }
  | { type: "SET_RESTAURANT_ADDRESS"; payload: string }
  | { type: "SET_BUSINESS_LICENSE"; payload: string }
  | { type: "TOGGLE_DROPDOWN" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return { ...state, userType: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_RESTAURANT_NAME":
      return { ...state, restaurantName: action.payload };
    case "SET_RESTAURANT_ADDRESS":
      return { ...state, restaurantAddress: action.payload };
    case "SET_BUSINESS_LICENSE":
      return { ...state, businessLicense: action.payload };
    case "TOGGLE_DROPDOWN":
      return { ...state, dropdown: !state.dropdown };
    default:
      return state;
  }
};

export const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section className="flex flex-col justify-center items-center  mx-auto sm:w-full h-[100vh_-_60px] px-5 py-[30px] w-[calc(100%_-_20px)] *:!font-poppins     ">
      <div className="w-full sm:w-fit">
        <h1 className="text-black font-extrabold text-[22.597px]  ">
          DineRate
        </h1>
        <h2 className="mt-[33.9px] text-black text-[32.64px] font-bold font-poppins ">
          Sign Up
        </h2>
        <p className="text-xl text-black !font-poppins">
          Please enter your details to sign up
        </p>
        <div className="relative flex mt-8 mb-6 ">
          <button
            className="flex py-4 px-3 gap-[14.37px] items-center rounded-[13px] bg-white border border-[#858585] text-base text-black !font-poppins"
            type="button"
          >
            {state.userType === "gUser"
              ? "Diners (General User)"
              : "Restaurant Owner(Admin)"}
            <i
              className=""
              onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
              >
                <path
                  d="M2.91305 9.0446L4.8628 7.09485L13.8976 16.1296L22.9323 7.09485L24.8821 9.0446L13.8976 20.0291L2.91305 9.0446Z"
                  fill="black"
                />
              </svg>
            </i>
          </button>
          {state.dropdown && (
            <ul className="absolute top-16 !font-poppins ">
              <li
                className="py-4 px-3 bg-white border border-[#858585] text-base text-black"
                onClick={() => {
                  dispatch({ type: "SET_USER_TYPE", payload: "gUser" });
                  dispatch({ type: "TOGGLE_DROPDOWN" });
                }}
              >
                Diners (General User)
              </li>
              <li
                className="py-4 px-3 bg-white border border-[#858585] text-base text-black"
                onClick={() => {
                  dispatch({ type: "SET_USER_TYPE", payload: "rOwner" });
                  dispatch({ type: "TOGGLE_DROPDOWN" });
                }}
              >
                Restaurant Owner(Admin)
              </li>
            </ul>
          )}
        </div>

        <form action="" className="flex flex-col gap-2 ">
          <label
            htmlFor="full-name"
            className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
          >
            <span className="text-black text-xl font-medium ">Full Name</span>
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
          >
            <span className="text-black text-xl font-medium ">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
          >
            <span className="text-black text-xl font-medium ">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
          </label>
          {state.userType === "rOwner" && (
            <label
              htmlFor="restaurant-name"
              className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
            >
              <span className="text-black text-xl font-medium ">
                Restaurant Name
              </span>
              <input
                type="text"
                name="restaurant-name"
                id="restaurant-name"
                className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
                value={state.restaurantName}
                onChange={(e) =>
                  dispatch({
                    type: "SET_RESTAURANT_NAME",
                    payload: e.target.value,
                  })
                }
              />
            </label>
          )}
          {state.userType === "rOwner" && (
            <label
              htmlFor="restaurant-address"
              className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
            >
              <span className="text-black text-xl font-medium ">
                Restaurant Address
              </span>
              <input
                type="text"
                name="restaurant-address"
                id="restaurant-address"
                className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
                value={state.restaurantAddress}
                onChange={(e) =>
                  dispatch({
                    type: "SET_RESTAURANT_ADDRESS",
                    payload: e.target.value,
                  })
                }
              />
            </label>
          )}
          {state.userType === "rOwner" && (
            <label
              htmlFor="business-license"
              className="flex flex-col self-stretch items-start gap-1 !font-poppins *:font-poppins"
            >
              <span className="text-black text-xl font-medium ">
                Business License
              </span>
              <input
                type="text"
                name="business-license"
                id="business-license"
                className="flex px-4 py-3 outline-0 border border-[#7c7c7c] rounded-[13px] w-full text-base "
                value={state.businessLicense}
                onChange={(e) =>
                  dispatch({
                    type: "SET_BUSINESS_LICENSE",
                    payload: e.target.value,
                  })
                }
              />
            </label>
          )}
          <label
            htmlFor="image"
            className="flex items-center justify-center gap-2 !font-poppins flex-col mt-2"
          >
            <div className=" w-[90px] h-[90px] flex flex-col items-center justify-center  rounded-[100%] bg-[#D9D9D9] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="82"
                viewBox="0 0 81 82"
                fill="none"
              >
                <path
                  d="M36.867 44.4842H16.781V37.7889H36.867V17.7029H43.5623V37.7889H63.6483V44.4842H43.5623V64.5702H36.867V44.4842Z"
                  fill="#5F6368"
                />
              </svg>
            </div>
            <p className="font-poppins">Add Image</p>
            <input type="file" name="image" id="image" hidden />
          </label>
          <button
            className="bg-black w-full text-white flex justify-center items-center py-2 px-2 rounded-lg mb-8"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};
