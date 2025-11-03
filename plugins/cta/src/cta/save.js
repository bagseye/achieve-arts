/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
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

const blockname = 'c-cta';

export default function save( { attributes } ) {
	const { heading, tab } = attributes;
	const blockProps = useBlockProps.save( { className: blockname } );
	const innerBlocksProps = useInnerBlocksProps.save( {
		className: `${ blockname }__content`,
	} );
	return (
		<section { ...blockProps }>
			<div className={ `${ blockname }__inner` }>
				<div className={ `${ blockname }__container` }>
					<div className={ `${ blockname }__container` }>
						<div className={ `${ blockname }__items` }>
							<div className={ `${ blockname }__item` }>
								<header className={ `${ blockname }__header` }>
									<RichText.Content
										tagName="p"
										value={ tab }
										className={ `${ blockname }__tab` }
									/>
									<RichText.Content
										tagName="h2"
										value={ heading }
										className={ `${ blockname }__heading` }
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
