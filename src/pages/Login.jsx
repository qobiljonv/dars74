import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(password);
    console.log(email);

    if (email == userData.email && password == userData.password) {
      dispatch(login(userData));
      navigate("/");
    } else {
      alert("Email yoki parol noto'g'ri");
    }
  };

  return (
    <section className="flex">
      <img
        className="h-screen object-cover w-[50%]"
        src="/image/premium_photo.avif"
        alt=""
      />
      <div className=" flex flex-col items-center justify-center w-full  	bg-sky-200">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-400 py-18 px-15 rounded-2xl"
        >
          <h1 className="text-center text-4xl pb-7 text-black font-bold">
            Login
          </h1>
          <p>
            qobiljon@gmail.com <br />
            2424
          </p>
          <fieldset className="fieldset w-[300px]">
            <legend className="fieldset-legend">Email:</legend>
            <input
              name="email"
              type="email"
              className="input bg-sky-950"
              placeholder="mail@gmail.com"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password:</legend>
            <input
              name="password"
              type="password"
              className="input bg-sky-950 "
              placeholder="Password`"
            />
          </fieldset>
          <div
            className="flex justify-end pt-7
          "
          >
            <button className="btn  btn-accent">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
