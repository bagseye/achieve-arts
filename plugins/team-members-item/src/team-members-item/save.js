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
const BLOCKNAME = 'c-team-members-item';
export default function save( { attributes } ) {
	const { name, role, mediaId, mediaUrl, mediaAlt } = attributes;

	const blockProps = useBlockProps.save( {
		className: `${ BLOCKNAME } splide__slide`,
	} );
	return (
		<>
			<article { ...blockProps }>
				<a>
					<div className={ `${ BLOCKNAME }__inner` }>
						<div className={ `${ BLOCKNAME }__container` }>
							<header className={ `${ BLOCKNAME }__header` }>
								<RichText.Content
									tagName="h3"
									className={ `${ BLOCKNAME }__heading` }
									value={ name }
								/>
								<RichText.Content
									tagName="p"
									className={ `${ BLOCKNAME }__role` }
									value={ role }
								/>
							</header>
						</div>
						<div className={ `${ BLOCKNAME }__media` }>
							{ mediaId && mediaUrl ? (
								<picture>
									<img
										className={ `wp-image-${ mediaId }` }
										src={ mediaUrl }
										alt={ mediaAlt }
									/>
								</picture>
							) : null }
							<span
								className={ `${ BLOCKNAME }__overlay` }
							></span>
						</div>
					</div>
				</a>
			</article>
		</>
	);
}
