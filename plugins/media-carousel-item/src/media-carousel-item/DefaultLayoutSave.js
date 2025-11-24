/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-media-carousel-item';

export default function DefaultLayoutSave( { attributes } ) {
	const {
		defaultmediaselect,
		defaultimageid,
		defaultimagesrc,
		defaultimagealt,
		defaultvideoid,
		defaultvideosrc,
		defaultposterid,
		defaultpostersrc,
		defaultposteralt,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( {
		className: `${ classes } splide__slide`,
	} );

	return (
		<article
			{ ...blockProps }
			data-splide-html-video={
				defaultmediaselect === 'video' && defaultvideosrc
					? defaultvideosrc
					: ''
			}
		>
			{ defaultmediaselect === 'video' && defaultvideosrc && (
				<div
					className={ `${ BLOCKNAME }__media splide__slide__container` }
				>
					{ defaultpostersrc && (
						<img
							loading="lazy"
							decode="async"
							className="c-video-carousel__item--poster"
							src={ defaultpostersrc }
							alt={ defaultposteralt || '' }
						/>
					) }
				</div>
			) }
			{ defaultmediaselect === 'image' &&
				defaultimagesrc &&
				defaultimageid && (
					<div className={ `${ BLOCKNAME }__media` }>
						<picture>
							<img
								loading="lazy"
								decoding="async"
								src={ defaultimagesrc }
								alt={ defaultimagealt || '' }
							/>
						</picture>
					</div>
				) }
		</article>
	);
}
