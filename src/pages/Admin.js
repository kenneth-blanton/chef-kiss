import {
  doc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { db, storage } from "../database/firebase";

const Admin = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [warning, setWarning] = useState();
  const correctUsername = "Moody";
  const correctPassword = 8104;

  const handleLogin = () => {
    if ((username || password) === undefined) {
      setWarning("Nah");
    } else if (username === correctUsername && password === correctPassword) {
      setIsLogged(true);
      setWarning(undefined);
    } else {
      setWarning("Nahhhh");
    }
  };

  const logOut = () => setIsLogged(false);

  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const uploadMealPrep = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `mealPreps/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setDoc(doc(db, "mealPreps", id), {
            title,
            description,
            image: url,
            price,
            active: false,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function deletePrep(e) {
    await deleteDoc(doc(db, "mealPreps", e.target.id));
  }

  async function setActive(e) {
    console.log(e.target.id);
    console.log(e.target.checked);
    setIsChecked(!e.target.checked);
    await updateDoc(doc(db, "mealPreps", e.target.id), { active: isChecked });
  }

  const [prepsList, setPrepList] = useState([""]);

  useEffect(() => {
    setInterval(() => {
      async function getAllPreps() {
        const querySnapshot = await getDocs(collection(db, "mealPreps"));
        const allPreps = querySnapshot.docs;
        setPrepList(allPreps);
      }
      getAllPreps();
    }, 1000);

    // eslint-disable-next-line
  }, [prepsList]);

  return (
    <>
      {isLogged ? (
        <div style={{ margin: "2em auto", textAlign: "center" }}>
          <h1 style={{ color: "white" }}>Admin Portal</h1>
          <div className="uploadSection">
            <h3>Upload Meal Prep</h3>
            <br />
            <label style={{ color: "white" }}>ID</label>
            <br />
            <input
              style={{ marginBottom: "1em" }}
              type="text"
              name="id"
              id="id"
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <label style={{ color: "white" }}>Title</label>
            <br />
            <input
              style={{ marginBottom: "1em" }}
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label style={{ color: "white" }}>Description</label>
            <br />
            <input
              style={{
                backgroundColor: "white",
                width: 300,
                margin: "0 auto 1em",
              }}
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <label style={{ color: "white" }}>Price</label>
            <br />
            <input
              style={{
                backgroundColor: "white",
                margin: "0 auto 1em",
              }}
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="file"
              style={{
                margin: "0 auto 1em",
                width: 88,
              }}
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
                console.log(e.target.files);
              }}
            />
            <br />
            <hr />
            <button style={{ margin: "1em auto" }} onClick={uploadMealPrep}>
              Upload Meal Prep
            </button>
          </div>

          <div className="listOfPreps">
            <h1>List of Preps</h1>
            {prepsList.map((prep) => {
              return (
                <div className="prepOpt">
                  <h2>{prep.data().title}</h2>
                  <br />
                  <span>Is It Active? </span>{" "}
                  <input
                    type="checkbox"
                    id={prep.id}
                    checked={prep.data().active}
                    // eslint-disable-next-line
                    onClick={setActive}
                  />
                  <br />
                  <button
                    style={{ marginTop: 16 }}
                    onClick={deletePrep}
                    id={prep.id}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div style={{ margin: "3em auto", textAlign: "center" }}>
          <input
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.valueAsNumber)}
            required
          />
          <br />
          <button onClick={handleLogin}>Log In</button>
          <p style={{ color: "red" }}>{warning}</p>
        </div>
      )}
    </>
  );
};

export default Admin;
