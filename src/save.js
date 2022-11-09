/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { cardBoxShadow, cardBoxShadowToggle, defaultPadding } = attributes;

	const { offsetX, offsetY, blurRadius, spreadRadius, shadowColor } =
		cardBoxShadow;
	return (
		<div
			{...blockProps}
			style={{
				padding: `${defaultPadding}px`,
				...blockProps.style,
				boxShadow:
					cardBoxShadowToggle &&
					`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
			}}
		>
			<InnerBlocks.Content />
		</div>
	);
}
