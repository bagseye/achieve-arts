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
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	useInnerBlocksProps,
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
const BLOCKNAME = 'c-media-text';

export default function Edit( { attributes, setAttributes } ) {
	const {
		heading,
		tab,
		mediaId,
		mediaUrl,
		mediaAlt,
		topmargin,
		bottommargin,
		altlayout,
		includegradient,
		variant,
		images = [],
	} = attributes;

	const blockProps = useBlockProps( {
		className: `${ BLOCKNAME } ${
			altlayout ? `${ BLOCKNAME }__alt-layout` : ''
		} ${ topmargin ? 'margin-block__top' : '' } ${
			bottommargin ? 'margin-block__bottom' : ''
		}`,
	} );
	const innerBlockProps = useInnerBlocksProps(
		{ className: `${ BLOCKNAME }__content-area` },
		{
			allowedBlocks: [
				'core/paragraph',
				'core/heading',
				'core/list',
				'core/buttons',
			],
		}
	);

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
				{ variant === 'media-text-media-carousel' ? (
					<PanelBody
						title={ __( 'Partner Gallery Images', 'aquila-core' ) }
						initialOpen={ true }
					>
						<MediaUploadCheck>
							<MediaUpload
								multiple
								gallery
								addToGallery={ true }
								onSelect={ ( newImages ) =>
									setAttributes( { images: newImages } )
								}
								allowedTypes={ [ 'image' ] }
								value={ images.map( ( image ) => image.id ) }
								render={ ( { open } ) => (
									<Button
										style={ { marginRight: '6px' } }
										variant="primary"
										onClick={ open }
									>
										{ __( 'Edit Gallery', 'slideshow' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						{ images.length > 0 && (
							// Clear the gallery items
							<Button
								variant="secondary"
								onClick={ () =>
									setAttributes( { images: [] } )
								}
							>
								Clear Gallery
							</Button>
						) }
					</PanelBody>
				) : (
					<PanelBody title={ __( 'Media', 'cta' ) }>
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
										{ mediaId && mediaUrl
											? 'Edit '
											: 'Add ' }
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
				) }

				<PanelBody title={ __( 'Margin Controls', 'cta' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Margin Top"
						help={
							topmargin ? 'Has top margin.' : 'No top margin.'
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Margin Bottom"
						help={
							bottommargin
								? 'Has bottom margin.'
								: 'No bottom margin.'
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Layout', 'cta' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Use alternate layout?"
						help={
							altlayout
								? 'Has alternate layout.'
								: 'Default layout.'
						}
						checked={ altlayout }
						onChange={ ( val ) => {
							setAttributes( { altlayout: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Background gradient?"
						help={
							includegradient
								? 'Has background gradient.'
								: 'No background gradient.'
						}
						checked={ includegradient }
						onChange={ ( val ) => {
							setAttributes( { includegradient: val } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
							>
								<header className={ `${ BLOCKNAME }__header` }>
									<span className={ `h-tab` }>
										<RichText
											tagName="p"
											className={ `${ BLOCKNAME }__tab` }
											value={ tab }
											allowedFormats={ [
												'core/bold',
												'core/italic',
											] }
											onChange={ ( val ) =>
												setAttributes( { tab: val } )
											}
											placeholder={ __( 'Tab...' ) }
										/>
									</span>
									<RichText
										tagName="h2"
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
								<div { ...innerBlockProps } />
							</div>
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
						</div>
					</div>
					{ includegradient && (
						<span className={ `${ BLOCKNAME }__gradient` }></span>
					) }
				</div>
			</section>
		</>
	);
}
