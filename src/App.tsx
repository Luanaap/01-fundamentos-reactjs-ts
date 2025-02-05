import { Header } from './components/Header'
import { Post, type PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

// author : {avatar_url: "", name: "", role: ""}
// publishedAt: Date 
// content: string

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luanaap.png',
      name: 'luana Andrade',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      { type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-04 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
      { type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      { type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-02 14:00:00'),
  },
]

//Iteração  = Estrutura de repetição

export function App() {
  return (
   <div>
    <Header/>
   <div className={styles.wrapper}>
    <Sidebar/>
    <main>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
          />
        )
      })}
    </main>
   </div>
   </div>
  )
}


