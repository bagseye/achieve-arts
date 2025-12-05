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
	RichText,
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

const BLOCKNAME = 'c-panel';

export default function Edit( { attributes, setAttributes } ) {
	const {
		tab,
		topmargin,
		bottommargin,
		toppadding,
		bottompadding,
		bgcolour,
		borderradiustop,
		borderradiusbottom,
		fullwidth,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		fullwidth && 'full-width',
		`${ BLOCKNAME }__bgcolour--${ bgcolour }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps( {
		className: `${ BLOCKNAME }__items d-typography`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Margin Controls', 'panel' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'panel' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'panel' )
								: __( 'No top margin.', 'panel' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>

					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'panel' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'panel' )
								: __( 'No bottom margin.', 'panel' )
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
				{ bgcolour !== 'none' && (
					<PanelBody title={ __( 'Padding Controls', 'panel' ) }>
						<ToggleControl
							__nextHasNoMarginBottom
							label={ __( 'Padding Top', 'panel' ) }
							help={
								toppadding
									? __( 'Has top padding.', 'panel' )
									: __( 'No top padding.', 'panel' )
							}
							checked={ toppadding }
							onChange={ ( val ) => {
								setAttributes( { toppadding: val } );
							} }
						/>

						<ToggleControl
							__nextHasNoMarginBottom
							label={ __( 'Padding Bottom', 'panel' ) }
							help={
								bottompadding
									? __( 'Has bottom padding.', 'panel' )
									: __( 'No bottom padding.', 'panel' )
							}
							checked={ bottompadding }
							onChange={ ( val ) => {
								setAttributes( { bottompadding: val } );
							} }
						/>
					</PanelBody>
				) }
				<PanelBody title={ __( 'Border Radius', 'media-text' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Border Radius Top"
						help={
							borderradiustop
								? 'Has top border radius.'
								: 'No border radius.'
						}
						checked={ borderradiustop }
						onChange={ ( val ) => {
							setAttributes( { borderradiustop: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Border Radius Bottom"
						help={
							borderradiusbottom
								? 'Has bottom border radius.'
								: 'No border radius.'
						}
						checked={ borderradiusbottom }
						onChange={ ( val ) => {
							setAttributes( { borderradiusbottom: val } );
						} }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Layout', 'media-text' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Full Width"
						help={ fullwidth ? 'Is full width.' : 'Default width.' }
						checked={ fullwidth }
						onChange={ ( val ) => {
							setAttributes( { fullwidth: val } );
						} }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Colour', 'panel' ) }>
					<SelectControl
						label={ __( 'Background Colour', 'panel' ) }
						value={ bgcolour }
						options={ [
							{
								label: __( 'None', 'panel' ),
								value: 'none',
							},
							{
								label: __( 'Purple', 'panel' ),
								value: 'purple',
							},
							{ label: 'Deep Purple', value: 'deep-purple' },
							{
								label: __( 'Dark', 'panel' ),
								value: 'dark',
							},
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
					className={ [
						`${ BLOCKNAME }__inner`,
						toppadding && 'padding-block__top',
						bottompadding && 'padding-block__bottom',
						borderradiustop && 'border-radius__top',
						borderradiusbottom && 'border-radius__bottom',
					]
						.filter( Boolean )
						.join( ' ' ) }
				>
					<div className={ `${ BLOCKNAME }__container` }>
						<header className={ `${ BLOCKNAME }__content--header` }>
							<span className={ `${ BLOCKNAME }__tab h-tab` }>
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
									placeholder={ __( 'Tab...', 'panel' ) }
								/>
							</span>
						</header>
						<div { ...innerBlockProps } />
					</div>
				</div>
			</section>
		</>
	);
}
