import { useState } from "react";

const ReactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const getInputValu = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-2xl p-14 mt-10">
      <form>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="space-y-3">
            <label>Name:</label> <br />
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              autoComplete="offf"
              value={user.name}
              onChange={getInputValu}
            />
          </div>
          <div className="space-y-3">
            <label>Email:</label> <br />
            <input
              name="email"
              type="text"
              placeholder="your email"
              className="input input-bordered w-full"
              autoComplete="offf"
              value={user.email}
              onChange={getInputValu}
            />
          </div>
          <div className="space-y-3">
            <label>Password:</label> <br />
            <input
              name="password"
              type="text"
              placeholder="password"
              className="input input-bordered w-full"
              autoComplete="offf"
              value={user.password}
              onChange={getInputValu}
            />
          </div>
          <div className="space-y-3">
            <label>Address:</label> <br />
            <input
              name="address"
              type="text"
              placeholder="your address"
              className="input input-bordered w-full"
              autoComplete="offf"
              value={user.address}
              onChange={getInputValu}
            />
          </div>
        </div>
        <div className="pt-14">
          <textarea
            name="message"
            onChange={getInputValu}
            placeholder="message"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        <div className="pt-6 text-center">
          <button onClick={handelSubmit} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactForm;
