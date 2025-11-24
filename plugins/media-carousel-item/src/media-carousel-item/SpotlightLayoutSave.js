/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-media-carousel-item-spotlight';

export default function SpotlightLayoutSave( { attributes } ) {
	const {
		spotlighttab,
		clientHeading,
		clientName,
		projectHeading,
		projectName,
		projectTypeHeading,
		projectTypeName,
		spotlightimageid,
		spotlightimagesrc,
		spotlightimagealt,
	} = attributes;

	const classes = [ BLOCKNAME, 'splide__slide' ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	return (
		<>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__content` }
							>
								{ spotlighttab && (
									<span
										className={ `${ BLOCKNAME }__tab h-tab` }
									>
										<RichText.Content
											tagName="p"
											value={ spotlighttab }
										/>
									</span>
								) }
								<header className={ `${ BLOCKNAME }__header` }>
									{ clientHeading && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__heading` }
											value={ clientHeading }
										/>
									) }
									{ clientName && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__subheading` }
											value={ clientName }
										/>
									) }
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									{ projectHeading && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__heading` }
											value={ projectHeading }
										/>
									) }
									{ projectName && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__subheading` }
											value={ projectName }
										/>
									) }
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									{ projectTypeHeading && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__heading` }
											value={ projectTypeHeading }
										/>
									) }
									{ projectTypeName && (
										<RichText.Content
											tagName="h3"
											className={ `${ BLOCKNAME }__subheading` }
											value={ projectTypeName }
										/>
									) }
								</header>
							</div>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media` }
							>
								{ spotlightimageid && spotlightimagesrc && (
									<picture>
										<img
											loading="lazy"
											decoding="async"
											src={ spotlightimagesrc }
											alt={ spotlightimagealt }
										/>
									</picture>
								) }
							</div>
						</div>
					</div>
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				</div>
			</article>
		</>
	);
}
