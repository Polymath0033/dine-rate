type Review = {
  name: string;
  date: string;
  img?: string;
  review: string;
};
export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className=" rounded-[15px] border-[0.78px] border-[#A35F30] bg-[rgba(255,_255,_255,_0.50)] blur-0 opacity-50 hover:opacity-100 hover:border-[1px] hover:rounded-[20px] px-[14px] hover:px-[19px] py-[19px] hover:py-[25px] scale-x-75 hover:scale-105 gap-3 ">
      <div className="flex gap-2.5 items-center">
        {review.img ? (
          <img
            src={review.img}
            alt={review.name}
            className="w-[50px] h-[50px] rounded-[100%]"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <circle cx="17.597" cy="17.6689" r="17.1642" fill="#D9D9D9" />
          </svg>
        )}
        <div className="flex flex-col gap-0.5 items-start ">
          <h6 className="text-black text-sm font-bold">{review.name}</h6>
          <p>{review.date}</p>
        </div>
      </div>
      <p className="text-black self-stretch text-[9.36px] ">{review.review}</p>
    </div>
  );
};
