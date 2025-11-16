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
	useInnerBlocksProps
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
const BLOCKNAME = 'c-testimonials-item';
export default function Edit( { attributes, setAttributes, context } ) {
	const { name, role, mediaid, mediasrc, mediaalt } = attributes;
	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{
			className: `${ BLOCKNAME }__content-area`,
		},
		{
			allowedBlocks: [ 'core/paragraph', 'core/list' ],
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Image', 'testimonials-item' ) }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									mediaid: media?.id,
									mediasrc:
										media?.sizes?.medium?.source_url ??
										media.url,
									mediaalt: media?.alt,
								} );
							} }
							allowedTypes={ [ 'image' ] }
							value={ mediaid }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant="primary"
									style={ { marginRight: '6px' } }
								>
									{ mediaid ? 'Edit ' : 'Add ' }
									Image
								</Button>
							) }
						/>

						{ mediaid ? (
							<Button
								onClick={ () => {
									setAttributes( {
										mediaid: null,
										mediasrc: '',
										mediaalt: '',
									} );
								} }
								variant="secondary"
							>
								Remove Image
							</Button>
						) : null }
					</MediaUploadCheck>
					{ mediaid && mediasrc && (
						<div
							className={ `${ BLOCKNAME }__image-preview` }
							style={ { marginTop: '10px' } }
						>
							<img src={ mediasrc } />
						</div>
					) }
				</PanelBody>
			</InspectorControls>
			<article { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							{ mediaid && mediasrc && (
								<div className={ `${ BLOCKNAME }__media` }>
									<picture>
										<img
											loading="lazy"
											decoding="async"
											src={ mediasrc }
											alt={ mediaalt || '' }
											className={ `wp-image-${ mediaid }` }
										/>
									</picture>
								</div>
							) }
							<div { ...innerBlockProps } />
								<div className={ `${ BLOCKNAME }__name` }>
									<RichText
										tagName="p"
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
										placeholder={ __( 'Name...', 'testimonials-item' ) }
									/>
								</div>
								<div className={ `${ BLOCKNAME }__role` }>
									<RichText
										tagName="p"
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
										placeholder={ __( 'Role...', 'testimonials-item' ) }
									/>
								</div>
							<div className={ `${ BLOCKNAME }__link` }></div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
