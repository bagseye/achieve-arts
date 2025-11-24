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
import { PanelBody, Button, SelectControl } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
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

export default function DefaultLayout( {
	attributes,
	setAttributes,
	context,
} ) {
	const {
		defaultmediaselect,
		defaultimageid,
		defaultimagesrc,
		defaultimagealt,
		defaultvideoid,
		defaultvideosrc,
		defaultposterid,
		defaultpostersrc,
		defaultposteralt,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __( 'Image or Video?', 'media-carousel-item' ) }
						value={ defaultmediaselect }
						options={ [
							{
								label: __( 'Image', 'media-carousel-item' ),
								value: 'image',
							},
							{
								label: __( 'Video', 'media-carousel-item' ),
								value: 'video',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { defaultmediaselect: val } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				{ defaultmediaselect === 'image' && (
					<PanelBody
						title={ __( 'Image Selection', 'media-carousel-item' ) }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										defaultimageid: media?.id,
										defaultimagesrc: media?.url,
										defaultimagealt: media?.alt,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								value={ defaultimageid }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										variant="primary"
										style={ { marginRight: '6px' } }
									>
										{ defaultimageid && defaultimagesrc
											? 'Edit '
											: 'Add ' }
										Media
									</Button>
								) }
							/>
							{ defaultimageid ? (
								<Button
									onClick={ () => {
										setAttributes( {
											defaultimageid: null,
											defaultimagesrc: '',
											defaultimagealt: '',
										} );
									} }
									variant="secondary"
								>
									Remove Image
								</Button>
							) : null }
						</MediaUploadCheck>
					</PanelBody>
				) }
				{ defaultmediaselect === 'video' && (
					<>
						<PanelBody
							title={ __(
								'Video Selection',
								'media-carousel-item'
							) }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											defaultvideoid: media?.id,
											defaultvideosrc: media?.url,
										} );
									} }
									allowedTypes={ [ 'video' ] }
									value={ defaultvideoid }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="primary"
											style={ { marginRight: '6px' } }
										>
											{ defaultvideoid && defaultvideosrc
												? 'Edit '
												: 'Add ' }
											Media
										</Button>
									) }
								/>
								{ defaultvideoid ? (
									<Button
										onClick={ () => {
											setAttributes( {
												defaultvideoid: null,
												defaultvideosrc: '',
											} );
										} }
										variant="secondary"
									>
										Remove Video
									</Button>
								) : null }
							</MediaUploadCheck>
						</PanelBody>
						<PanelBody
							title={ __(
								'Poster Image',
								'media-carousel-item'
							) }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											defaultposterid: media?.id,
											defaultpostersrc:
												media?.sizes?.medium
													?.source_url ?? media.url,
											defaultposteralt: media?.alt,
										} );
									} }
									allowedTypes={ [ 'image' ] }
									value={ defaultposterid }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="primary"
											style={ { marginRight: '6px' } }
										>
											{ defaultposterid
												? 'Edit '
												: 'Add ' }
											Poster
										</Button>
									) }
								/>

								{ defaultposterid ? (
									<Button
										onClick={ () => {
											setAttributes( {
												defaultposterid: null,
												defaultpostersrc: '',
												defaultposteralt: '',
											} );
										} }
										variant="secondary"
									>
										Remove Poster
									</Button>
								) : null }
							</MediaUploadCheck>
							{ defaultposterid && defaultpostersrc && (
								<div
									className={ `${ BLOCKNAME }__poster-preview` }
									style={ { marginTop: '10px' } }
								>
									<img src={ defaultpostersrc } />
								</div>
							) }
						</PanelBody>
					</>
				) }
			</InspectorControls>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__media` }>
					{ defaultmediaselect === 'image' &&
						defaultimageid &&
						defaultimagesrc && (
							<picture>
								<img src={ defaultimagesrc } />
							</picture>
						) }
					{ defaultmediaselect === 'video' &&
						defaultvideoid &&
						defaultvideosrc && (
							<video>
								<source src={ defaultvideosrc } />
							</video>
						) }
				</div>
			</article>
		</>
	);
}
