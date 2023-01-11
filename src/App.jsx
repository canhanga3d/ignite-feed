import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
     <Sidebar />
      <main>
      <Post
        author="Domingos Canhanga"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere hic labore vitae maiores, ab nemo assumenda repellat quod, possimus esse nihil ea, magnam quas molestias quae cum sed?"
      />
      <Post
        author="Arsenio Muta"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae debitis facere hic labore vitae maiores, ab nemo assumenda repellat quod, possimus esse nihil ea, magnam quas molestias quae cum sed?"
      />
      </main>
    </div>
      
  </>
  );
}
