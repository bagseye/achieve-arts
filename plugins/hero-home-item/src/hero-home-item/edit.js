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
import { Button, PanelBody } from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
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
const BLOCKNAME = 'c-hero-home-item';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default function Edit( { attributes, setAttributes } ) {
	const { name, mediaId, mediaUrl, mediaAlt, url } = attributes;
	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	function handleRemoveMedia() {
		setAttributes( {
			mediaId: 0,
			mediaUrl: '',
			mediaAlt: '',
		} );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Media', 'hero-home-item' ) }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									mediaId: media.id,
									mediaUrl:
										media?.sizes?.cta?.source_url ??
										media.url,
									mediaAlt: media.alt,
								} );
							} }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ mediaId }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ mediaId && mediaUrl ? 'Edit ' : 'Add ' }
									Media
								</Button>
							) }
						/>
						{ mediaId ? (
							<Button
								onClick={ handleRemoveMedia }
								variant="secondary"
							>
								Remove Image
							</Button>
						) : null }
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<article { ...blockProps }>
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
							<span
								className={ `${ BLOCKNAME }__overlay` }
							></span>
						</div>
						<header className={ `${ BLOCKNAME }__header` }>
							<URLInputButton
								url={ url }
								onChange={ ( url ) => setAttributes( { url } ) }
							/>
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
						</header>
					</div>
				</div>
			</article>
		</>
	);
}
