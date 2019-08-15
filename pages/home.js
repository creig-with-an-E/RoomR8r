import React, { Component } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter()
  console.log(router)
  return <h1> {router.query.email} is online</h1>;
};

export default Home;
