import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/luanaap.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Luana Andrade</strong>
            <time 
              title="04 de Janeiro às 14h00" 
              dateTime='2025-01-04 14:00:00'>
              Cerca de 1h atrás
            </time>
          </div>

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>

        <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
              <ThumbsUp/>
              Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}