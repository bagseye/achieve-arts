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

const ALLOWED_MEDIA_TYPES = [ 'image' ];
const BLOCKNAME = 'c-avatar';

export default function Edit( { attributes, setAttributes } ) {
	const { name, role, mediaId, mediaUrl, mediaAlt } = attributes;

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
				<PanelBody title={ __( 'Media', 'avatar' ) }>
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
											alt={ mediaAlt }
										/>
									</picture>
								</div>
							) : null }
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
							>
								<header className={ `${ BLOCKNAME }__header` }>
									<span className={ `${ BLOCKNAME }__name` }>
										<RichText
											tagName="p"
											value={ name }
											allowedFormats={ [
												'core/bold',
												'core/italic',
											] }
											onChange={ ( val ) =>
												setAttributes( { name: val } )
											}
											placeholder={ __( 'Name...' ) }
										/>
									</span>
									<RichText
										tagName="p"
										className={ `${ BLOCKNAME }__role` }
										value={ role }
										allowedFormats={ [
											'core/bold',
											'core/italic',
											'core/text-color',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												role: val,
											} )
										}
										placeholder={ __( 'Role...' ) }
									/>
								</header>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
