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

export default function VideoLayout( { attributes, setAttributes, context } ) {
	const {
		videotab,
		videoheading,
		videoid,
		videosrc,
		videoposterid,
		videopostersrc,
		videoposteralt,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<>
			<InspectorControls>
				<>
					<PanelBody
						title={ __( 'Video Selection', 'media-carousel-item' ) }
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
						title={ __( 'Poster Image', 'media-carousel-item' ) }
					>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => {
									setAttributes( {
										videoposterid: media?.id,
										videopostersrc:
											media?.sizes?.medium?.source_url ??
											media.url,
										videoposteralt: media?.alt,
									} );
								} }
								allowedTypes={ [ 'image' ] }
								value={ videoposterid }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										variant="primary"
										style={ { marginRight: '6px' } }
									>
										{ videoposterid ? 'Edit ' : 'Add ' }
										Poster
									</Button>
								) }
							/>

							{ videoposterid ? (
								<Button
									onClick={ () => {
										setAttributes( {
											videoposterid: null,
											videopostersrc: '',
											videoposteralt: '',
										} );
									} }
									variant="secondary"
								>
									Remove Poster
								</Button>
							) : null }
						</MediaUploadCheck>
						{ videoposterid && videopostersrc && (
							<div
								className={ `${ BLOCKNAME }__poster-preview` }
								style={ { marginTop: '10px' } }
							>
								<img src={ videopostersrc } />
							</div>
						) }
					</PanelBody>
				</>
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
										value={ videotab }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												videotab: val,
											} )
										}
										placeholder={ __( 'Tab...' ) }
									/>
								</span>
								<RichText
									tagName="h3"
									className={ `${ BLOCKNAME }__heading` }
									value={ videoheading }
									allowedFormats={ [
										'core/bold',
										'core/italic',
									] }
									onChange={ ( val ) =>
										setAttributes( {
											videoheading: val,
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
