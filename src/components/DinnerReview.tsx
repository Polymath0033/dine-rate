import React from "react";
import { Rating } from "./Rating";
import reviewer1 from "../assets/reviewer-1.jpeg";
export const DinnerReview: React.FC<{
  name: string;
  rating: number;
  restaurantName: string;
  img?: string;
  review: string;
}> = ({ name, rating, restaurantName, img, review }) => {
  return (
    <div className="flex max-w-[516px] gap-6 flex-col items-end ">
      <div className="flex items-start gap-7 self-stretch flex-col">
        <div className="flex items-start flex-col gap-1">
          <h1 className="text-xl font-semibold text-white">
            {restaurantName} Hello world
          </h1>
          <Rating rating={rating} />
        </div>
        <div className="flex gap-3 self-stretch items-start ">
          {img ? (
            <img
              src={img}
              alt="restaurant"
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <img
              src={reviewer1}
              alt="Reviewer"
              className=" w-20 h-20 rounded-[20px] "
            />
          )}
          <p className="text-white text-sm ">
            <span className="font-bold">Mary Christmas{name}</span>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};
