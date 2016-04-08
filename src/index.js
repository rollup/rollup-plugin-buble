import { transform } from 'buble';
import { createFilter } from 'rollup-pluginutils';

export default function buble ( options ) {
	if ( !options ) options = {};
	var filter = createFilter( options.include, options.exclude );

	return {
		transform: function ( code, id ) {
			if ( !filter( id ) ) return null;
			return transform( code );
		}
	};
}
