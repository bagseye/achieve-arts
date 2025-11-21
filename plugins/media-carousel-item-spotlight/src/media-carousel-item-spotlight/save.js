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
const BLOCKNAME = 'c-media-carousel-item-spotlight';

export default function save( { attributes } ) {
	const {
		heading,
		tab,
		imageid,
		imagesrc,
		imagealt,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( {
		className: `${ classes } splide__slide`,
	} );

	return (
		<article { ...blockProps }>
			{ imagesrc && imageid && (
				<div className={ `${ BLOCKNAME }__media` }>
					<picture>
						<img
							loading="lazy"
							decode="async"
							src={ imagesrc }
							alt={ imagealt || '' }
						/>
					</picture>
				</div>
			) }
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__content` }>
							<header className={ `${ BLOCKNAME }__header` }>
								<span className={ `${ BLOCKNAME }__tab h-tab` }>
									<RichText.Content
										tagName="p"
										value={ tab }
									/>
								</span>
								<RichText.Content
									tagName="h3"
									className={ `${ BLOCKNAME }__heading` }
									value={ heading }
								/>
							</header>
							<div className={ 'wp-block-button is-style-white' }>
								<button className={ 'wp-block-button__link' }>
									Play Video
								</button>
							</div>
						</div>
						<div className={ `${ BLOCKNAME }__overlay` }></div>
					</div>
				</div>
		</article>
	);
}
