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

const BLOCKNAME = 'c-media-block-item';

export default function save() {
		const {
			variant,
			imageid,
			imagesrc,
			imagealt,
			videoid,
			videosrc,
			posterid,
			postersrc,
			posteralt,
		} = attributes;
	
		const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );
	
		const blockProps = useBlockProps.save( {
			className: `${ classes }`,
		} );

	return (
		<article
			{ ...blockProps }
			data-splide-html-video={
				variant === 'video' && videosrc
					? videosrc
					: ''
			}
		>
			{ variant === 'video' && videosrc && (
				<div
					className={ `${ BLOCKNAME }__media` }
				>
					{ postersrc && (
						<img
							loading="lazy"
							decode="async"
							className="c-video-carousel__item--poster"
							src={ postersrc }
							alt={ posteralt || '' }
						/>
					) }
				</div>
			) }
			{ variant === 'image' &&
				imagesrc &&
				imageid && (
					<div className={ `${ BLOCKNAME }__media` }>
						<picture>
							<img
								loading="lazy"
								decoding="async"
								src={ imagesrc }
								alt={ imagealt || '' }
							/>
						</picture>
					</div>
				) }
		</article>
	);
}
