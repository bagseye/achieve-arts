/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
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

const BLOCKNAME = 'c-panel';

export default function save( { attributes } ) {
	const {
		topmargin,
		bottommargin,
		toppadding,
		bottompadding,
		tab,
		bgcolour,
		borderradiustop,
		borderradiusbottom,
		fullwidth,
	} = attributes;

	const classes = [
		BLOCKNAME,
		fullwidth && 'full-width',
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		`${ BLOCKNAME }__bgcolour--${ bgcolour }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( {
		className: `${ classes }`,
	} );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__items d-typography`,
	} );
	return (
		<>
			<section { ...blockProps }>
				<div
					className={ [
						`${ BLOCKNAME }__inner`,
						toppadding && 'padding-block__top',
						bottompadding && 'padding-block__bottom',
						borderradiustop && 'border-radius__top',
						borderradiusbottom && 'border-radius__bottom',
					]
						.filter( Boolean )
						.join( ' ' ) }
				>
					<div className={ `${ BLOCKNAME }__container` }>
						{tab && (
						<header className={ `${ BLOCKNAME }__content--header` }>
							<span className={ `${ BLOCKNAME }__tab h-tab` }>
								<RichText.Content tagName="p" value={ tab } />
							</span>
						</header>
						)}
						<div { ...innerBlockProps } />
					</div>
					<span className={ `${ BLOCKNAME }__star` }>
						<svg
							width="588"
							height="725"
							viewBox="0 0 588 725"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M743.964 403.655L610.437 253.413L629.733 53.2643C633.304 16.3831 595.908 -10.7202 561.971 4.15219L377.768 84.7808L193.43 4.64476C159.464 -10.1051 122.139 17.0596 125.749 53.9438L145.459 254.047L12.2324 404.656C-12.3189 432.391 1.99044 476.333 38.1898 484.229L234.553 527.283L336.583 700.495C355.378 732.404 401.566 732.362 420.283 700.398L521.948 526.915L718.248 483.369C754.398 475.355 768.623 431.394 744.034 403.706L743.964 403.655Z"
								fill="white"
								fill-opacity="0.18"
							/>
						</svg>
					</span>
				</div>
			</section>
		</>
	);
}
