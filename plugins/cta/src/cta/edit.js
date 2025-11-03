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
	InnerBlocks,
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
const blockname = 'c-cta';
const ALLOWED_BLOCKS = [ 'core/buttons', 'core/paragraph' ];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, tab } = attributes;

	const blockProps = useBlockProps( { className: blockname } );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `${ blockname }__content`,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
		}
	);

	return (
		<section { ...blockProps }>
			<div className={ `${ blockname }__inner` }>
				<div className={ `${ blockname }__container` }>
					<div className={ `${ blockname }__container` }>
						<div className={ `${ blockname }__items` }>
							<div className={ `${ blockname }__item` }>
								<header className={ `${ blockname }__header` }>
									<RichText
										tagName="p"
										className={ `${ blockname }__tab` }
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
									<RichText
										tagName="h2"
										className={ `${ blockname }__heading` }
										value={ heading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( { heading: val } )
										}
										placeholder={ __( 'Heading...' ) }
									/>
								</header>
								<div { ...innerBlocksProps } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
