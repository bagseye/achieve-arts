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

const BLOCKNAME = 'c-media-block-item';

export default function Edit({
	attributes,
	setAttributes,
}) {
		const {
			variant,
			imageid,
			imagesrc,
			imagealt,
			videoid,
			videosrc,
			posterid,
			postersrc,
			posteralt,
		} = attributes;
	
		const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );
	
		const blockProps = useBlockProps( { className: classes } );
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __( 'Image or Video?', 'media-block-item' ) }
						value={ variant }
						options={ [
							{
								label: __( 'Image', 'media-block-item' ),
								value: 'image',
							},
							{
								label: __( 'Video', 'media-block-item' ),
								value: 'video',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { variant: val } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				{ variant === 'image' && (
					<PanelBody
						title={ __( 'Image Selection', 'media-block-item' ) }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										imageid: media?.id,
										imagesrc: media?.url,
										imagealt: media?.alt,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								value={ imageid }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										variant="primary"
										style={ { marginRight: '6px' } }
									>
										{ imageid && imagesrc
											? 'Edit '
											: 'Add ' }
										Media
									</Button>
								) }
							/>
							{ imageid ? (
								<Button
									onClick={ () => {
										setAttributes( {
											imageid: null,
											imagesrc: '',
											imagealt: '',
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
				{ variant === 'video' && (
					<>
						<PanelBody
							title={ __(
								'Video Selection',
								'media-block-item'
							) }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											videoid: media?.id,
											videosrc: media?.url,
										} );
									} }
									allowedTypes={ [ 'video' ] }
									value={ videoid }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="primary"
											style={ { marginRight: '6px' } }
										>
											{ videoid && videosrc
												? 'Edit '
												: 'Add ' }
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
						<PanelBody
							title={ __(
								'Poster Image',
								'media-block-item'
							) }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											posterid: media?.id,
											postersrc:
												media?.sizes?.medium
													?.source_url ?? media.url,
											posteralt: media?.alt,
										} );
									} }
									allowedTypes={ [ 'image' ] }
									value={ posterid }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="primary"
											style={ { marginRight: '6px' } }
										>
											{ posterid
												? 'Edit '
												: 'Add ' }
											Poster
										</Button>
									) }
								/>

								{ posterid ? (
									<Button
										onClick={ () => {
											setAttributes( {
												posterid: null,
												postersrc: '',
												posteralt: '',
											} );
										} }
										variant="secondary"
									>
										Remove Poster
									</Button>
								) : null }
							</MediaUploadCheck>
							{ posterid && postersrc && (
								<div
									className={ `${ BLOCKNAME }__poster-preview` }
									style={ { marginTop: '10px' } }
								>
									<img src={ postersrc } />
								</div>
							) }
						</PanelBody>
					</>
				) }
			</InspectorControls>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__media` }>
					{ variant === 'image' &&
						imageid &&
						imagesrc && (
							<picture>
								<img src={ imagesrc } />
							</picture>
						) }
					{ variant === 'video' &&
						videoid &&
						videosrc && (
							<video>
								<source src={ videosrc } />
							</video>
						) }
				</div>
			</article>
		</>
	);
}
