import { useEffect } from '@wordpress/element';
import DefaultLayout from './DefaultLayout';
import SpotlightLayout from './SpotlightLayout';
import VideoLayout from './VideoLayout';

export default function Edit( props ) {
	const { attributes, context, setAttributes } = props;
	const { variant } = attributes;

	// Variant coming from parent context (if any)
	const contextVariant = context?.[ 'bwp/media-carousel-variant' ];

	// Decide what the variant *should* be
	const effectiveVariant =
		contextVariant || variant || 'media-carousel-default';

	// Keep attributes.variant in sync so save() has something stable to read
	useEffect( () => {
		// If we already have the right value, don't spam setAttributes
		if ( variant !== effectiveVariant ) {
			setAttributes( { variant: effectiveVariant } );
		}
	}, [ effectiveVariant, variant, setAttributes ] );

	// Pick layout based on the effective variant
	let LayoutComponent;

	switch ( effectiveVariant ) {
		case 'media-carousel-spotlight':
			LayoutComponent = SpotlightLayout;
			break;

		case 'media-carousel-video-preview':
			LayoutComponent = VideoLayout;
			break;

		default:
			LayoutComponent = DefaultLayout;
			break;
	}

	return <LayoutComponent { ...props } />;
}
