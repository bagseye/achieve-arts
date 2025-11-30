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
	const { name, role, mediaId, mediaUrl, mediaAlt, variant, cardurl } =
		attributes;

	const classes = [
		BLOCKNAME,
		variant === 'clients' && 'c-team-members-item__variant--clients',
		'splide__slide',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	function renderCard() {
		return (
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
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
						{ variant !== 'clients' && (
							<span
								className={ `${ BLOCKNAME }__overlay` }
							></span>
						) }
					</div>
					<header className={ `${ BLOCKNAME }__header` }>
						<RichText.Content
							tagName="h3"
							className={ `${ BLOCKNAME }__heading` }
							value={ name }
						/>
						{ variant !== 'clients' && (
							<RichText.Content
								tagName="p"
								className={ `${ BLOCKNAME }__role` }
								value={ role }
							/>
						) }
					</header>
				</div>
			</div>
		);
	}
	return (
		<>
			<article { ...blockProps }>
				{ cardurl ? (
					<a href={ cardurl } ariaLabel={ `View profile: ${ name }` }>
						{ renderCard() }
					</a>
				) : (
					renderCard()
				) }
			</article>
		</>
	);
}
