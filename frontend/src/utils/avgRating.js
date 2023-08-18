const calculatedAvgRating = (reviews) => {
  const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRating === 0
      ? ''
      : totalRating === 1
      ? totalRating
      : (totalRating / reviews?.length).toFixed(1); // .toFixed(n): số lượng cần lấy sau dấu phẩy

  return {
    totalRating,
    avgRating,
  };
};

export default calculatedAvgRating;

// usage

// *.jsx
/*
    import calculatedAvgRating from './avgRating.js'

    const func = () {
        const {totalRating, avgRating} = calculatedAvgRating(reviews)

        return <></>
    }

*/
