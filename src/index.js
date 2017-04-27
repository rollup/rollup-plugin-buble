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

			try {
				var transformed = transform( code, options );
			} catch (e) {}

			return transformed;
		}
	};
}
