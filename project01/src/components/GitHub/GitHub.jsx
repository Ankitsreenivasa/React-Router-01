import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState({}) 
  useEffect(() => {
    fetch('https://api.github.com/users/Ankitsreenivasa')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
  }, []);

  return (
    <div className="text-center text-2xl bg-slate-600 text-white p-4">
      GitHub Followers :{data.followers}
      <div className="">
        <img src={data.avatar_url} alt="" className="border rounded-lg w-1/12" />
      </div>
    </div>
  );
}

export default GitHub;
