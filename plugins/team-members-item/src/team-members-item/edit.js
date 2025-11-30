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
	__experimentalLinkControl as LinkControl,
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
const BLOCKNAME = 'c-team-members-item';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
export default function Edit( { attributes, setAttributes, context } ) {
	const { name, role, mediaId, mediaUrl, mediaAlt, variant, cardurl } =
		attributes;
	const classes = [
		BLOCKNAME,
		variant === 'clients' && 'c-team-members-item__variant--clients',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	function handleRemoveMedia() {
		setAttributes( {
			mediaId: 0,
			mediaUrl: '',
			mediaAlt: '',
		} );
	}

	useEffect( () => {
		if ( context?.[ 'bwp/team-members-variant' ] ) {
			setAttributes( { variant: context[ 'bwp/team-members-variant' ] } );
		}
	}, [ context, setAttributes ] );

	const linkValue = {
		url: cardurl || '',
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Media', 'team-members-item' ) }>
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
				{ variant === 'team-members' && (
					<PanelBody title={ __( 'Card Link', 'team-members-item' ) }>
						<LinkControl
							searchInputPlaceholder={ __(
								'Search team members…',
								'team-members-item'
							) }
							value={ linkValue }
							// Only search the custom post type "team-members"
							suggestionsQuery={ {
								type: 'post',
								subtype: 'team-members',
							} }
							settings={ [] } // hides "open in new tab" etc if you don't need them
							onChange={ ( nextValue ) => {
								setAttributes( {
									cardurl: nextValue?.url || '',
								} );
							} }
						/>
					</PanelBody>
				) }
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
							{ variant !== 'clients' && (
								<span
									className={ `${ BLOCKNAME }__overlay` }
								></span>
							) }
						</div>
						<header className={ `${ BLOCKNAME }__header` }>
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
							{ context &&
								context[ 'bwp/team-members-variant' ] !==
									'clients' && (
									<RichText
										tagName="p"
										className={ `${ BLOCKNAME }__role` }
										value={ role }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												role: val,
											} )
										}
										placeholder={ __( 'Role...' ) }
									/>
								) }
						</header>
					</div>
				</div>
			</article>
		</>
	);
}
