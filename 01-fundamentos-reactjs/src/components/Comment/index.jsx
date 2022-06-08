import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/42882103?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContext}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tharyon Feitosa</strong>
              <time tile="03 de junho às 03:27h" dateTime="2022-06-08 03:27:30">
                Publicado há 1h
              </time>
              <button title="Deletar comentário"><Trash size={20}/></button>
            </div>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
            <button>
                <ThumbsUp size={20}/> Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
