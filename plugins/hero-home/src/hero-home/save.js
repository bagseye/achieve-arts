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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-hero-home';

export default function save( { attributes } ) {
	const { heading, subheading, intro } = attributes;

	const classes = [
		BLOCKNAME,
		'no-padding__left',
		'no-padding__right',
		'full-width',
		'splide',
		'js-carousel',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	const innerBlockProps = useInnerBlocksProps.save( {
		className: `${ BLOCKNAME }__scroller--items splide__list`,
	} );
	return (
		<section { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						<div
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
						>
							<header className={ `${ BLOCKNAME }__header` }>
								<RichText.Content
									tagName="h1"
									className={ `${ BLOCKNAME }__heading` }
									value={ heading }
								/>
							</header>
							<RichText.Content
								tagName="h2"
								className={ `${ BLOCKNAME }__subheading` }
								value={ subheading }
							/>
							<RichText.Content
								tagName="h2"
								className={ `${ BLOCKNAME }__intro` }
								value={ intro }
							/>
							<div className={ `${ BLOCKNAME }__ctas` }>
								<span className={ `h-button` }>
									<a href="" className={ `h-button__link` }>
										Book Discovery Call
									</a>
								</span>
								<span className={ `h-button` }>
									<a href="" className={ `h-button__link` }>
										About Achieve Arts
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={ `${ BLOCKNAME }__scroller` }>
				<div className={ `${ BLOCKNAME }__scroller--inner` }>
					<div
						className={ `${ BLOCKNAME }__scroller--container splide__track` }
					>
						<div { ...innerBlockProps } />
					</div>
				</div>
			</div>
			<span className={ `${ BLOCKNAME }__gradient` }></span>
		</section>
	);
}
