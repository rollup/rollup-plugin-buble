import { transform } from 'buble';
import { createFilter } from 'rollup-pluginutils';

export default function buble ( options ) {
	if ( !options ) options = {};
	var filter = createFilter( options.include, options.exclude );

	if ( !options.transforms ) options.transforms = {};
	options.transforms.modules = false;

	return {
		name: 'buble',

		transform: function ( code, id ) {
			if ( !filter( id ) ) return null;
			// Test for /** @jsx xxx */
			var match = code.match(/\/\*\*\s+@jsx\s+([\S]+)/);
			if (match) {
				// Override options.jsx
				options.jsx = match[1];
			}
			return transform( code, options );
		}
	};
}
