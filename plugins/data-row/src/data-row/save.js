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
const BLOCKNAME = 'c-data-row';

export default function save( { attributes } ) {
	const {
		columnOneHeading,
		columnOneDetail,
		columnTwoHeading,
		columnTwoDetail,
		columnThreeHeading,
		columnThreeDetail,
	} = attributes;

	const classes = [ BLOCKNAME ].filter( Boolean ).join( ' ' );

	const blockProps = useBlockProps.save( { className: classes } );

	return (
		<aside { ...blockProps }>
			<div className={ `${ BLOCKNAME }__inner` }>
				<div className={ `${ BLOCKNAME }__container` }>
					<div className={ `${ BLOCKNAME }__items` }>
						<div
							className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--content` }
						>
							<div
								className={ `${ BLOCKNAME }__item ${ BLOCKNAME }__item--details` }
							>
								<div className={ `${ BLOCKNAME }__detail` }>
									<div
										className={ `${ BLOCKNAME }__detail--inner` }
									>
										{ columnOneHeading && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnOneHeading }
											/>
										) }
										{ columnOneDetail && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnOneDetail }
											/>
										) }
									</div>
								</div>
								<div className={ `${ BLOCKNAME }__detail` }>
									<div
										className={ `${ BLOCKNAME }__detail--inner` }
									>
										{ columnTwoHeading && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnTwoHeading }
											/>
										) }
										{ columnTwoDetail && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnTwoDetail }
											/>
										) }
									</div>
								</div>
								<div className={ `${ BLOCKNAME }__detail` }>
									<div
										className={ `${ BLOCKNAME }__detail--inner` }
									>
										{ columnThreeHeading && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnThreeHeading }
											/>
										) }
										{ columnThreeDetail && (
											<RichText.Content
												tagName="p"
												className={ `${ BLOCKNAME }__detail--content` }
												value={ columnThreeDetail }
											/>
										) }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}
