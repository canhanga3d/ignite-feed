import styles from "./Post.module.css";
import { Comment} from "./Comment"
import { Avatar } from "./Avatar";
export function Post(props) {
  console.log(props);
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
           <Avatar src="https://github.com/Arsenio-Antonio-muta.png" />
            <div className={styles.authorInfo}>
            <strong>Arsenio Muta</strong>
            <span>Web developer</span>
            </div>
          </div>
          <time title="12 de Janeiro as 8:00" dateTime="2023-01-12 08:00:56">
            Publicado há 1h
          </time>
        </header>
        <div className={styles.content}>
          <p> Fala galeraa 👋 </p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p><a href="#">👉{" "} jane.design/doctorcare</a></p>
          <p>
            <a href="">#novoprojeto</a>{" "}
            <a href=""> #nlw</a>{" "}
            <a href="#  "> #rocketseat</a>
          </p>
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentario"
          />
          <footer><button type="submit">Publicar</button></footer>
        </form>
       <div className={styles.commentList}>
        <Comment/>
       </div>
      </article>
    </>
  )
}
