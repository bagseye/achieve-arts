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
	useBlockProps,
	RichText,
	useInnerBlocksProps,
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
const BLOCKNAME = 'c-hero-home';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, subheading, intro } = attributes;

	const classes = [
		BLOCKNAME,
		'no-padding__left',
		'no-padding__right',
		'full-width',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	const innerBlockProps = useInnerBlocksProps(
		{ className: `${ BLOCKNAME }__scroller--items` },
		{
			allowedBlocks: [ 'bwp/hero-home-item' ],
		}
	);

	return (
		<>
			<section { ...blockProps }>
				<div className={ `${ BLOCKNAME }__inner` }>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
							>
								<header className={ `${ BLOCKNAME }__header` }>
									<RichText
										tagName="h1"
										className={ `${ BLOCKNAME }__heading` }
										value={ heading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
											'core/text-color',
										] }
										onChange={ ( val ) =>
											setAttributes( {
												heading: val,
											} )
										}
										placeholder={ __( 'Heading...' ) }
									/>
								</header>
								<RichText
									tagName="h2"
									className={ `${ BLOCKNAME }__subheading` }
									value={ subheading }
									allowedFormats={ [
										'core/bold',
										'core/italic',
										'core/text-color',
									] }
									onChange={ ( val ) =>
										setAttributes( {
											subheading: val,
										} )
									}
									placeholder={ __( 'Sub Heading...' ) }
								/>
								<RichText
									tagName="p"
									className={ `${ BLOCKNAME }__intro` }
									value={ intro }
									allowedFormats={ [
										'core/bold',
										'core/italic',
										'core/text-color',
									] }
									onChange={ ( val ) =>
										setAttributes( {
											intro: val,
										} )
									}
									placeholder={ __( 'Intro...' ) }
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={ `${ BLOCKNAME }__scroller` }>
					<div className={ `${ BLOCKNAME }__scroller--inner` }>
						<div
							className={ `${ BLOCKNAME }__scroller--container` }
						>
							<div { ...innerBlockProps } />
						</div>
					</div>
				</div>
				<span className={ `${ BLOCKNAME }__gradient` }></span>
			</section>
		</>
	);
}
