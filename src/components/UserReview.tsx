import { Rating } from "./Rating";
import _restaurantImage from "../assets/restaurant-image.jpeg";
export const UserReview: React.FC<{
  name: string;
  restaurantImage?: string;
  rating: number;
  review: string;
}> = ({ name, rating, review }) => {
  return (
    <div className="flex self-stretch gap-6 items-center">
      <img
        src={_restaurantImage}
        alt="Restaurant image"
        className="w-[284px] rounded-[20px] h-[187px] "
      />
      <div className="flex gap-7 flex-col items-start">
        <div className="flex  gap-1 flex-col items-start ">
          <h1 className="text-xl font-semibold text-white">{name}</h1>
          <Rating rating={rating} />
        </div>
        <p className="text-white">{review}</p>
      </div>
    </div>
  );
};
