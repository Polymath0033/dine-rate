import React from "react";
const Star: React.FC<{ isFilled: boolean }> = ({ isFilled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill={isFilled ? "#E6E150" : "white"}
    >
      <path
        d="M10.5489 0.927051C10.8483 0.00574064 12.1517 0.00573969 12.4511 0.92705L14.3064 6.63729C14.4403 7.04931 14.8243 7.32827 15.2575 7.32827H21.2616C22.2303 7.32827 22.6331 8.56789 21.8494 9.13729L16.9919 12.6664C16.6415 12.9211 16.4948 13.3724 16.6287 13.7844L18.484 19.4947C18.7834 20.416 17.7289 21.1821 16.9452 20.6127L12.0878 17.0836C11.7373 16.8289 11.2627 16.8289 10.9122 17.0836L6.0548 20.6127C5.27108 21.1821 4.2166 20.416 4.51596 19.4947L6.37132 13.7844C6.5052 13.3724 6.35854 12.9211 6.00805 12.6664L1.15064 9.13729C0.366923 8.56789 0.769696 7.32827 1.73842 7.32827H7.74252C8.17574 7.32827 8.5597 7.04931 8.69357 6.63729L10.5489 0.927051Z"
        fill={isFilled ? "#E6E150" : "white"}
      />
    </svg>
  );
};
export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < rating;

    return <Star key={index} isFilled={isFilled} />;
  });
  return <div className="flex gap-1">{stars}</div>;
};
