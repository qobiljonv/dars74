import { FcPicture } from "react-icons/fc";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30 justify-between">
        <div>
          <Link className="text-3xl flex items-center gap-3 " to="/">
            <FcPicture />
            <h1>Vistara</h1>
          </Link>
          <p className="text-sm text-gray-400">
            Vista (manzara) + Tara (osmon yulduzi/yo'nalish) <br /> Ma'nosi:
            Cheksiz manzaralar olami, ko'zni quvontiradigan rasm to'plami.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Mualliflar</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#">Rasm yuklash</a>
            </li>
            <li>
              <a href="#">Akkountim</a>
            </li>
            <li>
              <a href="#">Qoidalar</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Bizni kuzating</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-5">
        © {new Date().getFullYear()} Vistara. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;
