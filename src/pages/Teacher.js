// 1 Import area
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//2. Function definition area
function Teacher() {
  //2.1 hooks variable area
  // const[variable,setVariable]=useState(intialValue);
  const [teachers, setTeachers] = useState([]);
  const [payload, setPayload] = useState({
    data: {
      name: "Teacher1",
    },
  });
  const [teacherName, setTeacherName] = useState("");
  // useEffect() is used when the component is renderd and after that call the api and gave th eapi data
  // useEffect(cbfn,arr);
  // useEffect(()=>{fetch().then().then().catch() }, [])
  // http://localhost:1337/api/teachers
  useEffect(() => {
    fetch(`http://localhost:1337/api/teachers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        let newaoo = data.data.map((cv, idx, arr) => {
          return {
            id: cv.id,
            name: cv.attributes.name,
            createdAt: cv.attributes.createdAt,
          };
        });
        setTeachers(newaoo);
      })
      .catch();
  }, []);

  //2.2 function area
  let sendData = () => {
    fetch(`http://localhost:1337/api/teachers`, {
      method: "POST",
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
          alert("Teacher Created Successfuly");
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
  let deleteData = (e) => {
    document.getElementById(
      "loader"
    ).innerHTML = `<div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>`;
    // console.log(
    //   e.target.closest("tr").querySelector("td:first-child").innerHTML
    // );
    let x = e.target.closest("tr");
    let delid = e.target
      .closest("tr")
      .querySelector("td:first-child").innerHTML;
    console.log(delid);
    let ans = window.confirm("Do you really want to delete ");
    console.log(typeof ans);
    if (ans === true) {
      // call the Delete Rest Api
      fetch(`http://localhost:1337/api/teachers/${delid}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          x.remove();
          console.log(data);
          document.getElementById("loader").innerHTML = " ";
          window.alert("Deleted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Not Ok");
    }
  };
  //2.3 return area
  return (
    <>
      <div id="loader"></div>
      <div className="container">
        <h1>Create Teacher</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="teachername" className="form-label">
              Teacher Name
            </label>
            <input
              type="text"
              className="form-control"
              id="teachername"
              name="name"
              onKeyUp={(e) => {
                changeValue(e);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              sendData();
            }}
          >
            Submit
          </button>
        </form>
        <br />

        <hr />
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((cv, idx, arr) => {
              return (
                <tr key={idx}>
                  <td>{cv.id}</td>
                  <td>{cv.name}</td>
                  <td>{cv.createdAt}</td>
                  <td>
                    <button className="btn btn-success btn-sm">View</button>
                    <a
                      href={`/editTeacher?id=${cv.id}&name=${cv.name}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        deleteData(e);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

//3 export area
//3.1 named export
//3.2 default export
export default Teacher;
