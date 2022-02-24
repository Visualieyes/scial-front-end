import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, VisitorLayout } from "./layouts";

// Route Views
import SentimentDashboard from "./views/SentimentDashboard";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import AllAssets from "./views/AllAssets";
import ScialBlog from "./views/ScialBlog";
import News from "./views/News";
import UserSignUp from "./views/UserSignUp";
import UserLogin from "./views/UserLogin";
import Home from "./views/Home";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: VisitorLayout,
    component: Home
  },
  {
    path: "/scial-overview",
    layout: DefaultLayout,
    component: SentimentDashboard
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/assets",
    layout: DefaultLayout,
    component: AllAssets
  },
  {
    path: "/news",
    layout: DefaultLayout,
    component: News
  },
  {
    path: "/sign-up",
    layout: VisitorLayout,
    component: UserSignUp
  },
  {
    path: "/login",
    layout: VisitorLayout,
    component: UserLogin
  }
];
