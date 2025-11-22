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
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	useInnerBlocksProps,
	InspectorControls,
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
const BLOCKNAME = 'c-venue-details-card';

export default function Edit( { attributes, setAttributes } ) {
	const {
		heading,
		intro,
		tab,
		bgcolour,
		whenDetail,
		whereDetail,
		pricingDetail,
		pageurl,
		ctabuttontext,
	} = attributes;

	const classes = [ BLOCKNAME, `${ BLOCKNAME }__bgcolour--${ bgcolour }` ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{ className: `${ BLOCKNAME }__content-area` },
		{
			allowedBlocks: [ 'core/paragraph', 'core/list' ],
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Colour', 'venue-details-card' ) }>
					<SelectControl
						label="Venue Details Card Background Colour"
						value={ bgcolour }
						options={ [
							{ label: 'Purple', value: 'purple' },
							{ label: 'Deep Purple', value: 'deep-purple' },
							{ label: 'Dark', value: 'dark' },
							{ label: 'Grey', value: 'grey' },
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
				<div className={ `${ BLOCKNAME }__inner` }>
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
									<RichText
										tagName="p"
										className={ `${ BLOCKNAME }__intro` }
										value={ intro }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												intro: val,
											} )
										}
										placeholder={ __( 'Introduction...' ) }
									/>
								</header>
								<div
									className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--details` }
								>
									<div className={ `${ BLOCKNAME }__detail` }>
										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>When:</p>
											<RichText
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ whenDetail }
												allowedFormats={ [
													'core/bold',
													'core/italic',
												] }
												onChange={ ( val ) =>
													setAttributes( {
														whenDetail: val,
													} )
												}
												placeholder={ __(
													'Details of when...'
												) }
											/>
										</div>
									</div>
									<div className={ `${ BLOCKNAME }__detail` }>
										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>Where:</p>
											<RichText
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ whereDetail }
												allowedFormats={ [
													'core/bold',
													'core/italic',
												] }
												onChange={ ( val ) =>
													setAttributes( {
														whereDetail: val,
													} )
												}
												placeholder={ __(
													'Details of where...'
												) }
											/>
										</div>
									</div>
									<div className={ `${ BLOCKNAME }__detail` }>
										<div
											className={ `${ BLOCKNAME }__detail--inner` }
										>
											<p>Pricing:</p>
											<RichText
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ pricingDetail }
												allowedFormats={ [
													'core/bold',
													'core/italic',
												] }
												onChange={ ( val ) =>
													setAttributes( {
														pricingDetail: val,
													} )
												}
												placeholder={ __(
													'Details of pricing...'
												) }
											/>
										</div>
									</div>
								</div>
								<div { ...innerBlockProps } />
							</div>
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
												'venue-details-card'
											) }
											value={ ctabuttontext }
											onChange={ ( value ) =>
												setAttributes( {
													ctabuttontext: value,
												} )
											}
										/>
										<div
											className={ `wp-block-button is-style-${
												bgcolour === 'purple'
													? 'dark'
													: 'purple'
											}` }
										>
											<span
												className={ `wp-block-button__link` }
											>
												{ ctabuttontext ||
													'Click Here' }
											</span>
										</div>
									</>
								) }
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
