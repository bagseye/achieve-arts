/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

const BLOCKNAME = 'c-avatar';

export default function save( { attributes } ) {
	const { name, role, mediaId, mediaUrl, mediaAlt } = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	return (
		<section { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						{ mediaId && mediaUrl ? (
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--media` }
							>
								<picture>
									<img
										className={ `wp-image-${ mediaId }` }
										src={ mediaUrl }
										loading="lazy"
										decoding="async"
										alt={ mediaAlt || '' }
									/>
								</picture>
							</div>
						) : null }
						<div
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
						>
							<header className={ `${ BLOCKNAME }__header` }>
								<span className={ ` ${ BLOCKNAME }__name` }>
									<RichText.Content
										tagName="p"
										value={ name }
									/>
								</span>
								<RichText.Content
									tagName="p"
									className={ `${ BLOCKNAME }__role` }
									value={ role }
								/>
							</header>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
