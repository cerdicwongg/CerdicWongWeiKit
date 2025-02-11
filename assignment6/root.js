// root.js

function PublicBlogPost(props) {
  return <div style= {{border: "1px solid lightgrey", padding: "12px"}}>
    <h1>My First Blog Post</h1>
    <p style={{ fontStyle: "italic", color: "grey" }}>
      By {props.name} on {props.date}
    </p>
    <p>
      Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can't wait to see where this path leads me.
    </p>
  </div>

}

function PrivateBlogPost() {

}

function BlogList() {

}

function Header() {
  return <div style={{ backgroundColor: "black", color: "white", padding: "24px", textAlign: "center" }}>
    <h1>My Blog</h1>
    <p>A blog about everything</p>
  </div>
}

function Footer() {

};

function App() {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      private: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      private: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      private: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      private: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      private: false
    }
  ];
  return <div>
    {blogPosts.title((title) => title === "My First Blog Post")}
    <Header />
    <PublicBlogPost />
  </div>
};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)