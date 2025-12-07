/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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

export default function VideoLayoutSave( { attributes } ) {
	const {
		videotab,
		videoheading,
		videoid,
		videosrc,
		videoposterid,
		videopostersrc,
		videoposteralt,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( {
		className: `${ classes } splide__slide`,
	} );

	return (
		<article
			{ ...blockProps }
			data-splide-html-video={ videosrc ? videosrc : '' }
		>
			{ videosrc && (
				<div
					className={ `${ BLOCKNAME }__media splide__slide__container` }
				>
					{ videopostersrc && (
						<img
							loading="lazy"
							decoding="async"
							className="c-video-carousel__item--poster"
							src={ videopostersrc }
							alt={ videoposteralt || '' }
						/>
					) }
				</div>
			) }

			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__content` }>
						<header className={ `${ BLOCKNAME }__header` }>
							<span className={ `${ BLOCKNAME }__tab h-tab` }>
								<RichText.Content
									tagName="p"
									value={ videotab }
								/>
							</span>
							<RichText.Content
								tagName="h3"
								className={ `${ BLOCKNAME }__heading` }
								value={ videoheading }
							/>
						</header>
						<div className={ 'wp-block-button is-style-white' }>
							<button
								className={
									'wp-block-button__link js-video-popup-trigger'
								}
								data-video-src={ videosrc || '' }
							>
								Play Video
								<span className={`${ BLOCKNAME }__play-icon` }>
									<svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M25.3281 0C11.3976 0 0 11.3976 0 25.3281C0 39.2585 11.3976 50.6561 25.3281 50.6561C39.2585 50.6561 50.6561 39.2585 50.6561 25.3281C50.6561 11.3976 39.2585 0 25.3281 0ZM35.2486 27.4387L21.1067 35.0372C19.4182 35.8814 17.5186 34.8261 17.5186 32.9265V17.7296C17.5186 15.83 19.6293 14.5636 21.1067 15.619L35.2486 23.2174C37.1482 24.0617 37.1482 26.5945 35.2486 27.4387Z"/>
									</svg>
								</span>
							</button>
						</div>
					</div>
					<div className={ `${ BLOCKNAME }__overlay` }></div>
				</div>
			</div>
		</article>
	);
}
