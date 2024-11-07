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

  const handelSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, address } = user;

    if (name && email && password && address) {
      const res = await fetch(
        "https://reactform-9a969-default-rtdb.firebaseio.com/reactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/post",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            address,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          password: "",
          address: "",
        });
      }
      alert("data stored successfullay");
    } else {
      return alert("please provid fill the input");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-14 mt-10">
      <form method="POST">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="space-y-3">
            <label>Name:</label> <br />
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
              value={user.address}
              onChange={getInputValu}
            />
          </div>
        </div>
        <div className="pt-14">
          <textarea
            name="message"
            onChange={getInputValu}
            autoComplete="off"
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
