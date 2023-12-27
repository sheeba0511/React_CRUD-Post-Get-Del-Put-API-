// 1. Import Area
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

//2.Function Definition Area
export default function EditTeacher() {
  //2.1 Hooks Variable Area
  const [payload, setPayload] = useState({
    data: {
      name: "Teacher1",
    },
  });
  const [teacherName, setTeacherName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    // How to acess QueryString Params in ReactJS
    console.log(searchParams.get("id"));
    console.log(searchParams.get("name"));
    setPayload({
      ...payload,
      data: {
        name: searchParams.get("name"),
      },
    });
  }, []);
  //2.2 Function Def Area
  let updateData = () => {
    fetch(`http://localhost:1337/api/teachers/${searchParams.get("id")}`, {
      method: "PUT",
      headers: {
        //P:V
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        //I want to convert the respone into json readable
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Teacher Updated Successfuly");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let changeValue = (event) => {
    console.log(event.target.value);
    setTeacherName(event.target.value);
    console.log("HOOK teacherName", teacherName);

    setPayload({
      ...payload,
      data: {
        name: document.querySelector("input#teachername").value,
      },
    });
  };
  //3. Return Area
  return (
    <>
      <div className="container">
        <h1>Edit Teacher</h1>
        <form>
          <input type="hidden" name="id" value={searchParams.get("id")} />
          <div className="mb-3">
            <label htmlFor="teachername" className="form-label">
              Teacher Name
            </label>
            <input
              type="text"
              className="form-control"
              id="teachername"
              name="name"
              value={payload.data.name}
              onChange={(e) => {
                changeValue(e);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              updateData();
            }}
          >
            Submit
          </button>
        </form>
        <hr />
        <Link to="/" className="btn btn-success">
          Home
        </Link>
      </div>
    </>
  );
}
//3. Export Area
