/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import { FC } from "react";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

interface CardBoxShadow {
	offsetX: number;
	offsetY: number;
	blurRadius: number;
	spreadRadius: number;
	shadowColor: string;
}

interface SaveProps {
	attributes: {
		cardBoxShadow: CardBoxShadow;
		cardBoxShadowToggle: boolean;
		defaultPadding: number;
	};
}

export const save: FC<SaveProps> = ({ attributes }) => {
	const {
		cardBoxShadow,
		cardBoxShadowToggle,
		defaultPadding,
	}: SaveProps["attributes"] = attributes;

	const {
		offsetX,
		offsetY,
		blurRadius,
		spreadRadius,
		shadowColor,
	}: CardBoxShadow = cardBoxShadow;

	const blockProps = useBlockProps.save<HTMLElement>({
		style: {
			padding: `${defaultPadding}px`,
			boxShadow:
				cardBoxShadowToggle &&
				`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};
