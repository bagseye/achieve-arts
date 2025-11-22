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
import {
	Button,
	PanelBody,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
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
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const BLOCKNAME = 'c-page-hero';

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
		bgcolour,
		variant,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		altlayout ? `${ BLOCKNAME }__alt-layout` : '',
		`${ BLOCKNAME }__bgcolour--${ bgcolour }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

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

	useEffect( () => {
		if ( bgcolour !== 'dark' && includegradient ) {
			setAttributes( { includegradient: false } );
		}
	}, [ bgcolour, includegradient ] );

	return (
		<>
			<InspectorControls>
				{ variant === 'page-hero-default' && (
					<PanelBody title={ __( 'Media', 'page-hero' ) }>
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
				<PanelBody title={ __( 'Margin Controls', 'page-hero' ) }>
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
				{ variant === 'page-hero-default' && (
					<PanelBody title={ __( 'Layout', 'page-hero' ) }>
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
						{ bgcolour === 'dark' && (
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
						) }
					</PanelBody>
				) }
				<PanelBody title={ __( 'Colour', 'page-hero' ) }>
					<SelectControl
						label="Media Text Background Colour"
						value={ bgcolour }
						options={ [
							{ label: 'Purple', value: 'purple' },
							{ label: 'Dark', value: 'dark' },
						] }
						onChange={ ( val ) =>
							setAttributes( { bgcolour: val } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div
					className={ `${ BLOCKNAME }__inner padding-block__top padding-block__bottom` }
				>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
							>
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
							{ variant === 'page-hero-default' &&
							mediaId &&
							mediaUrl ? (
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
					{ variant === 'page-hero-default' && includegradient && (
						<span className={ `${ BLOCKNAME }__gradient` }></span>
					) }
				</div>
			</section>
		</>
	);
}
