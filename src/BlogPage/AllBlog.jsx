import '../css/block/allblog.css'

export default function AllBlog() {
  return (
    <section className="allblog">
      <div className="allblogcontainer">
        <article className="article">
          <h1 className="articletitle">How To Order Food On eatly?</h1>

          <div className="articleuser">
            <img className="articleuser-avatar" src='/public/Ellipse 28.svg' alt="User avatar" />
            <div className="articleuser-name">
              <p className="usersign">Written By</p>
              <p className="username">Perperzon</p>
            </div>
          </div>

          <img className="articlephoto" src='/public/Pic.svg' alt="Article cover" />
        </article>
      </div>
    </section>
  )
}