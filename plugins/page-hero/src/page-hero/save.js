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
		topmargin,
		bottommargin,
		altlayout,
		includegradient,
		bgcolour,
		variant,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		variant === 'page-hero-default' && altlayout
			? `${ BLOCKNAME }__alt-layout`
			: '',
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
						{ variant === 'page-hero-default' &&
						mediaId &&
						mediaUrl ? (
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media` }
							>
								<picture>
									<img
										loading="eager"
										decoding="async"
										className={ `wp-image-${ mediaId }` }
										src={ mediaUrl }
										alt={ mediaAlt }
									/>
								</picture>
							</div>
						) : null }
					</div>
				</div>
				{ variant === 'page-hero-default' && includegradient && (
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				) }
			</div>
		</section>
	);
}
