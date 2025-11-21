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
import { PanelBody, ToggleControl } from '@wordpress/components';
import {
	useBlockProps,
	useInnerBlocksProps,
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
const BLOCKNAME = 'c-media-carousel';

export default function Edit( { attributes, setAttributes } ) {
	const { topmargin, bottommargin, variant } = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
	]
		.filter( Boolean )
		.join( ' ' );

		let ALLOWED_BLOCKS;
		if(variant === 'media-carousel-spotlight') {
			ALLOWED_BLOCKS = [ 'bwp/media-carousel-item-spotlight' ];
		} else {
			ALLOWED_BLOCKS = [ 'bwp/media-carousel-item' ];
		}

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{
			className: `${ BLOCKNAME }__items`,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Margin Controls', 'media-carousel' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'media-carousel' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'media-carousel' )
								: __( 'No top margin.', 'media-carousel' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'media-carousel' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'media-carousel' )
								: __( 'No bottom margin.', 'media-carousel' )
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div { ...innerBlockProps } />
					</div>
				</div>
			</section>
		</>
	);
}
