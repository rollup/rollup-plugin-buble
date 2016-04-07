import { transform } from 'buble';
import { createFilter } from 'rollup-pluginutils';

export default function buble ( options ) {
	if ( !options ) options = {};
	const filter = createFilter( options.include, options.exclude );

	return {
		transform ( code, id ) {
			if ( !filter( id ) ) return null;

			return transform( code );
		}
	};
}
