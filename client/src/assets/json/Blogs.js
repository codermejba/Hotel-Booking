const getDate = new Date();

  //geting date
  const currentDate = getDate.getDate();

  //gating Month
  const month = getDate.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = monthNames[month];

  //geting year
  const currentYear = getDate.getFullYear();
 export const Blogs = [
    {
      date: currentDate,
      month: currentMonth,
      year: currentYear,
      img: "img/Rooms/Family Room.jpg",
      content: "Find cheap hotels in the best locations",
    },
    {
      date: currentDate -10,
      month: currentMonth ,
      year: currentYear-1,
      img: "img/Rooms/Luxury Room.jpg",
      content: "Book a room Today most Affordable Rates.",
    },
    {
      date: currentDate -3,
      month: currentMonth,
      year: currentYear,
      img: "img/Rooms/Small Suite.jpg",
      content: "Our expertise covers all Aspects of the industry",
    },
  ];