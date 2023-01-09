import { Post } from "./Post";
import "./global.css"
export function App() {
  return (
    <>
      <Post
        author="Domingos Canhanga"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere hic labore vitae maiores, ab nemo assumenda repellat quod, possimus esse nihil ea, magnam quas molestias quae cum sed?"
      />
      <Post
        author="Arsenio Muta"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere hic labore vitae maiores, ab nemo assumenda repellat quod, possimus esse nihil ea, magnam quas molestias quae cum sed?"
      />
  </>
  );
}
