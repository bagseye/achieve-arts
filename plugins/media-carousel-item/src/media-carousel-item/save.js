// save.js
import DefaultLayoutSave from './DefaultLayoutSave';
import SpotlightLayoutSave from './SpotlightLayoutSave';
import VideoLayoutSave from './VideoLayoutSave';

export default function save( { attributes } ) {
	const { variant } = attributes;

	console.log( variant );

	let LayoutComponent;

	switch ( variant ) {
		case 'media-carousel-spotlight':
			LayoutComponent = SpotlightLayoutSave;
			break;

		case 'media-carousel-video-preview':
			LayoutComponent = VideoLayoutSave;
			break;

		default:
			LayoutComponent = DefaultLayoutSave;
			break;
	}

	return <LayoutComponent attributes={ attributes } />;
}
