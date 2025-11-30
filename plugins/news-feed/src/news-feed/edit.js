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

import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
	PanelBody,
	ToggleControl,
	SelectControl,
	Spinner,
} from '@wordpress/components';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
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

const BLOCKNAME = 'c-news-feed';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, topmargin, bottommargin, catid } = attributes;

	// Fetch categories from WP
	const { categories, isResolvingCategories } = useSelect( ( select ) => {
		const core = select( coreStore );
		const query = {
			per_page: -1,
			hide_empty: true,
			orderby: 'name',
			order: 'asc',
		};

		return {
			categories: core.getEntityRecords( 'taxonomy', 'category', query ),
			isResolvingCategories: core.isResolving( 'getEntityRecords', [
				'taxonomy',
				'category',
				query,
			] ),
		};
	}, [] );

	// Fetch posts for the preview based on catid
	const { posts, isResolvingPosts } = useSelect(
		( select ) => {
			const core = select( coreStore );

			const query = {
				per_page: 8, // show last 3 posts in preview
				orderby: 'date',
				order: 'desc',
				_embed: true, // optional: to get featured media
			};

			// If a specific category is selected, filter by it
			if ( catid && catid > 0 ) {
				// REST param: /wp/v2/posts?categories=ID
				query.categories = [ catid ];
			}

			return {
				posts: core.getEntityRecords( 'postType', 'post', query ),
				isResolvingPosts: core.isResolving( 'getEntityRecords', [
					'postType',
					'post',
					query,
				] ),
			};
		},
		[ catid ] // refetch whenever the selected category changes
	);

	const classes = [
		BLOCKNAME,
		topmargin && 'margin-block__top',
		bottommargin && 'margin-block__bottom',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	// Build options for SelectControl
	const categoryOptions = [
		{ label: __( 'All', 'news-feed' ), value: -1 },
		...( categories || [] ).map( ( term ) => ( {
			label: term.name,
			value: term.id,
		} ) ),
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Margin Controls', 'news-feed' ) }>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Top', 'news-feed' ) }
						help={
							topmargin
								? __( 'Has top margin.', 'news-feed' )
								: __( 'No top margin.', 'news-feed' )
						}
						checked={ topmargin }
						onChange={ ( val ) => {
							setAttributes( { topmargin: val } );
						} }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label={ __( 'Margin Bottom', 'news-feed' ) }
						help={
							bottommargin
								? __( 'Has bottom margin.', 'news-feed' )
								: __( 'No bottom margin.', 'news-feed' )
						}
						checked={ bottommargin }
						onChange={ ( val ) => {
							setAttributes( { bottommargin: val } );
						} }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Category Select', 'news-feed' ) }>
					{ isResolvingCategories && ! categories && (
						<div style={ { padding: '8px 0' } }>
							<Spinner />{ ' ' }
							{ __( 'Loading categories…', 'news-feed' ) }
						</div>
					) }

					<SelectControl
						label={ __(
							'Select the category to show',
							'news-feed'
						) }
						value={ catid }
						options={ categoryOptions }
						onChange={ ( val ) =>
							setAttributes( { catid: parseInt( val, 10 ) } )
						}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div
					className={ `${ BLOCKNAME }__inner padding-block__top padding-block__bottom` }
				>
					<div className={ `${ BLOCKNAME }__container` }>
						<div className={ `${ BLOCKNAME }__items` }>
							<div
								className={ `${ BLOCKNAME }__item c-news-feed__item--content` }
							>
								<header className={ `${ BLOCKNAME }__header` }>
									<RichText
										tagName="h2"
										className={ `${ BLOCKNAME }__heading` }
										value={ heading }
										allowedFormats={ [
											'core/bold',
											'core/italic',
										] }
										onChange={ ( val ) =>
											setAttributes( { heading: val } )
										}
										placeholder={ __(
											'Heading...',
											'news-feed'
										) }
									/>
								</header>
							</div>
							<div
								className={ `${ BLOCKNAME }__item c-news-feed__item--feed` }
							>
								{ /* Editor preview of posts */ }
								{ isResolvingPosts && (
									<div className="c-news-feed__loading">
										<Spinner />{ ' ' }
										{ __( 'Loading posts…', 'news-feed' ) }
									</div>
								) }

								{ ! isResolvingPosts &&
									posts &&
									posts.length === 0 && (
										<p className="c-news-feed__no-posts">
											{ __(
												'No posts found for this category.',
												'news-feed'
											) }
										</p>
									) }

								{ ! isResolvingPosts &&
									posts &&
									posts.length > 0 && (
										<div
											className={ `${ BLOCKNAME }__scroller` }
										>
											{ posts.map( ( post ) => (
												<article
													key={ post.id }
													className="c-news-feed__card"
												>
													<div className="c-news-feed__card--inner">
														<div className="c-news-feed__card--container">
															<div className="c-news-feed__card--content">
																<header className="c-news-feed__card--header">
																	<h3 className="c-news-feed__card--heading">
																		{ post
																			.title
																			?.rendered ||
																			__(
																				'(no title)',
																				'news-feed'
																			) }
																	</h3>
																</header>
															</div>
														</div>
													</div>
												</article>
											) ) }
										</div>
									) }
							</div>
						</div>
					</div>
					<span className={ `${ BLOCKNAME }__gradient` }></span>
				</div>
			</section>
		</>
	);
}
