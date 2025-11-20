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
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

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

export default function Edit( { attributes, setAttributes, context } ) {
	const {
		heading,
		tab,
		imageid,
		imagesrc,
		imagealt,
		videoid,
		videosrc,
		posterid,
		postersrc,
		posteralt,
		variant,
		mediaselect,
	} = attributes;

	const classes = [
		BLOCKNAME,
		variant ? `c-media-carousel-item__variant--${ variant }` : '',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	useEffect( () => {
		if ( context?.[ 'bwp/media-carousel-variant' ] ) {
			setAttributes( {
				variant: context[ 'bwp/media-carousel-variant' ],
			} );
		}
	}, [ context, setAttributes ] );

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __( 'Image or Video?', 'media-carousel-item' ) }
						value={ mediaselect }
						options={ [
							{ label: 'Image', value: 'image' },
							{ label: 'Video', value: 'video' },
						] }
						onChange={ ( val ) =>
							setAttributes( { mediaselect: val } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				{ mediaselect === 'image' && (
					<PanelBody
						title={ __( 'Image Selection', 'media-carousel-item' ) }
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
				{ mediaselect === 'video' && (
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
								'media-carousel-item'
							) }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => {
										console.log( media );
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
											{ posterid && posteralt
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
					{ mediaselect === 'image' && imageid && imagesrc && (
						<picture>
							<img src={ imagesrc } />
						</picture>
					) }
					{ mediaselect === 'video' && videoid && videosrc && (
						<video>
							<source src={ videosrc } />
						</video>
					) }
				</div>
				{ variant === 'media-carousel-video-preview' && (
					<div className={ `${ BLOCKNAME }__inner` }>
						<div className={ `${ BLOCKNAME }__container` }>
							<div className={ `${ BLOCKNAME }__content` }>
								<header className={ `${ BLOCKNAME }__header` }>
									<span
										className={ `${ BLOCKNAME }__tab h-tab` }
									>
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
				) }
			</article>
		</>
	);
}
