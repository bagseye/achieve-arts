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
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-media-carousel-item-spotlight';

export default function save( { attributes } ) {
	const {
		tab,
		imageid,
		imagesrc,
		imagealt,
		variant,
		clientHeading,
		clientName,
		projectHeading,
		projectName,
		projectTypeHeading,
		projectTypeName,
	} = attributes;

	const classes = [
		BLOCKNAME,
		variant ? `c-media-carousel-item-spotlight__variant--${ variant }` : '',
	]
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
								<span className={ `${ BLOCKNAME }__tab h-tab` }>
									<RichText.Content
										tagName="p"
										value={ tab }
									/>
								</span>
								<header className={ `${ BLOCKNAME }__header` }>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ clientHeading }
									/>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ clientName }
									/>
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ projectHeading }
									/>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ projectName }
									/>
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ projectTypeHeading }
									/>
									<RichText.Content
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ projectTypeName }
									/>
								</header>
							</div>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media` }
							>
								{ imageid && imagesrc && (
									<picture>
										<img src={ imagesrc } />
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
