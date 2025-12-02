/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-faqs-item';

export default function save( { attributes } ) {
	const { heading } = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__item ${ BLOCKNAME }__content-area d-typography`,
	} );
	return (
		<article { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						<header
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__header` }
						>
							<RichText.Content
								tagName="h3"
								className={ `${ BLOCKNAME }__heading` }
								value={ heading }
							/>
						</header>
						<div { ...innerBlockProps } />
					</div>
				</div>
			</div>
		</article>
	);
}
