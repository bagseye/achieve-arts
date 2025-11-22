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
		bgcolour,
		whenDetail,
		whereDetail,
		pricingDetail,
		pageurl,
		ctabuttontext,
	} = attributes;

	const classes = [ BLOCKNAME, `${ BLOCKNAME }__bgcolour--${ bgcolour }` ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__content-area`,
	} );

	const starIcon = (
		<div className={ `${ BLOCKNAME }__star` }>
			<svg
				width="18"
				height="17"
				viewBox="0 0 18 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z"
					fill="url(#paint0_linear_209_4863)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_209_4863"
						x1="18.8482"
						y1="8.10577"
						x2="-1.53502"
						y2="8.45883"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#927049" />
						<stop offset="0.2" stop-color="#D2BC74" />
						<stop offset="0.5" stop-color="#F9E7B7" />
						<stop offset="0.8" stop-color="#AE8D4D" />
						<stop offset="1" stop-color="#927049" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
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
										{ starIcon }
										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>When:</p>
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ whenDetail }
											/>
										</div>
									</div>
								) }
								{ whereDetail && (
									<div className={ `${ BLOCKNAME }__detail` }>
										{ starIcon }

										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>Where:</p>
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ whereDetail }
											/>
										</div>
									</div>
								) }
								{ pricingDetail && (
									<div className={ `${ BLOCKNAME }__detail` }>
										{ starIcon }
										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>Pricing:</p>
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ pricingDetail }
											/>
										</div>
									</div>
								) }
							</div>
							<div { ...innerBlockProps } />
						</div>
						{ pageurl && (
							<div className={ `${ BLOCKNAME }__cta` }>
								<div
									className={ `wp-block-button is-style-${
										bgcolour === 'purple' ? 'dark' : 'purple'
									}` }
								>
									<a
										href={ pageurl }
										className={ `wp-block-button__link` }
										title={ ctabuttontext }
									>
										{ ctabuttontext }
									</a>
								</div>
							</div>
						) }
					</div>
				</div>
			</div>
		</section>
	);
}
