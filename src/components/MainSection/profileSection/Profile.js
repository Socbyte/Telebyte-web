import React from "react";
// import { useEffect } from "react";
import styles from "../../elements/styles/style";
// import firebase from "../../../container/Firebase";

const Expertise = (props) => {
	let id = 0;
	let list = [];
	let componentList = null;

	if (props.expertise) {
		list = props.expertise.split(",");
		componentList = list.map((single) => {
			return (
				<span
					className={
						single
							? styles.ProfileCardRightExpertiseSpan
							: styles.DisplayNone
					}
					key={id++}
				>
					{single}
				</span>
			);
		});
	}

	return (
		<div className={styles.ProfileCardRightExpertise}>
			<h3>Expertise</h3>
			<div className={styles.ExpertiseContainer}>
				{componentList ? componentList : "no expertise provide"}
			</div>
		</div>
	);
};

const EducationCard = (props) => {
	return (
		<div className={styles.ProfileEducationCard}>
			<h4>{props.degree}</h4>
			<h4>{props.school}</h4>
			<span>{props.yearFrom}</span>
			{" - "}
			<span>{props.yearTo}</span>
		</div>
	);
};

const EducationSection = (props) => {
	let autoKey = 0;
	let educationArray = [];

	if (props.educationList) {
		educationArray = Object.keys(props.educationList).map((edu) => {
			return [...Array(props.educationList[edu])];
		});
	}

	// console.log(props.educationList);

	return (
		<div className={styles.ProfileEducationSection}>
			<h3>Education</h3>
			{props.educationList ? (
				educationArray.map((currEducation) => {
					return (
						<EducationCard
							key={autoKey++}
							degree={currEducation[0].degree}
							school={currEducation[0].school}
							yearFrom={currEducation[0].yearFrom}
							yearTo={currEducation[0].yearTo}
						/>
					);
				})
			) : (
				<span>Education not provided by {props.username ? props.username : "user"}</span>
			)}
		</div>
	);
};

const SocialSection = (props) => {
	const { github, linkedin, insta, facebook, twitter } = props;
	return (
		<div className={styles.ProfileSocial}>
			{github ? (
				<a href={github}>
					<svg
						className={styles.GithubIcon}
						id="Bold"
						height="512"
						viewBox="0 0 24 24"
						width="512"
					>
						<path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
					</svg>
				</a>
			) : null}

			{linkedin ? (
				<a href={linkedin}>
					<svg
						className={styles.LinkedinIcon}
						height="512pt"
						viewBox="0 0 512 512"
						width="512pt"
					>
						<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
					</svg>
				</a>
			) : null}

			{insta ? (
				<a href={insta}>
					<svg
						className={styles.InstagramIcon}
						height="512pt"
						viewBox="0 0 512 512"
						width="512pt"
					>
						<path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
						<path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
						<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
					</svg>
				</a>
			) : null}

			{facebook ? (
				<a href={facebook}>
					<svg
						className={styles.FacebookIcon}
						id="Capa_1"
						height="512"
						viewBox="0 0 512 512"
						width="512"
					>
						<path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z" />
					</svg>
				</a>
			) : null}

			{twitter ? (
				<a href={twitter}>
					<svg
						className={styles.TwitterIcon}
						height="512pt"
						viewBox="0 0 512 512"
						width="512pt"
					>
						<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0" />
					</svg>
				</a>
			) : null}
		</div>
	);
};

const Profile = (props) => {
	const websiteOrigin = window.location.origin;
	// article, phoneNo, publics,field is also available...
	let {
		about,
		education,
		email,
		expertise,
		follow,
		facolor,
		fullname,
		location,
		profileImg,
		social,
		status,
		username,
	} = props.userdata;

	let followers, followings;
	if (follow) {
		followers = follow.followers;
		followings = follow.following;
	}

	let github, facebook, insta, linkedin, twitter;
	if (social) {
		github = social.github;
		linkedin = social.linkedin;
		facebook = social.facebook;
		insta = social.instagram;
		twitter = social.twitter;
	}


	const colorIsLight = (color) => {
		let r, g, b, hsp;
		if (color.match(/^rgb/)) {
			color = color.match(
				/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
			);
			r = color[1];
			g = color[2];
			b = color[3];
		} else {
			color = +(
				"0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
			);
			r = color >> 16;
			g = (color >> 8) & 255;
			b = color & 255;
		}

		hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
		//return true if the givne colro in the argument is light...
		// console.log(hsp, hsp > 127.5);
		return hsp > 127.5;
	};

	// facolor = "#555555";
	// facolor = "#aaaaaa";

	let light = false;
	if (facolor) {
		if (colorIsLight(facolor)) {
			light = true;
		}
	}

	return (
		<div
			className={`${styles.FullProfile} ${
				light ? styles.ProfileIsLight : styles.ProfileIsDark
			}`}
			style={{ backgroundColor: facolor }}
		>
			<div className={styles.ProfileCard}>
				<div className={styles.ProfileCardLeft}>
					<div className={styles.ProfileCardLeftFlex}>
						<div className={styles.ProfileImage}>
							<img
								draggable="false"
								src={websiteOrigin + profileImg}
								alt="tavatar"
							/>
						</div>

						<div className={styles.ProfileFollows}>
							<span>Followers: {followers}</span>
							<span>Followings: {followings}</span>
						</div>

						<div className={styles.centerThisPart}>
							<div className={styles.ProfileCardLeftHRLine}></div>
						</div>

						<h2>{fullname}</h2>
						<p>{username}</p>
						<p>{email}</p>

						<div className={styles.centerThisPart}>
							<div className={styles.ProfileCardLeftHRLine}></div>
						</div>

						<div className={styles.ProfileCardLeftHRLine}></div>

						<div className={styles.ProfileCardLeftStatus}>
							<h3>Status</h3>
							{status ? (
								<span>{status}</span>
							) : (
								<span>No Status</span>
							)}
						</div>

						{location ? (
							<div className={styles.ProfileCardLeftLocation}>
								<h3>Location</h3>
								<span>{location}</span>
							</div>
						) : null}

						<SocialSection
							github={github}
							linkedin={linkedin}
							insta={insta}
							facebook={facebook}
							twitter={twitter}
						/>
					</div>
				</div>
				<div className={styles.ProfileCardRight}>
					<div className={styles.ProfileCardRightAbout}>
						<h3>About Me</h3>
						<p>
							{about
								? about
								: `about section is not provided by ${username || "user"}`}
						</p>
					</div>

					<div className={styles.centerThisPart}>
						<div className={styles.ProfileCardLeftHRLine}></div>
					</div>

					<Expertise expertise={expertise} />

					<div className={styles.centerThisPart}>
						<div className={styles.ProfileCardLeftHRLine}></div>
					</div>

					<EducationSection educationList={education} username={username} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
