import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "ABCD";
  const email = "xyz@example.com";
  const phone = "9900909900";
  const address = "123, 4th cross, 5th block";

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-4 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300 object-cover"
      />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default Usercard;
