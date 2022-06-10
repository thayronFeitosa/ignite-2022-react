import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/42882103?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className>
            <div className={styles.authorAndTime}>
              <strong>Tharyon Feitosa</strong>
              <time tile="03 de junho às 03:27h" dateTime="2022-06-08 03:27:30">
                Publicado há 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={25} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
