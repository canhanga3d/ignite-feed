import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
export function Comment({content}) {
  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Domingos </strong>
                <time
                  title="12 de Janeiro as 8:00"
                  dateTime="2023-01-12 08:00:56"
                >
                  Cerca de 1h atrás
                </time>
              </div>
              <button title="Deletar">
                <Trash size={24}/>
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer><button><ThumbsUp/>Aplaudir <span>20</span></button></footer>
        </div>
      </div>
    </>
  );
}
