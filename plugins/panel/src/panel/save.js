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
	} = attributes;

	const classes = [
		BLOCKNAME,
		'no-padding__left',
		'no-padding__right',
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
		<section { ...blockProps }>
			<div
				className={ [
					`${ BLOCKNAME }__content`,
					toppadding && 'padding-block__top',
				]
					.filter( Boolean )
					.join( ' ' ) }
			>
				{ tab && (
					<header className={ `${ BLOCKNAME }__content--header` }>
						<span className={ `${ BLOCKNAME }__tab h-tab` }>
							<RichText.Content tagName="p" value={ tab } />
						</span>
					</header>
				) }
			</div>
			<div
				className={ [
					`${ BLOCKNAME }__inner`,
					bottompadding && 'padding-block__bottom',
				]
					.filter( Boolean )
					.join( ' ' ) }
			>
				<div className={ `${ BLOCKNAME }__container` }>
					<div { ...innerBlockProps } />
				</div>
			</div>
		</section>
	);
}
