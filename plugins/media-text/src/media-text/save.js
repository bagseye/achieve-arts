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
const BLOCKNAME = 'c-media-text';

export default function save( { attributes } ) {
	const {
		heading,
		tab,
		mediaId,
		mediaUrl,
		mediaAlt,
		topmargin,
		bottommargin,
		altlayout,
		includegradient,
		variant,
		images = [],
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: `${ BLOCKNAME } ${
			variant === 'media-text-media-carousel'
				? 'c-media-text__variant--carousel splide js-carousel__media-text'
				: ''
		} ${ altlayout ? `${ BLOCKNAME }__alt-layout` : '' } ${
			topmargin ? 'margin-block__top' : ''
		} ${ bottommargin ? 'margin-block__bottom' : '' }`,
	} );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__content-area`,
	} );

	return (
		<section { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						<div
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
						>
							<header className={ `${ BLOCKNAME }__header` }>
								<span className={ `h-tab` }>
									<RichText.Content
										tagName="p"
										className={ `${ BLOCKNAME }__tab` }
										value={ tab }
									/>
								</span>
								<RichText.Content
									tagName="h2"
									className={ `${ BLOCKNAME }__heading` }
									value={ heading }
								/>
							</header>
							<div { ...innerBlockProps } />
						</div>
						{ variant === 'media-text-media-carousel' ? (
							<>
								<div
									className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media` }
								>
									<div
										className={ `${ BLOCKNAME }__track splide__track` }
									>
										<div
											className={ `${ BLOCKNAME }__scroller splide__list` }
										>
											{ images.map( ( image, index ) => (
												<picture
													key={ index }
													className="splide__slide"
												>
													<img
														src={ image.url }
														loading="lazy"
														decoding="async"
														alt={ image.alt || '' }
													/>
												</picture>
											) ) }
										</div>
									</div>
									<div
										className={ `${ BLOCKNAME }__arrows splide__arrows c-arrows` }
									>
										<button className="splide__arrow splide__arrow--prev c-arrows__arrow c-arrows__arrow--prev">
											<svg
												viewBox="0 0 20 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M19.3857 6.74368C19.3753 6.55046 19.3035 6.39739 19.2082 6.30203L13.1919 0.199255C12.9152 -0.0679909 12.5013 -0.0567013 12.2467 0.174162C11.9921 0.405025 11.9804 0.837887 12.2206 1.08254L17.1609 6.10127L0.668467 6.10127C0.298972 6.10127 -3.1022e-07 6.38859 -2.94699e-07 6.74367C-2.79178e-07 7.09875 0.298982 7.38607 0.668467 7.38607L17.1609 7.38607L12.2206 12.4048C11.9804 12.6495 12.0012 13.0735 12.2467 13.3132C12.5013 13.5603 12.9517 13.5327 13.1919 13.2881L19.2082 7.18531C19.3674 7.02973 19.3753 6.89675 19.3857 6.74368Z" />
											</svg>
										</button>
										<button className="splide__arrow splide__arrow--next c-arrows__arrow c-arrows__arrow--next">
											<svg
												viewBox="0 0 20 14"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M19.3857 6.74368C19.3753 6.55046 19.3035 6.39739 19.2082 6.30203L13.1919 0.199255C12.9152 -0.0679909 12.5013 -0.0567013 12.2467 0.174162C11.9921 0.405025 11.9804 0.837887 12.2206 1.08254L17.1609 6.10127L0.668467 6.10127C0.298972 6.10127 -3.1022e-07 6.38859 -2.94699e-07 6.74367C-2.79178e-07 7.09875 0.298982 7.38607 0.668467 7.38607L17.1609 7.38607L12.2206 12.4048C11.9804 12.6495 12.0012 13.0735 12.2467 13.3132C12.5013 13.5603 12.9517 13.5327 13.1919 13.2881L19.2082 7.18531C19.3674 7.02973 19.3753 6.89675 19.3857 6.74368Z" />
											</svg>
										</button>
									</div>
								</div>
							</>
						) : mediaId && mediaUrl ? (
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media` }
							>
								<picture>
									<img
										className={ `wp-image-${ mediaId }` }
										src={ mediaUrl }
										alt={ mediaAlt }
									/>
								</picture>
							</div>
						) : null }
					</div>
				</div>
				{ includegradient && (
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				) }
			</div>
		</section>
	);
}
