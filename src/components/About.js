import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const About = () => { 
  return (
    <div className="mt-[120px]">
      <Link to="./profile" className="text-white bg-orange-500 p-2 font-bold">SHOW ME Founder's PROFILE</Link>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  )
}

export default About ; 