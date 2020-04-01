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
						<div className="banner__title">Deserunt est minim adipisicing </div>
						<div className="banner__desc">
							Irure qui pariatur officia commodo laborum. Sunt ea id non sunt officia adipisicing sint ullamco. Fugiat in deserunt elit elit ipsum et excepteur in laborum excepteur excepteur ex laboris enim. Quis ipsum culpa mollit ipsum veniam ex irure sit pariatur enim culpa. Dolor commodo aliqua dolore dolore ut aliquip cillum officia ad pariatur nulla aliquip. Est consequat do ea consectetur. Magna est ut sunt occaecat Lorem cillum deserunt reprehenderit ipsum mollit deserunt et.
						</div>
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