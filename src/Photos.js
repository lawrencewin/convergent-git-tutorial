import React from "react"

import photo1 from "./photos/photo1.jpg"
import photo2 from "./photos/photo2.jpg"
import photo3 from "./photos/photo3.jpg"

function Photos () {
   return(
		<div className="app">
			<div className="banner">
				<div className="banner__content">
					<div className="banner__header">
						<div className="banner__title">The Forty Acres in Photos</div>
						<div className="banner__desc">Anim ut culpa ut nulla excepteur occaecat incididunt adipisicing. In culpa aliquip pariatur enim culpa Lorem do proident commodo incididunt sunt non. Irure labore nisi cupidatat minim ex. Deserunt magna officia occaecat sint ea amet elit eu. Tempor quis do consectetur proident quis qui exercitation.</div>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="body__imageGrid">
					<div className="body__imageLong">
						<img src={photo1} alt="placeholder" />
					</div>
					<div className="body__imageShortLeft">
						<img src={photo2} alt="placeholder" />
					</div>
					<div className="body__imageShortRight">
						<img src={photo3} alt="placeholder" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Photos