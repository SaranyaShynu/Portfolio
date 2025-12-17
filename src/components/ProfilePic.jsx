import React from "react";

const ProfilePic = () => {
return ( <div className="w-full flex justify-center py-10"> <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-500 dark:ring-blue-400 animate-fadeIn">
<img
src="/profile.jpeg"   
alt="Profile"
className="w-full h-full object-cover"
/> </div> </div>
);
};

export default ProfilePic;
