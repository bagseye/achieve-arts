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
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
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
const BLOCKNAME = 'c-media-block';
const ALLOWED_BLOCKS = [ 'bwp/media-block-item' ];

export default function Edit( { attributes, setAttributes } ) {
	const { topmargin, bottommargin, columntype } = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		`${ BLOCKNAME }__columntype--${ columntype }`,
	]
		.filter( Boolean )
		.join( ' ' );

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
				<PanelBody title={ __( 'Margin Controls', 'media-block' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'media-block' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'media-block' )
								: __( 'No top margin.', 'media-block' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'media-block' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'media-block' )
								: __( 'No bottom margin.', 'media-block' )
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Columns', 'media-block' ) }>
					<SelectControl
						label={ __( 'Column Type', 'media-block' ) }
						value={ columntype }
						options={ [
							{
								label: __( 'Single', 'media-block' ),
								value: 'single',
							},
							{
								label: __( 'Double', 'media-block' ),
								value: 'double',
							},
						] }
						onChange={ ( val ) =>
							setAttributes( { columntype: val } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
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
