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
import { TextControl } from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	URLInputButton,
} from '@wordpress/block-editor';

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
const BLOCKNAME = 'c-venues-item';
export default function Edit( { attributes, setAttributes } ) {
	const { name, details, pageurl, ctabuttontext } = attributes;
	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<header className={ `${ BLOCKNAME }__header` }>
							<RichText
								tagName="h3"
								className={ `${ BLOCKNAME }__heading` }
								value={ name }
								allowedFormats={ [
									'core/bold',
									'core/italic',
								] }
								onChange={ ( val ) =>
									setAttributes( {
										name: val,
									} )
								}
								placeholder={ __( 'Name...' ) }
							/>
							<RichText
								tagName="p"
								className={ `${ BLOCKNAME }__details` }
								value={ details }
								allowedFormats={ [
									'core/bold',
									'core/italic',
								] }
								onChange={ ( val ) =>
									setAttributes( {
										details: val,
									} )
								}
								placeholder={ __( 'Details...' ) }
							/>
						</header>
						<div className={ `${ BLOCKNAME }__cta` }>
							<URLInputButton
								url={ pageurl }
								onChange={ ( url ) =>
									setAttributes( { pageurl: url } )
								}
							/>
							{ pageurl && (
								<>
									<TextControl
										__nextHasNoMarginBottom
										__next40pxDefaultSize
										label={ __(
											'CTA Button Text',
											'venues-item'
										) }
										value={ ctabuttontext }
										onChange={ ( value ) =>
											setAttributes( {
												ctabuttontext: value,
											} )
										}
									/>
									<div
										className={ `wp-block-button is-style-deep-purple` }
									>
										<span
											className={ `wp-block-button__link` }
										>
											{ ctabuttontext || 'View Classes' }
										</span>
									</div>
								</>
							) }
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
