'use client';

import { useState } from 'react';

const trackIds = [
	'5pIcwtJYNJx93l420oR2Vm',
	'0cOMncRq4cmDLO4tPQnkBF',
	'02BcXEH1zJYbXSabPtNlKf',
	'06LQQ8NO6jO57b6I5PMqd1',
	'77UjLW8j5UAGAGVGhR5oUK',
	'6QKpHmO41jkd9pTp0FfmHs',
	'6XeZna9NRNjUZDVHg3zB7v',
];

// Spotify only renders cleanly at its native 80/152px heights, so shrink with a transform.
const SCALE = 0.75;

const buttonClass =
	'px-2 py-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors';

export default function FavoriteMusic() {
	const [index, setIndex] = useState(0);
	const count = trackIds.length;
	const prev = () => setIndex((i) => (i - 1 + count) % count);
	const next = () => setIndex((i) => (i + 1) % count);

	return (
		<section className="mt-10">
			<div className="flex items-center justify-between mb-3">
				<h2 className="text-base font-medium text-gray-900 dark:text-white">Favorite music</h2>
				<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
					<button type="button" onClick={prev} aria-label="Previous track" className={buttonClass}>
						←
					</button>
					<span className="tabular-nums px-1">
						{index + 1} / {count}
					</span>
					<button type="button" onClick={next} aria-label="Next track" className={buttonClass}>
						→
					</button>
				</div>
			</div>
			<div style={{ height: 152 * SCALE }} className="overflow-hidden rounded-xl">
				<iframe
					key={trackIds[index]}
					src={`https://open.spotify.com/embed/track/${trackIds[index]}`}
					title={`Favorite track ${index + 1} of ${count}`}
					height="152"
					className="border-0 origin-top-left"
					style={{ width: `${100 / SCALE}%`, transform: `scale(${SCALE})` }}
					allow="encrypted-media"
				/>
			</div>
		</section>
	);
}
