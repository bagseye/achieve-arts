/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const BLOCKNAME = 'c-venues-item';
export default function save( { attributes } ) {
	const { name, details, pageurl, ctabuttontext } = attributes;

	const classes = [ BLOCKNAME,  'js-anim', 'h-animate-in-slide-up' ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );
	return (
		<>
			<article { ...blockProps }>
					<div className={ `${ BLOCKNAME }__inner` }>
						<div className={ `${ BLOCKNAME }__container` }>
							<header className={ `${ BLOCKNAME }__header` }>
								<RichText.Content
									tagName="h3"
									className={ `${ BLOCKNAME }__heading` }
									value={ name }
								/>
								<RichText.Content
									tagName="p"
									className={ `${ BLOCKNAME }__details` }
									value={ details }
								/>
							</header>
							{ pageurl && (
								<div className={ `${ BLOCKNAME }__cta` }>
									<div
										className={ `wp-block-button is-style-white` }
									>
										<a
											href={ pageurl }
											className={ `wp-block-button__link` }
											title={ ctabuttontext }
										>
											{ ctabuttontext }
										</a>
									</div>
								</div>
							) }
						</div>
					</div>
			</article>
		</>
	);
}
