/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon: {
		src: (
			<svg
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_4317_22238)">
					<rect
						x="2"
						y="2"
						width="24"
						height="24"
						rx="3"
						fill="#434343"
						fill-opacity="0.1"
						shape-rendering="crispEdges"
					/>
				</g>
				<rect x="4" y="13" width="9" height="11" fill="#D9D9D9" />
				<rect x="15" y="5" width="9" height="3" fill="#D9D9D9" />
				<rect x="15" y="10" width="9" height="9" fill="#D9D9D9" />
				<rect x="15" y="21" width="9" height="3" fill="#D9D9D9" />
				<rect width="9" height="6" transform="translate(4 5)" fill="white" />
				<path d="M5 10L6.5 8.5L8 9.25L10 7L12 10H5Z" fill="#D9D9D9" />
				<rect x="5" y="6" width="1" height="1" rx="0.5" fill="#D9D9D9" />
				<defs>
					<filter
						id="filter0_d_4317_22238"
						x="0"
						y="0"
						width="36"
						height="36"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="4" dy="4" />
						<feGaussianBlur stdDeviation="3" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_4317_22238"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_4317_22238"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
