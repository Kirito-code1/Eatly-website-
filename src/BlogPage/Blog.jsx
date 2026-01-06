import '../css/blocks/blog.css'
import Article from '../ArticlesPage/Article.jsx'

export default function Blog() {
	return (
		<section className='fullarticle'>
			<div className='container'>
				<section className='blog'>
					<h1 className='blogtitle'>How To Order Food On eatly?</h1>

					<div className='bloguser'>
						<img
							className='bloguser-avatar'
							src='/Ellipse%2028.svg'
							alt='User avatar'
						/>
						<div className='bloguser-name'>
							<p className='usersign'>Written By</p>
							<p className='username'>Perperzon</p>
						</div>
					</div>

					<img className='blogphoto' src='/Pic.svg' alt='blog cover' />
				</section>
				<section className='details'>
					<section className='descriptions'>
						<div>
							<h2>Browse restaurants and menus</h2>
							<p>
								Once you're logged in, you can browse through the list of
								available restaurants on the Eatly website. You can filter by
								cuisine, price, and distance to find the perfect restaurant for
								your needs. Click on a restaurant to view its menu. Once you're
								logged in, you can browse through the list of available
								restaurants on the Eatly website. You can filter by cuisine,
								price, and distance.
							</p>
							<ul>
								<li>It was popularised in the 1960s</li>
								<li>Lorem Ipsum passages, and more recently</li>
							</ul>
						</div>

						<div>
							<h2>Select Your Items</h2>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at Hampden-Sydney College in Virginia, looked up
								one of the more obscure Latin words, consectetur, from a Lorem
								Ipsum passage, and going through the cites of the word in
								classical literature, discovered the undoubtable source.
							</p>
						</div>

						<div>
							<h2>Place Your Order</h2>
							<p>
								Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
								Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
								Cicero, written in 45 BC. This book is a treatise on the theory
								of ethics, very popular during the Renaissance.
							</p>
						</div>

						<button className='next-article'>
							Next Article
							<img src='/arrow-right.svg' alt='arrow' />
						</button>
					</section>
					<section className='toparticles'>
						<h1>Top Articles</h1>

						<div className='toparticles-cards'>
							<Article />
							<Article />
							<Article />
						</div>
					</section>
				</section>
			</div>
		</section>
	)
}
