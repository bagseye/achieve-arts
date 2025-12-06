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

const BLOCKNAME = 'c-venues';

export default function save( { attributes } ) {
	const {
		topmargin,
		bottommargin,
		toppadding,
		bottompadding,
		heading,
		subheading,
		pageurl,
		ctabuttontext,
	} = attributes;

	const classes = [
		BLOCKNAME,
		'full-width',
		'no-padding__left',
		'no-padding__right',
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( {
		className: `${ classes }`,
	} );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__items`,
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
				<header className={ `${ BLOCKNAME }__content--header` }>
					<RichText.Content
						tagName="h2"
						className={ `${ BLOCKNAME }__heading js-anim h-animate-in-slide-up` }
						value={ heading }
					/>
					<RichText.Content
						tagName="p"
						className={ `${ BLOCKNAME }__subheading js-anim h-animate-in-slide-up` }
						value={ subheading }
					/>
				</header>
				{ pageurl && (
					<div className={ `${ BLOCKNAME }__cta js-anim h-animate-in-slide-up` }>
						<div
							className={ `wp-block-button is-style-deep-purple` }
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
