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

const BLOCKNAME = 'c-testimonials-item';
export default function save( { attributes } ) {
	const { name, role, mediaid, mediasrc, mediaalt, variant } = attributes;
	const classes = [ BLOCKNAME, 'splide__slide', variant ? `${BLOCKNAME}__variant--${ variant }` : '' ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__content-area`,
	} );
	return (
		<article { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						{ mediaid && mediasrc && (
							<div className={ `${ BLOCKNAME }__media` }>
								<picture>
									<img
										loading="lazy"
										decoding="async"
										src={ mediasrc }
										alt={ mediaalt || '' }
										className={ `wp-image-${ mediaid }` }
									/>
								</picture>
							</div>
						) }
						<div { ...innerBlockProps } />
						{ name && (
							<div className={ `${ BLOCKNAME }__name` }>
								<RichText.Content tagName="p" value={ name } />
							</div>
						) }
						{ role && (
							<div className={ `${ BLOCKNAME }__role` }>
								<RichText.Content tagName="p" value={ role } />
							</div>
						) }
						<div className={ `${ BLOCKNAME }__link` }></div>
					</div>
				</div>
			</div>
		</article>
	);
}
