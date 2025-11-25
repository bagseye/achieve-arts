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
	const { heading, tab, mediaId, mediaUrl, mediaAlt, topmargin, bottommargin } = attributes;
	const blockProps = useBlockProps.save( { className: `${blockname} ${topmargin ? 'margin-block__top' : ''} ${bottommargin ? 'margin-block__bottom' : ''}` } );
	const innerBlocksProps = useInnerBlocksProps.save( {
		className: `${ blockname }__content d-typography`,
	} );
	return (
		<section { ...blockProps }>
			<div className={ `${ blockname }__inner` }>
				<div className={ `${ blockname }__container` }>
					<div className={ `${ blockname }__items` }>
						<div className={ `${ blockname }__item` }>
							<header className={ `${ blockname }__header` }>
								<span className={`${ blockname }__tab h-tab`}>
								<RichText.Content
									tagName="p"
									value={ tab }
								/>
								</span>
								<RichText.Content
									tagName="h2"
									value={ heading }
									className={ `${ blockname }__heading` }
								/>
							</header>
							<div { ...innerBlocksProps } />
						</div>
						{ mediaId && mediaUrl ? (
							<div className={ `${ blockname }__media` }>
								<picture>
									<img
										className={ `wp-image-${ mediaId }` }
										src={ mediaUrl }
										alt={ mediaAlt }
									/>
								</picture>
							</div>
						) : null }
					</div>
				</div>
				<div className={ `${ blockname }__bg` }>
						<svg width="542" height="373" viewBox="0 0 542 373" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M321.251 -166.762L456.369 -50.3176C459.279 -47.6332 464.412 -46.7122 468.089 -47.1333L645.985 -79.1461C657.554 -81.5488 666.669 -69.8749 661.84 -59.622L589.411 104.518C588.107 108.763 587.953 113.522 590.021 116.519L674.032 273.521C679.699 283.649 670.963 296.29 659.855 294.76L479.823 279.595C475.839 279.189 470.782 281.062 468.024 283.964L341.285 412.722C333.009 421.43 318.99 417.215 316.694 405.838L278.193 231.985C276.662 227.849 275.13 223.713 270.84 222.48L108.978 145.096C98.6361 140.46 97.9495 125.666 108.293 119.954L264.137 28.3876C268.351 26.8273 270.497 22.2705 270.957 18.3378L296.81 -157.712C298.498 -168.683 312.825 -173.989 321.251 -166.762Z" fill="#734097"/>
							<path d="M3.03082 315.081L61.6255 288.989C62.945 288.454 64.0316 286.926 64.4586 285.665L81.3258 222.893C82.3184 218.762 87.5131 217.588 90.1075 220.731L132.389 269.459C133.57 270.534 135.094 271.314 136.386 271.101L200.335 267.851C204.498 267.561 207.27 272.341 205.069 275.719L172.53 331.951C171.787 333.185 171.62 335.117 172.141 336.459L194.586 397.427C196.149 401.454 192.629 405.367 188.576 404.369L126.125 390.232C124.545 390.096 122.965 389.96 121.906 391.166L71.9144 431.947C68.8208 434.6 63.9035 432.555 63.632 428.314L57.7471 363.583C57.8858 361.973 56.7327 360.577 55.5242 359.824L2.22656 324.418C-1.08306 322.187 -0.611592 316.713 3.03082 315.081Z" fill="#734097"/>
						</svg>
				</div>
			</div>
		</section>
	);
}
