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
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
	URLInputButton,
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

const BLOCKNAME = 'c-team-members';

export default function Edit( { attributes, setAttributes } ) {
	const {
		heading,
		subheading,
		topmargin,
		bottommargin,
		pageurl,
		ctabuttontext,
		variant,
		bgcolour,
	} = attributes;

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
		`${ BLOCKNAME }__bgcolour--${ bgcolour }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{
			className: `${ BLOCKNAME }__items`,
		},
		{
			allowedBlocks: [ 'bwp/team-members-item' ],
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Margin Controls', 'team-members' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'team-members' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'team-members' )
								: __( 'No top margin.', 'team-members' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'team-members' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'team-members' )
								: __( 'No bottom margin.', 'team-members' )
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
				{ variant === 'clients' && (
					<PanelBody title={ __( 'Colour', 'team-members' ) }>
						<SelectControl
							label="Background Colour"
							value={ bgcolour }
							options={ [
								{ label: 'None', value: 'none' },
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
				) }
			</InspectorControls>
			<section { ...blockProps }>
				<div className={ `${ BLOCKNAME }__content` }>
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
							placeholder={ __( 'Heading...' ) }
						/>
						<RichText
							tagName="p"
							className={ `${ BLOCKNAME }__subheading` }
							value={ subheading }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( val ) =>
								setAttributes( {
									subheading: val,
								} )
							}
							placeholder={ __( 'Sub Heading...' ) }
						/>
					</header>
					<div className={ `${ BLOCKNAME }__cta` }>
						<URLInputButton
							url={ pageurl }
							onChange={ ( url ) =>
								setAttributes( { pageurl: url } )
							}
						/>
						{ pageurl && (
							<>
								<TextControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={ __(
										'CTA Button Text',
										'team-members'
									) }
									value={ ctabuttontext }
									onChange={ ( value ) =>
										setAttributes( {
											ctabuttontext: value,
										} )
									}
								/>
								<div
									className={ `wp-block-button is-style-deep-purple` }
								>
									<span className={ `wp-block-button__link` }>
										{ ctabuttontext || 'Click Here' }
									</span>
								</div>
							</>
						) }
					</div>
				</div>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div { ...innerBlockProps } />
					</div>
				</div>
			</section>
		</>
	);
}
