import { useEffect, useState } from "react";
import { Header } from "./components/headers";
import { LogForm } from "./components/form";
import { fetchImages, login } from "./utils";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
    if (localStorage.key("myToken")) {
      login(setUser);
    }
  }, []);

  return (
    <div className="App">
      <Header title={user} />
      {!user && <LogForm setUser={setUser} />}
      {images.map((image, i) => {
        return (
          <img
            src={image.download_url}
            alt={`random file from unsplash number ${i}`}
          />
        );
      })}
    </div>
  );
};

export default App;
