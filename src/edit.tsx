/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	ToggleControl,
	ColorPicker,
	Panel,
	PanelBody,
	PanelRow,
	RangeControl,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
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

interface EditProps {
	attributes: {
		cardBoxShadow: CardBoxShadow;
		cardBoxShadowToggle: boolean;
		defaultPadding: number;
	};
	setAttributes: any;
}

export default function Edit({
	attributes,
	setAttributes,
}: EditProps): JSX.Element {
	const blockProps = useBlockProps();

	const {
		cardBoxShadow,
		cardBoxShadowToggle,
		defaultPadding,
	}: EditProps["attributes"] = attributes;

	const {
		offsetX,
		offsetY,
		blurRadius,
		spreadRadius,
		shadowColor,
	}: CardBoxShadow = cardBoxShadow;

	const onChangeCardBoxShadowToggle = (newValue: boolean): void => {
		setAttributes({ cardBoxShadowToggle: newValue });
	};

	const TEMPLATE = [["core/paragraph"]];

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
			<InspectorControls>
				<Panel header={__("Card style", "card-block-with-box-shadow")}>
					<PanelBody>
						<ToggleControl
							label={__("Card shadow", "card-block-with-box-shadow")}
							help={
								cardBoxShadowToggle
									? __("Disable card shadow", "card-block-with-box-shadow")
									: __("Enable card shadow", "card-block-with-box-shadow")
							}
							checked={cardBoxShadowToggle}
							onChange={onChangeCardBoxShadowToggle}
						/>
					</PanelBody>
					{cardBoxShadowToggle && (
						<PanelBody
							title={__("Card shadow control", "card-block-with-box-shadow")}
						>
							<RangeControl
								__nextHasNoMarginBottom
								label={__("Offset X", "card-block-with-box-shadow")}
								max={100}
								min={-100}
								allowReset={true}
								resetFallbackValue={0}
								value={offsetX}
								onChange={(newOffsetX: number): void => {
									setAttributes({
										cardBoxShadow: {
											...cardBoxShadow,
											offsetX: newOffsetX,
										},
									});
								}}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label={__("Offset Y", "card-block-with-box-shadow")}
								max={100}
								min={-100}
								allowReset={true}
								resetFallbackValue={0}
								value={offsetY}
								onChange={(newOffsetY: number): void => {
									setAttributes({
										cardBoxShadow: {
											...cardBoxShadow,
											offsetY: newOffsetY,
										},
									});
								}}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label={__("Blur radius", "card-block-with-box-shadow")}
								max={100}
								min={0}
								allowReset={true}
								resetFallbackValue={0}
								value={blurRadius}
								onChange={(newBlurRadius: number): void => {
									setAttributes({
										cardBoxShadow: {
											...cardBoxShadow,
											blurRadius: newBlurRadius,
										},
									});
								}}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label={__("Spread radius", "card-block-with-box-shadow")}
								max={100}
								min={-100}
								allowReset={true}
								resetFallbackValue={0}
								value={spreadRadius}
								onChange={(newSpreadRadius: number): void => {
									setAttributes({
										cardBoxShadow: {
											...cardBoxShadow,
											spreadRadius: newSpreadRadius,
										},
									});
								}}
							/>
							<PanelRow>
								{__("Box shadow color", "card-block-with-box-shadow")}
							</PanelRow>
							<ColorPicker
								enableAlpha={true}
								defaultValue={shadowColor}
								onChange={(newShadowColor: string): void => {
									setAttributes({
										cardBoxShadow: {
											...cardBoxShadow,
											shadowColor: newShadowColor,
										},
									});
								}}
							/>
						</PanelBody>
					)}
				</Panel>
			</InspectorControls>
			<InnerBlocks template={TEMPLATE} />
		</div>
	);
}
