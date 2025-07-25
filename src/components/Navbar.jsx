import { FcPicture } from "react-icons/fc";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="bg-slate-900">
        <div className="flex justify-between items-center py-[40px] max-w-[1200px] w-full mx-auto px-[20px]">
          <Link className="text-3xl flex items-center gap-3" to="/">
            <FcPicture />
            <h1>Vistara</h1>
          </Link>

          <ul className="flex gap-5 text-lg">
            <li className="l">
              <Link className="btn btn-soft" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="btn btn-soft" to="/profile">
                Profile
              </Link>
            </li>
            <li className="l">
              <Link className="btn btn-soft" to="/signup">
                Signup
              </Link>
            </li>
            <li className="l">
              <Link className="btn btn-soft" to="/singleimage">
                SingleImage
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
