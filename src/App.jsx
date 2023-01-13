import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/domingoscanhanga.png",
        name: "Domingos Canhanga",
        role: "Web developer,",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: 'link',
          content:'👉 jane.design/doctorcare',
        }
      ],
    publishedAt:new Date('2022-05-03 20:00:00'),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/Arsenio-Antonio-muta.png",
        name: "Arsênio Muta",
        role: "Web developer,",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: 'link',
          content:'👉 jane.design/doctorcare',
        }
      ],
    publishedAt:new Date('2022-05-03 20:00:00'),
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
           return(
             <Post
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
             />
           )
          })}
        </main>
      </div>
    </>
  );
}
