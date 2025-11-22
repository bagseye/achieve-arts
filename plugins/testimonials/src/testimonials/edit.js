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
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
		RichText,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
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
const BLOCKNAME = 'c-testimonials';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const { heading, topmargin, bottommargin, testimonialscount, variant } = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{
			className: `${ BLOCKNAME }__items`,
		},
		{
			allowedBlocks: [ 'bwp/testimonials-item' ],
		}
	);

	const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId )?.innerBlocks.length || 0 );
	
	useEffect( () => {
		setAttributes( { testimonialscount: innerBlockCount } );
	}, [ innerBlockCount, setAttributes ] );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Margin Controls', 'testimonials' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'testimonials' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'testimonials' )
								: __( 'No top margin.', 'testimonials' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'testimonials' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'testimonials' )
								: __( 'No bottom margin.', 'testimonials' )
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
						{variant === 'testimonials-scrolling-card' && (
					<header className={ `${ BLOCKNAME }__content--header` }>
						<RichText
							tagName="h2"
							className={ `${ BLOCKNAME }__heading` }
							value={ heading }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( val ) =>
								setAttributes( {
									heading: val,
								} )
							}
							placeholder={ __( 'Heading...', 'testimonials' ) }
						/>
					</header>
						)}
						<div { ...innerBlockProps } />
					</div>
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				</div>
			</section>
		</>
	);
}
