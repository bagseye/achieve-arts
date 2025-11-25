/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-page-hero';

export default function save( { attributes } ) {
	const {
		heading,
		tab,
		mediaId,
		mediaUrl,
		mediaAlt,
		videoid,
		videosrc,
		topmargin,
		bottommargin,
		altlayout,
		includegradient,
		bgcolour,
		variant,
		mediatype,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		variant ? `${ BLOCKNAME }__variant--${ variant }` : '',
		altlayout ? `${ BLOCKNAME }__alt-layout` : '',
		`${ BLOCKNAME }__bgcolour--${ bgcolour }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__content-area`,
	} );
	return (
		<section { ...blockProps }>
			<div
				className={ `${ BLOCKNAME }__inner padding-block__top padding-block__bottom` }
			>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						<div
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
						>
							<header className={ `${ BLOCKNAME }__header` }>
								{ tab && (
									<span
										className={ `${ BLOCKNAME }__tab h-tab` }
									>
										<RichText.Content
											tagName="p"
											value={ tab }
										/>
									</span>
								) }
								<RichText.Content
									tagName="h2"
									className={ `${ BLOCKNAME }__heading` }
									value={ heading }
								/>
							</header>
							<div { ...innerBlockProps } />
						</div>
						{ variant === 'page-hero-default' && (
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media` }
							>
								<div
									className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media-bg` }
								>
									<svg
										viewBox="0 0 51 51"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M18.7289 0.275534L30.6162 10.2025C30.8726 10.4316 31.3194 10.5046 31.6381 10.4631L47.039 7.44395C48.0401 7.21976 48.8471 8.22093 48.4418 9.11755L42.3752 23.4651C42.2678 23.8354 42.2608 24.2488 42.4444 24.5062L49.9496 38.023C50.4552 38.8947 49.7138 40.0039 48.7474 39.886L33.0974 38.8124C32.751 38.7825 32.3146 38.9519 32.079 39.2076L21.2498 50.5567C20.5431 51.3238 19.3203 50.9768 19.1056 49.9922L15.5287 34.951C15.3901 34.594 15.2516 34.237 14.8775 34.1358L0.720962 27.6359C-0.183092 27.2475 -0.262654 25.964 0.627622 25.4542L14.0338 17.2946C14.3975 17.1534 14.5776 16.755 14.6123 16.4129L16.6192 1.09418C16.751 0.139461 17.9876 -0.340438 18.7289 0.275534Z" />
									</svg>
								</div>

								{ mediatype === 'image' &&
								mediaId &&
								mediaUrl ? (
									<picture>
										<img
											loading="eager"
											decoding="async"
											className={ `wp-image-${ mediaId }` }
											src={ mediaUrl }
											alt={ mediaAlt }
										/>
									</picture>
								) : null }

								{ mediatype === 'video' &&
								videoid &&
								videosrc ? (
									<video autoPlay muted loop>
										<source src={ videosrc } />
									</video>
								) : null }
							</div>
						) }
					</div>
				</div>
				{ variant === 'page-hero-default' && includegradient && (
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				) }
			</div>
		</section>
	);
}
