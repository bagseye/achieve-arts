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
const BLOCKNAME = 'c-venue-details-card';

export default function save( { attributes } ) {
	const {
		heading,
		intro,
		tab,
		topmargin,
		bottommargin,
		bgcolour,
		whenDetail,
		whereDetail,
		pricingDetail,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
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
			<div className={ `${ BLOCKNAME }__inner` }>
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
								{ heading && (
									<RichText.Content
										tagName="h2"
										className={ `${ BLOCKNAME }__heading` }
										value={ heading }
									/>
								) }
								{ intro && (
									<RichText.Content
										tagName="p"
										className={ `${ BLOCKNAME }__intro` }
										value={ intro }
									/>
								) }
							</header>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--details` }
							>
								{ whenDetail && (
									<div className={ `${ BLOCKNAME }__detail` }>
										<p>When:</p>
										<RichText.Content
											tagName="p"
											className={ `${ BLOCKNAME }__detail--content` }
											value={ whenDetail }
										/>
									</div>
								) }
								{ whereDetail && (
									<div className={ `${ BLOCKNAME }__detail` }>
										<p>Where:</p>
										<RichText.Content
											tagName="p"
											className={ `${ BLOCKNAME }__detail--content` }
											value={ whereDetail }
										/>
									</div>
								) }
								{ pricingDetail && (
									<div className={ `${ BLOCKNAME }__detail` }>
										<p>Pricing:</p>
										<RichText.Content
											tagName="p"
											className={ `${ BLOCKNAME }__detail--content` }
											value={ pricingDetail }
										/>
									</div>
								) }
							</div>
							<div { ...innerBlockProps } />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
