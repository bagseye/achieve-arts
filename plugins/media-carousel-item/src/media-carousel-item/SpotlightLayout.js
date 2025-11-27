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
const BLOCKNAME = 'c-media-carousel-item-spotlight';
const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default function SpotlightLayout( {
	attributes,
	setAttributes,
	context,
} ) {
	const {
		spotlighttab,
		spotlightimageid,
		spotlightimagesrc,
		spotlightimagealt,
		spotlighttopleftmediaId,
		spotlighttopleftmediaUrl,
		spotlighttopleftmediaAlt,
		spotlightbottomrightmediaId,
		spotlightbottomrightmediaUrl,
		spotlightbottomrightmediaAlt,
		variant,
		clientHeading,
		clientName,
		projectHeading,
		projectName,
		projectTypeHeading,
		projectTypeName,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __(
						'Image Selection',
						'media-carousel-item-spotlight'
					) }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									spotlightimageid: media?.id,
									spotlightimagesrc: media?.url,
									spotlightimagealt: media?.alt,
								} );
							} }
							allowedTypes={ [ 'image' ] }
							value={ spotlightimageid }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ spotlightimageid && spotlightimagesrc
										? 'Edit '
										: 'Add ' }
									Media
								</Button>
							) }
						/>
						{ spotlightimageid ? (
							<Button
								onClick={ () => {
									setAttributes( {
										spotlightimageid: null,
										spotlightimagesrc: '',
										spotlightimagealt: '',
									} );
								} }
								variant="secondary"
							>
								Remove Image
							</Button>
						) : null }
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody
					title={ __( 'Top Right Image Selection', 'page-hero' ) }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									spotlighttopleftmediaId: media.id,
									spotlighttopleftmediaUrl:
										media?.sizes?.pageherocorner?.url ??
										media.url,
									spotlighttopleftmediaAlt: media.alt,
								} );
							} }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ spotlighttopleftmediaId }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ spotlighttopleftmediaId &&
									spotlighttopleftmediaUrl
										? 'Edit '
										: 'Add ' }
									Media
								</Button>
							) }
						/>
						{ spotlighttopleftmediaId ? (
							<Button
								onClick={ () => {
									setAttributes( {
										spotlighttopleftmediaId: 0,
										spotlighttopleftmediaUrl: '',
										spotlighttopleftmediaAlt: '',
									} );
								} }
								variant="secondary"
							>
								Remove Image
							</Button>
						) : null }
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody
					title={ __( 'Bottom Left Image Selection', 'page-hero' ) }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									spotlightbottomrightmediaId: media.id,
									spotlightbottomrightmediaUrl:
										media?.sizes?.pageherocorner?.url ??
										media.url,
									spotlightbottomrightmediaAlt: media.alt,
								} );
							} }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ spotlightbottomrightmediaId }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ spotlightbottomrightmediaId &&
									spotlightbottomrightmediaUrl
										? 'Edit '
										: 'Add ' }
									Media
								</Button>
							) }
						/>
						{ spotlightbottomrightmediaId ? (
							<Button
								onClick={ () => {
									setAttributes( {
										spotlightbottomrightmediaId: 0,
										spotlightbottomrightmediaUrl: '',
										spotlightbottomrightmediaAlt: '',
									} );
								} }
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
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__content` }
							>
								<span className={ `${ BLOCKNAME }__tab h-tab` }>
									<RichText
										tagName="p"
										value={ spotlighttab }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												spotlighttab: val,
											} )
										}
										placeholder={ __(
											'Tab...',
											'media-carousel-item-spotlight'
										) }
									/>
								</span>
								<header className={ `${ BLOCKNAME }__header` }>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ clientHeading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												clientHeading: val,
											} )
										}
										placeholder={ __(
											'Client Heading...',
											'media-carousel-item-spotlight'
										) }
									/>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ clientName }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												clientName: val,
											} )
										}
										placeholder={ __(
											'Client Name...',
											'media-carousel-item-spotlight'
										) }
									/>
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ projectHeading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												projectHeading: val,
											} )
										}
										placeholder={ __(
											'Project Heading...',
											'media-carousel-item-spotlight'
										) }
									/>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ projectName }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												projectName: val,
											} )
										}
										placeholder={ __(
											'Project...',
											'media-carousel-item-spotlight'
										) }
									/>
								</header>

								<header className={ `${ BLOCKNAME }__header` }>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__heading` }
										value={ projectTypeHeading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												projectTypeHeading: val,
											} )
										}
										placeholder={ __(
											'Project Type Heading...',
											'media-carousel-item-spotlight'
										) }
									/>
									<RichText
										tagName="h3"
										className={ `${ BLOCKNAME }__subheading` }
										value={ projectTypeName }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												projectTypeName: val,
											} )
										}
										placeholder={ __(
											'Project Type...',
											'media-carousel-item-spotlight'
										) }
									/>
								</header>
							</div>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media` }
							>
								{ spotlighttopleftmediaId &&
									spotlighttopleftmediaUrl && (
										<div
											className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media--top-left` }
										>
											<picture>
												<img
													className={ `wp-image-${ spotlighttopleftmediaId }` }
													src={
														spotlighttopleftmediaUrl
													}
													alt={
														spotlighttopleftmediaAlt
													}
												/>
											</picture>
										</div>
									) }
								{ spotlightbottomrightmediaId &&
									spotlightbottomrightmediaUrl && (
										<div
											className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media--bottom-right` }
										>
											<picture>
												<img
													className={ `wp-image-${ spotlightbottomrightmediaId }` }
													src={
														spotlightbottomrightmediaUrl
													}
													alt={
														spotlightbottomrightmediaAlt
													}
												/>
											</picture>
										</div>
									) }
								{ spotlightimageid && spotlightimagesrc && (
									<picture>
										<img src={ spotlightimagesrc } />
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
