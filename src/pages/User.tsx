import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { ReviewButton } from "../components/ReviewButton";
import { UserReview } from "../components/UserReview";
const filterButtons = [
  {
    label: "All Reviews",
    isActive: true,
  },
  {
    label: "Newest",
    isActive: false,
  },
  {
    label: "Top Rated",
    isActive: false,
  },
];
export const User: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };
  return (
    <Fragment>
      <div className="user-bg  flex flex-col w-full h-screen py-[30px] pl-[104px] pb-28 ">
        <header className="flex justify-between w-full items-center pr-[104px] ">
          <Link to="/" className="text-white text-4xl font-extrabold ">
            DineRate
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white text-base font-semibold">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-base font-semibold ">
                  View Token Reward
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex p-2.5 gap-4 ">
            <div className="flex items-center gap-0.5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="black" />
                  <path
                    d="M22 32C20.6333 32 19.3417 31.7375 18.125 31.2125C16.9083 30.6875 15.8458 29.9708 14.9375 29.0625C14.0292 28.1542 13.3125 27.0917 12.7875 25.875C12.2625 24.6583 12 23.3667 12 22C12 20.6167 12.2625 19.3208 12.7875 18.1125C13.3125 16.9042 14.0292 15.8458 14.9375 14.9375C15.8458 14.0292 16.9083 13.3125 18.125 12.7875C19.3417 12.2625 20.6333 12 22 12C23.3833 12 24.6792 12.2625 25.8875 12.7875C27.0958 13.3125 28.1542 14.0292 29.0625 14.9375C29.9708 15.8458 30.6875 16.9042 31.2125 18.1125C31.7375 19.3208 32 20.6167 32 22C32 23.3667 31.7375 24.6583 31.2125 25.875C30.6875 27.0917 29.9708 28.1542 29.0625 29.0625C28.1542 29.9708 27.0958 30.6875 25.8875 31.2125C24.6792 31.7375 23.3833 32 22 32ZM22 29.95C22.4333 29.35 22.8083 28.725 23.125 28.075C23.4417 27.425 23.7 26.7333 23.9 26H20.1C20.3 26.7333 20.5583 27.425 20.875 28.075C21.1917 28.725 21.5667 29.35 22 29.95ZM19.4 29.55C19.1 29 18.8375 28.4292 18.6125 27.8375C18.3875 27.2458 18.2 26.6333 18.05 26H15.1C15.5833 26.8333 16.1875 27.5583 16.9125 28.175C17.6375 28.7917 18.4667 29.25 19.4 29.55ZM24.6 29.55C25.5333 29.25 26.3625 28.7917 27.0875 28.175C27.8125 27.5583 28.4167 26.8333 28.9 26H25.95C25.8 26.6333 25.6125 27.2458 25.3875 27.8375C25.1625 28.4292 24.9 29 24.6 29.55ZM14.25 24H17.65C17.6 23.6667 17.5625 23.3375 17.5375 23.0125C17.5125 22.6875 17.5 22.35 17.5 22C17.5 21.65 17.5125 21.3125 17.5375 20.9875C17.5625 20.6625 17.6 20.3333 17.65 20H14.25C14.1667 20.3333 14.1042 20.6625 14.0625 20.9875C14.0208 21.3125 14 21.65 14 22C14 22.35 14.0208 22.6875 14.0625 23.0125C14.1042 23.3375 14.1667 23.6667 14.25 24ZM19.65 24H24.35C24.4 23.6667 24.4375 23.3375 24.4625 23.0125C24.4875 22.6875 24.5 22.35 24.5 22C24.5 21.65 24.4875 21.3125 24.4625 20.9875C24.4375 20.6625 24.4 20.3333 24.35 20H19.65C19.6 20.3333 19.5625 20.6625 19.5375 20.9875C19.5125 21.3125 19.5 21.65 19.5 22C19.5 22.35 19.5125 22.6875 19.5375 23.0125C19.5625 23.3375 19.6 23.6667 19.65 24ZM26.35 24H29.75C29.8333 23.6667 29.8958 23.3375 29.9375 23.0125C29.9792 22.6875 30 22.35 30 22C30 21.65 29.9792 21.3125 29.9375 20.9875C29.8958 20.6625 29.8333 20.3333 29.75 20H26.35C26.4 20.3333 26.4375 20.6625 26.4625 20.9875C26.4875 21.3125 26.5 21.65 26.5 22C26.5 22.35 26.4875 22.6875 26.4625 23.0125C26.4375 23.3375 26.4 23.6667 26.35 24ZM25.95 18H28.9C28.4167 17.1667 27.8125 16.4417 27.0875 15.825C26.3625 15.2083 25.5333 14.75 24.6 14.45C24.9 15 25.1625 15.5708 25.3875 16.1625C25.6125 16.7542 25.8 17.3667 25.95 18ZM20.1 18H23.9C23.7 17.2667 23.4417 16.575 23.125 15.925C22.8083 15.275 22.4333 14.65 22 14.05C21.5667 14.65 21.1917 15.275 20.875 15.925C20.5583 16.575 20.3 17.2667 20.1 18ZM15.1 18H18.05C18.2 17.3667 18.3875 16.7542 18.6125 16.1625C18.8375 15.5708 19.1 15 19.4 14.45C18.4667 14.75 17.6375 15.2083 16.9125 15.825C16.1875 16.4417 15.5833 17.1667 15.1 18Z"
                    fill="white"
                  />
                </svg>
              </span>

              <i
                onClick={dropdownHandler}
                className={`cursor-pointer transition-transform ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.66665 6.68754L3.14581 5.20837L9.99998 12.0625L16.8541 5.20837L18.3333 6.68754L9.99998 15.0209L1.66665 6.68754Z"
                    fill="black"
                  />
                </svg>
              </i>
            </div>
            <button
              className="flex bg-[#080808] p-5 items-center justify-center text-white gap-3 rounded-[20px] "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V7.5H19V5H5V19H19V16.5H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM13 17C12.45 17 11.9792 16.8042 11.5875 16.4125C11.1958 16.0208 11 15.55 11 15V9C11 8.45 11.1958 7.97917 11.5875 7.5875C11.9792 7.19583 12.45 7 13 7H20C20.55 7 21.0208 7.19583 21.4125 7.5875C21.8042 7.97917 22 8.45 22 9V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H13ZM20 15V9H13V15H20ZM16 13.5C16.4167 13.5 16.7708 13.3542 17.0625 13.0625C17.3542 12.7708 17.5 12.4167 17.5 12C17.5 11.5833 17.3542 11.2292 17.0625 10.9375C16.7708 10.6458 16.4167 10.5 16 10.5C15.5833 10.5 15.2292 10.6458 14.9375 10.9375C14.6458 11.2292 14.5 11.5833 14.5 12C14.5 12.4167 14.6458 12.7708 14.9375 13.0625C15.2292 13.3542 15.5833 13.5 16 13.5Z"
                  fill="white"
                />
              </svg>
              <span className="font-black text-white text-xl">
                Connect Wallet
              </span>
            </button>
          </div>
        </header>
        <div className="flex flex-col justify-center h-[800px] items-center w-[750px] mx-auto ">
          <label htmlFor="restaurant-search" className="relative w-full">
            <input
              type="search"
              name="restaurant-search"
              id="restaurant-search"
              placeholder="Search for restaurants"
              className="placeholder:text-[#5F6368] text-2xl flex w-full pl-12 py-4 px-8 border border-[#696969] text-black rounded-[20px] outline-0 bg-[#F4F4F4] self-stretch "
            />
            <i className="absolute left-0 top-0 mt-4 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M27.7667 29.75L18.8417 20.825C18.1333 21.3917 17.3188 21.8403 16.3979 22.1708C15.4771 22.5014 14.4972 22.6667 13.4583 22.6667C10.8847 22.6667 8.7066 21.7753 6.92396 19.9927C5.14132 18.2101 4.25 16.0319 4.25 13.4583C4.25 10.8847 5.14132 8.7066 6.92396 6.92396C8.7066 5.14132 10.8847 4.25 13.4583 4.25C16.0319 4.25 18.2101 5.14132 19.9927 6.92396C21.7753 8.7066 22.6667 10.8847 22.6667 13.4583C22.6667 14.4972 22.5014 15.4771 22.1708 16.3979C21.8403 17.3188 21.3917 18.1333 20.825 18.8417L29.75 27.7667L27.7667 29.75ZM13.4583 19.8333C15.2292 19.8333 16.7344 19.2135 17.974 17.974C19.2135 16.7344 19.8333 15.2292 19.8333 13.4583C19.8333 11.6875 19.2135 10.1823 17.974 8.94271C16.7344 7.70312 15.2292 7.08333 13.4583 7.08333C11.6875 7.08333 10.1823 7.70312 8.94271 8.94271C7.70312 10.1823 7.08333 11.6875 7.08333 13.4583C7.08333 15.2292 7.70312 16.7344 8.94271 17.974C10.1823 19.2135 11.6875 19.8333 13.4583 19.8333Z"
                  fill="#5F6368"
                />
              </svg>
            </i>
          </label>

          <h1 className="font-bold text-5xl text-white mt-2 ">
            Discover Honest, Blockchain-Verified Restaurant Reviews{" "}
          </h1>
          <p className="text-xl text-center text-white mt-7 ">
            A decentralized platform where your feedback matters. Help diners
            make better choices while earning rewards for your honest reviews
          </p>
          <div className="flex gap-4 items-center pb-20">
            <Link
              to="/login"
              className="text-white bg-black p-4 rounded-[20px] text-xl font-bold"
            >
              {" "}
              Food Listing
            </Link>
            <Link
              to="/login"
              className="text-white bg-black p-4 rounded-[20px] text-xl font-bold"
            >
              {" "}
              Review
            </Link>
          </div>
        </div>
      </div>
      <div className="down-user  flex flex-col w-full h-screen py-[30px] pl-[104px]">
        <h2 className="text-white text-4xl font-bold">Dinner Reviews</h2>
        <p className="text-white font-semibold text-2xl mb-4">
          Get every review about your product
        </p>
        <nav
          className="flex flex-wrap gap-4 items-center text-xl font-semibold text-center text-black"
          role="navigation"
          aria-label="Review filters"
        >
          <label className="relative" htmlFor="restaurants-search">
            <input
              type="search"
              name="restaurants-search"
              id="restaurants-search"
              className="flex flex-col justify-center outline-0 items-center self-stretch px-12 py-6 my-auto rounded-3xl border border-solid border-stone-500 min-h-[70px] max-md:px-5"
              placeholder="Search for restaurants"
            />
            <i className="absolute top-1/2 -translate-y-1/2 left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M27.7667 29.75L18.8417 20.825C18.1333 21.3917 17.3188 21.8403 16.3979 22.1708C15.4771 22.5014 14.4972 22.6667 13.4583 22.6667C10.8847 22.6667 8.7066 21.7753 6.92396 19.9927C5.14132 18.2101 4.25 16.0319 4.25 13.4583C4.25 10.8847 5.14132 8.7066 6.92396 6.92396C8.7066 5.14132 10.8847 4.25 13.4583 4.25C16.0319 4.25 18.2101 5.14132 19.9927 6.92396C21.7753 8.7066 22.6667 10.8847 22.6667 13.4583C22.6667 14.4972 22.5014 15.4771 22.1708 16.3979C21.8403 17.3188 21.3917 18.1333 20.825 18.8417L29.75 27.7667L27.7667 29.75ZM13.4583 19.8333C15.2292 19.8333 16.7344 19.2135 17.974 17.974C19.2135 16.7344 19.8333 15.2292 19.8333 13.4583C19.8333 11.6875 19.2135 10.1823 17.974 8.94271C16.7344 7.70312 15.2292 7.08333 13.4583 7.08333C11.6875 7.08333 10.1823 7.70312 8.94271 8.94271C7.70312 10.1823 7.08333 11.6875 7.08333 13.4583C7.08333 15.2292 7.70312 16.7344 8.94271 17.974C10.1823 19.2135 11.6875 19.8333 13.4583 19.8333Z"
                  fill="#5F6368"
                />
              </svg>
            </i>
          </label>
          {filterButtons.map((button, index) => (
            <ReviewButton
              key={index}
              label={button.label}
              isActive={button.isActive}
            />
          ))}
        </nav>
        <ul className="inline-flex flex-col gap-8 w-full mt-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <UserReview />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
