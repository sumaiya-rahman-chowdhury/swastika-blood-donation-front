import React from "react";
import GeneralButton from "@/app/component/button/GeneralButton";

function FindDonationCenter() {
  const content = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus id
            vel finibus commodo aenean. Egestas tortor fusce imperdiet imperdiet
            nunc pellentesque. Quam urna torquent luctus donec class ipsum.`;
  return (
    <div
      className="w-full h-[400px] bg-fixed bg-center bg-cover bg-no-repeat my-10"
      style={{
        backgroundImage:
          "url('https://donors.creedcreatives.net/image/redhead-volunteer-with-transfusion-set-squeezing-r-2024-11-15-06-09-45-utc.jpg')",
      }}
    >
      <div className="w-full h-full bg-black/65 flex justify-center items-center">
        {/*  */}
        <div className="text-white max-w-[900px] text-center space-y-5 ">
          <h3 className="text-4xl font-bold max-w-2xl mx-auto">
            Every drop matters! Join us at our next blood drive & Be a
            Lifesaver!
          </h3>
          <p className="max-w-2xl text-sm">{content}</p>
          <GeneralButton value="Find Donation Center" />
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default FindDonationCenter;