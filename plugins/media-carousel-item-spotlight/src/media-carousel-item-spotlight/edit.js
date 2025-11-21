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

export default function Edit( { attributes, setAttributes, context } ) {
	const {
		tab,
		imageid,
		imagesrc,
		imagealt,
		variant,
		clientHeading,
		clientName,
		projectHeading,
		projectName,
		projectTypeHeading,
		projectTypeName,
	} = attributes;

	const contextVariant = context?.[ 'bwp/media-carousel-variant' ];

	const classes = [
		BLOCKNAME,
		variant ? `c-media-carousel-item-spotlight__variant--${ variant }` : '',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	useEffect( () => {
		if ( contextVariant && contextVariant !== variant ) {
			setAttributes( {
				variant: contextVariant,
			} );
		}
	}, [ contextVariant, setAttributes ] );

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
									{ imageid && imagesrc ? 'Edit ' : 'Add ' }
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
											'Client Heading...'
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
										placeholder={ __( 'Client Name...' ) }
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
											'Project Heading...'
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
										placeholder={ __( 'Project...' ) }
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
											'Project Type Heading...'
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
										placeholder={ __( 'Project Type...' ) }
									/>
								</header>
							</div>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__media` }
							>
								{ imageid && imagesrc && (
									<picture>
										<img src={ imagesrc } />
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
