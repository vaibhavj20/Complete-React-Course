import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Cart from "./components/Cart";
import Footer from "./components/Footer";

// import Grocery from "./components/Grocery";

/**
 * Header
 * -logo,nav items
 *
 * Body-
 *  - search bar
 * -card container-restaurant cards
 * rest-car -
 *   -img
 *   -name of res,star ratings,cuisine,delivery timing etc
 *
 * footer
 * -about,contact and address and links etc
 */

// const resObj = {
//   id: "37596",
//   name: "Bhojohori Manna",
//   cloudinaryImageId: "eveqgvdewaqfer0soufd",
//   locality: "Koramangala",
//   areaName: "Koramangala",
//   costForTwo: "₹600 for two",
//   cuisines: ["Bengali", "Mughlai"],
//   avgRating: 4.3,
//   parentId: "113",
//   avgRatingString: "4.3",
//   totalRatingsString: "5K+",
//   promoted: true,
//   adTrackingId:
//     "cid=12601490~p=0~adgrpid=12601490#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=37596~eid=464a5b21-b043-42e7-b2f3-43c84c6c6efa~srvts=1712738365185~collid=45995",
//   sla: {
//     deliveryTime: 29,
//     lastMileTravel: 0.1,
//     serviceability: "SERVICEABLE",
//     slaString: "25-30 mins",
//     lastMileTravelString: "0.1 km",
//     iconType: "ICON_TYPE_EMPTY",
//   },
//   availability: {
//     nextCloseTime: "2024-04-10 22:00:00",
//     opened: true,
//   },
//   badges: {},
//   isOpen: true,
//   aggregatedDiscountInfoV2: {
//     header: "30% OFF",
//     shortDescriptionList: [
//       {
//         meta: "Use TRYNEW",
//         discountType: "Percentage",
//         operationType: "RESTAURANT",
//       },
//     ],
//     descriptionList: [
//       {
//         meta: "30% off up to ₹75 | Use code TRYNEW",
//         discountType: "Percentage",
//         operationType: "RESTAURANT",
//       },
//     ],
//   },
//   type: "F",
//   badgesV2: {
//     entityBadges: {
//       imageBased: {},
//       textExtendedBadges: {},
//       textBased: {},
//     },
//   },
//   differentiatedUi: {
//     displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     differentiatedUiMediaDetails: {
//       mediaType: "ADS_MEDIA_ENUM_IMAGE",
//       lottie: {},
//       video: {},
//     },
//   },
//   reviewsSummary: {},
//   displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   restaurantOfferPresentationInfo: {},
//   externalRatings: {
//     aggregatedRating: {
//       rating: "3.9",
//       ratingCount: "1K+",
//     },
//     source: "GOOGLE",
//     sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//   },
// };

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  //authentication ,whatever username is,it will print anywhere in our project if declared
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vaby❤️",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* <Body /> */}

          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resdId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart/",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
