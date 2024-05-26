export function truncateText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.substring(0, maxLength) + "...";
}

export function formatCurrency(price, locale = "en-US", currency = "USD") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
}

export function RatingBar(rating) {
  // Assuming rating is out of 5
  const maxRating = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${
            index < filledStars ? "text-yellow-500" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l2.5 6.5H22l-5 4.75 1.75 6.25L12 16.5 5.25 19 7 12.25 2 7.75h7.5L12 2z"
          />
        </svg>
      ))}
    </div>
  );
}
