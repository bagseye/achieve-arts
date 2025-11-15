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
import { PanelBody, Button } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
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
const BLOCKNAME = 'c-media-carousel-item';
const ALLOWED_MEDIA_TYPES = [ 'video' ];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, tab, videoid, videosrc } = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Media', 'media-carousel-item' ) }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									videoid: media?.id,
									videosrc: media?.url,
								} );
							} }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ videoid }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ videoid && videosrc ? 'Edit ' : 'Add ' }
									Media
								</Button>
							) }
						/>
						{ videoid ? (
							<Button
								onClick={ () => {
									setAttributes( {
										videoid: null,
										videosrc: '',
									} );
								} }
								variant="secondary"
							>
								Remove Video
							</Button>
						) : null }
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__media` }>
					{ videoid && videosrc && (
						<video>
							<source src={ videosrc } />
						</video>
					) }
				</div>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__content` }>
							<header className={ `${ BLOCKNAME }__header` }>
								<span className={ `${ BLOCKNAME }__tab h-tab` }>
									<RichText
										tagName="p"
										value={ tab }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												tab: val,
											} )
										}
										placeholder={ __( 'Tab...' ) }
									/>
								</span>
								<RichText
									tagName="h3"
									className={ `${ BLOCKNAME }__heading` }
									value={ heading }
									allowedFormats={ [
										'core/bold',
										'core/italic',
									] }
									onChange={ ( val ) =>
										setAttributes( {
											heading: val,
										} )
									}
									placeholder={ __( 'Heading...' ) }
								/>
							</header>
						</div>
						<div className={ `${ BLOCKNAME }__overlay` }></div>
					</div>
				</div>
			</article>
		</>
	);
}
