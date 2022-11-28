import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Post } from './components/post/Post';

import { Sidebar } from './components/sidebar/Sidebar';
import './global.css';

//# O que um post vai ter inicialmente??
//author: { avatar_url: "", name: "", role: "}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrielbriks.png", 
      name: "Gabriel Morais", 
      role: "CEO CodeRivers" 
    },
    content: [
      {type: 'paragraph', content: 'Fala galera! 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto pessoal que fiz com ReactJS'},
      {type: 'link', content: 'gabriel.design/projeto-react'},
    ],
    publishedAt: new Date('2022-11-21 20:00:00'),



  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png", 
      name: "Diego Fernandes", 
      role: "CTO @ Rocketseat" 
    },
    content: [
      {type: 'paragraph', content: 'Fala galera! 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto pessoal que fiz com ReactJS'},
      {type: 'link', content: 'gabriel.design/projeto-react'},
    ],
    publishedAt: new Date('2022-11-19 20:00:00'),



  }
];


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <aside>
          <Sidebar />
        </aside>
        
        <main>
         {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
        

      </div>
      
    </div>
  )
}


export default App
