import React from "react";
import Greeting from "./Greeting";
function Reviews() {
  return (
    <div className="reviews">
      <Greeting
        name ="Name: Phantomranger"
        Description="Review: My stay was very fun and I have learned a lot about the cosmos!"
      />

      <Greeting
        name = "Name: Andromeda"   
        Description= "Review: Very relaxing while learning about quantum mechanics"
      />

      <Greeting
        name = "Name: Nova"   
        Description= "Review: What a thrilling adventure!"
      />
    </div>
  );
}

export default Reviews;
